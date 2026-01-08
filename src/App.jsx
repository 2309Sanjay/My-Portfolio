import { useState, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Nav from './nav.jsx'
import Home from "./home.jsx"
import About from "./about.jsx"
import Skills from "./skills.jsx"
import Project from "./project.jsx"
import Contact from "./contact.jsx"
import Footer from "./footer.jsx"

function App() {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"
  })

  // Apply theme to body
  useEffect(() => {
    document.body.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <HashRouter>
      <Nav theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer/>
    </HashRouter>
  )
}

export default App
