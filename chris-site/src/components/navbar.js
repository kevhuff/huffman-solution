import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiMinus } from 'react-icons/hi'; //


const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);

    return (
        <div className='flex justify-between items-center h-24 w-full mx-auto px-6 bg-gray-800 text-white shadow-lg'>
            <h1 className='text-3xl font-semibold text-indigo-300'>Huffman Family Home Solutions</h1>
            <ul className='hidden md:flex space-x-6'>
                {['Home', 'About', 'Contact', 'Projects', 'Socials', 'Resume'].map((text, idx) => (
                    <li key={text} className='group p-2 relative'>
                        <span className='absolute -left-5 top-1/2 transform -translate-y-1/2 bg-indigo-400 rounded-full w-6 h-6 flex items-center justify-center'>{idx + 1}</span>
                        <Link to={text === 'Home' ? '/' : `/${text.toUpperCase()}`} className='px-4 py-2 rounded transition-all duration-300 hover:bg-indigo-500 hover:text-white'>{text}</Link>
                    </li>
                ))}
            </ul>
            <div onClick={handleNav} className="z-10 cursor-pointer">
                {!nav ? < HiMenuAlt3 size={30} /> : <HiMinus size={30} onClick={handleNav} />}
            </div>
            <ul className={nav ? 'fixed right-0 top-0 w-60 h-full bg-gray-900 border-l border-gray-600 transition-transform duration-300 ease-in-out' : 'fixed right-full top-0 w-60 h-full bg-gray-900 border-l border-gray-600 transition-transform duration-300 ease-in-out'}>
                <h1 className='text-center text-3xl font-bold text-indigo-400 py-4'>Huffman</h1>
                {['Home', 'About', 'Contact', 'Projects', 'Socials', 'Resume'].map((text, idx) => (
                    <div key={text} className='relative p-4 border-b border-gray-500 transition-all duration-300 hover:bg-indigo-500'>
                        <span className='absolute -left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center'>{idx + 1}</span>
                        <Link to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}>{text}</Link>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default NavBar;