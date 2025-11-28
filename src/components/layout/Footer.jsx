import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import logoIcon from '../../assets/logos/icon.png';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-16 pb-8 border-t-4 border-accent">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <img src={logoIcon} alt="Logo" className="w-8 h-8" />
                            <span className="text-xl font-bold text-white">OMOIYAAYO</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Bringing uninterrupted power and joy to Nigerian homes and businesses through sustainable solar solutions.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-accent mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Solar Plans</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Get a Quote</Link></li>
                        </ul>
                    </div>

                    {/* Services (Now Clickable) */}
                    <div>
                        <h3 className="text-lg font-bold text-accent mb-4">Our Services</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li><Link to="/services" className="hover:text-primary transition-colors">Residential Installation</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Commercial Projects</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Inverter Repairs</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Battery Maintenance</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info (Updated with Real Data) */}
                    <div>
                        <h3 className="text-lg font-bold text-accent mb-4">Contact Us</h3>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                                <span>68, Bola Street, Ebute Metta, Lagos, Nigeria.</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Phone className="text-primary mt-1 flex-shrink-0" size={18} />
                                <div className="flex flex-col">
                                    <span>+234 803 507 1664</span>
                                    <span>+234 707 249 5804</span>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="text-primary mt-1 flex-shrink-0" size={18} />
                                <span className="break-all">omoiyaayogreenenergy@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
                    <p>&copy; {new Date().getFullYear()} OMOIYAAYO GREEN ENERGY SERVICES. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;