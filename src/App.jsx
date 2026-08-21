import Abtpage from "./pages/AbtPage";
import Home from "./pages/Home";
import { Routes,Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/navbar";


function App() {
  return (
    <>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Abtpage />} />
        <Route path="/projects" element={<Projects />} />
         <Route path="/contact" element={<Contact />} />  
      </Routes>
    </>
  )
}
export default App