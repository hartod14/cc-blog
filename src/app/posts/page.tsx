"use client";

import { useState, useEffect } from "react";
import PostList from "@/components/PostPage/postPage";
import contentfulClient from "@/contentful/contentfulClient";
import { IPost, TypeBlogPostSkeleton } from "@/contentful/types/blogPost.types";
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
type AssetFields = {
    file: {
        url: string;
    };
};

type Asset = {
    fields: AssetFields;
};

type UnresolvedLink = {
    sys: {
        id: string;
    };
};

type ImageType = Asset | UnresolvedLink | { fields?: undefined };

const isAsset = (image: ImageType): image is Asset => {
    return (image as Asset).fields !== undefined;
};

const isUnresolvedLink = (image: ImageType): image is UnresolvedLink => {
    return (image as UnresolvedLink).sys !== undefined;
};

const mapContentfulToPost = (entry: Entry<TypeBlogPostSkeleton>): IPost => {
    return {
        fields: {
            title: typeof entry.fields.title === "string" ? entry.fields.title : "",

            image: entry.fields.image && (isAsset(entry.fields.image) || isUnresolvedLink(entry.fields.image))
                ? { fields: { file: { url: isAsset(entry.fields.image) ? entry.fields.image.fields.file.url : "" } } }
                : { fields: { file: { url: "" } } }, // Default empty image object

            categories: Array.isArray(entry.fields.categories) ? entry.fields.categories : [],

            date: typeof entry.fields.date === "string" ? entry.fields.date : "",

            author: typeof entry.fields.author === "string" ? entry.fields.author : "",

            shortDescription: typeof entry.fields.shortDescription === "string"
                ? entry.fields.shortDescription
                : "",

            slug: typeof entry.fields.slug === "string" ? entry.fields.slug : "",
        },
    };
};

export default function PostPage() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const categories = ["All", "E-Sport", "Console", "RPG", "PC"];

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getBlogPostsContentful();
            const mappedPosts = data.map(mapContentfulToPost); 
            setPosts(mappedPosts);
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
