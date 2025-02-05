const EventDetails = () => {
  const eventCards = [
    {
      title: "Birthday Celebrations",
      description: "Make your birthday special with our customized party packages",
      image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      title: "Wedding Ceremonies",
      description: "Create your dream wedding with our expert planning services",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      title: "College Culturals",
      description: "Organize memorable college events and cultural festivals",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      title: "House Warming",
      description: "Welcome friends and family to your new home in style",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      title: "Puberty Function",
      description: "Celebrate this special milestone with our traditional arrangements",
      image: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Our Event Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
                <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;