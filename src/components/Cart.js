import React from 'react';

// function handleRemoveItem () => {
//     localStorage.
// }

const Cart = ({cart}) => (
    <ul>
        {cart.map((cart, index) =>
            <li key={index}>
                <p>productId: {cart.productId}</p>
                <p>quantity: {cart.quantity}</p>
                <button onClick={localStorage.removeItem(cart.productId)}>Remove item</button>
            </li>
        )}
    </ul>
);

export default Cart