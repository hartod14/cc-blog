"use client"

import { useState } from "react";
import { TextField, Button } from "@mui/material";

const BlogPostsPage = () => {
    // Sample data for posts
    const posts = [
        {
            id: 1,
            title: "Understanding Game Mechanics",
            excerpt: "A deep dive into how game mechanics shape player experiences.",
            date: "Dec 15, 2024",
            category: "E-Sport",
            slug: "understanding-game-mechanics",
        },
        {
            id: 2,
            title: "Esports Trends in 2024",
            excerpt: "Analyzing the top trends shaping the esports scene.",
            date: "Dec 10, 2024",
            category: "Console",
            slug: "esports-trends-2024",
        },
        {
            id: 3,
            title: "Top 10 RPGs of All Time",
            excerpt: "Discover the best RPGs that have defined gaming history.",
            date: "Nov 25, 2024",
            category: "RPG",
            slug: "top-10-rpgs",
        },
        {
            id: 4,
            title: "Breaking Down Industry News",
            excerpt: "Key takeaways from the latest gaming industry updates.",
            date: "Nov 20, 2024",
            category: "PC",
            slug: "industry-news-breakdown",
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
                        <p className="text-lg md:text-xl max-w-2xl">
                            Latest Game News, Updates, and Insights
                        </p>
                    </div>
                </div>
            </section>
            <div style={{ display: "flex", gap: "2rem", padding: "2rem", maxWidth: "1200px", margin: "auto" }}>

                {/* Sidebar */}
                <aside style={{ flex: "1", maxWidth: "300px" }}>
                    <h2 style={{ color: "#1976d2", marginBottom: "1rem" }}>Categories</h2>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {categories.map((category) => (
                            <li
                                key={category}
                                style={{
                                    padding: "0.5rem 1rem",
                                    borderRadius: "8px",
                                    backgroundColor: activeCategory === category ? "#1976d2" : "#f5f5f5",
                                    color: activeCategory === category ? "#fff" : "#333",
                                    marginBottom: "0.5rem",
                                    cursor: "pointer",
                                }}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main content */}
                <main style={{ flex: "3" }}>
                    {/* Search bar */}
                    <div style={{ marginBottom: "2rem" }}>
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
                                <div
                                    key={post.id}
                                    style={{
                                        border: "1px solid #ddd",
                                        borderRadius: "8px",
                                        padding: "1rem",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    <h3 style={{ color: "#1976d2" }}>{post.title}</h3>
                                    <p style={{ color: "#666", margin: "0.5rem 0" }}>
                                        {post.date} | {post.category}
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>{post.excerpt}</p>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        href={`/blog/${post.slug}`}
                                        style={{ marginTop: "1rem" }}
                                    >
                                        Read More
                                    </Button>
                                </div>
                            ))
                        ) : (
                            <p style={{ textAlign: "center", color: "#999" }}>No posts found.</p>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
};

export default BlogPostsPage;
