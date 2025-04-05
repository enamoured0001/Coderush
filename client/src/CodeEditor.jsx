import { useState } from "react";
import { Play, Send, Trophy, User } from "lucide-react";
import { Editor } from "@monaco-editor/react";
import { Link } from "react-router-dom";

export default function CodeEditor() {
  const [code, setCode] = useState("// Start coding here\n");
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen text-white p-4">
      {/* Navbar */}
      <nav className="flex flex-wrap justify-between items-center p-4 bg-gray-900 gap-4">
        <h1 className="text-green-400 text-2xl font-bold">CodeRush</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link  to="/" className="text-gray-300 hover:text-green-400">Home</Link>
          <Link to="/challenges" className="text-gray-300 hover:text-green-400">Challenges</Link>
          < Link to="/leaderboard" className="text-gray-300 hover:text-green-400">Leaderboard</Link>
          < Link to="/Rewards" className="text-gray-300 hover:text-green-400">Rewards</Link>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 flex items-center px-4 py-2 rounded" onClick={() => setAuthModalOpen(true)}>
          <User className="mr-2" /> Profile
        </button>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
        {/* Task Panel */}
        <div className="md:col-span-1 bg-gray-900 p-4 rounded">
          <h2 className="text-xl font-bold text-green-400">Challenge</h2>
          <p className="text-sm text-gray-400 mt-2">
            Write a function that checks if a given string is a palindrome.
          </p>
        </div>

        {/* Code Editor */}
        <div className="md:col-span-2 bg-gray-900 p-4 rounded">
          <Editor
            height="50vh"
            theme="vs-dark"
            defaultLanguage="javascript"
            value={code}
            onChange={(value) => setCode(value)}
          />
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="bg-green-500 hover:bg-green-600 flex items-center px-4 py-2 rounded">
              <Play className="mr-2" /> Run
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 flex items-center px-4 py-2 rounded">
              <Send className="mr-2" /> Submit
            </button>
          </div>
        </div>

        {/* AI Assistant & Leaderboard */}
        <div className="md:col-span-1 bg-gray-900 p-4 rounded">
          <h2 className="text-xl font-bold text-green-400">AI Assistant</h2>
          <p className="text-sm text-gray-400 mt-2">Ask for hints or explanations.</p>
          <div className="mt-4">
            <button className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded">Ask for Hint</button>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold text-yellow-400">Leaderboard</h2>
            <p className="text-sm text-gray-400 mt-2">See where you rank.</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 mt-2 flex items-center px-4 py-2 rounded">
              <Trophy className="mr-2" />
              <Link to="/leaderboard">View Leaderboard</Link> 
            </button>
          </div>
        </div>
      </div>

      {/* Authentication Modal */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 p-6 rounded w-full max-w-md">
            <h2 className="text-green-400 text-2xl">Login / Signup</h2>
            <p className="text-gray-400 mt-2">Access your account to track progress and earn rewards.</p>
            <div className="flex flex-col gap-4 mt-4">
              <input type="text" placeholder="Username or Email" className="p-2 bg-gray-800 text-white rounded" />
              <input type="password" placeholder="Password" className="p-2 bg-gray-800 text-white rounded" />
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Login</button>
              <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded">Sign Up</button>
              <button className="text-gray-400 hover:text-white" onClick={() => setAuthModalOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
