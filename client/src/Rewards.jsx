import { useState } from "react";
import { User, Gift } from "lucide-react";

const rewards = [
  { name: "Pro Badge", points: 500, description: "Awarded for scoring 500+ points." },
  { name: "Weekly Winner", points: 700, description: "Top scorer of the week." },
  { name: "Streak Master", points: 300, description: "Maintain a 7-day streak." },
  { name: "Code Hero", points: 1000, description: "Reach 1000 points overall." },
];

export default function RewardsPage() {
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
        <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center animate-bounce">🎁 Rewards</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
          {rewards.map((reward, idx) => (
            <div key={idx} className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:shadow-xl transition-all flex flex-col justify-between">
              <div className="flex items-center mb-4">
                <Gift className="text-green-400 mr-2" />
                <h3 className="text-xl text-green-400 font-semibold">{reward.name}</h3>
              </div>
              <p className="text-blue-400 text-sm">{reward.description}</p>
              <p className="mt-2 text-yellow-400 font-bold">🏅 {reward.points} Points</p>
            </div>
          ))}
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
