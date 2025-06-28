import React from 'react';
import { motion } from 'framer-motion';
import { 
    BoltIcon, 
    ChartBarIcon, 
    ServerIcon, 
    GlobeAltIcon,
    CpuChipIcon,
    ClockIcon
} from '@heroicons/react/24/outline';

const PerformanceMetrics = () => {
    const metrics = [
        {
            title: 'Page Load Speed',
            value: '< 2s',
            description: 'Average page load time',
            icon: BoltIcon,
            color: 'text-green-400',
            bgColor: 'bg-green-500/10',
            borderColor: 'border-green-500/20'
        },
        {
            title: 'Uptime',
            value: '99.9%',
            description: 'Application availability',
            icon: ServerIcon,
            color: 'text-blue-400',
            bgColor: 'bg-blue-500/10',
            borderColor: 'border-blue-500/20'
        },
        {
            title: 'Performance Score',
            value: '95+',
            description: 'Lighthouse performance',
            icon: ChartBarIcon,
            color: 'text-purple-400',
            bgColor: 'bg-purple-500/10',
            borderColor: 'border-purple-500/20'
        },
        {
            title: 'Response Time',
            value: '< 200ms',
            description: 'API response time',
            icon: ClockIcon,
            color: 'text-yellow-400',
            bgColor: 'bg-yellow-500/10',
            borderColor: 'border-yellow-500/20'
        }
    ];

    const optimizationTechniques = [
        {
            title: 'Code Splitting',
            description: 'Dynamic imports and lazy loading for optimal bundle sizes',
            icon: CpuChipIcon,
            benefits: ['Reduced initial load time', 'Better caching', 'Improved user experience']
        },
        {
            title: 'Database Optimization',
            description: 'Query optimization, indexing, and connection pooling',
            icon: ServerIcon,
            benefits: ['Faster data retrieval', 'Reduced server load', 'Better scalability']
        },
        {
            title: 'CDN Implementation',
            description: 'Global content delivery for lightning-fast loading',
            icon: GlobeAltIcon,
            benefits: ['Global performance', 'Reduced latency', 'Better reliability']
        },
        {
            title: 'Caching Strategies',
            description: 'Multi-layer caching for optimal performance',
            icon: BoltIcon,
            benefits: ['Faster response times', 'Reduced server load', 'Better user experience']
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
                    Performance Optimization
                </motion.h2>
                <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-400 max-w-3xl mx-auto"
                >
                    Delivering lightning-fast applications through advanced optimization techniques 
                    and performance monitoring
                </motion.p>
            </motion.div>

            {/* Performance Metrics */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {metrics.map((metric) => {
                    const Icon = metric.icon;
                    return (
                        <motion.div
                            key={metric.title}
                            variants={itemVariants}
                            className={`p-6 rounded-xl border ${metric.bgColor} ${metric.borderColor} hover:scale-105 transition-transform duration-300`}
                        >
                            <div className="flex items-center mb-4">
                                <Icon className={`w-8 h-8 ${metric.color} mr-3`} />
                                <h3 className="text-lg font-semibold text-white">{metric.title}</h3>
                            </div>
                            <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                                {metric.value}
                            </div>
                            <p className="text-sm text-gray-400">{metric.description}</p>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Optimization Techniques */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h3 
                    variants={itemVariants}
                    className="text-3xl font-bold text-white text-center mb-12"
                >
                    Optimization Techniques
                </motion.h3>
                
                <motion.div 
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {optimizationTechniques.map((technique) => {
                        const Icon = technique.icon;
                        return (
                            <div
                                key={technique.title}
                                className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-500/50 transition-colors duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <Icon className="w-8 h-8 text-blue-400 mr-3" />
                                    <h4 className="text-xl font-semibold text-white">{technique.title}</h4>
                                </div>
                                <p className="text-gray-400 mb-4">{technique.description}</p>
                                <ul className="space-y-2">
                                    {technique.benefits.map((benefit) => (
                                        <li key={benefit} className="flex items-center text-sm text-gray-300">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>

        </div>
    );
};

export default PerformanceMetrics; 
