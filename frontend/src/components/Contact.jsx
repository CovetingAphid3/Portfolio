import React from 'react';
import Title from './Title';

function Contact() {
    return (
        <div id="contact" className="text-white flex flex-col mb-10 mx-auto">
            <div className="flex flex-col justify-center items-center">
                <p className="text-3xl md:text-5xl font-bold">
                    <span className="text-crimson">Get</span> in touch
                </p>
                <p className='text-lg md:text-xl my-4 md:my-6 font-medium'>
                    Feel free to contact me via email at <a href="mailto:@tadiwachawanda@gmail.com" className="text-secondary underline">tadiwachawanda@gmail</a> or with the form below
                </p>
                <form
                    action="https://getform.io/f/paoxlqjb"
                    method="POST"
                    className="flex flex-col w-full md:w-7/12"
                >
                    <Title>Contact</Title>
                    <input
                        required
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <input
                        required
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <textarea
                        required
                        name="message"
                        placeholder="Message"
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="
                        bg-white text-primary
                        flex items-center justify-center text-[36px]
                        text-center px-8 py-3 w-max text-base font-medium rounded-md   
                        from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white hover:bg-blue hover:text-white"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
