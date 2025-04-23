import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../src/componet/Navbar/Navbar.jsx'
import SliderShow from './componet/SliderShow/SliderShow.jsx'
import StockDeals from './componet/StockDeals/StockDeals.jsx';
import Services from './componet/Services/Services.jsx';
import Goals from './componet/Goals/Goals.jsx';
import Statistics from './componet/Statistics/Statistics.jsx';
import "./index.css";
import AboutTheqa from './componet/About-theqa/About-theqa.jsx';
import LocateUs from './componet/Locate-us/LocateUs.jsx';
import Footer from './componet/Footer/Footer.jsx';
import RetirementPlanning from './pages/RetirementPlanning/RetirementPlanning.jsx';
function App() {
// Initialize language from localStorage or default to true (Arabic)
const [language, setLanguage] = useState(() => {
  const savedLanguage = localStorage.getItem('theqa-language');
  return savedLanguage !== null ? savedLanguage === 'true' : true;
})
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar language={language} setLanguage={setLanguage}/>
            <SliderShow language={language}/>
            <Services language={language}/>
            <Goals language={language}/>
            <Statistics language={language}/>
            <AboutTheqa language={language}/>
            <LocateUs language={language}/>
            {/* <StockDeals language={language}/> */}
            <Footer />
          </>
        } />
        <Route path="/retirement-planning" element={
          <>
            <Navbar language={language} setLanguage={setLanguage}/>
            <RetirementPlanning language={language}/>
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App
