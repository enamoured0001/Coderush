import { useState } from "react";
import { useNavigate } from "react-router-dom";

const challenges = [
  { id: 1, title: "Challenge 1", difficulty: "Easy", tags: ["Array"], completed: true },
  { id: 2, title: "Challenge 2", difficulty: "Medium", tags: ["String"], completed: false },
  { id: 3, title: "Challenge 3", difficulty: "Hard", tags: ["Math"], completed: true },
  { id: 4, title: "Challenge 4", difficulty: "Easy", tags: ["DP"], completed: false },
  { id: 5, title: "Challenge 5", difficulty: "Medium", tags: ["Greedy"], completed: true },
  { id: 6, title: "Challenge 6", difficulty: "Hard", tags: ["Graph"], completed: false },
];

export default function Challenges() {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [tag, setTag] = useState("All");
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);
  const navigate = useNavigate();

  const filtered = challenges.filter(c => {
    const matchDifficulty = filter === "All" || c.difficulty === filter;
    const matchSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchTag = tag === "All" || c.tags.includes(tag);
    const matchCompleted = !showCompletedOnly || c.completed;
    return matchDifficulty && matchSearch && matchTag && matchCompleted;
  });

  return (
    <div className="p-6 text-white bg-black min-h-screen">
         
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
  );
}
