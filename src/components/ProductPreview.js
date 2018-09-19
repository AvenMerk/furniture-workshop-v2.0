import React from "react";


function redirectToProductPage(productId) {
    window.location.href = `/product/${productId}`;
}

const ProductPreview = ({id, name}) => (
    <ul>
        <li className="list__style">
            <p>{name}</p>
            <button className="standart__button" id={id} onClick={() => redirectToProductPage(id)}>
                Learn more
            </button>
        </li>
    </ul>

);

export default ProductPreview;