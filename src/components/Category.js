import React from 'react'

const Category = ({category}) => (
    <ul>
        {category.map((categ, index) =>
            <li key={index}>
                <button>{`id: ${categ.id}, name: ${categ.name}`}</button>
            </li>
        )}
    </ul>
);

export default Category;
