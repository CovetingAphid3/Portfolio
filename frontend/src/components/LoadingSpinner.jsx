import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center py-20">
            <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="terminal-loading mx-auto mb-4"></div>
                <p className="text-green-400 font-mono text-sm">
                    <span className="text-green-500">$</span> loading component...
                </p>
            </motion.div>
        </div>
    );
};

export default LoadingSpinner; 