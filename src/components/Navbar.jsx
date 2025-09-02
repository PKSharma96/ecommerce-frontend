import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between">
                <div className="text-white text-lg font-bold">E-Commerce</div>
                <div className="flex space-x-4">
                    <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link to="/products" className="text-gray-300 hover:text-white">Products</Link>
                    <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
                    <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;