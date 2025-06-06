"use client";
import { useEffect, useState } from "react";

export default function AssignTeachersPage() {
  const [teachers, setTeachers] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [teacherId, setTeacherId] = useState("");
  const [subjectId, setSubjectId] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/admin/teachers").then(res => res.json()).then(data => setTeachers(data.teachers));
    fetch("/api/admin/subjects").then(res => res.json()).then(data => setSubjects(data.subjects));
  }, []);

  async function handleAssign(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/admin/assign", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ teacherId, subjectId }),
    });
    const data = await res.json();
    setMessage(data.success ? "Assigned!" : data.message);
  }

  return (
    <form onSubmit={handleAssign} className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Assign Teacher to Subject</h2>
      <select className="border p-2 mb-2 w-full" value={teacherId} onChange={e => setTeacherId(e.target.value)} required>
        <option value="">Select Teacher</option>
        {teachers.map((t: any) => <option key={t.id} value={t.id}>{t.name}</option>)}
      </select>
      <select className="border p-2 mb-2 w-full" value={subjectId} onChange={e => setSubjectId(e.target.value)} required>
        <option value="">Select Subject</option>
        {subjects.map((s: any) => <option key={s.id} value={s.id}>{s.name}</option>)}
      </select>
      <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">Assign</button>
      {message && <div className="mt-2 text-blue-700">{message}</div>}
    </form>
  );
}