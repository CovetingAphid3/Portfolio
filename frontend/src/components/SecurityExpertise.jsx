import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, LockClosedIcon, ServerIcon, CodeBracketIcon, BeakerIcon } from '@heroicons/react/24/outline'

const securitySkills = [
    {
        title: "Security Analysis",
        description: "Experience in identifying vulnerabilities and implementing security measures through CTF challenges and practical applications",
        icon: ShieldCheckIcon,
    },
    {
        title: "Secure Development",
        description: "Implementing security-first principles in development, focusing on secure coding practices and vulnerability prevention",
        icon: CodeBracketIcon,
    },
    {
        title: "Blue Team Focus",
        description: "Growing expertise in defensive security, system hardening, and security monitoring",
        icon: ServerIcon,
    },
    {
        title: "CTF Experience",
        description: "Active participation in TryHackMe CTF challenges, developing practical security skills",
        icon: BeakerIcon,
    },
]

const SecurityExpertise = () => {
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
        <section className="py-12" id="security">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="text-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2 
                        variants={itemVariants}
                        className="text-4xl font-bold text-green-400 mb-4 font-mono"
                    >
                        $ cat security_focus.txt
                    </motion.h2>
                    <motion.p 
                        variants={itemVariants}
                        className="text-xl text-green-300 font-mono"
                    >
                        # Combining development expertise with security-first principles
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="mt-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {securitySkills.map((skill) => (
                            <motion.div
                                key={skill.title}
                                variants={itemVariants}
                                className="terminal-card p-6 rounded-lg hover:scale-105 transition-all duration-300"
                            >
                                <div>
                                    <skill.icon className="h-8 w-8 text-green-400" aria-hidden="true" />
                                    <h3 className="mt-4 text-lg font-medium text-green-400 font-mono">{skill.title}</h3>
                                    <p className="mt-2 text-base text-green-300 font-mono">{skill.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    className="mt-12 terminal-card rounded-lg p-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h3 
                        variants={itemVariants}
                        className="text-xl font-semibold text-green-400 mb-4 font-mono"
                    >
                        $ cat security_experience.txt
                    </motion.h3>
                    <motion.div 
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <BeakerIcon className="h-6 w-6 text-green-400" />
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-green-400 font-mono">TryHackMe CTF Challenges</h4>
                                <p className="mt-1 text-green-300 font-mono">
                                    <span className="text-green-500">#</span> Active participation in security challenges, developing practical skills in vulnerability assessment and exploitation
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <ShieldCheckIcon className="h-6 w-6 text-green-400" />
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-green-400 font-mono">Blue Team Focus</h4>
                                <p className="mt-1 text-green-300 font-mono">
                                    <span className="text-green-500">#</span> Growing expertise in defensive security, system hardening, and security monitoring
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default SecurityExpertise 