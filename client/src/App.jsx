import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './Homepage'
import Login from './Login'
import About from './About'
import Signup from './Signup';
import TestimonialSection from './Testimonial';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Testimonial" element={<TestimonialSection />} />
    
    </Routes>
  </BrowserRouter>
  )
}

export default App
