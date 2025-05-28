'use client';

import TaskSubmissionForm from '../../components/TaskSubmissionForm';

export default function TaskPage() {
  return (
    <main className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mt-8">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Task Submission</h1>
      <TaskSubmissionForm />
    </main>
  );
}
