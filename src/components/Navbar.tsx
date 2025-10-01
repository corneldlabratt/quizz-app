import React from 'react';
import { Link } from 'react-router-dom';
const Navbar: React.FC = () => {
  return <nav className="bg-gradient-to-r from-purple-600 to-indigo-700 backdrop-blur-md bg-opacity-80 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white tracking-wider flex items-center">
          <span className="mr-2">🧠</span>
          <span className="font-extrabold">Citrea Quiz</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-purple-200 transition-colors duration-300">
            Home
          </Link>
          <Link to="/user-form" className="text-white hover:text-purple-200 transition-colors duration-300">
            Start Quiz
          </Link>
        </div>
        <Link to="/user-form" className="md:hidden bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg px-4 py-2 rounded-full text-white hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-30">
          Start
        </Link>
      </div>
    </nav>;
};
export default Navbar;