import React from 'react';

function handleButtonOnClick(id) {
    window.location.href = '/products';
    document.cookie = "home_page_category_id = " + id + ";path=/"
}

const Category = ({category}) => (
    <ul>
        {category.map((category, index) =>
            <li key={index}>
                <p>{category.name}</p>
                <button id={category.categoryId}
                        className="category__button"
                        onClick={() => handleButtonOnClick(category.categoryId)}>
                    Learn more
                </button>
            </li>
        )}
    </ul>
);

export default Category;
