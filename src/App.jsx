import './index.css'
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import React from 'react';
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';

function App(){
  return <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<LandingPage/>} />
        <Route path="/pricing" element={<PricingPage/>} />
      </Routes>
    </BrowserRouter>
  </>
};

export default App;
