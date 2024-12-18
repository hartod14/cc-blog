"use client";

import { useState, useEffect } from "react";
import PostList from "@/components/PostPage/postPage";
import contentfulClient from "@/contentful/contentfulClient";
import { TypeBlogPostSkeleton } from "@/contentful/types/blogPost.types";
import { Entry } from "contentful";


const getBlogPostsContentful = async (): Promise<Entry<TypeBlogPostSkeleton>[]> => {
    try {
        const data = await contentfulClient.getEntries<TypeBlogPostSkeleton>();
        return data?.items || [];
    } catch (err) {
        console.error(err);
        return [];
    }
};

export default function PostPage() {
    const [posts, setPosts] = useState<Entry<TypeBlogPostSkeleton>[]>([]); // Define state with the correct type
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const categories = ["All", "E-Sport", "Console", "RPG", "PC"];

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getBlogPostsContentful();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    const filteredPosts = posts.filter((post) => {
        const title = post.fields.title;
        const postCategories = post.fields.categories;

        const matchesSearch = typeof title === "string" && title.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            activeCategory === "All" || (Array.isArray(postCategories) && postCategories.includes(activeCategory));

        return matchesSearch && matchesCategory;
    });


    return (
        <div>
            <section className="bg-gray-900 text-white">
                <div className="relative w-full h-[240px] bg-black">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/post/banner.jpg')" }}
                    ></div>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
                        <p className="text-lg md:text-xl max-w-2xl">
                            Latest Game News, Updates, and Insights
                        </p>
                    </div>
                </div>
            </section>

            <div className="flex flex-col md:flex-row gap-6 p-6 max-w-5xl mx-auto">
                <aside className="top-4 bg-white shadow-md rounded-lg p-4 flex flex-wrap md:flex-col gap-4 min-w-fit">
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

                <main className="flex-1">
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Search articles"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full p-2 border rounded-md focus:ring focus:ring-[#f5aa5f] outline-none"
                        />
                    </div>

                    <PostList posts={filteredPosts} />
                </main>
            </div>
        </div>
    );
}