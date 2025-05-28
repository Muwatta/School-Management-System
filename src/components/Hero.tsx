import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-400 text-white py-16 shadow-inner">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Welcome to the School Portal
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Empowering students and teachers with seamless task submissions,
            instant results, and a collaborative academic environment.
          </p>
          <div className="flex gap-4">
            <Link
              href="/tasks"
              className="bg-white text-blue-800 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition"
            >
              Submit a Task
            </Link>
            <Link
              href="/results"
              className="bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow hover:bg-blue-800 transition"
            >
              View Results
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&w=800"
            alt="School"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}