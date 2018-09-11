import React from 'react';


const PurchaseItem = ({item}) => (
    <li>
        <p>productId: {item.productId}</p>
        <p>quantity: {item.quantity}</p>
    </li>
);

export default PurchaseItem