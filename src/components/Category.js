import React from 'react';

function handleButtonOnClick(id) {
    window.location.href = '/products';
    document.cookie = "home_page_category_id = " + id + ";path=/"
}

const Category = ({category}) => (
    <ul>
        {category.map((category, index) =>
            <li key={index}>
                <button id={category.categoryId}
                        onClick={() => handleButtonOnClick(category.categoryId)}>
                    {`id: ${category.categoryId}, name: ${category.name}`}
                </button>
            </li>
        )}
    </ul>
);

export default Category;
