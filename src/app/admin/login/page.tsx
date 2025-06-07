"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, admin: true }),
    });
    const data = await res.json();
    if (data.success && data.user.role === "admin") {
      router.push("/admin/dashboard");
    } else {
      setError("Invalid admin credentials");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      <input className="border p-2 mb-2 w-full" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input className="border p-2 mb-2 w-full" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full" type="submit">Login</button>
      <button
        type="button"
        className="bg-red-500 text-white px-4 py-2 rounded w-full mb-2"
        onClick={() => signIn("google", { callbackUrl: "/admin/dashboard" })}
      >
        Sign in with Google
      </button>
      {error && <div className="text-red-600 mt-2">{error}</div>}
    </form>
  );
}