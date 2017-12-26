import React from 'react';

import { formatPrice } from '../../../assets/utils/helpers';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {

    componentWillUpdate() {
        console.log('OrderSummary Will Update')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>;
            });

        return(
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>{ ingredientSummary }</ul>
                <p>Total Price: <strong>{formatPrice(this.props.orderPrice)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnTypeClass="Danger" clicked={this.props.purchaseCanceled}>Cancel</Button>
                <Button btnTypeClass="Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
        );
    }
}

export default OrderSummary;