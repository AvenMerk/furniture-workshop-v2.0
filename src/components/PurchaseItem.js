import React from 'react';
import { Row, Col } from 'reactstrap';

const PurchaseItem = ({productId, quantity, name, price, onChange, onClick}) => (
    <Row>
        <Col xs="3" className="workshop-cart-col">{name}</Col>
        <Col xs="3" className="workshop-cart-col"><input className="add-option__cart"
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    value={quantity}
                    onChange={onChange}
        /></Col>
        <Col xs="3" className="workshop-cart-col">
            <button
                className="style-none"
                onClick={onClick}>
                Remove item
            </button>
        </Col>
        <Col xs="3" className="workshop-cart-col">{price}</Col>

    </Row>
);

export default PurchaseItem

// <tr>
// <td className="table-left-align">{name}</td>
// <td><input className="add-option__cart"
// type="number"
// min="0"
// max="100"
// step="1"
// value={quantity}
// onChange={onChange}
// /></td>
// <td>
// <button
// className="style-none"
// onClick={onClick}>
//     Remove item
// </button>
// </td>
// <td>{price}</td>
// </tr>