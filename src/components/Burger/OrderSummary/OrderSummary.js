import React from 'react';

import { formatPrice } from '../../../utils/helpers';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>;
        });

    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>{ ingredientSummary }</ul>
            <p>Total Price: <strong>{formatPrice(props.orderPrice)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnTypeClass="Danger" clicked={props.purchaseCanceled}>Cancel</Button>
            <Button btnTypeClass="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Aux>
    );
};

export default orderSummary;