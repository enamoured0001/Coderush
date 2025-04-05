import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import TestimonialSection from './Testimonial';
import CodeEditor from './CodeEditor';
import Challenges from './Challenges';
import Leaderboard from './Leaderboard';
import RewardsPage from './Rewards';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CodeEditor />} />
      <Route path="/challenges" element={<Challenges />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/Rewards" element={<RewardsPage />} />
      <Route path="/Testimonial" element={<TestimonialSection />} />
    
    </Routes>
  </BrowserRouter>
  )
}

export default App
