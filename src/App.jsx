import React from 'react'
// import Navbar from './components/Navbar'
// import Home from './Home'
import Tools from './components/Tools'
import HomePage from './Home'
// import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/tool" element={<Tools/>} />
    </Routes>
    
    
    
    </BrowserRouter>
  )
}

export default App