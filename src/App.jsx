import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {LandingScreen} from "./pages/LandingScreen"
import ContactUs from "./component/ContactUs"
import Portfolio from "./component/Portfolio"
import Services from "./component/Services"
// <<<<<<< HEAD
// <<<<<<< HEAD
import OurTeam from "./component/OurTeam"
import OurClients from "./component/OurClients"
// =======
// =======
import Aboutus from "./component/about-us/Aboutus"


//>>>>>>> 94f19934d8c55582c42832a8eed8931635b997cf
import ScheduleMeeting from "./component/ScheduleMeeting"
import Products from "./pages/Products"
//>>>>>>> 6e02e71481f8f02a86e94c2756572ff887839c77

function App() {
 
  return (
   <>
   <Router>
      <Routes>     
        <Route path="/" element={<LandingScreen/>} /> 
        <Route path="/service" element={<Services/>} /> 
        <Route path="/products" element={<Products/>} /> 
        <Route path="/portfolio" element={<Portfolio/>} /> 
<<<<<<< HEAD
        <Route path="/contact" element={<ContactUs/>} /> 
=======
>>>>>>> 3a56ffabf23b7612bef0716c9f6dbe0494217558
        <Route path="/about-us/about" element={<Aboutus/>}/>
        <Route path="/contact" element={<ContactUs/>} /> 
{/* <<<<<<< HEAD */}
        <Route path="/ourteam" element={<OurTeam />}/> 
        <Route path="/clients" element={<OurClients/>}/> 
{/* ======= */}
        <Route path="/schedule-meeting" element={<ScheduleMeeting />} /> 
{/* >>>>>>> 6e02e71481f8f02a86e94c2756572ff887839c77 */}
      </Routes>
    </Router>
   </>
  )
}

export default App
