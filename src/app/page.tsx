'use client';

import { useState } from 'react';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import ClassDashboard from '../components/ClassDashboard';
import AdminDashboard from '@/components/admin';
import teachers from '@/data/teacher';
import students from '@/data/students';
import events from '@/data/events';
import TopBar from '../components/TopBar';

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [authMode, setAuthMode] = useState<
    'login' | 'signup' | 'guest' | null
  >(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        activeUsers={5}
        user={user}
        setUser={setUser}
        setAuthMode={setAuthMode}
      />
      <TopBar user={user} />
      <main className="flex-1">
        {!loggedIn ? (
          <>
            <Hero />
            <Features />
            {/* Centered and Responsive Public Data Section */}
            <section className="my-8 w-full flex justify-center">
              <div className="w-full max-w-4xl">
                <h2 className="text-2xl font-bold mb-4 text-blue-900 text-center">
                  Meet Our Teachers
                </h2>
                <div className="flex flex-wrap gap-4 justify-center">
                  {teachers.map(t => (
                    <div key={t.id} className="bg-white rounded shadow p-4 w-60">
                      <img
                        src={t.photo}
                        alt={t.name}
                        className="w-20 h-20 rounded-full mx-auto mb-2 object-cover"
                      />
                      <div className="text-center font-semibold">{t.name}</div>
                      <div className="text-center text-sm text-gray-500">
                        {t.email}
                      </div>
                    </div>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-900 text-center">
                  Our Students
                </h2>
                <div className="flex flex-wrap gap-4 justify-center">
                  {students.map(s => (
                    <div key={s.id} className="bg-white rounded shadow p-4 w-40">
                      <img
                        src={s.photo}
                        alt={s.name}
                        className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
                      />
                      <div className="text-center font-semibold">{s.name}</div>
                    </div>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-900 text-center">
                  Recent Events
                </h2>
                <div className="flex flex-wrap gap-4 justify-center">
                  {events.map(e => (
                    <div key={e.id} className="bg-white rounded shadow p-4 w-72">
                      <img
                        src={e.image}
                        alt={e.title}
                        className="w-full h-32 object-cover rounded mb-2"
                      />
                      <div className="font-semibold">{e.title}</div>
                      <div className="text-sm text-gray-500">{e.date}</div>
                      <div className="text-gray-700">{e.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            {/* Remove inline auth forms from here, since you now have dedicated pages */}
          </>
        ) : (
          <>
            {user?.role === 'admin' ? (
              <AdminDashboard />
            ) : (
              <ClassDashboard user={user} />
            )}
            {/* You can add more dashboard sections here */}
            <div className="text-lg text-gray-700 mb-6 text-center">
              Welcome back,{' '}
              <span className="font-semibold text-blue-800">{user?.name}</span>
            </div>
            <div className="text-center">
              <button
                onClick={() => {
                  setLoggedIn(false);
                  setUser(null);
                }}
                className="mt-4 p-2 bg-red-500 text-white rounded"
              >
                Logout
              </button>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
