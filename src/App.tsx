import { useState, useEffect } from 'react'
import './App.css'
import Loader from './Components/Loader'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Hide loader and show main content after 5 seconds
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && <Loader />}
      
      {!showLoader && (
        <div className="main-content">
          <Navbar />
          <Hero />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App