import { useState } from "react";
import { User } from "lucide-react";

const dummyData = [
  { name: "Alice", score: 980 },
  { name: "Bob", score: 870 },
  { name: "Charlie", score: 830 },
  { name: "Dave", score: 780 },
  { name: "Eve", score: 740 },
];

export default function LeaderboardPage() {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen text-white p-4">
      <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-900 rounded-xl shadow-lg gap-4 md:gap-0">
        <h1 className="text-green-400 text-2xl font-bold">CodeRush</h1>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/" className="text-gray-300 hover:text-green-400 transition duration-300">Home</a>
          <a href="/challenges" className="text-gray-300 hover:text-green-400 transition duration-300">Challenges</a>
          <a href="/leaderboard" className="text-gray-300 hover:text-green-400 transition duration-300">Leaderboard</a>
          <a href="/rewards" className="text-gray-300 hover:text-green-400 transition duration-300">Rewards</a>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 flex items-center px-4 py-2 rounded transition duration-300"
          onClick={() => setAuthModalOpen(true)}
        >
          <User className="mr-2" /> Profile
        </button>
      </nav>

      <div className="p-6">
        <h2 className="text-3xl font-bold text-green-400 mb-6 text-center animate-pulse">🏆 Leaderboard</h2>
        <div className="bg-gray-900 rounded-xl shadow-lg p-4 sm:p-6 max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-left min-w-[350px]">
            <thead>
              <tr className="text-green-400 text-lg border-b border-gray-700">
                <th className="py-2 px-2">Rank</th>
                <th className="py-2 px-2">Name</th>
                <th className="py-2 px-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((user, index) => (
                <tr key={index} className="hover:bg-gray-800 transition duration-300">
                  <td className="py-2 px-2 text-yellow-400 font-semibold">#{index + 1}</td>
                  <td className="py-2 px-2">{user.name}</td>
                  <td className="py-2 px-2 text-blue-400">{user.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isAuthModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded w-11/12 max-w-md shadow-2xl">
            <h2 className="text-green-400 text-2xl font-bold">Login / Signup</h2>
            <p className="text-gray-400 mt-2">Access your account to track progress and earn rewards.</p>
            <div className="flex flex-col gap-4 mt-4">
              <input
                type="text"
                placeholder="Username or Email"
                className="p-2 bg-gray-800 text-white rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-2 bg-gray-800 text-white rounded"
              />
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Login</button>
              <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded">Sign Up</button>
              <button className="text-gray-400 hover:text-white" onClick={() => setAuthModalOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
