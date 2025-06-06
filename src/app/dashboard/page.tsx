"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DashboardNav from "@/components/DashboardNav";

export default function DashboardPage() {
  const router = useRouter();

  async function handleLogout() {
    document.cookie = "auth-token=; Max-Age=0; path=/";
    router.push("/login");
  }

  // Example stats (replace with real data fetching later)
  const stats = [
    { label: "Students", value: 320 },
    { label: "Teachers", value: 24 },
    { label: "Events", value: 5 },
    { label: "Results Published", value: 120 },
  ];

  return (
    <div className="p-4 sm:p-8 max-w-3xl mx-auto">
      <DashboardNav />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-900">School Staff Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-blue-100 p-6 rounded shadow text-center">
            <div className="text-2xl font-bold text-blue-800">{stat.value}</div>
            <div className="text-gray-700">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Link href="/admin/upload-data" className="bg-green-600 text-white rounded p-6 text-center hover:bg-green-700 font-semibold">
          Upload Data
        </Link>
        <Link href="/students" className="bg-blue-600 text-white rounded p-6 text-center hover:bg-blue-700 font-semibold">
          Manage Students
        </Link>
        <Link href="/teachers" className="bg-purple-600 text-white rounded p-6 text-center hover:bg-purple-700 font-semibold">
          Manage Teachers
        </Link>
        <Link href="/events" className="bg-yellow-500 text-white rounded p-6 text-center hover:bg-yellow-600 font-semibold">
          View Events
        </Link>
        <Link href="/results" className="bg-gray-700 text-white rounded p-6 text-center hover:bg-gray-800 font-semibold">
          View Results
        </Link>
      </div>
    </div>
  );
}