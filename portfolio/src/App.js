import React, { useEffect } from 'react'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Skills from './Pages/Skills'
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}



export default App

// let Mode={
//   mode:mode,
//   setMode:setMode
// }

// Mode.mode
// Mode.setmode

// let {mode,setMode}=Mode

// mode

