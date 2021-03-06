import React from 'react';
import Burger from './../../Burger/Burger';
import Button from './../../UI/Button/Button';
import classes from './CheckOutSummary.module.css';

const checkoutSummary = (props) => {
    return(
        <div className={classes.CheckOutSummary}>
            <h1>We hope it tastes well!</h1>
           
                <Burger ingredients={props.ingredients}/>
            {/* </div> */}
            <Button 
                btnType="Danger"
                clicked={props.onCheckoutCanclled}
                >CALCEL
            </Button>

            <Button 
                btnType="Success"
                clicked={props.CheckoutContinued}
                >CONTINUE
            </Button>
        </div>
    );
}

export default checkoutSummary;