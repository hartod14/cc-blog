"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isPostDetailPage = pathname.startsWith("/posts/");

    useEffect(() => {
        if (isPostDetailPage) return;

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isPostDetailPage]);

    // Close the menu when a link is clicked
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    // Function to check if the current page is the active one
    const getLinkClass = (link: string) => {
        return pathname === link
            ? "text-orange-500" // Active link
            : "text-white hover:text-orange-500"; // Inactive link
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isPostDetailPage || isScrolled ? "bg-black shadow-md" : "bg-transparent"}`}
        >
            <div className="container mx-auto px-4 py-1 flex items-center justify-between">
                <Link href={"/"} className="flex items-center">
                    <Image
                        src="/gameblog.png"
                        width={200}
                        height={200}
                        alt="gameblog.logo"
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex">
                    <ul className="flex space-x-6 font-medium">
                        <li>
                            <Link href="/" className={getLinkClass("/")}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/posts" className={getLinkClass("/posts")}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/categories" className={getLinkClass("/categories")}>
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-us" className={getLinkClass("/about-us")}>
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Burger Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="space-y-2">
                        <span className="block w-6 h-1 bg-white"></span>
                        <span className="block w-6 h-1 bg-white"></span>
                        <span className="block w-6 h-1 bg-white"></span>
                    </div>
                </button>
            </div>

            {/* Mobile Sidebar Menu */}
            {isMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
                    onClick={() => setIsMenuOpen(false)} // Close the menu when clicking outside
                >
                    <div
                        className="bg-gray-900 p-6 rounded-md w-3/4"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sidebar
                    >
                        <ul className="space-y-6 text-center text-lg font-medium">
                            <li>
                                <Link href="/" className={getLinkClass("/")} onClick={handleLinkClick}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/posts" className={getLinkClass("/posts")} onClick={handleLinkClick}>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/categories" className={getLinkClass("/categories")} onClick={handleLinkClick}>
                                    Categories
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us" className={getLinkClass("/about-us")} onClick={handleLinkClick}>
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
}
