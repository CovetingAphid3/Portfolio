import React from 'react';
import { motion } from 'framer-motion';

const icons = {
    REACT: { icon: 'devicon-react-original colored', label: 'React' },
    NODE: { icon: 'devicon-nodejs-plain colored', label: 'Node.js' },
    MONGO: { icon: 'devicon-mongodb-plain colored', label: 'MongoDB' },
    NEXT: { icon: 'devicon-nextjs-original colored', label: 'Next.js' },
    TAILWIND: { icon: 'devicon-tailwindcss-plain colored', label: 'Tailwind CSS' },
    GO: { icon: 'devicon-go-original-wordmark colored', label: 'Go' },
    SOCKET: { icon: 'devicon-socketio-original', label: 'Socket.io' },
    TS: { icon: 'devicon-typescript-plain colored', label: 'TypeScript' },
    FRAMER: { icon: 'devicon-framermotion-original', label: 'Framer ' },
    REDUX: { icon: 'devicon-redux-original colored', label: 'Redux' },
    JS: { icon: 'devicon-javascript-plain colored', label: 'Javascript' },
    PG: { icon: 'devicon-postgresql-plain colored', label: 'Postgress' },
    PY: { icon: 'devicon-python-plain colored', label: 'Python' },
    CS: { icon: 'devicon-csharp-plain colored', label: 'C#' },
    FLASK: { icon: 'devicon-flask-original', label: 'FLASK' },
    BS: { icon: 'devicon-bootstrap-plain-wordmark ', label: 'Bootstrap' },
    VUE: { icon: 'devicon-vuejs-plain', label: 'VUE' },
    REDIS: { icon: 'devicon-redis-plain colored', label: 'REDIS' },

};

const PortfolioItem = ({ title, imgUrl, stack, link }) => {
    return (
        <motion.div 
            className='bg-gray-800 text-white overflow-hidden shadow-lg'
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.5, 0, 0.5, 1] }} // Smooth ease
            style={{ willChange: 'transform, opacity' }} // Hint to optimize
        >
            <a href={link} target="_blank" rel="noopener noreferrer" className="block">
                <img 
                    src={imgUrl} 
                    alt={title}
                    className="w-full h-48 object-cover transition duration-300 hover:opacity-80"
                />
                <div className='p-4'>
                    <h3 className="text-xl font-bold mb-3">{title}</h3>
                    <div className='flex flex-wrap gap-2'>
                        {stack.map(item => (
                            <motion.span 
                                key={item} 
                                className='inline-flex items-center px-2 py-1 bg-gray-700 rounded-full text-sm'
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }} 
                            >
                                <i className={`${icons[item]?.icon} mr-1`}></i>
                                {icons[item]?.label || item}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </a>
        </motion.div>
    );
};

export default PortfolioItem;

