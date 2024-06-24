import { BrowserRouter, Route, Routes } from "react-router-dom"
import {LandingScreen} from "./pages/LandingScreen"
import ContactUs from "./component/ContactUs"
import Portfolio from "./component/Portfolio"
import Services from "./component/Services"
import ScheduleMeeting from "./component/ScheduleMeeting"
function App() {
 
  return (
   <>
   <BrowserRouter>
      <Routes>     
        <Route path="/" element={<LandingScreen/>} /> 
        <Route path="/service" element={<Services/>} /> 
        <Route path="/portfolio" element={<Portfolio/>} /> 
        <Route path="/contact" element={<ContactUs/>} /> 
        <Route path="/schedule-meeting" element={<ScheduleMeeting />} /> 
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
