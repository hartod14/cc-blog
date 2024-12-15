"use client"

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-md' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 py-1 flex items-center justify-between">
                <div className="flex items-center">
                    <Image
                        src="/gameblog.png"
                        width={200}
                        height={200}
                        alt="gameblog.logo"
                    />
                </div>

                <nav>
                    <ul className="flex space-x-6 text-white font-medium">
                        <li><a href="#" className="hover:text-orange-500">Home</a></li>
                        <li><a href="#" className="hover:text-orange-500">Blog Posts</a></li>
                        <li><a href="#" className="hover:text-orange-500">Categories</a></li>
                        <li><a href="#" className="hover:text-orange-500">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
