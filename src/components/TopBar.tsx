"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUserShield,
  FaBook,
  FaUser,
  FaHeartbeat,
  FaEnvelope,
  FaTools,
} from "react-icons/fa";
import Link from "next/link";

const navLinks = [
  { label: "Main Dashboard", href: "/", icon: <FaHome /> },
  { label: "Administration", href: "/admin", icon: <FaUserShield /> },
  { label: "Academics", href: "/academics", icon: <FaBook /> },
  { label: "Account", href: "/account", icon: <FaUser /> },
  { label: "Health", href: "/health", icon: <FaHeartbeat /> },
  { label: "Messages", href: "/messages", icon: <FaEnvelope /> },
  { label: "Tools", href: "/tools", icon: <FaTools /> },
];

export default function TopBar({ user }: { user?: { name?: string } }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    }
    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <>
      {/* Sidebar Drawer */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white text-blue-900 shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ willChange: "transform" }}
        aria-hidden={!sidebarOpen}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <Link href="/" onClick={() => setSidebarOpen(false)}>
            <img
              src="/logo.png"
              alt="Logo"
              className="h-8 w-8 rounded-full bg-blue-100 cursor-pointer"
            />
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
            className="text-blue-900 hover:text-blue-700"
          >
            <FaTimes size={22} />
          </button>
        </div>
        <nav className="flex flex-col gap-2 mt-6 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-3 py-2 px-3 rounded hover:bg-blue-50 font-medium transition"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="text-lg">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Top Bar: Only Hamburger (no logo, since it's in the sidebar) */}
      <div className="w-full bg-blue-900 text-white py-2 px-4 flex items-center justify-between shadow z-30 relative">
        <button
          className="mr-2"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <FaBars size={22} />
        </button>
        {/* You can add other right-side content here if needed */}
      </div>
    </>
  );
}