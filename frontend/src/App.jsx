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
        <div className="bg-black min-h-screen text-green-400 overflow-x-hidden font-mono">
            {/* Matrix Background Effect */}
            <div className="matrix-bg"></div>
            
            {/* Navigation */}
            <motion.div 
                className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-green-500/30"
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
                <section id="about" className="py-12">
                    <Suspense fallback={<LoadingSpinner />}>
                        <About />
                    </Suspense>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-12 bg-black/50">
                    <Suspense fallback={<LoadingSpinner />}>
                        <Skills />
                    </Suspense>
                </section>

                {/* Portfolio Section */}
                <section id="portfolio" className="py-12">
                    <Suspense fallback={<LoadingSpinner />}>
                        <Portfolio />
                    </Suspense>
                </section>
                {/* Security Expertise */}
                <section id="security" className="py-12">
                    <Suspense fallback={<LoadingSpinner />}>
                        <SecurityExpertise />
                    </Suspense>
                </section>

                {/* Performance Metrics */}
                <section id="performance" className="py-12 bg-black/50">
                    <Suspense fallback={<LoadingSpinner />}>
                        <PerformanceMetrics />
                    </Suspense>
                </section>


                {/* Contact Section */}
                <section id="contact" className="py-12">
                    <Suspense fallback={<LoadingSpinner />}>
                        <Contact />
                    </Suspense>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-green-500/30 bg-black/50">
                <Footer />
            </footer>

            {/* Performance monitoring */}
            <div id="performance-metrics" className="hidden"></div>
        </div>
    );
}

export default App;
