import React, { useState } from 'react';

const TaskSubmissionForm = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTaskTitle('');
    setTaskDescription('');
    setFiles(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Submit a Task</h2>
      {submitted && (
        <p className="mb-4 text-green-600 font-medium">Task submitted successfully!</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="taskTitle" className="block text-gray-700 font-medium mb-1">
            Task Title:
          </label>
          <input
            type="text"
            id="taskTitle"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label htmlFor="taskDescription" className="block text-gray-700 font-medium mb-1">
            Task Description:
          </label>
          <textarea
            id="taskDescription"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={4}
          />
        </div>
        <div>
          <label htmlFor="taskFiles" className="block text-gray-700 font-medium mb-1">
            Attach Files:
          </label>
          <input
            type="file"
            id="taskFiles"
            multiple
            accept="video/*,audio/*,image/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt"
            onChange={(e) => setFiles(e.target.files)}
            className="w-full"
          />
          {files && (
            <ul className="mt-2 text-sm text-gray-600">
              {Array.from(files).map((file, idx) => (
                <li key={idx}>{file.name}</li>
              ))}
            </ul>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Task
        </button>
      </form>
    </div>
  );
};

export default TaskSubmissionForm;