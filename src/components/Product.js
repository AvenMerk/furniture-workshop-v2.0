import React from 'react';


class Product extends React.Component {
    render() {
        const {id, category_id, creation_time, name, price} = this.props.product;
        return <button id={id}>
            {` id: ${id} name: ${name}, price: ${price}`}
        </button>
    }
}

export default Product;
