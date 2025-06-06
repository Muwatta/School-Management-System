"use client";
import { useEffect, useState } from "react";

export default function AdminDataPage() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("/data/students.json")
      .then(res => res.json())
      .then(setStudents)
      .catch(() => setStudents([]));
  }, []);
  return (
    <div>
      <h2>Uploaded Students</h2>
      <ul>
        {students.map((s: any) => (
          <li key={s.id}>{s.name}</li>
        ))}
      </ul>
    </div>
  );
}