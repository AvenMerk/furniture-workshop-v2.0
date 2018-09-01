import React from "react";


function redirectToProductPage(productId) {
    window.location.href = `/product/${productId}`;
}

const ProductPreview = ({id, name}) => (
    <button id={id} onClick={() => redirectToProductPage(id)}>
        {`name: ${name}`}
    </button>
);

export default ProductPreview;