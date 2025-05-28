"use client";
import Link from 'next/link';
import React, { useState } from 'react';

type LoginFormProps = {
  onSuccess?: (user: any) => void;
};

export default function LoginForm({ onSuccess }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        (onSuccess || (() => {}))(data.user);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto bg-white p-8 rounded shadow mt-10"
    >
      <h2 className="text-2xl font-bold mb-6 text-blue-900 text-center">
        Login
      </h2>
      {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
      <div className="mb-4">
        <label className="block mb-1 text-blue-900 font-medium">Email</label>
        <input
          type="email"
          className="w-full border rounded px-3 py-2"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-1 text-blue-900 font-medium">Password</label>
        <input
          type="password"
          className="w-full border rounded px-3 py-2"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-900 text-white py-2 rounded font-semibold hover:bg-blue-800 transition"
        disabled={loading}
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
      <div className="mt-6 flex flex-col items-center gap-2 text-sm">
        <span>
          Don't have an account?{' '}
          <Link href="/signup" className="text-blue-700 underline">
            Sign Up
          </Link>
        </span>
        <span>
          Continue as{' '}
          <Link href="/guest" className="text-blue-700 underline">
            Guest
          </Link>
        </span>
      </div>
    </form>
  );
}
