import Link from 'next/link';
import { useState } from 'react';

export default function Header({ loggedIn, setLoggedIn, user, setUser }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Helper to get initials if no user image
  const getInitials = (name: string) => {
    if (!name) return '';
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0][0]?.toUpperCase() || '';
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <header className="bg-blue-900 shadow">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-white font-bold text-2xl tracking-tight"
          >
            School Portal
          </Link>
          <Link href="/tasks" className="text-white hover:underline text-lg">
            Task Submission
          </Link>
          <Link href="/results" className="text-white hover:underline text-lg">
            View Results
          </Link>
        </div>
        <div className="flex items-center gap-4 relative">
          {!loggedIn ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(v => !v)}
                className="bg-blue-700 text-white px-4 py-2 rounded-full font-semibold"
              >
                Account
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow z-50">
                  <Link
                    href="/login"
                    className="block w-full text-left px-4 py-2 hover:bg-blue-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="block w-full text-left px-4 py-2 hover:bg-blue-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/guest"
                    className="block w-full text-left px-4 py-2 hover:bg-blue-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Guest
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              {user?.image ? (
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover aspect-square border-2 border-white"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-lg border-2 border-white">
                  {getInitials(user?.name || '')}
                </div>
              )}
              <span className="text-white font-semibold capitalize">
                {user?.name}
              </span>
              {user?.role === 'admin' && (
                <Link
                  href="/admin"
                  className="text-white hover:underline text-lg"
                >
                  Admin Dashboard
                </Link>
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
