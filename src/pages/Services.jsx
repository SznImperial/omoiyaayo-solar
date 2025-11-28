import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Wrench, ArrowRight } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import { plans, promoPlan } from '../data/plans'; // Importing our data

const Services = () => {
    // Separate the plans into categories
    const starterPlans = plans.filter(p => p.category === 'Starter');
    const premiumPlans = plans.filter(p => p.category === 'Premium');

    return (
        <div className="pt-24 pb-20 bg-light">

            {/* --- HEADER --- */}
            <div className="container mx-auto px-4 mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Choose Your Power Plan</h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Whether you need to power a single room or a duplex, we have a tailored package for you.
                </p>
            </div>

            {/* --- 1. THE PROMO (Featured) --- */}
            <div className="container mx-auto px-4 mb-20">
                <div className="max-w-md mx-auto">
                    <div className="text-center mb-4">
             <span className="animate-pulse bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
               Limited Time Offer
             </span>
                    </div>
                    <ProductCard plan={promoPlan} isPromo={true} />
                </div>
            </div>

            {/* --- 2. STARTER SERIES --- */}
            <div className="container mx-auto px-4 mb-24">
                <div className="flex items-center justify-center mb-8 space-x-4">
                    <div className="h-px bg-gray-300 w-12 md:w-32"></div>
                    <h2 className="text-2xl font-bold text-dark text-center uppercase tracking-wide">Starter Series (Tubular)</h2>
                    <div className="h-px bg-gray-300 w-12 md:w-32"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {starterPlans.map((plan) => (
                        <ProductCard key={plan.id} plan={plan} />
                    ))}
                </div>
            </div>

            {/* --- 3. PREMIUM SERIES --- */}
            <div className="bg-white py-20 mb-20 skew-y-1">
                <div className="container mx-auto px-4 -skew-y-1">
                    <div className="flex items-center justify-center mb-10 space-x-4">
                        <div className="h-px bg-gray-300 w-12 md:w-32"></div>
                        <h2 className="text-2xl font-bold text-primary text-center uppercase tracking-wide">Premium Series (Lithium)</h2>
                        <div className="h-px bg-gray-300 w-12 md:w-32"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {premiumPlans.map((plan) => (
                            <ProductCard key={plan.id} plan={plan} />
                        ))}
                    </div>
                </div>
            </div>

            {/* --- 4. COMMERCIAL & MAINTENANCE --- */}
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Commercial Box */}
                <div className="bg-dark text-white rounded-3xl p-10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-10 opacity-10 transform group-hover:scale-110 transition-transform">
                        <Building2 size={150} />
                    </div>
                    <Building2 size={40} className="text-accent mb-6" />
                    <h3 className="text-3xl font-bold mb-4">Commercial Projects</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        Running a Hotel, School, or Factory? Don't use a residential bundle.
                        We design custom solar grids to replace your diesel generators and save you millions.
                    </p>
                    <Link to="/contact" className="inline-flex items-center text-accent font-bold hover:text-white transition-colors">
                        Request Site Audit <ArrowRight size={18} className="ml-2" />
                    </Link>
                </div>

                {/* Maintenance Box */}
                <div className="bg-primary text-white rounded-3xl p-10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-10 opacity-10 transform group-hover:scale-110 transition-transform">
                        <Wrench size={150} />
                    </div>
                    <Wrench size={40} className="text-accent mb-6" />
                    <h3 className="text-3xl font-bold mb-4">Repair & Maintenance</h3>
                    <p className="text-green-100 mb-8 leading-relaxed">
                        Already have solar but it's not working? We repair faulty inverters,
                        revive weak batteries, and clean panels to restore your system to 100%.
                    </p>
                    <Link to="/contact" className="inline-flex items-center text-accent font-bold hover:text-white transition-colors">
                        Schedule a Repair <ArrowRight size={18} className="ml-2" />
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default Services;