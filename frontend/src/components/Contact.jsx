import React from 'react';

function Contact() {
    return (
        <section id="contact" className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-crimson">Get</span> in touch
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300">
                        Feel free to contact me via email at{' '}
                        <a href="mailto:tadiwachawanda@gmail.com" className="text-crimson underline hover:text-white transition-colors">
                            tadiwachawanda@gmail.com
                        </a>
                        {' '}or with the form below
                    </p>
                </div>
                <form
                    action="https://getform.io/f/paoxlqjb"
                    method="POST"
                    className="max-w-2xl mx-auto"
                >
                    <div className="mb-6">
                        <input
                            required
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-crimson transition-colors"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-crimson transition-colors"
                        />
                    </div>
                    <div className="mb-6">
                        <textarea
                            required
                            name="message"
                            placeholder="Message"
                            rows="6"
                            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-crimson transition-colors"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-crimson text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-red-700 transition-colors"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
