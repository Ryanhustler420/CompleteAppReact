import React, { Component } from 'react'

import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary';
import ContactData from './ContactData/ContactData';

class CheckOut extends Component {

    state = {
        ingredients:{
            salad : 1,
            cheese:1,
            meat: 1,
            bacon: 1
        },
        contactForm:false
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};

        for(let param of query.entries()){
            // ['salad','1']
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients:ingredients});
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
                
                {this.state.contactForm ? <ContactData /> : null}
        </div>
    );
  }
}

export default CheckOut;