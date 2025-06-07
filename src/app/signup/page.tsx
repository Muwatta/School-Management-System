import AuthForm from "@/components/AuthForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSignup({ email, password, name }: { email: string; password: string; name?: string }) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });
      const data = await res.json();
      if (data.success) {
        router.push("/login");
      } else {
        setError(data.message || "Signup failed");
      }
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  }

  return <AuthForm mode="signup" onSubmit={handleSignup} error={error} loading={loading} />;
}
