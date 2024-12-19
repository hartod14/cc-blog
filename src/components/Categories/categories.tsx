"use client";

import { useState } from "react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { IContentfulAsset } from "@/contentful/types/blogPost.types";
import Image from "next/image";

function CategoriesSection({ category, postsByCategory }: any) {
    const [showFullPosts, setShowFullPosts] = useState(false);
    const posts = postsByCategory[category.name] || [];

    const toggleShowFullPosts = () => setShowFullPosts(!showFullPosts);

    return (
        <div className="mb-16">
            <h2 className="text-4xl font-extrabold text-orange bg-clip-text mb-2 flex items-center">
                {category.name}
                <span className="ml-4 flex-grow border-t-2 border-orange-500"></span>
            </h2>

            <p className="text-gray-500 text-lg font-medium mb-6">{category.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {posts.slice(0, 4).map((post: any, idx: any) => (
                    <PostCard key={idx} post={post} />
                ))}
            </div>

            {posts.length > 4 && !showFullPosts && (
                <div className="text-center mt-6">
                    <button
                        onClick={toggleShowFullPosts}
                        className="text-orange-500 mt-4 border border-orange-500 px-3 py-2 font-semibold rounded-lg hover:text-white hover:bg-orange-600"
                    >
                        Show More...
                    </button>
                </div>
            )}

            {showFullPosts && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                    {posts.slice(4).map((post: any, idx: any) => (
                        <PostCard key={idx} post={post} />
                    ))}
                </div>
            )}
        </div>
    );
}

function PostCard({ post }: any) {
    const maxDescriptionLength = 100;
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Link href={`posts/${post.fields.slug}`}>
                <figure className="block overflow-hidden rounded-t-lg">
                    <Image
                        width={720}
                        height={480}
                        src={`https:${(post.fields.image as IContentfulAsset)?.fields.file.url}`}
                        alt={post.fields.title}
                        className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                    />
                </figure>
            </Link>
            <div className="p-4">
                <h3 className="text-md font-semibold mb-2">{post.fields.title}</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                    {post.fields.categories.map((category: any, idx: any) => (
                        <div
                            key={idx}
                            className="bg-orange-600 text-white text-xs px-2 py-1 rounded-xl font-bold"
                        >
                            {category}
                        </div>
                    ))}
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>{formatDistanceToNow(new Date(post.fields.date))} ago</span>
                    <span>By {post.fields.author}</span>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                    {post.fields.shortDescription.length > maxDescriptionLength
                        ? post.fields.shortDescription.substring(0, maxDescriptionLength) + "..."
                        : post.fields.shortDescription}
                </p>
                <Link href={`posts/${post.fields.slug}`}>
                    <div className="text-right">
                        <button className="text-sm text-orange-600 border border-orange-600 px-3 py-1 font-semibold rounded hover:bg-orange-600 hover:text-white transition-colors duration-300">
                            Read More
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default CategoriesSection;
