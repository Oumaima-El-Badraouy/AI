import React from 'react';
import { Link } from 'react-router-dom';
import { Loginpage } from '../route';

export default function Home() {
    return (
        <div className='h-screen'>
            {/* <NavBar /> */}
            <section className='bg-gradient-to-r from-gray-900 to-gray-700 py-28'>
                <div className='container mx-auto text-center px-4'>

                    <h1 className='text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-300 mb-6'>
                        Meet <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600'>QuickAI</span> – Your AI-Powered Chatbot.
                    </h1>

                    <h3 className='text-xl sm:text-2xl md:text-3xl font-medium text-gray-100 mb-12'>
                        Experience smarter, faster, and more intuitive conversations powered by <span className='font-semibold text-blue-600'>RAG</span> and <span className='font-semibold text-indigo-600'>AI APIs</span>.
                    </h3>

                    <div className='mb-16'>
                        <img 
                            src='/Slide 4.png' 
                            alt='Chatbot Mockup' 
                            className='rounded-2xl shadow-2xl w-full max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-300 border-4 border-white'
                        />
                    </div>

                    <p className='text-lg sm:text-xl text-gray-100 mb-16 max-w-2xl mx-auto leading-relaxed'>
                        QuickAI uses <span className='font-semibold text-blue-600'>Retrieval-Augmented Generation (RAG)</span> to provide accurate and context-aware responses, making your interactions seamless and efficient.
                    </p>

                    <div>
                        <Link to={Loginpage}>
                            <button className='text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-5 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
                                Start Now
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}