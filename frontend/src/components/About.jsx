import React from 'react';
import { motion } from 'framer-motion';
import { 
    CodeBracketIcon, 
    ShieldCheckIcon, 
    BoltIcon, 
    ServerIcon,
    UserIcon,
    AcademicCapIcon
} from '@heroicons/react/24/outline';

const About = () => {
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

    const expertiseAreas = [
        {
            icon: CodeBracketIcon,
            title: 'Full-Stack Development',
            description: 'End-to-end application development with modern frameworks and best practices'
        },
        {
            icon: BoltIcon,
            title: 'Performance Optimization',
            description: 'Lightning-fast applications with optimized loading times and user experience'
        },
        {
            icon: ShieldCheckIcon,
            title: 'Security-First Approach',
            description: 'Ethical hacking expertise and security auditing for robust applications'
        },
        {
            icon: ServerIcon,
            title: 'VPS Deployment',
            description: 'Scalable infrastructure setup and server management for production applications'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                className="text-center mb-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h2 
                    variants={itemVariants}
                    className="text-4xl font-bold text-green-400 mb-4 font-mono"
                >
                    $ cat about.txt
                </motion.h2>
                <motion.p 
                    variants={itemVariants}
                    className="text-xl text-green-300 max-w-3xl mx-auto font-mono"
                >
                    # Passionate full-stack developer with expertise in performance optimization and security
                </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                {/* Story Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h3 
                        variants={itemVariants}
                        className="text-2xl font-bold text-green-400 mb-6 font-mono"
                    >
                        $ ./my_story.sh
                    </motion.h3>
                    
                    <motion.div variants={itemVariants} className="space-y-4 text-green-300 font-mono">
                        <p>
                            <span className="text-green-500">#</span> I'm a dedicated full-stack developer who believes that great software should be both 
                            lightning-fast and bulletproof secure. My journey began with a fascination for how 
                            systems work at their core, leading me to master both frontend and backend development.
                        </p>
                        
                        <p>
                            <span className="text-green-500">#</span> With expertise in performance optimization, I ensure every application I build loads 
                            in under 2 seconds and provides a seamless user experience. My background in ethical 
                            hacking means security isn't an afterthought—it's built into every line of code.
                        </p>
                        
                        <p>
                            <span className="text-green-500">#</span> From deploying applications on VPS servers to optimizing database queries, I handle 
                            the entire development lifecycle. My goal is to deliver solutions that not only meet 
                            your requirements but exceed your expectations in terms of speed, security, and scalability.
                        </p>
                    </motion.div>

                    {/* Key Stats */}
                </motion.div>

                {/* Expertise Areas */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h3 
                        variants={itemVariants}
                        className="text-2xl font-bold text-green-400 mb-6 font-mono"
                    >
                        $ ls expertise/
                    </motion.h3>
                    
                    <motion.div variants={itemVariants} className="space-y-4">
                        {expertiseAreas.map((area, index) => {
                            const Icon = area.icon;
                            return (
                                <div key={area.title} className="terminal-card p-4 rounded-lg">
                                    <div className="flex items-start">
                                        <Icon className="w-6 h-6 text-green-400 mr-4 mt-1" />
                                        <div>
                                            <h4 className="text-green-400 font-semibold mb-2 font-mono">
                                                {area.title}
                                            </h4>
                                            <p className="text-green-300 text-sm font-mono">
                                                {area.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>

            {/* Development Philosophy */}
            <motion.div
                className="terminal-card p-8 rounded-lg"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h3 
                    variants={itemVariants}
                    className="text-2xl font-bold text-green-400 mb-6 text-center font-mono"
                >
                    $ cat philosophy.txt
                </motion.h3>
                
                <motion.div 
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <div className="text-center">
                        <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <BoltIcon className="w-8 h-8 text-green-400" />
                        </div>
                        <h4 className="text-green-400 font-semibold mb-2 font-mono">Performance First</h4>
                        <p className="text-green-300 text-sm font-mono">
                            # Every millisecond counts. I optimize for speed without compromising functionality.
                        </p>
                    </div>
                    
                    <div className="text-center">
                        <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <ShieldCheckIcon className="w-8 h-8 text-green-400" />
                        </div>
                        <h4 className="text-green-400 font-semibold mb-2 font-mono">Security by Design</h4>
                        <p className="text-green-300 text-sm font-mono">
                            # Security isn't a feature—it's fundamental. Every application is built with security in mind.
                        </p>
                    </div>
                    
                    <div className="text-center">
                        <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <ServerIcon className="w-8 h-8 text-green-400" />
                        </div>
                        <h4 className="text-green-400 font-semibold mb-2 font-mono">Scalable Architecture</h4>
                        <p className="text-green-300 text-sm font-mono">
                            # Building for today's needs and tomorrow's growth. Scalable solutions that grow with your business.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;
