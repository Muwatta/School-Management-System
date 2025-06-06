"use client";
import { useEffect, useState } from "react";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/admin/students")
      .then(res => res.json())
      .then(data => setStudents(data.students));
  }, []);

  const filtered = students.filter((s: any) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Students</h2>
      <input
        className="border p-2 mb-4 w-full"
        placeholder="Search by name"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {filtered.map((s: any) => (
          <li key={s.id} className="border-b py-2">{s.name} ({s.email})</li>
        ))}
      </ul>
    </div>
  );
}