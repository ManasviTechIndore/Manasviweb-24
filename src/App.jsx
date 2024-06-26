import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {LandingScreen} from "./pages/LandingScreen"
import ContactUs from "./component/ContactUs"
import Portfolio from "./component/Portfolio"
import Services from "./component/Services"

import OurTeam from "./component/OurTeam"
import OurClients from "./component/OurClients"

import Aboutus from "./component/about-us/Aboutus"


import ScheduleMeeting from "./component/ScheduleMeeting"
import Products from "./pages/Products"


function App() {
 
  return (
   <>
   <Router>
      <Routes>     
        <Route path="/" element={<LandingScreen/>} /> 
        <Route path="/service" element={<Services/>} /> 
        <Route path="/products" element={<Products/>} /> 
        <Route path="/portfolio" element={<Portfolio/>} /> 
 

        <Route path="/about-us/about" element={<Aboutus/>}/>
        <Route path="/contact" element={<ContactUs/>} /> 

        <Route path="/ourteam" element={<OurTeam />}/> 
        <Route path="/clients" element={<OurClients/>}/> 

        <Route path="/schedule-meeting" element={<ScheduleMeeting />} /> 

      </Routes>
    </Router>
   </>
  )
}

export default App
