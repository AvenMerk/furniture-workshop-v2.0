import React from "react";

function redirectToProductPage(productId) {
    window.location.href = `/product/${productId}`;
}

const ProductPreview = ({id, name, description}) => (
    <div className="workshop-products-list-page-container">
        <div  className="workshop-products-list-image">
            <img src={"/img/"+id+"_small.jpg"} />
        </div>
        <div>
            <ul>
                <li className="workshop-category-item product-page">
                    <p>{name}</p>
                    <p>{description}</p>
                    <button className="standart__button" id={id} onClick={() => redirectToProductPage(id)}>
                        Learn more
                    </button>
                </li>
            </ul>
        </div>
    </div>
);

export default ProductPreview;