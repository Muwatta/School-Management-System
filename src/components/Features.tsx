export default function Features() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Why Choose Our Portal?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-blue-600 text-4xl mb-4">📝</div>
          <h3 className="font-semibold text-xl mb-2">Easy Task Submission</h3>
          <p className="text-gray-600">
            Submit assignments and projects with just a few clicks, anytime
            and anywhere.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-blue-600 text-4xl mb-4">📊</div>
          <h3 className="font-semibold text-xl mb-2">Instant Results</h3>
          <p className="text-gray-600">
            Get notified as soon as your results are published, with detailed
            feedback.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-blue-600 text-4xl mb-4">👩‍🏫</div>
          <h3 className="font-semibold text-xl mb-2">Expert Teachers</h3>
          <p className="text-gray-600">
            Learn from experienced educators dedicated to your academic
            success.
          </p>
        </div>
      </div>
    </section>
  );
}