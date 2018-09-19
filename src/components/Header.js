import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <Link to="/" className="is-active header__text" exact={'true'}>Home</Link>
        <Link to="/about" className="is-active header__text">About</Link>
        <Link to="/cart" className="is-active header__text">Cart</Link>
    </header>
);

export default Header;