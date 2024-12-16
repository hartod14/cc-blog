"use client";

import { useState } from "react";
import { TextField, Button, Card, CardContent, CardMedia, Chip } from "@mui/material";
import { formatDistanceToNow } from "date-fns";

export default function Post() {
    // Sample data for posts
    const posts = [
        {
            id: 1,
            title: "Understanding Game Mechanics",
            excerpt: "A deep dive into how game mechanics shape player experiences.A deep dive into how game mechanics shape player experiences.A deep dive into how game mechanics shape player experiences.A deep dive into how game mechanics shape player experiences.",
            date: new Date(2024, 11, 15),
            category: "E-Sport",
            slug: "understanding-game-mechanics",
            image: "/post/banner.jpg",
            author: "John Doe",
        },
        {
            id: 2,
            title: "Esports Trends in 2024",
            excerpt: "Analyzing the top trends shaping the esports scene.",
            date: new Date(2024, 11, 10),
            category: "Console",
            slug: "esports-trends-2024",
            image: "/gameblog.png",
            author: "Jane Smith",
        },
        {
            id: 3,
            title: "Top 10 RPGs of All Time",
            excerpt: "Discover the best RPGs that have defined gaming history.",
            date: new Date(2024, 10, 25),
            category: "RPG",
            slug: "top-10-rpgs",
            image: "/newslatter.png",
            author: "Alice Johnson",
        },
        {
            id: 4,
            title: "Breaking Down Industry News",
            excerpt: "Key takeaways from the latest gaming industry updates.",
            date: new Date(2024, 10, 20),
            category: "PC",
            slug: "industry-news-breakdown",
            image: "/path/to/image4.jpg",
            author: "Bob Brown",
        },
    ];

    const categories = ["All", "E-Sport", "Console", "RPG", "PC"];
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    // Filter posts by search input and category
    const filteredPosts = posts.filter((post) => {
        const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = activeCategory === "All" || post.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const maxDescriptionLength = 200;

    return (
        <>
            <section className="bg-gray-900 text-white">
                <div className="relative w-full h-[240px] bg-black">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/post/banner.jpg')" }}
                    ></div>
                    <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
                        <p className="text-lg md:text-xl max-w-2xl">Latest Game News, Updates, and Insights</p>
                    </div>
                </div>
            </section>
            <div
                className="flex flex-col md:flex-row gap-6 p-6 max-w-5xl mx-auto"
            >
                {/* Sidebar - Categories */}
                <div>
                    <aside
                        className="top-4 bg-white shadow-md rounded-lg p-4 flex flex-wrap flex-row md:flex-col gap-4 overflow-x-auto md:overflow-visible"
                        style={{ minWidth: "fit-content" }}
                    >
                        {categories.map((category) => (
                            <div
                                key={category}
                                className={`cursor-pointer px-4 py-2 rounded-md ${activeCategory === category
                                    ? "bg-[#f5aa5f] text-white"
                                    : "bg-gray-200 text-gray-800"
                                    }`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </div>
                        ))}
                    </aside>
                </div>

                {/* Main content */}
                <main className="flex-1">
                    {/* Search bar */}
                    <div className="mb-6">
                        <TextField
                            variant="outlined"
                            label="Search articles"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            fullWidth
                        />
                    </div>

                    {/* Blog posts */}
                    <div>
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((post) => (
                                <Card
                                    key={post.id}
                                    className="shadow-lg mb-6 flex flex-col md:flex-row items-start"
                                >
                                    {/* Image */}
                                    <div className="w-full flex-1 p-3">
                                        <CardMedia
                                            className="object-cover h-64 w-100"
                                            component="img"
                                            image={post.image}
                                            alt={post.title}
                                        />
                                    </div>
                                    {/* Content */}
                                    <CardContent className="w-100 flex-1 p-4">
                                        <h3 className="text-xl font-semibold">{post.title}</h3>
                                        <Chip
                                            label={post.category}
                                            clickable
                                            size="small"
                                            className="text-white my-2"
                                            sx={{
                                                backgroundColor: "#F37901",
                                                "&:hover": { backgroundColor: "#D56F00" },
                                            }}
                                        />
                                        <div className="text-sm text-gray-500 my-2">
                                            {formatDistanceToNow(post.date, { addSuffix: true })} | By{" "}
                                            {post.author}
                                        </div>
                                        <p className="text-gray-800 text-sm mb-4">
                                            {post.excerpt.length > maxDescriptionLength
                                                ? post.excerpt.substring(0, maxDescriptionLength) + "..."
                                                : post.excerpt}
                                        </p>
                                        <Button variant="text" color="primary" href={`/blog/${post.slug}`}>
                                            Read More
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">No posts found.</p>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
}
