import React from 'react';
import { motion } from 'framer-motion';
import { 
    EnvelopeIcon, 
    PhoneIcon, 
    MapPinIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
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
                    $ ./contact.sh
                </motion.h2>
                <motion.p 
                    variants={itemVariants}
                    className="text-xl text-green-300 max-w-3xl mx-auto font-mono"
                >
                    # Ready to start your next project? Let's discuss how I can help bring your vision to life.
                </motion.p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
                className="max-w-4xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h3 
                    variants={itemVariants}
                    className="text-2xl font-bold text-green-400 mb-8 text-center font-mono"
                >
                    $ cat contact_info.txt
                </motion.h3>
                
                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="terminal-card p-6 rounded-lg text-center">
                        <EnvelopeIcon className="w-8 h-8 text-green-400 mx-auto mb-4" />
                        <h4 className="text-green-400 font-semibold font-mono mb-2">Email</h4>
                        <a 
                            href="mailto:tadiwachawanda@gmail.com"
                            className="text-green-300 font-mono hover:text-green-400 transition-colors duration-300"
                        >
                            tadiwachawanda@gmail.com
                        </a>
                    </div>
                    
                    <div className="terminal-card p-6 rounded-lg text-center">
                        <PhoneIcon className="w-8 h-8 text-green-400 mx-auto mb-4" />
                        <h4 className="text-green-400 font-semibold font-mono mb-2">Phone</h4>
                        <a 
                            href="tel:+27623204266"
                            className="text-green-300 font-mono hover:text-green-400 transition-colors duration-300"
                        >
                            +27 62 320 4266
                        </a>
                    </div>
                    
                    <div className="terminal-card p-6 rounded-lg text-center">
                        <MapPinIcon className="w-8 h-8 text-green-400 mx-auto mb-4" />
                        <h4 className="text-green-400 font-semibold font-mono mb-2">Location</h4>
                        <p className="text-green-300 font-mono">Remote / Worldwide</p>
                    </div>
                </motion.div>

                {/* Response Time */}
                <motion.div 
                    variants={itemVariants}
                    className="terminal-card p-6 rounded-lg text-center"
                >
                    <h4 className="text-green-400 font-semibold mb-2 font-mono">Response Time</h4>
                    <p className="text-green-300 text-sm font-mono">
                        # I typically respond within 2-4 hours during business hours
                    </p>
                </motion.div>

                {/* Call to Action */}
                <motion.div 
                    variants={itemVariants}
                    className="text-center mt-12"
                >
                    <a
                        href="mailto:tadiwachawanda@gmail.com"
                        className="inline-flex items-center px-8 py-4 bg-green-500/10 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-black transition-all duration-300 font-mono"
                    >
                        <EnvelopeIcon className="w-5 h-5 mr-2" />
                        <span className="text-green-500 mr-1">$</span>
                        mailto:tadiwachawanda@gmail.com
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Contact;
