import React, { useState } from 'react'
import Navbar from '../src/componet/Navbar/Navbar.jsx'
import SliderShow from './componet/SliderShow/SliderShow.jsx'
import StockDeals from './componet/StockDeals/StockDeals.jsx';
import Services from './componet/Services/Services.jsx';
import "./index.css";
function App() {
const [language, setLanguage] = useState(true)
  return (
    <>
     <Navbar language={language} setLanguage={setLanguage}/>
     <SliderShow language={language}/>
     <Services language={language}/>
     {/* <StockDeals language={language}/> */}
    </>
  )
}

export default App
