import React from "react";
import Image from "next/image";

interface Person {
  id: number;
  name: string;
  photo: string;
  email?: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

interface ShowcaseProps {
  teachers?: Person[];
  students?: Person[];
  events?: Event[];
}

const defaultTeachers: Person[] = [
  {
    id: 1,
    name: "Mrs. Jane Smith",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    email: "jane@school.com",
  },
  {
    id: 2,
    name: "Mr. John Doe",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    email: "john@school.com",
  },
  {
    id: 3,
    name: "Ms. Emily White",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    email: "emily@school.com",
  },
];

const defaultStudents: Person[] = [
  {
    id: 1,
    name: "Sarah Lee",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "James Bond",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Mary Joe",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 4,
    name: "Tom Jerry",
    photo: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

const defaultEvents: Event[] = [
  {
    id: 1,
    title: "Science Excursion",
    date: "2024-03-15",
    description:
      "Students visited the National Science Museum and explored interactive exhibits.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Inter-School Competition",
    date: "2024-02-10",
    description:
      "Our school won 1st place in the regional quiz competition.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Community Visitation",
    date: "2024-01-20",
    description:
      "Students volunteered at the local community center, helping with various activities.",
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Showcase({
  teachers = defaultTeachers,
  students = defaultStudents,
  events = defaultEvents,
}: ShowcaseProps) {
  return (
    <section
      className="space-y-16 px-2 py-10"
      style={{
        background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
        borderRadius: "1.5rem",
      }}
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-white mb-2">
          School Highlights
        </h1>
        <p className="text-blue-100 max-w-2xl mx-auto">
          Celebrating our outstanding teachers, students, and memorable school
          events!
        </p>
      </div>
      {/* Teacher Highlights */}
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
          Teacher Highlights
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <img
              src={teachers[0].photo}
              alt={teachers[0].name || "Teacher"}
              className="mx-auto rounded-full w-28 h-28 object-cover mb-4 border-4 border-blue-200 shadow"
            />
            <h3 className="font-semibold text-lg text-blue-800">
              {teachers[0].name}
            </h3>
            <p className="text-blue-700 font-medium">Best Teacher of the Month</p>
            <p className="text-gray-600 mt-2 text-sm">
              Recognized for outstanding dedication and innovative teaching methods
              that inspire students daily.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <img
              src={teachers[1].photo}
              alt={teachers[1].name || "Teacher"}
              className="mx-auto rounded-full w-28 h-28 object-cover mb-4 border-4 border-green-200 shadow"
            />
            <h3 className="font-semibold text-lg text-blue-800">
              {teachers[1].name}
            </h3>
            <p className="text-green-700 font-medium">Best Teacher of the Year</p>
            <p className="text-gray-600 mt-2 text-sm">
              Awarded for consistent excellence, leadership, and positive impact on
              the school community.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <img
              src={teachers[2].photo}
              alt={teachers[2].name || "Teacher"}
              className="mx-auto rounded-full w-28 h-28 object-cover mb-4 border-4 border-yellow-200 shadow"
            />
            <h3 className="font-semibold text-lg text-blue-800">
              {teachers[2].name}
            </h3>
            <p className="text-yellow-600 font-medium">Most Promising Teacher</p>
            <p className="text-gray-600 mt-2 text-sm">
              A rising star, showing great potential and passion for nurturing young
              minds.
            </p>
          </div>
        </div>
      </div>

      {/* Student Highlights */}
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
          Student Highlights
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <img
              src={students[0].photo}
              alt={students[0].name || "Student"}
              className="mx-auto rounded-full w-20 h-20 object-cover mb-3 border-4 border-green-200 shadow"
            />
            <h3 className="font-semibold text-blue-800">{students[0].name}</h3>
            <p className="text-green-700 font-medium">Best Student of the Month</p>
            <p className="text-gray-600 mt-2 text-sm">
              Excelled academically and contributed positively to class spirit.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <img
              src={students[1].photo}
              alt={students[1].name || "Student"}
              className="mx-auto rounded-full w-20 h-20 object-cover mb-3 border-4 border-blue-200 shadow"
            />
            <h3 className="font-semibold text-blue-800">{students[1].name}</h3>
            <p className="text-blue-700 font-medium">Best Student of the Year</p>
            <p className="text-gray-600 mt-2 text-sm">
              Demonstrated leadership, academic excellence, and community service.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <img
              src={students[2].photo}
              alt={students[2].name || "Student"}
              className="mx-auto rounded-full w-20 h-20 object-cover mb-3 border-4 border-yellow-200 shadow"
            />
            <h3 className="font-semibold text-blue-800">{students[2].name}</h3>
            <p className="text-yellow-600 font-medium">Most Promising Prefect</p>
            <p className="text-gray-600 mt-2 text-sm">
              A role model among peers, showing responsibility and initiative.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <img
              src={students[3].photo}
              alt={students[3].name || "Student"}
              className="mx-auto rounded-full w-20 h-20 object-cover mb-3 border-4 border-pink-200 shadow"
            />
            <h3 className="font-semibold text-blue-800">{students[3].name}</h3>
            <p className="text-pink-600 font-medium">Most Promising Student</p>
            <p className="text-gray-600 mt-2 text-sm">
              Shows great potential and a passion for learning.
            </p>
          </div>
        </div>
      </div>

      {/* Past Events Gallery */}
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
          Past Events Gallery
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <Image
                src={event.image}
                alt={event.title}
                width={400}
                height={300}
                className="rounded-lg"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-blue-800">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-xs">{event.date}</p>
                <p className="text-gray-700 mt-2 text-sm">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}