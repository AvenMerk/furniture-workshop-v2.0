import React from 'react';

const cookie = Number(document.cookie.replace(/(?:(?:^|.*;\s*)id\s*\=\s*([^;]*).*$)|^.*$/, "$1"));

const Products = ({products}) => (
    <ul>
        {products.filter(product => product.category_id === cookie).map((product, index) =>
            <React.Fragment>
            <li key={index}>
                <button id={product.id}>
                    {` id: ${product.id} name: ${product.name}, price: ${product.price}`}
                </button>
            </li>
            </React.Fragment>
        )}
    </ul>
);

export default Products;
