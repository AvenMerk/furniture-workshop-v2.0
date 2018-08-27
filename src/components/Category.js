import React from 'react'

const Category = ({category}) => (
    <ul>
        {category.map((categ, index) =>
            <li key={index}>
                {`id: ${categ.id}, name: ${categ.name}`}
            </li>
        )}
    </ul>
);

export default Category;
