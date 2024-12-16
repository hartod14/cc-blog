"use client"

import Image from 'next/image';
import Link from 'next/link';
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
                        <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
                        <li><Link href="/posts" className="hover:text-orange-500">Blog Posts</Link></li>
                        <li><Link href="/categoriest" className="hover:text-orange-500">Categories</Link></li>
                        <li><Link href="/about-us" className="hover:text-orange-500">About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
