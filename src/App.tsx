import './App.css'
import Courses from './components/Courses'
import Services from './components/Services'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import Features from './components/Features'
import AboutUs from './components/AboutUs'
// import OurTeam from './components/OurTeam'
import ContactUs from './components/ContactUs'
import Academy from './components/Academy'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      {/* <Features /> */}
      <Academy />
      <Courses />
      <Services />
      {/* <div id='team' className='py-4'></div>
      <OurTeam /> */}
      <ContactUs />
    </>
  )
}

export default App
