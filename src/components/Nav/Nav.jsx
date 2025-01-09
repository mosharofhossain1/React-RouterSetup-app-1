// import React from 'react';

import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="bg-red-600 p-4 mt-5 mb-5 text-white text-2xl">
            <Link className="ml-3 border-2 px-2 bg-amber-400 font-bold" to={'/home'}>Home </Link>
            <Link className="ml-3 border-2 px-2 bg-amber-400 font-bold" to={'/about'}>About </Link>
            <Link className="ml-3 border-2 px-2 bg-amber-400 font-bold" to={'/service'}>Services </Link>
            <Link className="ml-3 border-2 px-2 bg-amber-400 font-bold" to={'/bloge'}>Bloges </Link>
            <Link className="ml-3 border-2 px-2 bg-amber-400 font-bold" to={'/contact'}>Contat </Link>
            <Link className="ml-3 border-2 px-2 bg-amber-400 font-bold" to={'/login'}>LogIn  </Link>
            <Link className="ml-3 border-2 px-2 bg-amber-400 font-bold" to={'/error'}>Error Page  </Link>
        </div>
    );
};

export default Nav;