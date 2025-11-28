import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Clock, ArrowRight, CheckCircle, Smartphone, PenTool, BatteryCharging } from 'lucide-react';
import heroBg from '../assets/images/hero-bg.jpg';
import aboutImg from '../assets/images/about-img.jpg';

// --- IMPORT REAL PROJECT IMAGES ---
import project1 from '../assets/images/project-1.jpeg'; // Twin Inverters + Wall Batteries
import project2 from '../assets/images/project-2.jpeg'; // Man on Commercial Roof
import project3 from '../assets/images/project-3.jpeg'; // Rooftop Residential
import project4 from '../assets/images/project-4.jpeg'; // Standing Battery Setup

// Project Data with Titles
const projects = [
    { id: 1, img: project1, title: "Hybrid Inverter & Lithium Setup" },
    { id: 2, img: project2, title: "Commercial Solar Array" },
    { id: 3, img: project3, title: "Residential Rooftop Installation" },
    { id: 4, img: project4, title: "High-Capacity Storage System" },
];

const Home = () => {
    return (
        <div className="overflow-hidden bg-light">

            {/* --- 1. HERO SECTION --- */}
            <div className="relative h-screen flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed"
                    style={{ backgroundImage: `url(${heroBg})` }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center text-white mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
            <span className="bg-accent/20 text-accent border border-accent/30 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 inline-block backdrop-blur-sm">
              No More Blackouts
            </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Uninterrupted Power <br /> for <span className="text-accent">Nigeria.</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
                            Say goodbye to generator noise. Expert solar inverter installation and maintenance from OMOIYAAYO.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link to="/services" className="bg-primary hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center">
                                View Packages <ArrowRight className="ml-2" />
                            </Link>
                            <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* --- 2. KEY BENEFITS --- */}
            <div className="py-20 bg-light">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-20">
                        {[{ icon: Zap, title: "Expert Installation", text: "Certified technicians ensure safe wiring." },
                            { icon: ShieldCheck, title: "Quality Assurance", text: "Genuine batteries & panels with warranty." },
                            { icon: Clock, title: "24/7 Support", text: "Local team ready to keep your lights on." }]
                            .map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-primary hover:-translate-y-2 transition-transform duration-300"
                                >
                                    <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-primary mb-6">
                                        <item.icon size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-dark">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                                </motion.div>
                            ))}
                    </div>
                </div>
            </div>

            {/* --- 3. ABOUT US SECTION --- */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm">Who We Are</span>
                        <h2 className="text-4xl font-bold text-primary mt-2 mb-6">Bringing Light & Joy <br/>to Nigerian Homes.</h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            At <span className="font-bold text-dark">OMOIYAAYO</span>, we believe electricity isn't a luxury—it's a necessity. We started with a simple mission: to help you say goodbye to the noise, cost, and stress of generators.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {['Registered Company', 'Local Lagos Experts', 'Genuine Parts Only', 'Fast Delivery'].map((item) => (
                                <div key={item} className="flex items-center space-x-2">
                                    <CheckCircle size={20} className="text-accent" />
                                    <span className="font-medium text-dark">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/2 relative">
                        <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
                            <img src={aboutImg} alt="About Us" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"/>
                        </div>
                        <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>

            {/* --- 4. OUR PROCESS SECTION --- */}
            <div className="py-24 bg-dark text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm">How It Works</span>
                        <h2 className="text-4xl font-bold mt-2">Going Solar is Simple</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="relative p-6">
                            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-accent mx-auto mb-6 border-2 border-primary">
                                <Smartphone size={40} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">1. Consultation</h3>
                            <p className="text-gray-400">Contact us. We calculate your load to recommend the perfect "Neighbour" or "Chairman" plan.</p>
                        </div>
                        <div className="relative p-6">
                            <div className="hidden md:block absolute top-10 -right-1/2 w-full h-0.5 bg-gray-700"></div>
                            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-accent mx-auto mb-6 border-2 border-primary">
                                <PenTool size={40} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">2. Installation</h3>
                            <p className="text-gray-400">Our team arrives on schedule to install your system with minimal disruption to your day.</p>
                        </div>
                        <div className="relative p-6">
                            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-accent mx-auto mb-6 border-2 border-primary">
                                <BatteryCharging size={40} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">3. Power Up</h3>
                            <p className="text-gray-400">Flip the switch and enjoy constant, clean energy while saving on fuel and bills.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- 5. RECENT PROJECTS GALLERY (REAL IMAGES) --- */}
            <div className="py-20 bg-light">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary">Recent Installations</h2>
                        <p className="text-gray-600 mt-2">A glimpse at our professional setups and neat cabling.</p>
                    </div>

                    {/* Updated Grid for 4 Images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {projects.map((project) => (
                            <div key={project.id} className="group relative overflow-hidden rounded-2xl shadow-lg h-80 cursor-pointer">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Gradient Overlay + Title */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <span className="text-white font-bold text-lg leading-tight">{project.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/contact" className="text-primary font-bold hover:text-secondary underline transition-colors text-lg">
                            Become Our Next Project →
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;