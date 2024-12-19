import Image from 'next/image';
import React from 'react';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center mb-6 md:mb-0">
                        <Image
                            src="/gameblog.png"
                            width={150}
                            height={150}
                            alt="gameblog.logo"
                        />
                    </div>

                    <nav className="mb-6 md:mb-0">
                        <ul className="flex space-x-6">
                            <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
                            <li><Link href="/posts" className="hover:text-orange-500">Blog Posts</Link></li>
                            <li><Link href="/categories" className="hover:text-orange-500">Categories</Link></li>
                            <li><Link href="/about-us" className="hover:text-orange-500">About</Link></li>
                        </ul>
                    </nav>

                    <div className="text-center md:text-right mb-6 md:mb-0">
                        <p>Contact Us:</p>
                        <p>Email: contact@gameblog.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="mb-4">Follow Us on Social Media:</p>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://facebook.com"
                            className="text-blue-600 hover:text-blue-800"
                            aria-label="Follow us on Facebook"
                        >
                            <Facebook fontSize="large" />
                        </a>
                        <a
                            href="https://twitter.com"
                            className="text-blue-400 hover:text-blue-600"
                            aria-label="Follow us on Twitter"
                        >
                            <Twitter fontSize="large" />
                        </a>
                        <a
                            href="https://instagram.com"
                            className="text-pink-600 hover:text-pink-800"
                            aria-label="Follow us on Instagram"
                        >
                            <Instagram fontSize="large" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            className="text-blue-700 hover:text-blue-900"
                            aria-label="Follow us on LinkedIn"
                        >
                            <LinkedIn fontSize="large" />
                        </a>
                    </div>
                </div>

                <div className="text-center mt-8 border-t border-gray-700 pt-4">
                    <p>&copy; {new Date().getFullYear()} GameBlog. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
