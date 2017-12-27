import React from 'react';
import classes from './Order.css';

import {formatPrice} from '../../assets/utils/helpers';

const order = (props) => {
    const ingredients = [];
    for(let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }

    const spanStyle = {
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        border: '1px solid #ccc',
        padding: '5px'
    };

    const ingredientOutput = ingredients.map(ig => <span key={ig.name} style={spanStyle}>{ig.name}</span>);

    return(
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>{formatPrice(props.price)}</strong></p>
        </div>
    );
};

export default order;