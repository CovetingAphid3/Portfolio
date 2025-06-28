import React from 'react';
import { motion } from 'framer-motion';
import { 
    BoltIcon, 
    ChartBarIcon, 
    ClockIcon,
    ServerIcon,
    GlobeAltIcon,
    CpuChipIcon
} from '@heroicons/react/24/outline';

const PerformanceMetrics = () => {
    const metrics = [
        {
            icon: BoltIcon,
            title: 'Load Time',
            value: '< 2s',
            description: 'Average page load time across all projects',
            color: 'text-green-400'
        },
        {
            icon: ChartBarIcon,
            title: 'Performance Score',
            value: '98/100',
            description: 'Lighthouse performance score average',
            color: 'text-green-400'
        },
        {
            icon: ServerIcon,
            title: 'Uptime',
            value: '99.9%',
            description: 'Application availability and reliability',
            color: 'text-green-400'
        },
        {
            icon: GlobeAltIcon,
            title: 'Global CDN',
            value: '50ms',
            description: 'Average response time worldwide',
            color: 'text-green-400'
        }
    ];

    const optimizationTechniques = [
        {
            title: 'Code Splitting',
            description: 'Dynamic imports and lazy loading for optimal bundle sizes',
            icon: CpuChipIcon
        },
        {
            title: 'Caching Strategy',
            description: 'Multi-layer caching for static and dynamic content',
            icon: ServerIcon
        },
        {
            title: 'Image Optimization',
            description: 'WebP format, lazy loading, and responsive images',
            icon: GlobeAltIcon
        },
        {
            title: 'Database Optimization',
            description: 'Query optimization, indexing, and connection pooling',
            icon: ChartBarIcon
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
                    $ ./performance_metrics.sh
                </motion.h2>
                <motion.p 
                    variants={itemVariants}
                    className="text-xl text-green-300 max-w-3xl mx-auto font-mono"
                >
                    # Lightning-fast applications with optimized performance and user experience
                </motion.p>
            </motion.div>

            {/* Performance Metrics */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
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
                            className="terminal-card p-6 rounded-lg text-center hover:scale-105 transition-all duration-300"
                        >
                            <Icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                            <div className={`text-3xl font-bold mb-2 ${metric.color} font-mono`}>
                                {metric.value}
                            </div>
                            <h3 className="text-green-400 font-semibold mb-2 font-mono">
                                {metric.title}
                            </h3>
                            <p className="text-green-300 text-sm font-mono">
                                {metric.description}
                            </p>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Optimization Techniques */}
            <motion.div
                className="mb-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h3 
                    variants={itemVariants}
                    className="text-2xl font-bold text-green-400 mb-8 text-center font-mono"
                >
                    $ ls optimization_techniques/
                </motion.h3>
                
                <motion.div 
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {optimizationTechniques.map((technique) => {
                        const Icon = technique.icon;
                        return (
                            <div key={technique.title} className="terminal-card p-6 rounded-lg">
                                <div className="flex items-start">
                                    <Icon className="w-8 h-8 text-green-400 mr-4 mt-1" />
                                    <div>
                                        <h4 className="text-green-400 font-semibold mb-2 font-mono">
                                            {technique.title}
                                        </h4>
                                        <p className="text-green-300 text-sm font-mono">
                                            {technique.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {/* Performance Process */}
            <motion.div
                className="terminal-card p-8 rounded-lg"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h3 
                    variants={itemVariants}
                    className="text-2xl font-bold text-green-400 mb-8 text-center font-mono"
                >
                    $ cat performance_process.txt
                </motion.h3>
                
                <motion.div 
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <div className="text-center">
                        <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <ClockIcon className="w-8 h-8 text-green-400" />
                        </div>
                        <h4 className="text-green-400 font-semibold mb-2 font-mono">Measure</h4>
                        <p className="text-green-300 text-sm font-mono">
                            # Comprehensive performance analysis using industry-standard tools
                        </p>
                    </div>
                    
                    <div className="text-center">
                        <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <BoltIcon className="w-8 h-8 text-green-400" />
                        </div>
                        <h4 className="text-green-400 font-semibold mb-2 font-mono">Optimize</h4>
                        <p className="text-green-300 text-sm font-mono">
                            # Implement targeted optimizations based on performance bottlenecks
                        </p>
                    </div>
                    
                    <div className="text-center">
                        <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <ChartBarIcon className="w-8 h-8 text-green-400" />
                        </div>
                        <h4 className="text-green-400 font-semibold mb-2 font-mono">Monitor</h4>
                        <p className="text-green-300 text-sm font-mono">
                            # Continuous monitoring and performance tracking in production
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Performance Guarantee */}
            <motion.div
                className="mt-12 text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div variants={itemVariants} className="terminal-card p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">
                        $ echo "Performance Guarantee"
                    </h3>
                    <p className="text-green-300 mb-6 font-mono">
                        # Every application I build is optimized for speed and performance. 
                        I guarantee load times under 2 seconds and performance scores above 95/100.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center px-6 py-3 bg-green-500/10 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-black transition-all duration-300 font-mono"
                    >
                        <span className="text-green-500 mr-1">$</span>
                        ./start_optimization.sh
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default PerformanceMetrics; 
