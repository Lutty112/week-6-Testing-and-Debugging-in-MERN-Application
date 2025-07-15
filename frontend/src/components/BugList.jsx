import { useEffect, useState } from 'react';
import { fetchBugs, deleteBug, updateBug } from '../services/api';

const BugList = () => {
  const [bugs, setBugs] = useState([]);

  const getBugs = async () => {
    const res = await fetchBugs();
    setBugs(res.data);
  };

  const handleDelete = async (id) => {
    await deleteBug(id);
    setBugs((prev) => prev.filter((b) => b._id !== id));
  };

  const handleStatusChange = async (id, newStatus) => {
  await updateBug(id, newStatus);
  setBugs((prev) =>
    prev.map((b) => (b._id === id ? { ...b, status: newStatus } : b))
  );
};

  useEffect(() => {
    getBugs();
  }, []);


return (
  <div className="mt-4">
    <h2 className="text-xl  font-bold mb-2">Reported Bugs</h2>
    <ul className="space-y-2">
      {bugs.map((bug) => (
        <li
          key={bug._id}
          className="flex justify-between items-center bg-blue-50 p-3 rounded shadow">
         <div>
          <p className="font-medium text-purple-800">{bug.title}</p>
          <select
           value={bug.status}
           onChange={(e) => handleStatusChange(bug._id, e.target.value)}
           className="mt-1 p-1 rounded bg-purple-100 text-blue-700 text-sm">
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="resolved">Resolved</option>
         </select>
         </div>

          <button
            onClick={() => handleDelete(bug._id)}
            className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-800">
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);
}

export default BugList;
