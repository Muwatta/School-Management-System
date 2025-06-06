"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddStudentPage() {
  const [name, setName] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/admin/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    router.push("/students");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add Student</h2>
      <input className="border p-2 mb-2 w-full" placeholder="Student Name" value={name} onChange={e => setName(e.target.value)} required />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Add Student</button>
    </form>
  );
}