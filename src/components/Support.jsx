import React from 'react';

const Support = () => {
  return (
    <div className="bg-black text-white py-20 h-screen pt-60">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-semibold mb-2">@ Email us</div>
            <div className="text-lg">support@smartnotes.ai</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-semibold mb-2">📍 Address</div>
            <div className="text-lg">5424 Sunol Blvd, Ste 10-531 Pleasanton, CA 94566</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
