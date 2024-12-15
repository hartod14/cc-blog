import React from 'react';

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo/Image */}
                <div className="flex items-center">
                    <img
                        src="/path-to-your-image/logo.png" 
                        alt="Logo" 
                        className="h-10 w-10 object-cover"
                    />
                </div>

                {/* Navigation Links */}
                <nav>
                    <ul className="flex space-x-6 text-gray-700 font-medium">
                        <li><a href="#" className="hover:text-blue-500">Home</a></li>
                        <li><a href="#" className="hover:text-blue-500">Blog Posts</a></li>
                        <li><a href="#" className="hover:text-blue-500">Categories</a></li>
                        <li><a href="#" className="hover:text-blue-500">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
