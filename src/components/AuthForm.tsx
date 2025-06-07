"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

type AuthFormProps = {
  mode: "login" | "signup";
  onSubmit: (data: { email: string; password: string; name?: string }) => Promise<void>;
  error?: string | null;
  loading?: boolean;
};

export default function AuthForm({ mode, onSubmit, error, loading }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const isSignup = mode === "signup";

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit({ email, password, name: isSignup ? name : undefined });
      }}
      className="max-w-md mx-auto p-8 bg-white rounded shadow"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        {isSignup ? "Sign Up" : "Log In"}
      </h2>
      <div className="mb-4 text-center text-sm">
        {isSignup ? (
          <span>
            Already a member?{" "}
            <Link href="/login" className="text-blue-700 underline">
              Log In
            </Link>
          </span>
        ) : (
          <span>
            New here?{" "}
            <Link href="/signup" className="text-blue-700 underline">
              Sign Up
            </Link>
          </span>
        )}
      </div>
      <button
        type="button"
        className="w-full bg-red-500 text-white py-2 rounded font-semibold hover:bg-red-600 mb-2"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        {isSignup ? "Sign up with Google" : "Log in with Google"}
      </button>
      <button
        type="button"
        className="w-full bg-blue-800 text-white py-2 rounded font-semibold hover:bg-blue-900 mb-2"
        onClick={() => signIn("facebook", { callbackUrl: "/" })}
      >
        {isSignup ? "Sign up with Facebook" : "Log in with Facebook"}
      </button>
      <div className="flex items-center my-4">
        <hr className="flex-1 border-gray-300" />
        <span className="mx-2 text-gray-400">or</span>
        <hr className="flex-1 border-gray-300" />
      </div>
      {isSignup && (
        <input
          className="border p-2 mb-2 w-full rounded"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      )}
      <input
        className="border p-2 mb-2 w-full rounded"
        placeholder="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        className="border p-2 mb-4 w-full rounded"
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button
        className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
        type="submit"
        disabled={loading}
      >
        {loading
          ? isSignup
            ? "Signing up..."
            : "Logging in..."
          : isSignup
          ? "Sign up with email"
          : "Log in with email"}
      </button>
      <p className="text-xs text-gray-500 mt-4 text-center">
        Sign up to this site with a public profile.{" "}
        <Link href="/about" className="underline">
          Read more
        </Link>
      </p>
      {error && <div className="text-red-600 mt-2 text-center">{error}</div>}
    </form>
  );
}