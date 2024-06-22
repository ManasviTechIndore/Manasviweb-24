import { BrowserRouter, Route, Routes } from "react-router-dom"
import {LandingScreen} from "./pages/LandingScreen"
import ContentUs from "./component/ContentUs"
import Portfolio from "./component/Portfolio"
import Services from "./component/Services"

function App() {
 
  return (
   <>
   <BrowserRouter>
      <Routes>     
        <Route path="/" element={<LandingScreen/>} /> 
        <Route path="/service" element={<Services/>} /> 
        <Route path="/portfolio" element={<Portfolio/>} /> 
        <Route path="/contact" element={<ContentUs/>} /> 
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
