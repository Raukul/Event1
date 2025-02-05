import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              EventPro
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex space-x-8">
              <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600">
                Events Dashboard
              </Link>
              <Link to="/events" className="text-gray-700 hover:text-indigo-600">
                Events Details
              </Link>
              <Link to="/create" className="text-gray-700 hover:text-indigo-600">
                Create Events
              </Link>
              <Link to="/booked" className="text-gray-700 hover:text-indigo-600">
                Booked Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;