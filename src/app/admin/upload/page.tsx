"use client";
import { useState } from "react";

export default function AdminUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [type, setType] = useState("students");
  const [message, setMessage] = useState("");

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", type);

    const res = await fetch("/api/admin/upload-data", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setMessage(data.message || "Upload complete");
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Upload Data</h2>
      <form onSubmit={handleUpload}>
        <label className="block mb-2 font-semibold">Data Type</label>
        <select
          value={type}
          onChange={e => setType(e.target.value)}
          className="mb-4 w-full border rounded px-2 py-1"
        >
          <option value="students">Students</option>
          <option value="teachers">Teachers</option>
          <option value="events">Events</option>
        </select>
        <label className="block mb-2 font-semibold">CSV File</label>
        <input
          type="file"
          accept=".csv"
          onChange={e => setFile(e.target.files?.[0] || null)}
          className="mb-4 w-full"
        />
        <button
          type="submit"
          className="bg-blue-900 text-white px-4 py-2 rounded font-semibold"
        >
          Upload
        </button>
      </form>
      {message && <div className="mt-4 text-green-700">{message}</div>}
    </div>
  );
}