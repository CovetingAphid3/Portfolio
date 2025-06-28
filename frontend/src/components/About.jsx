import React from 'react';
import { motion } from 'framer-motion';
import { 
    ShieldCheckIcon, 
    BoltIcon, 
    ServerIcon, 
    CommandLineIcon,
    GlobeAltIcon,
    CpuChipIcon,
    CodeBracketIcon
} from '@heroicons/react/24/outline';

const About = () => {
    const expertise = [
        {
            icon: CodeBracketIcon,
            title: 'Full-Stack Development',
            description: 'End-to-end application development with modern frameworks and best practices',
            skills: ['React', 'Vue.js', 'Node.js', 'Go', 'TypeScript', 'Python']
        },
        {
            icon: BoltIcon,
            title: 'Performance Optimization',
            description: 'Lightning-fast applications through advanced optimization techniques',
            skills: ['Code Splitting', 'Caching', 'CDN', 'Database Optimization']
        },
        {
            icon: ServerIcon,
            title: 'VPS Deployment',
            description: 'Scalable infrastructure setup and management for production applications',
            skills: ['Linux', 'Docker', 'Nginx', 'CI/CD', 'Monitoring']
        },
        {
            icon: ShieldCheckIcon,
            title: 'Ethical Hacking',
            description: 'Security-first development with penetration testing expertise',
            skills: ['Penetration Testing', 'Security Auditing', 'OWASP', 'CTF']
        },
        {
            icon: CommandLineIcon,
            title: 'Linux Administration',
            description: 'Deep Linux expertise for server management and automation',
            skills: ['System Administration', 'Shell Scripting', 'Security Hardening']
        },
        {
            icon: GlobeAltIcon,
            title: 'Security-First Design',
            description: 'Building applications with security as a core principle',
            skills: ['Secure Coding', 'Authentication', 'Authorization', 'Encryption']
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
                    About Me
                </motion.h2>
                <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
                >
                    I'm a passionate full-stack developer with a unique combination of development expertise 
                    and security knowledge. My journey spans from building high-performance web applications 
                    to conducting security assessments and managing production infrastructure.
                </motion.p>
            </motion.div>

            {/* Main Story */}
            <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div variants={itemVariants}>
                    <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
                    <div className="space-y-4 text-gray-300">
                        <p>
                            My passion for technology started with web development, where I quickly realized 
                            that building great applications requires more than just coding skills. It needs 
                            a deep understanding of performance, security, and infrastructure.
                        </p>
                        <p>
                            This led me to explore ethical hacking and cybersecurity, where I gained practical 
                            experience through CTF challenges and real-world applications. This security-first 
                            mindset now influences every project I work on.
                        </p>
                        <p>
                            Today, I specialize in building lightning-fast, secure applications with a focus 
                            on performance optimization and scalable architecture. Whether it's frontend development, 
                            backend APIs, or VPS deployment, I ensure every solution is robust, efficient, and secure.
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <h3 className="text-2xl font-bold text-white mb-6">What Sets Me Apart</h3>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                                <h4 className="text-white font-semibold">Performance-First Approach</h4>
                                <p className="text-gray-400 text-sm">Every application is optimized for speed and efficiency from the ground up.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                                <h4 className="text-white font-semibold">Security Expertise</h4>
                                <p className="text-gray-400 text-sm">Real-world security knowledge applied to build robust, protected applications.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                                <h4 className="text-white font-semibold">Full-Stack Mastery</h4>
                                <p className="text-gray-400 text-sm">Complete control over the entire development stack and deployment process.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                                <h4 className="text-white font-semibold">Linux Proficiency</h4>
                                <p className="text-gray-400 text-sm">Deep understanding of Linux systems for optimal server management and deployment.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Expertise Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {expertise.map((area, index) => {
                    const Icon = area.icon;
                    return (
                        <motion.div
                            key={area.title}
                            variants={itemVariants}
                            className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                        >
                            <div className="flex items-center mb-4">
                                <Icon className="w-8 h-8 text-blue-400 mr-3" />
                                <h3 className="text-xl font-semibold text-white">{area.title}</h3>
                            </div>
                            <p className="text-gray-400 mb-4 text-sm">{area.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {area.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Call to Action */}
            <motion.div
                className="mt-16 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div variants={itemVariants}>
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                        Let's work together to create a fast, secure, and scalable application that exceeds your expectations.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
                    >
                        Start Your Project
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;
