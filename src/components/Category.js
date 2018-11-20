import React from 'react';

function handleButtonOnClick(id) {
    window.location.href = '/products';
    document.cookie = "home_page_category_id = " + id + ";path=/"
}

const Category = ({category}) => (
    <div>
        <ul>
            {category.map((category, index) =>
                <li className="workshop-products-list-page-container" key={index}>
                    <div className="workshop-products-list-image">
                        <img src={"./img/category_" + category.categoryId + "_small.jpg"} />
                    </div>
                    <div className="workshop-category-item">
                        <p>{category.name}</p>
                        <button id={category.categoryId}
                                className="standart__button"
                                onClick={() => handleButtonOnClick(category.categoryId)}>
                            Learn more
                        </button>
                    </div>
                </li>
            )}
        </ul>
    </div>
);

export default Category;
