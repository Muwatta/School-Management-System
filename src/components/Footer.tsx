import Link from "next/link";
import { FaHome, FaTasks, FaChartBar, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-8">
      <div className="container mx-auto px-6 flex flex-col items-center">
       
        <div className="flex flex-row items-center gap-8 mt-4">
          <div className="group flex flex-col items-center">
            <Link href="/" aria-label="Home">
              <FaHome className="text-blue-500 text-2xl group-hover:scale-110 transition-transform" />
            </Link>
            <span className="opacity-0 group-hover:opacity-100 mt-1 text-xs bg-white text-blue-900 rounded px-2 py-1 transition-opacity absolute z-10">
              Home
            </span>
          </div>
          <div className="group flex flex-col items-center">
            <Link href="/tasks" aria-label="Tasks">
              <FaTasks className="text-green-500 text-2xl group-hover:scale-110 transition-transform" />
            </Link>
            <span className="opacity-0 group-hover:opacity-100 mt-1 text-xs bg-white text-green-700 rounded px-2 py-1 transition-opacity absolute z-10">
              Tasks
            </span>
          </div>
          <div className="group flex flex-col items-center">
            <Link href="/results" aria-label="Results">
              <FaChartBar className="text-yellow-500 text-2xl group-hover:scale-110 transition-transform" />
            </Link>
            <span className="opacity-0 group-hover:opacity-100 mt-1 text-xs bg-white text-yellow-700 rounded px-2 py-1 transition-opacity absolute z-10">
              Results
            </span>
          </div>
          <div className="group flex flex-col items-center">
            <a href="mailto:info@yourschool.edu" aria-label="Contact">
              <FaEnvelope className="text-red-500 text-2xl group-hover:scale-110 transition-transform" />
            </a>
            <span className="opacity-0 group-hover:opacity-100 mt-1 text-xs bg-white text-red-700 rounded px-2 py-1 transition-opacity absolute z-10">
              Contact
            </span>
          </div>
        </div>
        <div>
          <span className="font-bold text-lg mt-6 flex flex-col items-center gap-1">
            &copy; ATE {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

