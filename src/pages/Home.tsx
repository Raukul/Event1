const Home = () => {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <div className="bg-indigo-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Create Unforgettable Events
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Professional event planning and management services for every occasion
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50">
              Get Started
            </button>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose EventPro?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in creating memorable events that exceed expectations. From intimate
              gatherings to grand celebrations, our team ensures every detail is perfect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Planning</h3>
              <p className="text-gray-600">
                Our experienced team handles everything from concept to execution.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored event packages to match your specific needs and budget.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock assistance to ensure your event runs smoothly.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;