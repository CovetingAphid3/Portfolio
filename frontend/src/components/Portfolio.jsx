import { ShieldCheckIcon, CodeBracketIcon, ServerIcon, LockClosedIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion';
import portfolio from '../data/portfolio'

const getProjectDetails = (project) => {
    const details = {
        impact: [],
        achievements: [],
        skills: []
    };

    // Add impact and achievements based on project type
    switch(project.title) {
        case 'Particle Physics Simulator':
            details.impact = ['High-performance computing', 'Complex algorithm implementation'];
            details.achievements = ['Optimized particle simulation algorithms', 'Implemented efficient data structures'];
            details.skills = ['Algorithm Design', 'Performance Optimization', 'Concurrent Programming'];
            break;
        case 'Pharmacy Web Page':
            details.impact = ['Healthcare system digitization', 'Improved patient service delivery'];
            details.achievements = ['Reduced prescription processing time by 60%', 'Implemented secure patient data handling'];
            details.skills = ['Full Stack Development', 'Healthcare Systems', 'Data Security'];
            break;
        case 'Digital Marketing Website':
            details.impact = ['Enhanced client lead generation', 'Improved marketing campaign tracking'];
            details.achievements = ['Increased client conversion rate by 40%', 'Implemented analytics dashboard'];
            details.skills = ['Vue.js', 'TypeScript', 'Marketing Analytics'];
            break;
        case 'New Dawn Properties':
            details.impact = ['Streamlined property management', 'Enhanced user experience'];
            details.achievements = ['Reduced property search time by 50%', 'Implemented real-time property updates'];
            details.skills = ['TypeScript', 'Go', 'Real-time Systems'];
            break;
        case 'Duja Recruiter - Graduate Recruitment':
            details.impact = ['Automated recruitment process', 'Improved candidate experience'];
            details.achievements = ['Reduced hiring time by 45%', 'Implemented automated candidate screening'];
            details.skills = ['Vue.js', 'Go', 'Process Automation'];
            break;
        case 'Restaurant Web App':
            details.impact = ['Enhanced customer ordering experience', 'Streamlined restaurant operations'];
            details.achievements = ['Reduced order processing time by 70%', 'Implemented real-time order tracking'];
            details.skills = ['Vue.js', 'TypeScript', 'Real-time Systems'];
            break;
        case 'Chat Application':
            details.impact = ['Real-time communication solution', 'Enhanced user interaction'];
            details.achievements = ['Implemented end-to-end encryption', 'Achieved 99.9% uptime'];
            details.skills = ['WebSocket', 'Security', 'Real-time Systems'];
            break;
        case 'Online Laundromat':
            details.impact = ['Digital transformation of laundry services', 'Improved customer convenience'];
            details.achievements = ['Reduced service time by 30%', 'Implemented automated scheduling'];
            details.skills = ['Python', 'Flask', 'Process Automation'];
            break;
        case 'Inventory Management System':
            details.impact = ['Optimized inventory control', 'Reduced operational costs'];
            details.achievements = ['Reduced stock discrepancies by 80%', 'Implemented automated reordering'];
            details.skills = ['React', 'TypeScript', 'Database Design'];
            break;
        case 'Data Structure & Algorithms':
            details.impact = ['Enhanced code efficiency', 'Improved problem-solving capabilities'];
            details.achievements = ['Implemented complex algorithms', 'Optimized data structures'];
            details.skills = ['Algorithm Design', 'Performance Optimization', 'Multiple Languages'];
            break;
    }

    return details;
}

const getIcon = (stack) => {
    if (stack.includes('GO')) return ServerIcon;
    if (stack.includes('REACT') || stack.includes('VUE')) return CodeBracketIcon;
    if (stack.includes('MONGO') || stack.includes('REDIS')) return LockClosedIcon;
    return ShieldCheckIcon;
}

const Portfolio = () => {
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
        <section className="py-12 scroll-mt-20" id="projects">
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
                        $ ls projects/
                    </motion.h2>
                    <motion.p 
                        variants={itemVariants}
                        className="text-xl text-green-300 font-mono"
                    >
                        # Showcasing impactful solutions and technical expertise
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {portfolio.map((project) => {
                        const Icon = getIcon(project.stack);
                        const details = getProjectDetails(project);
                        
                        return (
                            <motion.div
                                key={project.title}
                                variants={itemVariants}
                                className="terminal-card rounded-lg overflow-hidden hover:scale-105 transition-all duration-300"
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-4">
                                            <Icon className="h-8 w-8 text-green-400" />
                                            <h3 className="text-xl font-semibold text-green-400 font-mono">{project.title}</h3>
                                        </div>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-green-400 hover:text-green-300 transition-colors duration-300"
                                        >
                                            <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                                        </a>
                                    </div>
                                    
                                    <div className="mb-6">
                                        <img 
                                            src={project.imgUrl} 
                                            alt={project.title}
                                            className="w-full h-48 object-cover rounded-lg border border-green-500/30"
                                        />
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-sm font-medium text-green-400 font-mono mb-2">
                                                <span className="text-green-500">$</span> business_impact
                                            </h4>
                                            <ul className="space-y-2">
                                                {details.impact.map((item) => (
                                                    <li key={item} className="flex items-start">
                                                        <span className="flex h-6 items-center">
                                                            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                                        </span>
                                                        <span className="ml-3 text-sm text-green-300 font-mono">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div>
                                            <h4 className="text-sm font-medium text-green-400 font-mono mb-2">
                                                <span className="text-green-500">$</span> achievements
                                            </h4>
                                            <ul className="space-y-2">
                                                {details.achievements.map((achievement) => (
                                                    <li key={achievement} className="flex items-start">
                                                        <span className="flex h-6 items-center">
                                                            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                                        </span>
                                                        <span className="ml-3 text-sm text-green-300 font-mono">{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-medium text-green-400 font-mono mb-2">
                                                <span className="text-green-500">$</span> technologies
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.stack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="inline-flex items-center rounded-lg bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 border border-green-500/30 font-mono"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="mt-2 flex flex-wrap gap-2">
                                                {details.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="inline-flex items-center rounded-lg bg-green-500/5 px-2 py-1 text-xs font-medium text-green-300 border border-green-500/20 font-mono"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Portfolio
