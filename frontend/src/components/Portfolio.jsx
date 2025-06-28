import { ShieldCheckIcon, CodeBracketIcon, ServerIcon, LockClosedIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
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
    return (
        <section className="py-20 scroll-mt-20" id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Professional Projects
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Showcasing impactful solutions and technical expertise
                    </p>
                </div>

                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {portfolio.map((project) => {
                        const Icon = getIcon(project.stack);
                        const details = getProjectDetails(project);
                        
                        return (
                            <div
                                key={project.title}
                                className="group relative bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300"
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <Icon className="h-8 w-8 text-blue-500" />
                                            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                        </div>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-300"
                                        >
                                            <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                                        </a>
                                    </div>
                                    
                                    <div className="mt-4">
                                        <img 
                                            src={project.imgUrl} 
                                            alt={project.title}
                                            className="w-full h-48 object-cover rounded-lg"
                                        />
                                    </div>

                                    <div className="mt-6">
                                        <h4 className="text-sm font-medium text-white">Business Impact</h4>
                                        <ul className="mt-2 space-y-2">
                                            {details.impact.map((item) => (
                                                <li key={item} className="flex items-start">
                                                    <span className="flex h-6 items-center">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                                                    </span>
                                                    <span className="ml-3 text-sm text-gray-300">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="mt-6">
                                        <h4 className="text-sm font-medium text-white">Key Achievements</h4>
                                        <ul className="mt-2 space-y-2">
                                            {details.achievements.map((achievement) => (
                                                <li key={achievement} className="flex items-start">
                                                    <span className="flex h-6 items-center">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                                                    </span>
                                                    <span className="ml-3 text-sm text-gray-300">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-6">
                                        <h4 className="text-sm font-medium text-white">Technologies & Skills</h4>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {project.stack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="inline-flex items-center rounded-md bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {details.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
