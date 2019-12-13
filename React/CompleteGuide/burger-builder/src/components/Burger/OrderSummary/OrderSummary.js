import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return <li key={ingredientKey}>
                <span style={{textTransform: 'capitalize'}}>
                    {ingredientKey}: {props.ingredients[ingredientKey]}
                </span>
            </li>
        })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button
                buttonType="Danger"
                clicked={props.purchaseCanceled} >
                    CANCEL
            </Button>
            <Button
                buttonType="Success"
                clicked={props.purchaseContinued} >
                    CONTINUE
            </Button>
        </Aux>
    );
};

export default orderSummary;