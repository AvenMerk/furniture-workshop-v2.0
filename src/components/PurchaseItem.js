import React from 'react';


const PurchaseItem = ({productId, quantity, onChange}) => (
    <li>
        <p>productId: {productId}</p>
        <p>quantity: {quantity}</p>
        <input type="number" value={quantity} onChange={onChange}/>
    </li>
);

export default PurchaseItem