import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
    ShieldCheckIcon, 
    BoltIcon, 
    ServerIcon, 
    CodeBracketIcon
} from '@heroicons/react/24/outline';

const Hero = () => {
    const [currentSkill, setCurrentSkill] = useState(0);
    const skills = [
        'Full-Stack Development',
        'Performance Optimization',
        'VPS Deployment',
        'Ethical Hacking',
        'Linux Administration',
        'Security-First Design'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSkill((prev) => (prev + 1) % skills.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

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
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="absolute inset-0 opacity-20 bg-slate-700"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
                className="absolute top-20 left-20 text-blue-500/20"
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
            >
                <CodeBracketIcon className="w-12 h-12" />
            </motion.div>
            <motion.div
                className="absolute top-40 right-32 text-green-500/20"
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
            >
                <ServerIcon className="w-16 h-16" />
            </motion.div>
            <motion.div
                className="absolute bottom-32 left-32 text-purple-500/20"
                animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
            >
                <ShieldCheckIcon className="w-14 h-14" />
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            <BoltIcon className="w-4 h-4 mr-2" />
                            Available for New Projects
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1 
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                    >
                        Full-Stack Developer &amp;
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
                            Security Expert
                        </span>
                    </motion.h1>

                    {/* Rotating Skills */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <div className="text-2xl md:text-3xl text-gray-300">
                            Specializing in{' '}
                            <span className="text-blue-400 font-semibold">
                                {skills[currentSkill]}
                            </span>
                        </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p 
                        variants={itemVariants}
                        className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        I build lightning-fast, secure applications with a focus on performance optimization. 
                        From frontend to backend, VPS deployment to ethical hacking, I deliver solutions that 
                        scale and protect your business.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <a
                            href="#contact"
                            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <span className="relative z-10">Start Your Project</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                        <a
                            href="#portfolio"
                            className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                        >
                            View My Work
                        </a>
                    </motion.div>

                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero; 
