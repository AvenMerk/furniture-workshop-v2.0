import React from 'react';
import CategoryGet from "../containers/CategoryGet";

const HomePage = () => (
    <div>
        <h2>Welcome to our furniture workshop!</h2>
        <div className="container">
            <p className="option__text">Furniture</p>
            <CategoryGet />
        </div>
    </div>
);

export default HomePage;