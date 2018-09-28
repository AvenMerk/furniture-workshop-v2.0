import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <React.Fragment>
        {/*<div className="logo"></div>*/}
        <header className="header">
            <p id="logo">LOGO</p>
            <Link to="/" className="is-active header__text" exact={'true'}>Categories</Link>
            <Link to="/about" className="is-active header__text">About</Link>
            <Link to="/cart" className="is-active header__text">Cart</Link>
        </header>
    </React.Fragment>
);

export default Header;