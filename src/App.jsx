import React, { useState, useEffect } from 'react'
import Navbar from '../src/componet/Navbar/Navbar.jsx'
import SliderShow from './componet/SliderShow/SliderShow.jsx'
import StockDeals from './componet/StockDeals/StockDeals.jsx';
import Services from './componet/Services/Services.jsx';
import Goals from './componet/Goals/Goals.jsx';
import Statistics from './componet/Statistics/Statistics.jsx';
import "./index.css";
import AboutTheqa from './componet/About-theqa/About-theqa.jsx';
function App() {
// Initialize language from localStorage or default to true (Arabic)
const [language, setLanguage] = useState(() => {
  const savedLanguage = localStorage.getItem('theqa-language');
  return savedLanguage !== null ? savedLanguage === 'true' : true;
})
  return (
    <>
     <Navbar language={language} setLanguage={setLanguage}/>
     <SliderShow language={language}/>
     <Services language={language}/>
     <Goals language={language}/>
     <Statistics language={language}/>
     <AboutTheqa language={language}/>
     {/* <StockDeals language={language}/> */}
    </>
  )
}

export default App
