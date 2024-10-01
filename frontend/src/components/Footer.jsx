import React from 'react';
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
    <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                <div className="mb-8 md:mb-0 md:w-1/3">
                    <img
                        src={logo}
                        alt="T.Chawanda"
                        className="w-48 h-auto object-contain mb-4"
                    />
                    <p className="text-gray-400 max-w-xs">
                        Feel free to reach out to me if you have any questions or just want to say hi.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
                    {footerLinks.map((footerlink) => (
                        <div key={footerlink.title}>
                            <h4 className="font-semibold text-lg mb-4">
                                {footerlink.title}
                            </h4>
                            <ul className="space-y-2">
                                {footerlink.links.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.link} className="text-gray-400 hover:text-white transition-colors">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm mb-4 md:mb-0">
                    Copyright © {new Date().getFullYear()} T.Chawanda. All Rights Reserved.
                </p>
                <div className="flex space-x-4">
                    {socialMedia.map((social) => (
                        <a
                            key={social.id}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <img
                                src={social.icon}
                                alt={social.id}
                                className="w-6 h-6 object-contain"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
