import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare, Loader2, CheckCircle, ArrowLeft } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false); // <--- New State for Success Mode

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Residential Installation',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // --- YOUR EMAILJS KEYS ---
        const serviceId = 'service_gatjovr';
        const templateId = 'template_wei0vfy';
        const publicKey = 'UOpzw0etxXzAzSXiG';

        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
            .then((result) => {
                setLoading(false);
                setIsSubmitted(true); // <--- Switch to Success View instead of Alert

                // Reset form data in background
                setFormData({
                    name: '', email: '', phone: '', service: 'Residential Installation', message: ''
                });
            }, (error) => {
                setLoading(false);
                console.log(error.text);
                alert("Failed to send. Please check your internet or call us directly.");
            });
    };

    return (
        <div className="pt-28 pb-20 bg-light min-h-screen">
            <div className="container mx-auto px-4">

                {/* --- HEADER --- */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get a Free Consultation</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Ready to switch to solar? Have a question about our "Chairman" plans?
                        Fill out the form or give us a call.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* --- LEFT SIDE: INFO & MAP --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="bg-primary text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-white/20 p-3 rounded-xl"><Phone className="text-accent" /></div>
                                    <div>
                                        <p className="text-sm text-green-200">Phone</p>
                                        <p className="font-bold text-lg">+234 803 507 1664</p>
                                        <p className="font-bold text-lg">+234 707 249 5804</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-white/20 p-3 rounded-xl"><Mail className="text-accent" /></div>
                                    <div>
                                        <p className="text-sm text-green-200">Email</p>
                                        <p className="font-bold text-lg break-all">omoiyaayogreenenergy@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-white/20 p-3 rounded-xl"><MapPin className="text-accent" /></div>
                                    <div>
                                        <p className="text-sm text-green-200">Office Address</p>
                                        <p className="font-bold text-lg">68, Bola Street, Ebute Metta,</p>
                                        <p className="font-bold text-lg">Lagos, Nigeria.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-200 h-64 rounded-3xl overflow-hidden shadow-inner border border-gray-300 relative group">
                            <iframe
                                title="Map"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?q=68%20Bola%20St%2C%20Ebute%20Metta%2C%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* --- RIGHT SIDE: FORM OR SUCCESS MESSAGE --- */}
                    <div className="relative">
                        <AnimatePresence mode='wait'>
                            {isSubmitted ? (
                                /* --- SUCCESS CARD (THE UPGRADE) --- */
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-green-100 text-center h-full flex flex-col items-center justify-center min-h-[500px]"
                                >
                                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-bounce">
                                        <CheckCircle size={64} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-primary mb-4">Request Received!</h3>
                                    <p className="text-gray-600 text-lg mb-8 max-w-sm mx-auto">
                                        Thank you. We have received your inquiry. One of our solar experts will call you shortly to finalize your quote.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-gray-500 hover:text-primary font-bold flex items-center transition-colors"
                                    >
                                        <ArrowLeft size={20} className="mr-2" /> Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                /* --- THE FORM --- */
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 h-full"
                                >
                                    <h3 className="text-2xl font-bold text-dark mb-6 flex items-center">
                                        <MessageSquare className="mr-3 text-accent" /> Send a Message
                                    </h3>

                                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                    placeholder="Enter your name"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                    placeholder="080..."
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                placeholder="name@example.com"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Service Needed</label>
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all cursor-pointer"
                                            >
                                                <option>Residential Installation (Home)</option>
                                                <option>Commercial Project (Business)</option>
                                                <option>Repair & Maintenance</option>
                                                <option>Consultation / Inquiry</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                            <textarea
                                                rows="4"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                                placeholder="Tell us about your energy needs..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-green-800 hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {loading ? (
                                                <><Loader2 className="animate-spin mr-2" /> Sending...</>
                                            ) : (
                                                <>Send Message <Send size={20} className="ml-2" /></>
                                            )}
                                        </button>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;