import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Page Components
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact'; // <--- Importing Real Contact Page

function App() {
    return (
        <Router>
            <div className="min-h-screen font-sans text-dark bg-light flex flex-col">
                {/* Navbar (Fixed & Floating) */}
                <Navbar />

                {/* Main Content Area */}
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;