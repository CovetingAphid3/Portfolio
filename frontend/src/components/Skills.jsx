import React from 'react';
import { motion } from 'framer-motion';
import { 
    CodeBracketIcon, 
    ServerIcon, 
    ShieldCheckIcon, 
    CommandLineIcon,
    CloudIcon,
    BuildingStorefrontIcon 
} from '@heroicons/react/24/outline';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: CodeBracketIcon,
            description: 'Building responsive, performant user interfaces with modern frameworks',
            skills: [
                { name: 'React', color: 'text-blue-400' },
                { name: 'Vue.js', color: 'text-green-400' },
                { name: 'TypeScript', color: 'text-blue-500' },
                { name: 'Tailwind CSS', color: 'text-cyan-400' },
                { name: 'Next.js', color: 'text-gray-400' },
                { name: 'JavaScript (ES6+)', color: 'text-yellow-400' }
            ]
        },
        {
            title: 'Backend Development',
            icon: ServerIcon,
            description: 'Scalable server-side applications and API development',
            skills: [
                { name: 'Node.js', color: 'text-green-400' },
                { name: 'Go', color: 'text-blue-500' },
                { name: 'Python', color: 'text-yellow-400' },
                { name: 'Express.js', color: 'text-gray-400' },
                { name: 'REST APIs', color: 'text-purple-400' },
                { name: 'GraphQL', color: 'text-pink-400' }
            ]
        },
        {
            title: 'DevOps & Infrastructure',
            icon: CommandLineIcon,
            description: 'Server management, deployment automation, and infrastructure scaling',
            skills: [
                { name: 'Linux Administration', color: 'text-yellow-400' },
                { name: 'VPS Deployment', color: 'text-purple-400' },
                { name: 'Docker', color: 'text-blue-400' },
                { name: 'CI/CD Pipelines', color: 'text-green-400' },
                { name: 'Nginx', color: 'text-green-500' },
                { name: 'Shell Scripting', color: 'text-gray-400' }
            ]
        },
        {
            title: 'Security & Performance',
            icon: ShieldCheckIcon,
            description: 'Security-first development and performance optimization expertise',
            skills: [
                { name: 'Ethical Hacking', color: 'text-red-400' },
                { name: 'Penetration Testing', color: 'text-orange-400' },
                { name: 'Performance Optimization', color: 'text-green-400' },
                { name: 'Security Auditing', color: 'text-purple-400' },
                { name: 'OWASP Guidelines', color: 'text-blue-400' },
                { name: 'Code Security', color: 'text-red-500' }
            ]
        },
        {
            title: 'Databases & Data',
            icon: BuildingStorefrontIcon,
            description: 'Database design, optimization, and data management',
            skills: [
                { name: 'MongoDB', color: 'text-green-400' },
                { name: 'PostgreSQL', color: 'text-blue-400' },
                { name: 'Redis', color: 'text-red-400' },
                { name: 'Database Design', color: 'text-purple-400' },
                { name: 'Query Optimization', color: 'text-yellow-400' }
            ]
        },
        {
            title: 'Development Tools',
            icon: CloudIcon,
            description: 'Professional development workflow and tooling',
            skills: [
                { name: 'Git & GitHub', color: 'text-orange-400' },
                { name: 'VS Code', color: 'text-blue-400' },
                { name: 'Vim', color: 'text-green-400' },
                { name: 'Postman', color: 'text-orange-500' },
                { name: 'Jest Testing', color: 'text-red-400' },
                { name: 'WebSocket', color: 'text-purple-400' }
            ]
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
                    Technical Skills
                </motion.h2>
                <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-400 max-w-3xl mx-auto"
                >
                    Comprehensive full-stack development expertise with a focus on performance, 
                    security, and scalable architecture
                </motion.p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {skillCategories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                        <motion.div
                            key={category.title}
                            variants={itemVariants}
                            className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                        >
                            <div className="flex items-center mb-4">
                                <Icon className="w-8 h-8 text-blue-400 mr-3" />
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>
                            
                            <p className="text-gray-400 text-sm mb-6">{category.description}</p>
                            
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className={`px-3 py-1 text-sm font-medium rounded-full border border-slate-600 bg-slate-700/50 ${skill.color}`}
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Additional Technologies */}
            <motion.div
                className="mt-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h3 
                    variants={itemVariants}
                    className="text-2xl font-bold text-white text-center mb-8"
                >
                    Additional Technologies & Platforms
                </motion.h3>
                
                <motion.div 
                    variants={itemVariants}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
                >
                    {[
                        'AWS', 'DigitalOcean', 'Vercel', 'Netlify', 'PM2', 'Cypress',
                        'WebSocket', 'REST APIs', 'GraphQL', 'Docker Compose', 'GitHub Actions', 'Nginx'
                    ].map((tech) => (
                        <div
                            key={tech}
                            className="p-3 bg-slate-800/50 border border-slate-700 rounded-lg text-center hover:border-blue-500/50 transition-colors duration-300"
                        >
                            <span className="text-sm text-gray-300 font-medium">{tech}</span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

        </div>
    );
};

export default Skills; 
