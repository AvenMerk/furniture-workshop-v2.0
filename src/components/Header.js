import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
    <header className="option header header__subtitle">
        {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        <Link to="/" className="is-active option__text" exact={'true'}>Home</Link>
        <Link to="/employees" className="is-active option__text">Our craftsmen</Link>
        <Link to="/about" className="is-active option__text">About</Link>
    </header>
);

export default Header;