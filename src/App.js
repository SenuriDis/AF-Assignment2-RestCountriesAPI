import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Check if user is logged in from localStorage on app start
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  // Login function
  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Logout function
  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user');
  };

  // Protected route component
  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <div className="App min-h-screen flex flex-col bg-white text-gray-800">
        <Navbar isLoggedIn={isLoggedIn} user={user} onLogout={handleLogout} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:countryId" element={<CountryDetails />} />
            <Route 
              path="/login" 
              element={
                isLoggedIn ? 
                <Navigate to="/" replace /> : 
                <Login onLogin={handleLogin} />
              } 
            />
            {/* Example of a protected route */}
            <Route 
              path="/favorites" 
              element={
                <PrivateRoute>
                  <div className="text-center py-8">
                    <h1 className="text-2xl font-bold mb-4">Favorites</h1>
                    <p>This is a protected route that would show your favorite countries.</p>
                  </div>
                </PrivateRoute>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
