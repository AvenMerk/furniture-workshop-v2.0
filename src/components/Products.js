import React from 'react';

const cookie = Number(document.cookie.replace(/(?:(?:^|.*;\s*)id\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
const Products = ({products}) => (
    <ul>
        {products.filter(product => product.category_id === cookie).map((product, index) =>
            <li key={index}>
                {`id: ${product.id}, name: ${product.name}`}
            </li>
        )}
    </ul>
);

export default Products;
