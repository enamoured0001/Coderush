import { useState } from "react";

import { Link, BrowserRouter as Router } from "react-router-dom";

const challenges = [
  { id: 1, title: "Challenge 1", difficulty: "Easy", tags: ["Array"], completed: true },
  { id: 2, title: "Challenge 2", difficulty: "Medium", tags: ["String"], completed: false },
  { id: 3, title: "Challenge 3", difficulty: "Hard", tags: ["Math"], completed: true },
  { id: 4, title: "Challenge 4", difficulty: "Easy", tags: ["DP"], completed: false },
  { id: 5, title: "Challenge 5", difficulty: "Medium", tags: ["Greedy"], completed: true },
  { id: 6, title: "Challenge 6", difficulty: "Hard", tags: ["Graph"], completed: false },
];

const tasks = [
  { id: 1, title: "Task 1", language: "JavaScript", level: "Easy", bounty: 100, deadline: "2025-04-15" },
  { id: 2, title: "Task 2", language: "Python", level: "Medium", bounty: 200, deadline: "2025-04-20" },
  { id: 3, title: "Task 3", language: "C++", level: "Hard", bounty: 300, deadline: "2025-04-25" },
];

export default  function UserDashboard() {
  const [tab, setTab] = useState("Ongoing");
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({ username: "saranshj123", role: "Developer" });
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const myTasks = {
    Ongoing: [tasks[0]],
    Submitted: [tasks[1]],
    Completed: [tasks[2]]
  };

  const handleProfileEdit = () => setIsEditing(!isEditing);
  const handleProfileChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });
  const handleWithdraw = () => alert(`Requested withdrawal of $${withdrawAmount}`);

  return (
    <div className="bg-black text-white min-h-screen p-6 font-sans">
      
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="col-span-1 bg-gradient-to-r from-pink-500 to-purple-500 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Profile</h2>
          {isEditing ? (
            <>
              <input name="username" value={profile.username} onChange={handleProfileChange} className="text-black rounded px-2 mb-2" />
              <input name="role" value={profile.role} onChange={handleProfileChange} className="text-black rounded px-2 mb-2" />
              <button onClick={handleProfileEdit} className="px-4 py-2 bg-white text-black rounded border mt-2">Save</button>
            </>
          ) : (
            <>
              <p className="text-lg font-bold">{profile.username}</p>
              <p className="text-sm">{profile.role}</p>
              <p className="text-sm text-gray-300">IN | Member since March 2025</p>
              <button onClick={handleProfileEdit} className="mt-4 px-4 py-2 bg-black text-white rounded border border-white">Edit Profile</button>
            </>
          )}
        </div>

        <div className="col-span-2 grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-900 p-4 rounded">💰 <strong>$0.00</strong><br/>Total Earnings</div>
          <div className="bg-gray-900 p-4 rounded">✅ <strong>0</strong><br/>Completed Projects</div>
          <div className="bg-gray-900 p-4 rounded">⭐ <strong>0.00</strong> (0 reviews)<br/>Rating</div>
          <div className="bg-gray-900 p-4 rounded">📈 <strong>0%</strong><br/>Completion Rate</div>
          <div className="bg-gray-900 p-4 rounded">⏱ <strong>Under 2 hours</strong><br/>Response Time</div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Client Reviews</h2>
        <div className="bg-gray-900 p-4 rounded mb-4">
          <p><strong>Daniel Brown</strong> (2 weeks ago)</p>
          <p className="text-sm text-yellow-400">★★★★★</p>
          <p className="text-sm text-gray-300">Alex delivered exceptional work on our e-commerce platform. The code is clean, well-documented, and he implemented all the features we requested. Very responsive and professional throughout the project.</p>
        </div>
        <div className="bg-gray-900 p-4 rounded">
          <p><strong>Sarah Wilson</strong> (1 month ago)</p>
          <p className="text-sm text-yellow-400">★★★★★</p>
          <p className="text-sm text-gray-300">Great communication and excellent work. Alex helped us redesign our dashboard UI and improved the overall user experience. Would definitely hire again for future projects.</p>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Earnings & Withdrawals</h2>
        <div className="bg-gray-900 p-6 rounded">
          <div className="flex justify-between mb-4">
            <span>Total Earnings:</span>
            <strong>$0.00</strong>
          </div>
          <div className="flex justify-between mb-4">
            <span>Withdrawn:</span>
            <strong>$0.00</strong>
          </div>
          <div className="flex justify-between mb-4">
            <span>Available for Withdrawal:</span>
            <strong>$0.00</strong>
          </div>
          <input type="number" value={withdrawAmount} onChange={e => setWithdrawAmount(e.target.value)} className="text-black rounded px-2 mb-2 w-full" placeholder="Enter amount" />
          <button onClick={handleWithdraw} className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700">Withdraw</button>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Reputation & Profile Stats</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-900 p-6 rounded">
            <p className="text-sm text-gray-400">Reputation Score</p>
            <p className="text-xl font-semibold text-yellow-400">450</p>
          </div>
          <div className="bg-gray-900 p-6 rounded">
            <p className="text-sm text-gray-400">Badges Earned</p>
            <p className="text-xl font-semibold text-blue-400">5</p>
          </div>
          <div className="bg-gray-900 p-6 rounded">
            <p className="text-sm text-gray-400">Streak</p>
            <p className="text-xl font-semibold text-green-400">12 days</p>
          </div>
          <div className="bg-gray-900 p-6 rounded">
            <p className="text-sm text-gray-400">Tasks Completed</p>
            <p className="text-xl font-semibold text-purple-400">18</p>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Streaks / Badges / Progress Overview</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-gray-900 p-4 rounded text-center">
            <p className="text-sm text-gray-400">Current Streak</p>
            <p className="text-xl text-green-400 font-bold">12 Days</p>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center">
            <p className="text-sm text-gray-400">Badges</p>
            <p className="text-xl text-blue-400 font-bold">🏆 x5</p>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center">
            <p className="text-sm text-gray-400">Progress</p>
            <p className="text-xl text-purple-400 font-bold">72%</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">My Tasks</h2>
        <div className="flex gap-4 mb-4">
          {Object.keys(myTasks).map((status) => (
            <button
              key={status}
              className={`px-4 py-2 rounded ${tab === status ? 'bg-blue-600' : 'bg-gray-800'}`}
              onClick={() => setTab(status)}
            >
              {status}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {myTasks[tab].map(task => (
            <div key={task.id} className="bg-gray-900 p-4 rounded">
              <h3 className="text-lg font-semibold text-purple-400">{task.title}</h3>
              <p className="text-sm">Language: {task.language}</p>
              <p className="text-sm">Level: {task.level}</p>
              <p className="text-sm">Bounty: ${task.bounty}</p>
              <p className="text-sm">Deadline: {task.deadline}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
