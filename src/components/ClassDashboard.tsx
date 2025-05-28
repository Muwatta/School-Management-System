import React from "react";

const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

export default function ClassDashboard({ user }) {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
        My Class Dashboard
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Welcome back,{" "}
        <span className="font-semibold text-blue-800">
          {user?.name || "User"}
        </span>
      </p>
      <div className="flex flex-wrap gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-6 flex-1 min-w-[220px]">
          <div className="text-gray-500 text-sm mb-1">Today</div>
          <div className="text-lg font-semibold text-blue-900">{today}</div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex-1 min-w-[220px]">
          <div className="text-gray-500 text-sm mb-1">Classes/Form Tutor</div>
          <div className="text-3xl font-bold text-blue-700">0</div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex-1 min-w-[220px]">
          <div className="text-gray-500 text-sm mb-1">Assigned Subjects/Classes</div>
          <div className="text-3xl font-bold text-blue-700">6</div>
          <div className="text-gray-600 mt-2 truncate">
            Irs - SSS 1A Accountabil...
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex-1 min-w-[220px]">
          <div className="text-gray-500 text-sm mb-1">Total Students</div>
          <div className="text-3xl font-bold text-blue-700">158</div>
          <div className="text-gray-600 mt-2">Across all classes</div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex-1 min-w-[220px]">
          <div className="text-gray-500 text-sm mb-1">Attendance Rate</div>
          <div className="text-3xl font-bold text-green-600">94.43%</div>
          <div className="text-gray-600 mt-2">Last 30 days</div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-6">
          <div className="font-semibold text-blue-900 mb-2">
            Grade Distribution 2024/2025
          </div>
          <div className="h-24 flex items-center justify-center text-gray-400">
            [Chart Placeholder]
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <div className="font-semibold text-blue-900 mb-2">
            My Attendance (last 30 days)
          </div>
          <div className="h-24 flex items-center justify-center text-gray-400">
            [Chart Placeholder]
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <div className="font-semibold text-blue-900 mb-2">
            Formative Assessment
          </div>
          <div className="h-24 flex items-center justify-center text-gray-400">
            [Chart Placeholder]
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-6">
          <div className="font-semibold text-blue-900 mb-2">
            Student Attendance
          </div>
          <div className="h-20 flex items-center justify-center text-gray-400">
            [Chart Placeholder]
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <div className="font-semibold text-blue-900 mb-2">
            Curriculum Usage
          </div>
          <div className="h-20 flex items-center justify-center text-gray-400">
            [Chart Placeholder]
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <div className="font-semibold text-blue-900 mb-2">
            Get Insight From AI
          </div>
          <div className="h-20 flex items-center justify-center text-gray-400">
            [AI Insight Placeholder]
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <div className="font-semibold text-blue-900 mb-2">
            Top Students on Formative
          </div>
          <div className="h-16 flex items-center justify-center text-gray-400">
            / ()
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <div className="font-semibold text-blue-900 mb-2">Needs Attention</div>
          <div className="h-16 flex items-center justify-center text-gray-400">
            / ()
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <div className="font-semibold text-blue-900 mb-2">
            🎂 Birthday in my Class
          </div>
          <div className="h-16 flex items-center justify-center text-gray-400">
            / ()
          </div>
        </div>
      </div>
    </section>
  );
}