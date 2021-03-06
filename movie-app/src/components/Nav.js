import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
	<nav className="main-nav">
        <ul>
            <li><NavLink to={'/'} exact>Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/mylist'}>My List</NavLink></li>
        </ul>
	</nav>
    );
}

export default Nav;