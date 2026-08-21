import About from '../components/About'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Skills from '../components/Skills'


function Home() {

  return (
  <>
  <Navbar/>
  <Hero/>
  <About/>
  <Skills/>
  <Projects/>
  <Services/>
  <CTA/>
  <Footer/>
  </>
  )
}

export default Home
