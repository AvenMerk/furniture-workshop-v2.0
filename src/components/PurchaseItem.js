import React from 'react';


const PurchaseItem = ({productId, quantity, onChange}) => (
    <li className="list__style space">
        <p>product: {productId}</p>
        <input className="add-option__cart" type="number" min="0" max="100" step="1" value={quantity} onChange={onChange}/>
    </li>
);

export default PurchaseItem