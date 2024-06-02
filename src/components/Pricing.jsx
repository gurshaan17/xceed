import React, { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4">
      <div className="mb-8">
        <button
          className={`py-2 px-4 ${isAnnual ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded-l-lg text-xl`}
          onClick={() => setIsAnnual(false)}
        >
          Monthly
        </button>
        <button
          className={`py-2 px-4 ${isAnnual ? 'bg-white text-black' : 'bg-gray-800 text-white'} rounded-r-lg text-xl`}
          onClick={() => setIsAnnual(true)}
        >
          Annually (save 30%)
        </button>
      </div>
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="border border-gray-700 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Basic</h2>
          <div className="text-4xl  mb-4">
            ${isAnnual ? '2.09' : '2.99'} <span className="text-xl line-through">${isAnnual ? '4.89' : '6.99'}</span>/mo
          </div>
          <button className="bg-teal-500 text-white py-2 px-4 rounded-lg mb-4">Choose Basic</button>
          <ul className="text-left space-y-2">
            <li>200 quotas per month</li>
            <li>✓ AI Chat</li>
            <li>✓ YouTube Summary</li>
            <li>✓ PDF Summary</li>
            <li>✓ AI Generator</li>
            <li>✓ AI Transcriber / Converter</li>
            <li>✓ AI Mindmap (No Watermark)</li>
            <li>✓ AI Translator</li>
          </ul>
        </div>

        {/* Unlimited Plan */}
        <div className="border border-gray-700 rounded-lg p-6 text-center bg-gray-800">
          <h2 className="text-2xl font-bold mb-4">Unlimited</h2>
          <div className="text-4xl mb-4">
            ${isAnnual ? '20.30' : '29'} <span className="text-xl line-through">${isAnnual ? '48.99' : '69.99'}</span>/mo
          </div>
          <button className="bg-teal-500 text-white py-2 px-4 rounded-lg mb-4">Choose Unlimited</button>
          <ul className="text-left space-y-2">
            <li>Unlimited quotas per month</li>
            <li>✓ AI Chat</li>
            <li>✓ AI Summarizer (YouTube, PDF, Web, Podcast, Image, Audio, Video, Book, PPT, Word & more)</li>
            <li>✓ Summary for Long Videos, PDFs & more</li>
            <li>✓ AI Generator (Music, PPT, YouTube/Audio/Video Transcript, Mind Map & more)</li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="border border-gray-700 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Pro</h2>
          <div className="text-4xl  mb-4">
            ${isAnnual ? '6.99' : '9.99'} <span className="text-xl line-through">${isAnnual ? '13.99' : '19.99'}</span>/mo
          </div>
          <button className="bg-teal-500 text-white py-2 px-4 rounded-lg mb-4">Choose Pro</button>
          <ul className="text-left space-y-2">
            <li>1000 quotas per month</li>
            <li>✓ AI Chat</li>
            <li>✓ AI Summarizer (YouTube, PDF, Web, Podcast, Image, Audio, Video, Book, PPT, Word & more)</li>
            <li>✓ Summary for Long Videos, PDFs & more</li>
            <li>✓ AI Generator (Music, PPT, YouTube/Audio/Video Transcript, Mind Map & more)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default Pricing;
