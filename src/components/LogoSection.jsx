import React from 'react';
import google from '../assets/google.png'
import microsoft from '../assets/microsoft.png'
import apple from '../assets/apple.png'

const LogoSection = () => {
  return (
    <div className="bg-black py-10 flex justify-center space-x-8">
        <img src={google} className="h-16 opacity-70 pr-10" alt="Google" />
        <img src={microsoft} className="h-16 opacity-70" alt="Microsoft" />
        <img src={apple} className="h-16 opacity-70 pl-10" alt="Apple" />
    </div>
  );
};

export default LogoSection;


