import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/home"
import Projects from "./pages/projectsmain"
import Aboutus from "./pages/aboutuspage"
import Contactus from "./pages/contactuspage"
import Test from "./pages/test"


import Project1 from "./pages/project1"





import './App.css'

function App() {


  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project1/:id" element={<Project1 />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/test" element={<Test />} />






        </Routes>
        <Footer />

      </Router>
    </div>

  )
}

export default App
