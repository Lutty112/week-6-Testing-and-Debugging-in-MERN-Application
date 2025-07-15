import { useState } from 'react';
import { createBug } from '../services/api';

 
const BugForm = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    await createBug({ title });
    setTitle('');
    window.location.reload();
  };

 return (
    <form onSubmit={handleSubmit}
      className="flex items-center gap-4 mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter bug title"
        className="border border-blue-300 px-4 py-2 rounded w-full"
      />
      <button
        type="submit"
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
      Report Bug
     </button>

    </form>
  );
};


export default BugForm;
