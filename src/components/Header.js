import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <React.Fragment>
        <header className="workshop-header">
            <p id="logo">LOGO</p>
            <Link to="/" className="custom-link workshop-header-text" exact={'true'}>Cartoons</Link>
            <Link to="/about" className="custom-link workshop-header-text">About</Link>
            <Link to="/cart" className="custom-link workshop-header-text">Cart</Link>
        </header>
    </React.Fragment>
);

export default Header;