import { BrowserRouter, Route, Routes } from "react-router-dom"
import {LandingScreen} from "./pages/LandingScreen"
import ContentUs from "./component/ContentUs"
import Portfolio from "./component/Portfolio"
import Services from "./component/Services"
import Aboutus from "./component/about-us/Aboutus"


function App() {
 
  return (
   <>
   <BrowserRouter>
      <Routes>     
        <Route path="/" element={<LandingScreen/>} /> 
        <Route path="/service" element={<Services/>} /> 
        <Route path="/portfolio" element={<Portfolio/>} /> 
        <Route path="/contact" element={<ContentUs/>} /> 
        <Route path="/about-us/about" element={<Aboutus/>}/>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
