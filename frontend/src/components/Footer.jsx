import React from 'react';
import { motion } from 'framer-motion';
import { 
    CodeBracketIcon,
    HeartIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center md:text-left"
                    >
                        <div className="flex items-center justify-center md:justify-start mb-4">
                            <CodeBracketIcon className="w-8 h-8 text-green-400 mr-3" />
                            <div>
                                <span className="text-green-500 font-bold text-xl font-mono">root@</span>
                                <span className="text-green-400 font-bold text-xl font-mono">portfolio</span>
                                <span className="text-green-500 font-mono">:~$</span>
                            </div>
                        </div>
                        <p className="text-green-300 text-sm font-mono">
                            # Full-stack developer specializing in performance, security, and scalable solutions
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-center"
                    >
                        <h3 className="text-green-400 font-semibold mb-4 font-mono">$ ls quick_links/</h3>
                        <div className="space-y-2">
                            {[
                                { name: 'About', href: '#about' },
                                { name: 'Skills', href: '#skills' },
                                { name: 'Portfolio', href: '#portfolio' },
                                { name: 'Contact', href: '#contact' }
                            ].map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block text-green-300 hover:text-green-400 transition-colors duration-300 text-sm font-mono"
                                >
                                    <span className="text-green-500 mr-1">$</span>
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center md:text-right"
                    >
                        <h3 className="text-green-400 font-semibold mb-4 font-mono">$ cat contact.txt</h3>
                        <div className="space-y-2">
                            <p className="text-green-300 text-sm font-mono">
                                <span className="text-green-500">#</span> tadiwachawanda@gmail.com
                            </p>
                            <p className="text-green-300 text-sm font-mono">
                                <span className="text-green-500">#</span> Available for remote work
                            </p>
                            <p className="text-green-300 text-sm font-mono">
                                <span className="text-green-500">#</span> Response time: 2-4 hours
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="border-t border-green-500/30 my-8"
                />

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
                >
                    <div className="text-green-300 text-sm font-mono">
                        <span className="text-green-500">$</span> echo "© {currentYear} All rights reserved"
                    </div>
                    
                    <div className="flex items-center space-x-4">
                        <span className="text-green-300 text-sm font-mono">
                            <span className="text-green-500">#</span> Made with
                        </span>
                        <HeartIcon className="w-4 h-4 text-green-400 animate-pulse" />
                        <span className="text-green-300 text-sm font-mono">
                            and lots of coffee
                        </span>
                    </div>
                </motion.div>

                {/* Terminal Status */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-8 p-4 terminal-card rounded-lg"
                >
                    <div className="flex items-center justify-between text-sm font-mono">
                        <span className="text-green-400">
                            <span className="text-green-500">root@portfolio:~$</span> status
                        </span>
                        <span className="text-green-300">
                            # Available for new projects
                        </span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
