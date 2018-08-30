import React from 'react';


const Product = ({product}) => (
    <button id={product.id}>
        {` id: ${product.id} name: ${product.name}, price: ${product.price}`}
    </button>
);

export default Product;
