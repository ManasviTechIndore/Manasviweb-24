import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {LandingScreen} from "./pages/LandingScreen"
import ContactUs from "./component/ContactUs"
import Portfolio from "./component/Portfolio"
import Services from "./component/Services"
import OurTeam from "./component/OurTeam"
import OurClients from "./component/OurClients"

function App() {
 
  return (
   <>
   <Router>
      <Routes>     
        <Route path="/" element={<LandingScreen/>} /> 
        <Route path="/service" element={<Services/>} /> 
        <Route path="/portfolio" element={<Portfolio/>} /> 
        <Route path="/contact" element={<ContactUs/>} /> 
        <Route path="/ourteam" element={<OurTeam />}/> 
        <Route path="/ourclient" element={<OurClients/>}/> 
      </Routes>
    </Router>
   </>
  )
}

export default App
