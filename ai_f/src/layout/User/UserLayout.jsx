import React, { useState } from 'react'
import {Link, Outlet , useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { HomePage, Loginpage, ServicesPage, SignupPage } from '../../route';

export default function UserLayout(){
    // const [activeItem, setActiveItem] = useState('');
    const location = useLocation();

    // const handleItemClick = (item) => {
    //     setActiveItem(item)
    // }
    return <>
         <header>
            <nav className="backdrop-filter backdrop-blur-lg bg-opacity-30 border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">QuickAI</span> 
                </a>
                <div className="flex md:order-2">
                    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span className="sr-only">Search</span>
                    </button>
                    <div className="relative hidden md:block">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search icon</span>
                    </div>
                    <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                    </div>
                    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <div className="relative mt-3 md:hidden">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                    </div>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:backdrop-filter md:backdrop-blur-lg md:bg-opacity-30 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className={`text-${location.pathname === '/' ? 'blu-700':''}`}  >
                            <Link to={HomePage} className={`block py-2 px-3 text-gray-900 bg-blue-700 rounded-sm md:bg-transparent md:hover:text-blue-700 md:text-${location.pathname === '/' ? 'blue-700':'gray-900'} md:p-0 md:dark:text-blue-500" aria-current="page`}>Home</Link>
                        </li>
                        <li>
                            <Link to={ServicesPage} className={`block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:text-${location.pathname === '/services' ? 'blue-700' : 'gray-900'} md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Services</Link>
                        </li>
                        <li>
                            <Link to={Loginpage} className={`block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:text-${location.pathname === '/login' ? 'blue-700' : 'gray-900'} md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Login</Link>
                        </li>
                        <li>
                            <Link to={SignupPage}className={`block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:text-${location.pathname === '/signup' ? 'blue-700' : 'gray-900'} md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Sign up</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main> 
        <footer className="bg-gray-700 text-white py-6">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                {/* Information about Flowbit */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold">QuickAI</h3>
                  <p className="text-gray-300 mt-2">
                    QuickAI is an intelligent chatbot powered by ChatGPT, capable of answering all your questions.
                  </p>
                </div>
        
                {/* Quick Links */}
                <div className="mt-6 md:mt-0">
                  <h4 className="text-xl font-semibold">Quick Links</h4>
                  <ul className="mt-4 space-y-2">
                    <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                    <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
                    <li><a href="/features" className="text-gray-300 hover:text-white">Features</a></li>
                    <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
                  </ul>
                </div>
        
                {/* Social Media */}
                <div className="mt-6 md:mt-0">
                  <h4 className="text-xl font-semibold">Follow Us</h4>
                  <div className="flex space-x-4 mt-4 justify-center md:justify-start">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                      <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                      <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                  </div>
                </div>
              </div>
        
              {/* Copyright */}
              <div className="mt-8 text-center text-gray-300">
                <p>&copy; {new Date().getFullYear()} Flowbit. All rights reserved.</p>
              </div>
            </div>
        </footer>
    </>
}