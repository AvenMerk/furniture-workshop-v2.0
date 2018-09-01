import React from 'react';

function handleButtonOnClick(id) {
    window.location.href = '/products';
    document.cookie = "home_page_category_id = " + id + ";path=/"
}

const Category = ({category}) => (
    <ul>
        {category.map((category, index) =>
            <li key={index}>
                <button id={category.id}
                        onClick={() => handleButtonOnClick(category.id)}>
                    {`id: ${category.id}, name: ${category.name}`}
                </button>
            </li>
        )}
    </ul>
);

export default Category;
