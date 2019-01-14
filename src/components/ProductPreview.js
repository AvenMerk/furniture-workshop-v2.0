import React from "react";

function redirectToProductPage(productId) {
    window.location.href = `/postershop/product/${productId}`;
}

const ProductPreview = ({id, name, description}) => (
    <li className="workshop-products-list-page-container">
        <div className="workshop-products-list-image">
            <img src={"/postershop/img/"+id+"_small.jpg"} />
        </div>
        <div className="workshop-category-item product-page">
            <p>{name}</p>
            <p>{description}</p>
            <button className="standart__button"
                    id={id}
                    onClick={() => redirectToProductPage(id)}>
                Learn more
            </button>
        </div>
    </li>
);

export default ProductPreview;