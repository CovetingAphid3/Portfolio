import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const skills = [
        { name: 'React', color: 'text-blue-400' },
        { name: 'Node.js', color: 'text-green-400' },
        { name: 'TypeScript', color: 'text-blue-300' },
        { name: 'HTML/CSS', color: 'text-orange-400' },
        { name: 'JavaScript', color: 'text-yellow-300' },
        { name: 'SQL', color: 'text-purple-400' },
    ];

    const projects = [
        { name: 'Pharmacy Web Page', color: 'text-purple-400' },
        { name: 'Inventory Management System', color: 'text-teal-400' },
    ];

    const interests = [
        { name: 'Cloud Deployment', color: 'text-blue-200' },
        { name: 'CI/CD Pipelines', color: 'text-green-300' },
        { name: 'UI/UX Design', color: 'text-pink-400' },
        { name: 'Animation', color: 'text-pink-500' },
        { name: 'Cybersecurity', color: 'text-red-500' },
        { name: 'Pentesting', color: 'text-yellow-400' },
    ];

    return (
        <motion.div 
            className="bg-gray text-white py-12 px-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            id="about"
        >
            <h1 className="text-4xl font-extrabold mb-6 text-center">About Me</h1>
            <div className="max-w-4xl mx-auto">
                <motion.p 
                    className="text-lg mb-6 leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    I'm a passionate full-stack developer with a deep interest in web technologies and security. 
                    My journey started with front-end development and evolved into mastering modern tools and frameworks.
                </motion.p>
                
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <h2 className="text-2xl font-bold mb-4">Skills</h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {skills.map((skill, index) => (
                            <span key={index} className={`${skill.color} bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold`}>
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <h2 className="text-2xl font-bold mb-4">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                                <span className={`${project.color} font-semibold`}>{project.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.p 
                    className="text-lg mb-6 leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    I'm currently exploring cloud deployment solutions, CI/CD pipelines, and experimenting with new technologies for more interactive and dynamic interfaces.
                </motion.p>

                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <h2 className="text-2xl font-bold mb-4">Interests & Ongoing Learning</h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {interests.map((interest, index) => (
                            <span key={index} className={`${interest.color} bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold`}>
                                {interest.name}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <motion.p 
                    className="text-lg mb-6 leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    Alongside web development, I've been expanding my knowledge in cybersecurity, specifically focusing on pentesting and ethical hacking. This has sharpened my understanding of system vulnerabilities and improved my ability to build more secure applications.
                </motion.p>

                <motion.p 
                    className="text-lg mb-6 leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                >
                    I'm always pushing myself to learn new tools and concepts, aiming to stay at the forefront of both development and security. Whether it's building web apps, creating APIs, or enhancing my pentesting skills, I continuously try to grow and learn in this fast-paced tech landscape.
                </motion.p>
            </div>
        </motion.div>
    );
}

export default About;
