"use client";
import Link from 'next/link';
import { useState } from 'react';
import TopBar from './TopBar';
import { FaTasks, FaChartBar } from "react-icons/fa";

type UserType = {
  name?: string;
  image?: string;
  role?: string;
};

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);

  const getInitials = (name: string) => {
    if (!name) return '';
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0][0]?.toUpperCase() || '';
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <header className="bg-blue-900 shadow">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center gap-4">
          <TopBar user={user || undefined} />
          <Link href="/" className="text-white font-bold text-2xl flex items-center h-8">
            ATE
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/tasks" className="flex items-center gap-1 text-white hover:underline text-lg">
            <FaTasks className="inline-block" />
            Submit
          </Link>
          <Link href="/results" className="flex items-center gap-1 text-white hover:underline text-lg">
            <FaChartBar className="inline-block" />
            Result
          </Link>
        </div>
        <div className="flex items-center gap-4 relative">
          {!loggedIn ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(v => !v)}
                className="w-10 h-10 flex items-center justify-center bg-blue-700 text-white rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                aria-label="Account"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </button>
              {dropdownOpen && (
                <div
                  className={`
                    absolute right-0 mt-2 w-40 bg-white rounded shadow z-50
                    transition-all duration-1000 ease-out origin-top
                    ${dropdownOpen
                      ? 'opacity-100 translate-y-0 scale-y-100'
                      : 'opacity-0 -translate-y-4 scale-y-75 pointer-events-none'}
                  `}
                  style={{ willChange: 'opacity, transform' }}
                >
                  <Link
                    href="/login"
                    className="block w-full text-left px-4 py-2 hover:bg-blue-100 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="block w-full text-left px-4 py-2 hover:bg-blue-100 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold capitalize">
                {user?.name}
              </span>
              {user?.role === 'admin' && (
                <>
                  <Link
                    href="/admin"
                    className="text-white hover:underline text-lg"
                  >
                    Admin Dashboard
                  </Link>
                  <Link
                    href="/admin/data"
                    className="text-white hover:underline text-lg"
                  >
                    View Uploaded Data
                  </Link>
                </>
              )}
              <button
                onClick={() => {
                  setLoggedIn(false);
                  setUser(null);
                }}
                className="rounded-full px-4 py-2 font-semibold bg-red-500 text-white hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
