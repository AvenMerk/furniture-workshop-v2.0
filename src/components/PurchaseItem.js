import React from 'react';

const PurchaseItem = ({productId, quantity, name, price, onChange, onClick}) => (
        <tr>
            <td className="table-left-align">{name}</td>
            <td><input className="add-option__cart"
                       type="number"
                       min="0"
                       max="100"
                       step="1"
                       value={quantity}
                       onChange={onChange}
            /></td>
            <td>
                <button
                    className="style-none"
                    onClick={onClick}>
                    Remove item
                </button>
            </td>
            <td>{price}</td>
        </tr>
);

export default PurchaseItem
