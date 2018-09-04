import React from 'react';

const Cart = ({cart}) => (
    <ul>
        {cart.map((cart, index) =>
            <li key={index}>
                <p>id: {cart.id}</p>
                <p>amount: {cart.amount}</p>
            </li>
        )}
    </ul>
);

export default Cart