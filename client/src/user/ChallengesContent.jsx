import { useState } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

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

function ChallengesContent() {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [tag, setTag] = useState("All");
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const navigate = useNavigate();

  const filtered = challenges.filter(c => {
    const matchDifficulty = filter === "All" || c.difficulty === filter;
    const matchSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchTag = tag === "All" || c.tags.includes(tag);
    const matchCompleted = !showCompletedOnly || c.completed;
    return matchDifficulty && matchSearch && matchTag && matchCompleted;
  });

  return (
    <div className="p-6 text-white bg-black min-h-screen font-sans">
      <h2 className="text-2xl font-bold text-green-400 mb-4">All Challenges</h2>

      <div className="flex flex-wrap gap-4 items-center mb-6">
        <select value={filter} onChange={e => setFilter(e.target.value)} className="bg-gray-800 p-2 rounded">
          <option value="All">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <select value={tag} onChange={e => setTag(e.target.value)} className="bg-gray-800 p-2 rounded">
          <option value="All">All Tags</option>
          <option value="Array">Array</option>
          <option value="String">String</option>
          <option value="Math">Math</option>
          <option value="DP">DP</option>
          <option value="Greedy">Greedy</option>
          <option value="Graph">Graph</option>
        </select>

        <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search..." className="bg-gray-800 p-2 rounded" />

        <label className="flex items-center gap-2">
          <input type="checkbox" checked={showCompletedOnly} onChange={e => setShowCompletedOnly(e.target.checked)} />
          Show Completed
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {filtered.map(c => (
          <div key={c.id} className="bg-gray-900 p-4 rounded hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-white mb-2">{c.title}</h3>
            <p className="text-sm text-gray-400">Difficulty: {c.difficulty}</p>
            <p className="text-sm text-gray-400 mb-2">Status: {c.completed ? "✅ Completed" : "❌ Not Completed"}</p>
            <button
              onClick={() => navigate(`/editor/${c.id}`)}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 mt-2 rounded text-white"
            >
              Start Coding
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-blue-400 mb-4">Browse Tasks</h2>
      <BrowseTasks onSubmitTask={(task) => { setSelectedTask(task); setShowSubmitModal(true); }} />

      {showSubmitModal && selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded w-full max-w-md">
            <h3 className="text-xl font-bold text-white mb-4">Submit Task: {selectedTask.title}</h3>
            <textarea className="w-full bg-gray-800 p-2 rounded text-white mb-4" rows="6" placeholder="Paste your code or explanation here"></textarea>
            <input type="file" className="mb-4" />
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowSubmitModal(false)} className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">Cancel</button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function BrowseTasks({ onSubmitTask }) {
  const [language, setLanguage] = useState("All");
  const [level, setLevel] = useState("All");
  const [bounty, setBounty] = useState(0);
  const [deadline, setDeadline] = useState("");

  const filteredTasks = tasks.filter(task => {
    const matchLang = language === "All" || task.language === language;
    const matchLevel = level === "All" || task.level === level;
    const matchBounty = task.bounty >= bounty;
    const matchDeadline = deadline === "" || new Date(task.deadline) <= new Date(deadline);
    return matchLang && matchLevel && matchBounty && matchDeadline;
  });

  return (
    <div className="font-sans">
      <div className="flex flex-wrap gap-4 items-center mb-6">
        <select value={language} onChange={e => setLanguage(e.target.value)} className="bg-gray-800 p-2 rounded">
          <option value="All">All Languages</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="C++">C++</option>
        </select>

        <select value={level} onChange={e => setLevel(e.target.value)} className="bg-gray-800 p-2 rounded">
          <option value="All">All Levels</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <input type="number" value={bounty} onChange={e => setBounty(Number(e.target.value))} placeholder="Min Bounty" className="bg-gray-800 p-2 rounded w-32" />

        <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} className="bg-gray-800 p-2 rounded" />
      </div>

      {filteredTasks.length === 0 ? (
        <div className="text-center text-red-400 text-lg font-medium">No tasks found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTasks.map(task => (
            <div key={task.id} className="bg-gray-900 p-4 rounded hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-white mb-2">{task.title}</h3>
              <p className="text-sm text-gray-400">Language: {task.language}</p>
              <p className="text-sm text-gray-400">Level: {task.level}</p>
              <p className="text-sm text-gray-400">Bounty: ${task.bounty}</p>
              <p className="text-sm text-gray-400">Deadline: {task.deadline}</p>
              <button onClick={() => onSubmitTask(task)} className="bg-blue-500 hover:bg-blue-600 px-4 py-2 mt-2 rounded text-white">
                Submit Task
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Challenges() {
  return (
 
      <ChallengesContent />
   
  );
}
