import { Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load components for better performance
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const SecurityExpertise = lazy(() => import('./components/SecurityExpertise'));
const PerformanceMetrics = lazy(() => import('./components/PerformanceMetrics'));
const Contact = lazy(() => import('./components/Contact'));
// const Testimonials = lazy(() => import('./components/Testimonials'));

function App() {
    return (
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen text-gray-100 overflow-x-hidden">
            {/* Navigation */}
            <motion.div 
                className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Navbar />
                </div>
            </motion.div>
            
            {/* Main Content */}
            <main className="relative">
                {/* Hero Section */}
                <section id="home">
                    <Hero />
                </section>

                {/* About Section */}
                <section id="about" className="py-20">
                    <Suspense fallback={<LoadingSpinner />}>
                        <About />
                    </Suspense>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-20 bg-slate-800/30">
                    <Suspense fallback={<LoadingSpinner />}>
                        <Skills />
                    </Suspense>
                </section>

                {/* Security Expertise */}
                <section id="security" className="py-20">
                    <Suspense fallback={<LoadingSpinner />}>
                        <SecurityExpertise />
                    </Suspense>
                </section>

                {/* Performance Metrics */}
                <section id="performance" className="py-20 bg-slate-800/30">
                    <Suspense fallback={<LoadingSpinner />}>
                        <PerformanceMetrics />
                    </Suspense>
                </section>

                {/* Portfolio Section */}
                <section id="portfolio" className="py-20">
                    <Suspense fallback={<LoadingSpinner />}>
                        <Portfolio />
                    </Suspense>
                </section>


                {/* Contact Section */}
                <section id="contact" className="py-20">
                    <Suspense fallback={<LoadingSpinner />}>
                        <Contact />
                    </Suspense>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-700/50 bg-slate-900/50">
                <Footer />
            </footer>

            {/* Performance monitoring */}
            <div id="performance-metrics" className="hidden"></div>
        </div>
    );
}

export default App;
