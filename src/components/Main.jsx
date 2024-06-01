import React from 'react';
import rightImage from '../assets/animation.png'

const Main = () => (
  <main className="flex flex-col items-center p-12 bg-black text-white">
    <section className="flex flex-col md:flex-row items-center w-full max-w-6xl">
      <div className="md:w-1/2 text-center md:text-left pr-5">
        <h1 className="text-6xl mb-5">
        <span className="text-teal-400 pr-3">Intelligent</span>
          cloud-based  
          <span className="text-teal-400 pr-3 pl-3">note-taking</span>
          and collaboration tool
        </h1>
        <p className="text-2xl mb-5 pt-5 pb-5">
          Experience the power of smart note-taking and transform the way you work today.
        </p>
        <div className="flex justify-center md:justify-start mt-5 text-xl">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 text-black rounded-l border-none outline-none"
          />
          <button className="p-3 bg-teal-500 text-black rounded-r hover:bg-teal-600">
            Sign up
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src={rightImage} alt="Decorative" className="max-w-full h-auto" />
      </div>
    </section>
  </main>
);

export default Main;

