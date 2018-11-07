import React from 'react';
import { Row, Col } from 'reactstrap';
import NumberInput from 'grommet/components/NumberInput';

const PurchaseItem = ({productId, quantity, name, price, onChange, onClick}) => (
    <Row>
        <Col xs="3" className="workshop-cart-col">{name}</Col>
        <Col xs="3" className="workshop-cart-col"  id="workshop-cart-change-quantity">
            <NumberInput value={quantity}
                         min={0}
                         max={100}
                         onChange={onChange} />
        </Col>
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


