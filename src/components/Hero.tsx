import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-400 text-white py-16 shadow-inner">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-3xl font-extrabold mb-4 leading-tight">
            Welcome to Algorise Explorers
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
          <Image
            src="https://th.bing.com/th/id/OIP.93s5EYLau7PW_wj6f9PwHAAAAA?w=400&h=300&rs=1&pid=ImgDetMain"
            alt="Hero"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}