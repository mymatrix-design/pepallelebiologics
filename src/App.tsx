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
      <div id='about' className='pb-4'>
      </div>
      <AboutUs />
      {/* <Features /> */}
      <div id='academy' className='pb-4'>
      </div>
      <Academy />
      <Courses />
      <div id='services' className='pb-4'>
      </div>
      <Services />
      {/* <div id='team' className='pb-4'></div>
      <OurTeam /> */}
      <div id='contact' className='pb-4'></div>
      <ContactUs />
    </>
  )
}

export default App
