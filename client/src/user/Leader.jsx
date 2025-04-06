import { useState } from "react";
import { User } from "lucide-react";
import { Link, BrowserRouter as Router } from "react-router-dom";

const dummyData = {
  daily: [
    { name: "Alice", score: 980 },
    { name: "Bob", score: 870 },
    { name: "Charlie", score: 830 },
  ],
  weekly: [
    { name: "Alice", score: 6200 },
    { name: "Eve", score: 5900 },
    { name: "Bob", score: 5700 },
  ],
  allTime: [
    { name: "Charlie", score: 19200 },
    { name: "Alice", score: 18000 },
    { name: "Dave", score: 17000 },
  ],
};

const contests = [
  {
    name: "CodeSprint 2025",
    platform: "Codeforces",
    date: "April 15, 2025",
    time: "6:00 PM IST",
    link: "https://codeforces.com/contest/1234"
  },
  {
    name: "HackX Spring Challenge",
    platform: "HackerRank",
    date: "April 18, 2025",
    time: "8:00 PM IST",
    link: "https://www.hackerrank.com/hackx-spring"
  },
  {
    name: "AI Innovation Hackathon",
    platform: "Devfolio",
    date: "April 22-24, 2025",
    time: "All Day",
    link: "https://devfolio.co/ai-hackathon"
  }
];

export default function LeaderboardPage() {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("daily");

  const tabLabels = {
    daily: "Daily",
    weekly: "Weekly",
    allTime: "All-Time",
  };

  return (
    <div className="bg-black min-h-screen text-white p-4 font-sans">
      <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-900 rounded-xl shadow-lg gap-4 md:gap-0">
        <h1 className="text-green-400 text-2xl font-extrabold tracking-wide">CodeRush</h1>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/" className="text-gray-300 hover:text-green-400 transition duration-300 font-medium">Home</a>
          <a href="/challenges" className="text-gray-300 hover:text-green-400 transition duration-300 font-medium">Challenges</a>
          <a href="/leaderboard" className="text-gray-300 hover:text-green-400 transition duration-300 font-medium">Leaderboard</a>
          <a href="/rewards" className="text-gray-300 hover:text-green-400 transition duration-300 font-medium">Rewards</a>
      
        </div>
        <Link to="/profile" className="bg-green-500 hover:bg-green-600 flex items-center px-4 py-2 rounded mt-2 sm:mt-0">
            <User className="mr-2" /> Profile
          </Link>
      </nav>

      <div className="p-4 sm:p-6">
        <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">🏆 Leaderboard</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {Object.keys(tabLabels).map((key) => (
            <button
              key={key}
              className={`px-4 py-2 rounded-full font-semibold transition duration-300 ${
                activeTab === key
                  ? "bg-green-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab(key)}
            >
              {tabLabels[key]}
            </button>
          ))}
        </div>

        <div className="bg-gray-900 rounded-xl shadow-lg p-4 sm:p-6 max-w-4xl mx-auto overflow-x-auto mb-10">
          <table className="w-full text-left min-w-[350px]">
            <thead>
              <tr className="text-green-400 text-lg border-b border-gray-700">
                <th className="py-3 px-2">Rank</th>
                <th className="py-3 px-2">Name</th>
                <th className="py-3 px-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {dummyData[activeTab].map((user, index) => (
                <tr key={index} className="hover:bg-gray-800 transition duration-300">
                  <td className="py-3 px-2 text-yellow-400 font-semibold text-lg">#{index + 1}</td>
                  <td className="py-3 px-2 text-white font-medium">{user.name}</td>
                  <td className="py-3 px-2 text-blue-400 font-semibold">{user.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">🚀 Ongoing Contests / Hackathons</h2>
        <div className="grid gap-6 max-w-4xl mx-auto grid-cols-1 md:grid-cols-2">
          {contests.map((contest, idx) => (
            <div key={idx} className="bg-gray-900 p-5 rounded-xl shadow-lg hover:bg-gray-800 transition duration-300">
              <h3 className="text-xl text-white font-semibold mb-1">{contest.name}</h3>
              <p className="text-gray-400">Platform: <span className="text-blue-400">{contest.platform}</span></p>
              <p className="text-gray-400">Date: {contest.date}</p>
              <p className="text-gray-400">Time: {contest.time}</p>
              <a
                href={contest.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-green-400 hover:underline"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>

      {isAuthModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-11/12 max-w-md shadow-2xl">
            <h2 className="text-green-400 text-2xl font-bold mb-2">Login / Signup</h2>
            <p className="text-gray-400 mb-4">Access your account to track progress and earn rewards.</p>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Username or Email"
                className="p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white font-semibold">Login</button>
              <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white font-semibold">Sign Up</button>
              <button className="text-gray-400 hover:text-white text-sm" onClick={() => setAuthModalOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
