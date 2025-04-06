import React, { useState } from "react";

const initialTasks = [
  { id: 1, title: "Build Login UI", status: "Open", submissions: 2 },
  { id: 2, title: "Fix Bug in Payment Gateway", status: "Closed", submissions: 5 },
];

const initialTransactions = [
  { id: 1, date: "2025-04-01", type: "Payout", amount: 100 },
  { id: 2, date: "2025-04-03", type: "Deposit", amount: 200 },
];

const initialSubmissions = [
  { id: 1, taskId: 1, user: "Alice", status: "Pending" },
  { id: 2, taskId: 2, user: "Bob", status: "Approved" },
];

export default function AdminDashboard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [transactions] = useState(initialTransactions);
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [newTask, setNewTask] = useState({ title: '', bounty: '', deadline: '', level: 'Easy' });

  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prev => ({ ...prev, [name]: value }));
  };

  const handlePostTask = () => {
    if (!newTask.title || !newTask.bounty || !newTask.deadline) return;
    setTasks([...tasks, { ...newTask, id: tasks.length + 1, submissions: 0, status: 'Open' }]);
    setNewTask({ title: '', bounty: '', deadline: '', level: 'Easy' });
  };

  const handleApprove = (id) => {
    setSubmissions(submissions.map(sub => sub.id === id ? { ...sub, status: 'Approved' } : sub));
  };

  const handleReject = (id) => {
    setSubmissions(submissions.map(sub => sub.id === id ? { ...sub, status: 'Rejected' } : sub));
  };

  return (
    <div className="bg-black text-white min-h-screen p-6 font-sans">
      <h1 className="text-3xl font-bold text-blue-400 mb-6 text-center sm:text-left">Admin / Task Creator Dashboard</h1>

      <div className="mb-10">
        <h2 className="text-2xl text-purple-400 mb-4">Post a New Task</h2>
        <div className="bg-gray-900 p-4 rounded grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <input name="title" value={newTask.title} onChange={handleTaskChange} placeholder="Task Title" className="p-2 rounded bg-white text-black w-full" />
          <input name="bounty" value={newTask.bounty} onChange={handleTaskChange} placeholder="Bounty" type="number" className="p-2 rounded bg-white text-black w-full" />
          <input name="deadline" value={newTask.deadline} onChange={handleTaskChange} placeholder="Deadline" type="date" className="p-2 rounded bg-white text-black w-full" />
          <select name="level" value={newTask.level} onChange={handleTaskChange} className="p-2 rounded bg-white text-black w-full">
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
          <div className="sm:col-span-2 lg:col-span-3">
            <button onClick={handlePostTask} className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">Post Task</button>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl text-purple-400 mb-4">Manage Posted Tasks</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map(task => (
            <div key={task.id} className="bg-gray-900 p-4 rounded">
              <h3 className="text-lg font-semibold text-blue-400">{task.title}</h3>
              <p className="text-sm text-gray-300">Status: {task.status}</p>
              <p className="text-sm text-gray-300">Submissions: {task.submissions}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl text-purple-400 mb-4">Review Submissions</h2>
        <div className="bg-gray-900 p-4 rounded space-y-4">
          {submissions.length === 0 && <p className="text-gray-300">No submissions available.</p>}
          {submissions.map(sub => (
            <div key={sub.id} className="bg-gray-800 p-3 rounded flex justify-between items-center">
              <div>
                <p className="text-blue-300">Task ID: {sub.taskId}</p>
                <p>User: {sub.user}</p>
                <p>Status: {sub.status}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleApprove(sub.id)}
                  className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white"
                  disabled={sub.status !== 'Pending'}
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(sub.id)}
                  className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white"
                  disabled={sub.status !== 'Pending'}
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl text-purple-400 mb-4">Transaction History / Wallet</h2>
        <div className="bg-gray-900 p-4 rounded overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-gray-400 text-left border-b border-gray-700">
                <th className="py-2 pr-4">Date</th>
                <th className="py-2 pr-4">Type</th>
                <th className="py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(tx => (
                <tr key={tx.id} className="text-gray-200 border-b border-gray-800">
                  <td className="py-2 pr-4">{tx.date}</td>
                  <td className="py-2 pr-4">{tx.type}</td>
                  <td className="py-2">${tx.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">Powered by Coderush</div>
    </div>
  );
}
