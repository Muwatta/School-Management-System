'use client';
import Hero from '../components/Hero';
import Features from '../components/Features';
import teachers from '@/data/teacher';
import students from '@/data/students';
import events from '@/data/events';
import Image from 'next/image';

export default function Home() {
  // Limit to 3 items each
  const topTeachers = teachers.slice(0, 3);
  const topStudents = students.slice(0, 3);
  const topEvents = events.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-300 to-blue-500 flex flex-col">
      <main className="flex-1">
        <Hero />
        <Features />
        {/* Centered and Responsive Public Data Section */}
        <section className="my-8 w-full flex justify-center">
          <div className="w-full max-w-6xl">
            <h2 className="text-2xl font-bold mb-4 text-white text-center">
              Meet Our Teachers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
              {topTeachers.map(t => (
                <div key={t.id} className="bg-blue-900/90 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={144}
                    height={144}
                    className="w-36 h-36 rounded-full object-cover border-2 border-blue-300 mb-4"
                  />
                  <div className="text-center font-semibold text-white text-lg">{t.name}</div>
                  <div className="text-center text-sm text-blue-200">{t.email}</div>
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-white text-center">
              Our Students
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
              {topStudents.map(s => (
                <div key={s.id} className="bg-blue-900/90 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105">
                  <Image
                    src={s.photo}
                    alt={s.name}
                    width={112}
                    height={112}
                    className="w-28 h-28 rounded-full object-cover border-2 border-sky-400 mb-4"
                  />
                  <div className="text-center font-semibold text-white text-lg">{s.name}</div>
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-white text-center">
              Recent Events
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
              {topEvents.map(e => (
                <div key={e.id} className="bg-blue-900/90 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105">
                  <Image
                    src={e.image}
                    alt={e.title}
                    width={160}
                    height={160}
                    className="w-40 h-40 rounded-full object-cover border-2 border-blue-300 mb-4"
                  />
                  <div className="font-semibold text-white text-lg text-center">{e.title}</div>
                  <div className="text-sm text-blue-200 text-center">{e.date}</div>
                  <div className="text-blue-100 text-center">{e.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
