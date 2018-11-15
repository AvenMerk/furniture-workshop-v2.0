import React from "react";

function redirectToProductPage(productId) {
    window.location.href = `/product/${productId}`;
}

const ProductPreview = ({id, name, description}) => (
    <div>
        <img src={"/img/"+id+"_small.jpg"}/>
        <ul>
            <li className="list__style product-page">
                <p>{name}</p>
                <p>{description}</p>
                <button className="standart__button" id={id} onClick={() => redirectToProductPage(id)}>
                    Learn more
                </button>
            </li>
        </ul>
    </div>
);

export default ProductPreview;