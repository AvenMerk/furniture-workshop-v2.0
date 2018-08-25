import React from 'react'

const Products = ({products}) => (
    <ul>
        {products.map((product, index) =>
            <li key={index}>
                {`id: ${product.id}, name: ${product.name}`}
            </li>
        )}
    </ul>
);

export default Products;
