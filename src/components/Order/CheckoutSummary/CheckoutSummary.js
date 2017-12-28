import React from 'react';
import classes from './CheckoutSummary.css';

import Burger from '../../Burger/Burger';
import Button from'../../UI/Button/Button';

const checkoutSummary = (props) => {
    return(
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                btnTypeClass="Danger"
                clicked={props.checkoutCancelled}
            >
                <span>Cancel</span>
            </Button>
            <Button
                btnTypeClass="Success"
                clicked={props.checkoutContinued}
            >
                <span>Continue</span>
            </Button>
        </div>
    );
};

export default checkoutSummary;