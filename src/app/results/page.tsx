"use client";

import ResultList from "../../components/ResultList";

const mockResults = [
  { id: 1, studentName: "Alice", taskTitle: "Math Homework", score: 95 },
  { id: 2, studentName: "Bob", taskTitle: "Science Project", score: 88 },
];

export default function ResultsPage() {
  return (
    <main className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mt-8">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Results</h1>
      <ResultList results={mockResults} />
    </main>
  );
}