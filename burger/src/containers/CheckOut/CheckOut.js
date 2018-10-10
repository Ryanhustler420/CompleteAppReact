import React, { Component } from 'react'

import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary';
import ContactData from './ContactData/ContactData';

class CheckOut extends Component {

    state = {
        ingredients:null,
        price:0,
        contactForm:false
    }

    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let param of query.entries()){
            // ['salad','1']
            if(param[0] === 'price'){
                price = param[1];
            }else{
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients:ingredients,totalPrice:price});
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.setState({contactForm:true});
   }

  render() {
    return (
        <div>
            <CheckOutSummary 
                onCheckoutCanclled={this.checkoutCancelledHandler} 
                CheckoutContinued={this.checkoutContinuedHandler} 
                ingredients={this.state.ingredients}/>
                
                {this.state.contactForm ? <ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} /> : null}
        </div>
    );
  }
}

export default CheckOut;