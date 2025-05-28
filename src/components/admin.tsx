"use client";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", teacherIds: [], subjectIds: [] });

  useEffect(() => {
    fetch("/api/admin/students").then(res => res.json()).then(data => setStudents(data.students));
    fetch("/api/admin/teachers").then(res => res.json()).then(data => setTeachers(data.teachers));
    fetch("/api/admin/subjects").then(res => res.json()).then(data => setSubjects(data.subjects));
  }, []);

  async function handleAddStudent(e) {
    e.preventDefault();
    await fetch("/api/admin/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    // Refresh students list...
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Admin Dashboard</h1>
      <form onSubmit={handleAddStudent} className="mb-8">
        <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Student Name" required />
        <input value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="Student Email" required />
        <select multiple value={form.teacherIds} onChange={e => setForm(f => ({ ...f, teacherIds: Array.from(e.target.selectedOptions, o => Number(o.value)) }))}>
          {teachers.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
        </select>
        <select multiple value={form.subjectIds} onChange={e => setForm(f => ({ ...f, subjectIds: Array.from(e.target.selectedOptions, o => Number(o.value)) }))}>
          {subjects.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
        <button type="submit">Add Student</button>
      </form>
      {/* Render tables for students, teachers, subjects */}
    </div>
  );
}