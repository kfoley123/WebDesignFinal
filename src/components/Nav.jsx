import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prevState) => !prevState);
    };

    return (
        <nav className="block bg-white fixed w-full z-20 top-0 left-0 border-b">
            <div className="max-w-screen-xl flex items-center justify-between p-1 md:px-5 mx-auto">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src="/images/hires-logo.png"
                        style={{ width: '110px', height: 'auto' }}
                        alt="Toronto Cupcake Logo"
                    />
                </Link>

                {/* Cart Icon and Mobile Menu Button */}
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <img
                        src="/images/cart-icon.png"
                        className="w-14 h-14 md:w-10 md:h-10"
                        alt="shopping cart icon"
                    />
                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        onClick={toggleMobileMenu}
                        aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div
                    className={`items-center justify-between hidden md:flex md:w-auto md:order-1`}
                >
                    <ul className="flex flex-col md:flex-row md:space-x-8 font-medium border rounded-lg md:border-0 p-4 md:p-0">
                        {['Home', 'About', 'Cupcakes', 'Contact', 'Community'].map((menu) => (
                            <li key={menu}>
                                <div className="flex flex-row items-center">
                                    <Link
                                        to={`/${menu.toLowerCase()}`}
                                        className="block py-2 px-3 text-customPink text-base md:text-lg lg:text-3xl md:p-0"
                                    >
                                        {menu}
                                    </Link>
                                    <span className="ml-2 pb-2 text-3xl md:text-xl text-customPink">
                                        ⌄
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="absolute top-28 left-0 w-full bg-white shadow-lg md:hidden">
                        <ul className="flex flex-col mt-5 space-y-4 text-xl font-medium p-4">
                        {['Home', 'About', 'Cupcakes', 'Contact', 'Community'].map((menu) => (
                        <li className="text-customPink ">
                                    <Link
                                        key={menu}
                                        to={ menu === "Home" ? '/' :`/${menu.toLowerCase()}`}
                                        onClick={toggleMobileMenu}
                                        className="flex items-center space-x-2"
                                    >{menu}</Link>
                                </li> ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
