import React from 'react';

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

export default ResultList;
