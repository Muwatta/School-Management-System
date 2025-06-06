"use client";
import { useState } from "react";

export default function EnterResultsPage() {
  const [form, setForm] = useState({
    studentId: "",
    subjectId: "",
    teacherId: "",
    firstCA: "",
    secondCA: "",
    assignment: "",
    exam: "",
  });
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/teachers/results", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setMessage(data.success ? "Result submitted!" : data.message);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Enter Student Results</h2>
      <input className="border p-2 mb-2 w-full" name="studentId" placeholder="Student ID" value={form.studentId} onChange={handleChange} required />
      <input className="border p-2 mb-2 w-full" name="subjectId" placeholder="Subject ID" value={form.subjectId} onChange={handleChange} required />
      <input className="border p-2 mb-2 w-full" name="teacherId" placeholder="Teacher ID" value={form.teacherId} onChange={handleChange} required />
      <input className="border p-2 mb-2 w-full" name="firstCA" placeholder="First CA" value={form.firstCA} onChange={handleChange} required />
      <input className="border p-2 mb-2 w-full" name="secondCA" placeholder="Second CA" value={form.secondCA} onChange={handleChange} required />
      <input className="border p-2 mb-2 w-full" name="assignment" placeholder="Assignment" value={form.assignment} onChange={handleChange} required />
      <input className="border p-2 mb-2 w-full" name="exam" placeholder="Exam" value={form.exam} onChange={handleChange} required />
      <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">Submit Result</button>
      {message && <div className="mt-2 text-blue-700">{message}</div>}
    </form>
  );
}