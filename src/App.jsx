import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {LandingScreen} from "./pages/LandingScreen"
import ContactUs from "./component/ContactUs"
import Portfolio from "./component/Portfolio"
import Services from "./component/Services"
<<<<<<< HEAD
import OurTeam from "./component/OurTeam"
import OurClients from "./component/OurClients"
=======
import ScheduleMeeting from "./component/ScheduleMeeting"
import Products from "./pages/Products"
>>>>>>> 6e02e71481f8f02a86e94c2756572ff887839c77

function App() {
 
  return (
   <>
   <Router>
      <Routes>     
        <Route path="/" element={<LandingScreen/>} /> 
        <Route path="/service" element={<Services/>} /> 
        <Route path="/products" element={<Products/>} /> 
        <Route path="/portfolio" element={<Portfolio/>} /> 
        <Route path="/contact" element={<ContactUs/>} /> 
<<<<<<< HEAD
        <Route path="/ourteam" element={<OurTeam />}/> 
        <Route path="/ourclient" element={<OurClients/>}/> 
=======
        <Route path="/schedule-meeting" element={<ScheduleMeeting />} /> 
>>>>>>> 6e02e71481f8f02a86e94c2756572ff887839c77
      </Routes>
    </Router>
   </>
  )
}

export default App
