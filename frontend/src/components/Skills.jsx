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
                { name: 'React', color: 'text-green-400' },
                { name: 'Vue.js', color: 'text-green-300' },
                { name: 'TypeScript', color: 'text-green-400' },
                { name: 'Tailwind CSS', color: 'text-green-300' },
                { name: 'Next.js', color: 'text-green-400' },
                { name: 'JavaScript (ES6+)', color: 'text-green-300' }
            ]
        },
        {
            title: 'Backend Development',
            icon: ServerIcon,
            description: 'Scalable server-side applications and API development',
            skills: [
                { name: 'Node.js', color: 'text-green-400' },
                { name: 'Go', color: 'text-green-300' },
                { name: 'Python', color: 'text-green-400' },
                { name: 'Express.js', color: 'text-green-300' },
                { name: 'REST APIs', color: 'text-green-400' },
                { name: 'GraphQL', color: 'text-green-300' }
            ]
        },
        {
            title: 'DevOps & Infrastructure',
            icon: CommandLineIcon,
            description: 'Server management, deployment automation, and infrastructure scaling',
            skills: [
                { name: 'Linux Administration', color: 'text-green-400' },
                { name: 'VPS Deployment', color: 'text-green-300' },
                { name: 'Docker', color: 'text-green-400' },
                { name: 'CI/CD Pipelines', color: 'text-green-300' },
                { name: 'Nginx', color: 'text-green-400' },
                { name: 'Shell Scripting', color: 'text-green-300' }
            ]
        },
        {
            title: 'Security & Performance',
            icon: ShieldCheckIcon,
            description: 'Security-first development and performance optimization expertise',
            skills: [
                { name: 'Ethical Hacking', color: 'text-green-400' },
                { name: 'Penetration Testing', color: 'text-green-300' },
                { name: 'Performance Optimization', color: 'text-green-400' },
                { name: 'Security Auditing', color: 'text-green-300' },
                { name: 'OWASP Guidelines', color: 'text-green-400' },
                { name: 'Code Security', color: 'text-green-300' }
            ]
        },
        {
            title: 'Databases & Data',
            icon: BuildingStorefrontIcon,
            description: 'Database design, optimization, and data management',
            skills: [
                { name: 'MongoDB', color: 'text-green-400' },
                { name: 'PostgreSQL', color: 'text-green-300' },
                { name: 'Redis', color: 'text-green-400' },
                { name: 'Database Design', color: 'text-green-300' },
                { name: 'Query Optimization', color: 'text-green-400' }
            ]
        },
        {
            title: 'Development Tools',
            icon: CloudIcon,
            description: 'Professional development workflow and tooling',
            skills: [
                { name: 'Git & GitHub', color: 'text-green-400' },
                { name: 'VS Code', color: 'text-green-300' },
                { name: 'Vim', color: 'text-green-400' },
                { name: 'Postman', color: 'text-green-300' },
                { name: 'Jest Testing', color: 'text-green-400' },
                { name: 'WebSocket', color: 'text-green-300' }
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
                    $ cat skills.txt
                </motion.h2>
                <motion.p 
                    variants={itemVariants}
                    className="text-xl text-green-300 max-w-3xl mx-auto font-mono"
                >
                    # Comprehensive full-stack development expertise with a focus on performance, 
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
                            className="terminal-card p-6 rounded-lg hover:scale-105 transition-all duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <Icon className="w-8 h-8 text-green-400 mr-3" />
                                <h3 className="text-xl font-bold text-green-400 font-mono">{category.title}</h3>
                            </div>
                            
                            <p className="text-green-300 text-sm mb-6 font-mono">{category.description}</p>
                            
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className={`px-3 py-1 text-sm font-medium rounded-lg border border-green-500/30 bg-green-500/10 ${skill.color} font-mono`}
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
                className="mt-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h3 
                    variants={itemVariants}
                    className="text-2xl font-bold text-green-400 text-center mb-8 font-mono"
                >
                    $ ls additional_tech/
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
                            className="terminal-card p-3 rounded-lg text-center hover:border-green-400 transition-colors duration-300"
                        >
                            <span className="text-sm text-green-300 font-medium font-mono">{tech}</span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Skills; 
