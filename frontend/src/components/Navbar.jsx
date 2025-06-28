import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setToggle(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`w-full py-4 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex space-x-8"
          >
            {navLinks.map((nav, index) => (
              <li key={nav.id}>
                <button
                  onClick={() => handleNavClick(nav.id)}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm relative group"
                >
                  {nav.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
            >
              Get Started
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:hidden text-white hover:text-gray-300 transition-colors duration-300"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: toggle ? 1 : 0,
            height: toggle ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navLinks.map((nav) => (
              <button
                key={nav.id}
                onClick={() => handleNavClick(nav.id)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors duration-300"
              >
                {nav.title}
              </button>
            ))}
            <div className="px-4 pt-4">
              <a
                href="#contact"
                className="block w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg text-center hover:scale-105 transition-transform duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
