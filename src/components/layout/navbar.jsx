import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logoIcon from '../../assets/logos/icon.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Scroll Detection for resizing
    useEffect(() => {
        const handleScroll = () => window.scrollY > 20 ? setScrolled(true) : setScrolled(false);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 px-4 transition-all duration-300">
            <nav
                className={`w-full max-w-7xl glass-nav rounded-2xl transition-all duration-500 ease-out ${
                    scrolled ? 'py-3 shadow-2xl' : 'py-4 shadow-lg'
                }`}
            >
                <div className="px-6 flex justify-between items-center">

                    {/* --- LOGO (With Spin Effect) --- */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-accent/20 rounded-full blur-md group-hover:bg-accent/40 transition-all duration-300"></div>
                            <img
                                src={logoIcon}
                                alt="Logo"
                                className="w-10 h-10 object-contain relative z-10 transform group-hover:rotate-12 transition-transform duration-300"
                            />
                        </div>
                        <div className="flex flex-col">
              <span className="text-primary font-bold text-xl leading-none tracking-tight">
                OMOIYAAYO
              </span>
                            <span className="text-accent font-bold text-[10px] tracking-[0.25em] uppercase mt-0.5 group-hover:text-yellow-500 transition-colors">
                Green Energy
              </span>
                        </div>
                    </Link>

                    {/* --- DESKTOP LINKS --- */}
                    <div className="hidden md:flex space-x-1 items-center bg-gray-100/50 p-1 rounded-full border border-gray-200/50">
                        {['/', '/services', '/contact'].map((path) => (
                            <Link
                                key={path}
                                to={path}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                                    isActive(path)
                                        ? 'bg-white text-primary shadow-sm transform scale-105'
                                        : 'text-gray-500 hover:text-primary hover:bg-white/50'
                                }`}
                            >
                                {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
                            </Link>
                        ))}
                    </div>

                    {/* --- RIGHT SIDE (Phone + Shine Button) --- */}
                    <div className="hidden md:flex items-center space-x-6">
                        {/* Phone Number Link */}
                        <a href="tel:+2348035071664" className="flex items-center text-dark font-semibold text-sm hover:text-primary transition-colors">
                            <Phone size={16} className="mr-2 text-accent" />
                            <span>+234 803 507 1664</span>
                        </a>

                        {/* THE SHINING BUTTON */}
                        <Link
                            to="/contact"
                            className="relative group bg-primary text-white px-8 py-3 rounded-xl font-bold overflow-hidden shadow-lg hover:shadow-green-900/30 transition-all transform hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                            <span className="relative z-10">GET QUOTE</span>
                        </Link>
                    </div>

                    {/* --- MOBILE TOGGLE --- */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-dark p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* --- MOBILE DROPDOWN (Floating Card) --- */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full px-4 mt-2 md:hidden">
                        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-4 flex flex-col space-y-3 animate-in slide-in-from-top-2">
                            <Link to="/" onClick={() => setIsOpen(false)} className="p-3 rounded-lg hover:bg-green-50 text-dark font-semibold">Home</Link>
                            <Link to="/services" onClick={() => setIsOpen(false)} className="p-3 rounded-lg hover:bg-green-50 text-dark font-semibold">Services</Link>
                            <Link to="/contact" onClick={() => setIsOpen(false)} className="p-3 rounded-lg hover:bg-green-50 text-dark font-semibold">Contact</Link>
                            <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-primary text-white text-center py-3 rounded-lg font-bold">
                                Get Quote
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;