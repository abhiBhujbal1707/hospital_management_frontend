import React, { useState } from 'react';
import { AiOutlineDown } from "react-icons/ai";

const MainNavbar = ({user,setUser}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Patient');
    // const [user, setUser] = useState('Patient');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSignUp = () => {
        setIsSignUpOpen(!isSignUpOpen);
    };

    return (
        <nav className="bg-zinc-500 border-gray-200 z-10">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3">
                    <img src="/logo.png" className="h-8" alt="Logo" />
                    <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">Indira</span>
                </a>
                <button
                    onClick={toggleMenu}
                    className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen}
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zM3 10h14a1 1 0 010 2H3a1 1 0 010-2zM3 15h14a1 1 0 010 2H3a1 1 0 010-2z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>

                <div
                    className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 dark:border-gray-700">
                        <li><a href="#" className="block py-2 px-3">Home</a></li>
                        <li><a href="#" className="block py-2 px-3">About</a></li>
                        <li><a href="#" className="block py-2 px-3">Doctors</a></li>
                        <li><a href="#" className="block py-2 px-3">Contact</a></li>
                        <li className="relative">
                            <button onClick={toggleSignUp} className="block py-2 px-3 w-full text-left">
                                <div className="flex items-center gap-1">
                                    SignIn {selectedOption} <AiOutlineDown />
                                </div>
                            </button>
                            {isSignUpOpen && (
                                <ul className="absolute flex flex-col mt-2 bg-white border rounded shadow-lg dark:bg-gray-800">
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Admin</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Doctor</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Patient</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Staff</a></li>
                                </ul>
                            )}
                        </li>
                        <li><a href="#" className="block py-2 px-3">Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MainNavbar;
