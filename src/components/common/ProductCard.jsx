import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Zap, Battery, Sun } from 'lucide-react';

const ProductCard = ({ plan, isPromo = false }) => {
    return (
        <div
            className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group ${
                isPromo
                    ? 'border-4 border-accent shadow-2xl scale-105 z-10'
                    : 'border border-gray-100 shadow-lg hover:shadow-xl'
            }`}
        >
            {/* Popular/Promo Badge */}
            {(isPromo || plan.isPopular) && (
                <div className="absolute top-0 right-0 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                    {isPromo ? 'LIMITED OFFER' : 'BEST SELLER'}
                </div>
            )}

            {/* Header */}
            <div className={`p-6 ${isPromo ? 'bg-primary text-white' : 'bg-green-50/50'}`}>
                <h3 className={`font-bold text-lg leading-tight mb-2 ${isPromo ? 'text-white' : 'text-primary'}`}>
                    {plan.name}
                </h3>
                <div className="flex items-baseline">
          <span className={`text-2xl font-bold ${isPromo ? 'text-accent' : 'text-dark'}`}>
            {plan.price}
          </span>
                </div>
                {isPromo && <p className="text-yellow-200 text-xs mt-1">{plan.tagline}</p>}
            </div>

            {/* Content Body */}
            <div className="p-6">

                {/* System Specs (What You Get) */}
                <div className="mb-6">
                    <h4 className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                        <Zap size={14} className="mr-1" /> What You Get
                    </h4>
                    <ul className="space-y-2">
                        {plan.system.map((item, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-700">
                                <div className="mt-1 min-w-[16px]">
                                    {item.includes('Battery') ? <Battery size={14} className="text-primary" /> :
                                        item.includes('Panel') ? <Sun size={14} className="text-accent" /> :
                                            <Check size={14} className="text-green-500" />}
                                </div>
                                <span className="ml-2 leading-snug">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Load Capacity (What It Powers) */}
                {plan.load && (
                    <div className="mb-6 pt-4 border-t border-gray-100">
                        <h4 className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                            <Zap size={14} className="mr-1" /> What It Powers
                        </h4>
                        <ul className="space-y-1">
                            {plan.load.map((item, index) => (
                                <li key={index} className="flex items-start text-xs text-gray-600">
                                    <span className="mr-2 text-accent">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Button */}
                <Link
                    to="/contact"
                    className={`block w-full text-center py-3 rounded-xl font-bold transition-colors ${
                        isPromo
                            ? 'bg-accent text-primary hover:bg-yellow-400'
                            : 'bg-primary text-white hover:bg-green-800'
                    }`}
                >
                    Order This Plan
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;