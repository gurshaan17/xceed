import './index.css'
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import React from 'react';
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import FeaturesPage from './pages/FeaturesPage';
import SupportPage from './pages/SupportPage';

function App(){
  return <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<LandingPage/>} />
        <Route path="/pricing" element={<PricingPage/>} />
        <Route path="/features" element={<FeaturesPage/>} />
        <Route path="/support" element={<SupportPage/>} />
      </Routes>
    </BrowserRouter>
  </>
};

export default App;
