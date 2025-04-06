import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Challenges from './user/ChallengesContent';
import CodingDashboard from './user/Dashboard';
import Login from './user/Login';
import LeaderboardPage from './user/Leader';
import UserDashboard from './user/Userdashboard';
import AdminDashboard from './user/AdminDashboard';
import RewardPage from './user/Rewardcentre';



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CodingDashboard />} />
      <Route path="/challenges" element={<Challenges />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />
      <Route path="/Rewards" element={<RewardPage />} />
      <Route path="/profile" element={<Login />} />
      <Route path="/userdashboard" element={<UserDashboard />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
     
      
  
    
    </Routes>
  </BrowserRouter>
  )
}

export default App
