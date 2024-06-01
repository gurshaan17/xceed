import React from 'react';
import logo from '../assets/logo.png';

const Header = () => (
  <header className="flex justify-between items-center p-5 bg-black text-white">
    <div className="flex items-center pl-9">
      <img src={logo} alt="Logo" className="h-12 w-12 mr-2" />
      <div className="text-4xl font-bold pt-5 pb-5">SmartNotes</div>
    </div>
    <nav>
      <a href="#features" className="ml-5 text-white hover:underline text-2xl p-6">Features</a>
      <a href="#pricing" className="ml-5 text-white hover:underline text-2xl p-6">Pricing</a>
      <a href="#support" className="ml-5 text-white hover:underline text-2xl p-6">Support</a>
    </nav>
    <button className="flex items-center px-4 py-2 bg-teal-500 text-black rounded-lg hover:bg-teal-600 transition duration-300">
        <span className="mr-2">Get Started</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
    </button>
  </header>
);

export default Header;
