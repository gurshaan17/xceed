import './index.css'
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Text from './components/Text';
import LogoSection from './components/LogoSection';

function App(){
  return <div>
    <Header />
    <div className="border-t-2 border-teal-500 w-full"></div>
    <Main />
    <LogoSection />
    <Text />
    <Footer />
  </div>
};

export default App;
