import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    EnvelopeIcon, 
    PhoneIcon, 
    MapPinIcon,
    PaperAirplaneIcon,
    CheckCircleIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        project: '',
        budget: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                company: '',
                project: '',
                budget: '',
                message: ''
            });
        }, 2000);
    };

    const contactInfo = [
        {
            icon: EnvelopeIcon,
            title: 'Email',
            value: 'tadiwachawanda@gmail.com',
            link: 'mailto:tadiwachawanda@gmail.com'
        },
        {
            icon: PhoneIcon,
            title: 'Phone',
            value: '+1 (555) 123-4567',
            link: 'tel:+15551234567'
        },
        {
            icon: MapPinIcon,
            title: 'Location',
            value: 'Available Worldwide',
            link: null
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    if (isSubmitted) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <CheckCircleIcon className="w-16 h-16 text-green-400 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-white mb-4">Message Sent Successfully!</h2>
                    <p className="text-gray-400 mb-8">
                        Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
                    >
                        Send Another Message
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                className="text-center mb-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h2 
                    variants={itemVariants}
                    className="text-4xl font-bold text-white mb-4"
                >
                    Let's Build Something Amazing Together
                </motion.h2>
                <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-400 max-w-3xl mx-auto"
                >
                    Ready to start your project? I'm here to help you create a fast, secure, 
                    and scalable solution that exceeds your expectations.
                </motion.p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Contact Information */}
                <motion.div variants={itemVariants}>
                    <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
                    <div className="space-y-6">
                        {contactInfo.map((info) => {
                            const Icon = info.icon;
                            return (
                                <div key={info.title} className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center">
                                        <Icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">{info.title}</h4>
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-gray-400">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Why Choose Me */}
                    <div className="mt-12 p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
                        <h4 className="text-xl font-bold text-white mb-4">Why Choose Me?</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center text-gray-300">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                Lightning-fast performance optimization
                            </li>
                            <li className="flex items-center text-gray-300">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                Security-first development approach
                            </li>
                            <li className="flex items-center text-gray-300">
                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                Full-stack expertise from frontend to deployment
                            </li>
                            <li className="flex items-center text-gray-300">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                                Proven track record of successful projects
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div variants={itemVariants}>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-white font-medium mb-2">Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="block text-white font-medium mb-2">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-white font-medium mb-2">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white"
                                    placeholder="Your company"
                                />
                            </div>
                            <div>
                                <label className="block text-white font-medium mb-2">Project Type</label>
                                <select
                                    name="project"
                                    value={formData.project}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white"
                                >
                                    <option value="">Select project type</option>
                                    <option value="web-app">Web Application</option>
                                    <option value="ecommerce">E-commerce</option>
                                    <option value="api">API Development</option>
                                    <option value="performance">Performance Optimization</option>
                                    <option value="security">Security Audit</option>
                                    <option value="deployment">VPS Deployment</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-white font-medium mb-2">Budget Range</label>
                            <select
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                className="w-full p-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white"
                            >
                                <option value="">Select budget range</option>
                                <option value="under-5k">Under $5,000</option>
                                <option value="5k-10k">$5,000 - $10,000</option>
                                <option value="10k-25k">$10,000 - $25,000</option>
                                <option value="25k-50k">$25,000 - $50,000</option>
                                <option value="over-50k">Over $50,000</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-white font-medium mb-2">Project Details *</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                className="w-full p-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white resize-none"
                                placeholder="Tell me about your project, requirements, timeline, and any specific needs..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <PaperAirplaneIcon className="w-5 h-5 mr-2" />
                                    Send Message
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Contact;
