'use client';
import { useState } from 'react';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, newPassword }),
    });
    const data = await res.json();
    setMessage(data.message);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white p-8 rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-900 text-center">Reset Password</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full border rounded px-3 py-2 mb-4"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="New Password"
        className="w-full border rounded px-3 py-2 mb-6"
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)}
        required
      />
      <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded font-semibold w-full">
        Reset Password
      </button>
      {message && <div className="mt-4 text-center text-blue-700">{message}</div>}
    </form>
  );
}