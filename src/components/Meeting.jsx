import React from 'react';
import meetingNotesImage from '../assets/meeting.png';

const NavigateToServices = () => {
  window.location.href="/services"
}

const Meeting = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12">
        <div className="flex flex-col items-start md:w-1/2">
          <h1 className="text-7xl  leading-tight mb-4">
          <span className="text-teal-400 pr-3 pl-3">Automate</span>
             your meeting notes
          </h1>
          <p className="text-2xl mb-8">
            SmartNotes helps your team transcribe, summarize, search, and analyze voice conversations.
          </p>
          <div className="flex space-x-4 p-2">
            <button onClick={NavigateToServices} className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg text-2xl">
              Get started for free
            </button>
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg text-2xl">
              Request demo
            </button>
          </div>
        </div>
        <div className="mt-12 md:mt-0 md:w-1/2">
          <img src={meetingNotesImage} alt="Meeting Notes" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Meeting;
