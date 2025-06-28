import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'CEO, TechStart Inc.',
            content: 'Working with this developer was exceptional. They delivered our e-commerce platform 2 weeks ahead of schedule with incredible performance. The security implementation gave us complete peace of mind.',
            rating: 5,
            project: 'E-commerce Platform',
            metrics: {
                performance: '98%',
                security: 'A+',
                delivery: '2 weeks early'
            }
        },
        {
            name: 'Michael Chen',
            role: 'CTO, DataFlow Solutions',
            content: 'The performance optimization work they did on our application was incredible. We saw a 60% improvement in load times and our user engagement increased significantly. Highly recommended!',
            rating: 5,
            project: 'Performance Optimization',
            metrics: {
                performance: '60% faster',
                uptime: '99.9%',
                satisfaction: '100%'
            }
        },
        {
            name: 'Emily Rodriguez',
            role: 'Founder, SecureNet',
            content: 'Their security expertise is outstanding. They conducted a comprehensive security audit and implemented robust protection measures. Our clients feel much more confident using our platform.',
            rating: 5,
            project: 'Security Implementation',
            metrics: {
                security: 'A+ rating',
                vulnerabilities: '0 critical',
                compliance: '100%'
            }
        },
        {
            name: 'David Thompson',
            role: 'Operations Manager, CloudScale',
            content: 'The VPS deployment and infrastructure setup was flawless. They handled everything from server configuration to monitoring. Our application has been running smoothly for months.',
            rating: 5,
            project: 'VPS Deployment',
            metrics: {
                uptime: '99.9%',
                response: '< 200ms',
                scalability: 'Excellent'
            }
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
                    Client Testimonials
                </motion.h2>
                <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-400 max-w-3xl mx-auto"
                >
                    Don't just take my word for it. Here's what clients say about working with me
                </motion.p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                    >
                        {/* Rating */}
                        <div className="flex items-center mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                            ))}
                        </div>

                        {/* Content */}
                        <blockquote className="text-gray-300 mb-6 italic">
                            "{testimonial.content}"
                        </blockquote>

                        {/* Project Info */}
                        <div className="mb-4">
                            <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full border border-blue-500/20">
                                {testimonial.project}
                            </span>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {Object.entries(testimonial.metrics).map(([key, value]) => (
                                <div key={key} className="text-center">
                                    <div className="text-lg font-bold text-blue-400">{value}</div>
                                    <div className="text-xs text-gray-400 capitalize">{key}</div>
                                </div>
                            ))}
                        </div>

                        {/* Author */}
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="ml-4">
                                <div className="text-white font-semibold">{testimonial.name}</div>
                                <div className="text-gray-400 text-sm">{testimonial.role}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Overall Stats */}
            <motion.div
                className="mt-16 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div
                    variants={itemVariants}
                    className="text-center mb-8"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">Overall Client Satisfaction</h3>
                    <p className="text-gray-400">
                        Consistent delivery of exceptional results across all projects
                    </p>
                </motion.div>
                
                <motion.div 
                    variants={itemVariants}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                        <div className="text-gray-400">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                        <div className="text-gray-400">Projects Completed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                        <div className="text-gray-400">Average Uptime</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-400 mb-2">5.0</div>
                        <div className="text-gray-400">Average Rating</div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Testimonials; 