import React from 'react';

const Cart = ({cart}) => (
    <ul>
        {cart.map((cart, index) =>
            <li key={index}>
                <p>productId: {cart.productId}</p>
                <p>quantity: {cart.quantity}</p>
            </li>
        )}
    </ul>
);

export default Cart