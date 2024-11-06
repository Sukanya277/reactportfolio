import React, { useState } from 'react';
import 'typeface-dancing-script';
import '@fontsource/inter'; // Defaults to weight 400
import MyImage from '../../assets/images/3.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Toggle Button for mobile/tablet */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 left-4 text-2xl text-gray-700 z-50"
            >
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 w-80 h-full bg-white p-4 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0`}
            >
                <div className="flex justify-center p-9">
                    <div>
                        <img
                            src={MyImage}
                            className="border-4 border-[#a5a6ff] m-auto max-w-[100px] h-[100px] rounded-full"
                            alt="Description"
                        />
                        <div className="font-dancing relative block italic text-[rgba(19,15,73,0.07)] text-5xl font-extrabold">
                            Robert Elisc
                            <div className="absolute left-[48%] not-italic top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] font-sans text-lg text-[#130f49]">
                                Robert Elisc
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center p-9 text-sm text-slate-600 text-center">
                    <div>
                        <ul className="leading-10">
                            {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`/${item.toLowerCase()}`}
                                        className="hover:text-[#a5a6ff] block"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center p-9 gap-4">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 border-2 bg-slate-200 p-2 rounded-full h-auto w-[45px]"
                    >
                        <FontAwesomeIcon icon={faFacebookF} className="m-auto flex" />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-600 border-2 bg-slate-200 p-2 rounded-full h-auto w-[45px]"
                    >
                        <FontAwesomeIcon icon={faTwitter} className="m-auto flex" />
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:text-pink-700 border-2 bg-slate-200 p-2 rounded-full h-auto w-[45px]"
                    >
                        <FontAwesomeIcon icon={faInstagram} className="m-auto flex" />
                    </a>
                </div>

                <div className="flex justify-center px-10 text-sm text-slate-600 text-center">
                    Copyright © 2024 Robert Elisc.<br />
                    All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
