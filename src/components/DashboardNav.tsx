"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Students", href: "/students" },
  { label: "Teachers", href: "/teachers" },
  { label: "Assignments", href: "/admin/assignments" },
  { label: "Events", href: "/events" },
  { label: "Results", href: "/results" },
  { label: "Upload Data", href: "/admin/upload-data" },
  { label: "Add Student", href: "/admin/students/add" },
  { label: "Assign Teachers", href: "/admin/assign" },
];

export default function DashboardNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mb-8">
      {/* Mobile Hamburger */}
      <div className="md:hidden flex justify-between items-center mb-2">
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="text-blue-900 text-2xl"
        >
          <FaBars />
        </button>
        <span className="font-bold text-blue-900 text-lg">Menu</span>
      </div>
      {/* Sidebar for mobile */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex">
          <div className="bg-white w-64 h-full p-6 shadow-lg">
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-blue-900 text-2xl mb-6"
            >
              <FaTimes />
            </button>
            <ul className="flex flex-col gap-4">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-700 font-semibold hover:underline"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1" onClick={() => setOpen(false)} />
        </div>
      )}
      {/* Horizontal nav for desktop */}
      <ul className="hidden md:flex flex-wrap gap-6 bg-blue-50 p-4 rounded shadow">
        {navLinks.map(link => (
          <li key={link.href}>
            <Link href={link.href} className="text-blue-700 font-semibold hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}