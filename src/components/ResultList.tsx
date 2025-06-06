import React from 'react';
import prisma from '@/lib/prisma';

interface Result {
  id: number;
  studentName: string;
  taskTitle: string;
  score: number;
}

interface ResultListProps {
  results: Result[];
}

const ResultList: React.FC<ResultListProps> = ({ results }) => {
  return (
    <div>
      <h2>Results</h2>
      <ul>
        {results.map(result => (
          <li key={result.id}>
            <strong>{result.studentName}</strong> - {result.taskTitle}:{' '}
            {result.score} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default async function ResultsPage() {
  // Fetch results from the database, including student, subject, score, and teacher
  const results = await prisma.result.findMany({
    include: {
      student: true,
      teacher: true,
      subject: true,
    },
    orderBy: [{ subjectId: 'asc' }, { studentId: 'asc' }],
  });

  return (
    <main className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 mt-8">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Results by Subject
      </h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Subject</th>
            <th className="p-2 border">Student</th>
            <th className="p-2 border">Score</th>
            <th className="p-2 border">Teacher</th>
          </tr>
        </thead>
        <tbody>
          {results.map(result => (
            <tr key={result.id}>
              <td className="p-2 border">{result.subject.name}</td>
              <td className="p-2 border">{result.student.name}</td>
              <td className="p-2 border">{result.score}</td>
              <td className="p-2 border">{result.teacher.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
