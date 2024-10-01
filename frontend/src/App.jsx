import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';

function App() {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <div className="sticky top-0 z-10 bg-gray-900 shadow-md">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Navbar />
                </div>
            </div>
            
            <main>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Hero />
                </div>
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
                    <About />
                    <Portfolio />
                    <Contact />
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default App;
