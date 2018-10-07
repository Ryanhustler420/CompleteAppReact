import  React, {Component}  from 'react';
import Aux from './../../hoc/auxiliary/Aux';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from './../../components/UI/Spinner/Spinner';
import withErrorHandler from './../../hoc/WithErrorHandler/WithErrorHandler';
// using 'withErrorHandler' first letter as small letter because it's HOC !


const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {...}
    // }

    state = {
        ingredients:null,
        totalPrice: 2.99,
        purchasable: false,
        purchasing:false,
        loading: false,
        error:false
    }

    componentDidMount () {
        axios.get('https://burgerreact-47e91.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data});
            }).catch(err => {
                this.setState({error:true});
            });
    }

    updatePurchaseState(ingredient) {

        const sum = Object.keys(ingredient)
            .map(igKey => {
                return ingredient[igKey];
            })
            .reduce((sum,el) => {
                return sum + el;
            },0);
        this.setState({purchasable: sum > 0});
    }

    purchaseHandler = () => {
        this.setState({purchasing:true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    }

    purchaseContinueHandler = () =>{
        // alert('You Continue!');
        this.setState({loading:true});
        const order = {
            ingredients:this.state.ingredients,
            price:this.state.totalPrice,
            customer:{
                name:'GauravGupta',
                address:{
                    street:"JSR",
                    zipCode:'4132256',
                    country:"norway"
                },
                email: 'test@test.com'
            },
            deliveryMethod:'fastest'
        }

        axios.post('/orders.json', order)
        .then(response => {
            this.setState({loading: false , purchasing: false});
            console.log(response);
        }) 
        .catch(error => {
            console.log(error);
            this.setState({loading: false , purchasing: false});
        });

    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCounted = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateCounted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updateCounted = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateCounted;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    render(){
        const disableInfo = {
            ...this.state.ingredients
        }

        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0;
        }

        let orderSummery = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />; 

        if(this.state.ingredients){
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls 
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemove={this.removeIngredientHandler}
                        disabled={disableInfo}
                        purchasable={this.state.purchasable}
                        price={this.state.totalPrice}
                        ordered={this.purchaseHandler}
                    />
                </Aux>
            );

            orderSummery = <OrderSummary ingredients={this.state.ingredients}
                            modalClosed={this.purchaseCancelHandler}
                            purchaseContinued={this.purchaseContinueHandler}
                            price={this.state.totalPrice}
                            />
        }
        
        if(this.state.loading){
            orderSummery = <Spinner />
        }


        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummery}
                </Modal>
                    {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder,axios);

