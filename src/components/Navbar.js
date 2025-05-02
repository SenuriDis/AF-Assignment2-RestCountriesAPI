import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaUser, FaSignOutAlt, FaHeart } from 'react-icons/fa';

const Navbar = ({ isLoggedIn, user, onLogout }) => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <div className="flex items-center mb-4 sm:mb-0">
          <Link 
            to="/" 
            className="text-primary text-2xl font-bold flex items-center"
          >
            <FaGlobe className="text-primary mr-2" />
            <span>Discover World</span>
          </Link>
        </div>
        
        <div className="flex space-x-4 items-center">
          {isLoggedIn && (
            <Link 
              to="/favorites" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <FaHeart className="inline mr-1" /> Favorites
            </Link>
          )}
          
          {isLoggedIn ? (
            <>
              <div className="text-gray-600 bg-gray-100 px-3 py-1 rounded-md">
                <span className="mr-2">
                  <FaUser className="inline mr-1" />
                  {user?.name || 'User'}
                </span>
              </div>
              <button 
                onClick={onLogout} 
                className="btn-primary"
              >
                <FaSignOutAlt className="inline mr-1" /> Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn-primary">
              <FaUser className="inline mr-1" /> Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 