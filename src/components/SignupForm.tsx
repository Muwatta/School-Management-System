'use client';
import Link from 'next/link';
import React, { useState } from 'react';

type SignupFormProps = {
  onSuccess?: (user: any) => void;
};

function SignupForm({ onSuccess }: SignupFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (data.success) {
        if (onSuccess) onSuccess(data.user);
      } else {
        setError(data.message || 'Signup failed');
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
        Sign Up
      </h2>
      {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
      <div className="mb-4">
        <label className="block mb-1 text-blue-900 font-medium">Name</label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
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
        {loading ? 'Signing up...' : 'Sign Up'}
      </button>
      <div className="mt-6 flex flex-col items-center gap-2 text-sm">
        <span>
          Already have an account?{' '}
          <Link href="/login" className="text-blue-700 underline">
            Login
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

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded shadow p-8">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <SignupForm />
      </div>
    </div>
  );
}
