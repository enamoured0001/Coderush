import React, { useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

export default function RewardPage() {
  const [rewards, setRewards] = useState({
    totalEarned: 2000,
    available: 500,
    redeemed: 1500,
    upcomingMilestones: [
      { badge: "Bronze Contributor", threshold: 500 },
      { badge: "Silver Contributor", threshold: 1000 },
      { badge: "Gold Guru", threshold: 2000 },
    ],
    history: [
      { id: 1, task: "Landing Page Design", date: "2025-03-15", amount: 150, status: "Approved" },
      { id: 2, task: "SEO Optimization", date: "2025-03-18", amount: 250, status: "Approved" },
      { id: 3, task: "Bug Fixes", date: "2025-03-25", amount: 100, status: "Pending" },
    ]
  });

  return (
    <div className="bg-black text-white min-h-screen p-6 font-sans">
    
      <h1 className="text-3xl font-bold text-blue-400 mb-6 text-center">Reward Center</h1>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-900 p-4 rounded text-center">
          <p className="text-gray-400">Total Earned</p>
          <p className="text-2xl font-bold text-green-400">${rewards.totalEarned}</p>
        </div>
        <div className="bg-gray-900 p-4 rounded text-center">
          <p className="text-gray-400">Available</p>
          <p className="text-2xl font-bold text-yellow-400">${rewards.available}</p>
        </div>
        <div className="bg-gray-900 p-4 rounded text-center">
          <p className="text-gray-400">Redeemed</p>
          <p className="text-2xl font-bold text-blue-400">${rewards.redeemed}</p>
        </div>
        <div className="bg-gray-900 p-4 rounded text-center">
          <p className="text-gray-400">Next Milestone</p>
          <p className="text-lg font-bold text-purple-400">
            {rewards.upcomingMilestones.find(m => m.threshold > rewards.totalEarned)?.badge || "Maxed Out!"}
          </p>
        </div>
      </div>

      {/* Milestones */}
      <div className="mb-10">
        <h2 className="text-2xl text-purple-400 mb-4">Your Milestones</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {rewards.upcomingMilestones.map((m, i) => (
            <div key={i} className="bg-gray-900 p-4 rounded text-center">
              <h3 className="text-lg font-semibold text-blue-300">{m.badge}</h3>
              <p className="text-gray-400">Earn ${m.threshold} to unlock</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reward History */}
      <div className="bg-gray-900 p-4 rounded">
        <h2 className="text-2xl text-purple-400 mb-4">Reward History</h2>
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-gray-400 text-left border-b border-gray-700">
              <th className="py-2 pr-4">Task</th>
              <th className="py-2 pr-4">Date</th>
              <th className="py-2 pr-4">Amount</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {rewards.history.map(item => (
              <tr key={item.id} className="text-gray-200 border-b border-gray-800">
                <td className="py-2 pr-4">{item.task}</td>
                <td className="py-2 pr-4">{item.date}</td>
                <td className="py-2 pr-4">${item.amount}</td>
                <td className="py-2">
                  <span className={`px-2 py-1 rounded text-xs ${
                    item.status === 'Approved' ? 'bg-green-700 text-green-200' :
                    item.status === 'Pending' ? 'bg-yellow-700 text-yellow-200' : 'bg-red-700 text-red-200'
                  }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">Powered by CodeRush</div>
    </div>
  );
}
