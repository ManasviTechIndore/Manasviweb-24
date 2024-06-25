import { BrowserRouter, Route, Routes } from "react-router-dom"
import {LandingScreen} from "./pages/LandingScreen"
import ContactUs from "./component/ContactUs"
import Portfolio from "./component/Portfolio"
import Services from "./component/Services"
import Aboutus from "./component/about-us/Aboutus"


import ScheduleMeeting from "./component/ScheduleMeeting"
import Products from "./pages/Products"

function App() {
 
  return (
   <>
   <BrowserRouter>
      <Routes>     
        <Route path="/" element={<LandingScreen/>} /> 
        <Route path="/service" element={<Services/>} /> 
        <Route path="/products" element={<Products/>} /> 
        <Route path="/portfolio" element={<Portfolio/>} /> 
        {/* <Route path="/contact" element={<ContentUs/>} />  */}
        <Route path="/about-us/about" element={<Aboutus/>}/>
        <Route path="/contact" element={<ContactUs/>} /> 
        <Route path="/schedule-meeting" element={<ScheduleMeeting />} /> 
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
