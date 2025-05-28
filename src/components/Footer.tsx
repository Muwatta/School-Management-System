import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span className="font-bold text-lg">School Portal</span>
          <span className="ml-2 text-gray-300">
            &copy; {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
        <div className="flex gap-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/tasks" className="hover:underline">
            Tasks
          </Link>
          <Link href="/results" className="hover:underline">
            Results
          </Link>
          <a href="mailto:info@yourschool.edu" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}