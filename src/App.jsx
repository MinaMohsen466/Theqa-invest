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
import AppointmentBooking from './pages/AppointmentBooking/AppointmentBooking.jsx';
import { Estateplan } from './pages/EstatePlan/Estateplan.jsx';
import KidsInvestment from './pages/KidsInvestment/KidsInvestment.jsx';
import InvertmentReco from './pages/InvertmentReco/InvertmentReco.jsx';
import TermsAndConditions from './pages/Terms&Conditions/TermsAndConditions.jsx';
import PrivacyPolicies from './pages/PrivacyPolicies/PrivacyPolicies.jsx';
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
        <Route path="/Estateplan" element={
          <>
            <Navbar language={language} setLanguage={setLanguage}/>
            <Estateplan language={language}/>
            <Footer />
          </>
        } />
        <Route path="/KidsInvestment" element={
          <>
            <Navbar language={language} setLanguage={setLanguage}/>
            <KidsInvestment language={language}/>
            <Footer />
          </>
        } />
        <Route path="/InvertmentReco" element={
          <>
            <Navbar language={language} setLanguage={setLanguage}/>
            <InvertmentReco language={language}/>
            <Footer />
          </>
        } />
        <Route path="/book-appointment" element={
          <>
            <Navbar language={language} setLanguage={setLanguage}/>
            <AppointmentBooking language={language}/>
            <Footer />
          </>
        } />
        <Route path="/TermsAndConditions" element={
          <>
            <Navbar language={language} setLanguage={setLanguage}/>
            <TermsAndConditions language={language}/>
            <Footer />
          </>
        } />
        <Route path="/PrivacyPolicies" element={
          <>
            <Navbar language={language} setLanguage={setLanguage}/>
            <PrivacyPolicies language={language}/>
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App
