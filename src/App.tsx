import './App.css'
import Courses from './components/Courses'
import Services from './components/Services'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <div className="max-w-4xl mx-auto text-center p-6">
        <h2 className="text-3xl font-bold mb-2">
          All the biotech skills you need — in one place
        </h2>
        <p className="text-gray-600">
          Gain essential knowledge and hands-on expertise to advance your career in life sciences with PEP Allele Education.
        </p>
      </div>
      <div id='courses' className='pb-4'>
      </div>
      <Courses />
      <div id='services' className='pb-4'>
      </div>
      <Services />

    </>
  )
}

export default App
