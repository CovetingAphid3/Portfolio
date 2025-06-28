import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Security', href: '#security' },
        { name: 'Performance', href: '#performance' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className={`py-4 transition-all duration-300 ${scrolled ? 'bg-black/95' : 'bg-transparent'}`}>
            <div className="flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center space-x-2"
                >
                    <span className="text-green-500 font-bold text-xl font-mono">root@</span>
                    <span className="text-green-400 font-bold text-xl font-mono">portfolio</span>
                    <span className="text-green-500 font-mono">:~$</span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-green-300 hover:text-green-400 font-mono text-sm transition-colors duration-300 relative group"
                        >
                            <span className="text-green-500 mr-1">$</span>
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                        </motion.a>
                    ))}
                    
                    {/* CTA Button */}
                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                        className="px-4 py-2 bg-green-500/10 border border-green-500 text-green-400 font-mono text-sm rounded-lg hover:bg-green-500 hover:text-black transition-all duration-300"
                    >
                        $ ./hire.sh
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-green-400 hover:text-green-300 transition-colors duration-300"
                    >
                        {isOpen ? (
                            <XMarkIcon className="w-6 h-6" />
                        ) : (
                            <Bars3Icon className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <motion.div
                initial={false}
                animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
            >
                <div className="pt-4 pb-2 space-y-2 border-t border-green-500/30 mt-4">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-green-300 hover:text-green-400 hover:bg-green-500/10 rounded-lg font-mono text-sm transition-all duration-300"
                        >
                            <span className="text-green-500 mr-2">$</span>
                            {item.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 bg-green-500/10 border border-green-500 text-green-400 rounded-lg font-mono text-sm hover:bg-green-500 hover:text-black transition-all duration-300 mx-4 mt-4"
                    >
                        $ ./hire.sh
                    </a>
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
