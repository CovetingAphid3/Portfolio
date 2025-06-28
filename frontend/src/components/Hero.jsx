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
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 opacity-20 bg-green-500/5"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
                className="absolute top-20 left-20 text-green-500/20"
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
                className="absolute bottom-32 left-32 text-green-500/20"
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
                    {/* Terminal Prompt */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/30">
                            <BoltIcon className="w-4 h-4 mr-2" />
                            root@portfolio:~$ ./start.sh
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1 
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-bold text-green-400 mb-6 font-mono"
                    >
                        <span className="terminal-prompt"></span>
                        Full-Stack Developer &amp;
                        <br />
                        <span className="text-green-300 glitch">
                            Security Expert
                        </span>
                        <span className="terminal-cursor">|</span>
                    </motion.h1>

                    {/* Rotating Skills */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <div className="text-2xl md:text-3xl text-green-300 font-mono">
                            <span className="text-green-500">$</span> specializing in{' '}
                            <span className="text-green-400 font-semibold">
                                {skills[currentSkill]}
                            </span>
                        </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p 
                        variants={itemVariants}
                        className="text-xl text-green-300 max-w-3xl mx-auto mb-12 leading-relaxed font-mono"
                    >
                        <span className="text-green-500">#</span> Building lightning-fast, secure applications with a focus on performance optimization. 
                        From frontend to backend, VPS deployment to ethical hacking, I deliver solutions that 
                        scale and protect your business.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <a
                            href="#contact"
                            className="group relative px-8 py-4 bg-green-500/10 border border-green-500 text-green-400 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-green-500 hover:text-black hover:scale-105 hover:shadow-2xl font-mono"
                        >
                            <span className="relative z-10">$ ./start_project.sh</span>
                        </a>
                        <a
                            href="#portfolio"
                            className="px-8 py-4 border-2 border-green-500/50 text-green-300 font-semibold rounded-lg hover:border-green-400 hover:text-green-400 transition-all duration-300 font-mono"
                        >
                            $ ls -la projects/
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
                <div className="text-green-400 font-mono text-sm">
                    $ scroll down
                </div>
            </motion.div>
        </div>
    );
};

export default Hero; 
