import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Import Layout Components
import Header from './components/Header/Header';
import CategoryNavbar from './components/CategoryNavbar/CategoryNavbar';
import Footer from './components/Footer/Footer';

// Import Pages
import Home from './pages/Home/Home';
import Gigs from './pages/Gigs/Gigs';
import GigDetails from './pages/GigDetails/GigDetails';
import AddGig from './pages/AddGig/AddGig';
import Orders from './pages/Orders/Orders';
import Messages from './pages/Messages/Messages';
import Message from './pages/Message/Message';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

// Scroll Restoration Utility
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-container">
        {/* Persistent Marketplace Header */}
        <Header />
        
        {/* Persistent Category Navigation Menu */}
        <CategoryNavbar />
        
        {/* Main Content Area */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gigs" element={<Gigs />} />
            <Route path="/gig/:id" element={<GigDetails />} />
            <Route path="/add" element={<AddGig />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/message/:id" element={<Message />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        
        {/* Persistent Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
