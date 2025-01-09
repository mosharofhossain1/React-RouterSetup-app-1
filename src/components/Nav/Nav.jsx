// import React from 'react';

import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="bg-red-600 p-4 mt-5 mb-5 text-white text-2xl">
            <Link to={'/home'}>Home </Link>
            <Link to={'/about'}>About </Link>
            <Link to={'/service'}>Services </Link>
            <Link to={'/bloge'}>Bloges </Link>
            <Link to={'/contact'}>Contat </Link>
            <Link to={'/login'}>LogIn  </Link>
        </div>
    );
};

export default Nav;