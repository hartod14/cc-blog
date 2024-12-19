"use client";

import { useState, useEffect } from "react";
import contentfulClient from "@/contentful/contentfulClient";
import {
    IContentfulAsset,
    TypeBlogPostSkeleton,
} from "@/contentful/types/blogPost.types";
import { useParams } from "next/navigation";
import RichText from "@/components/Global/RichText";
import Link from "next/link";
import { formatDistanceToNow } from 'date-fns';
import Image from "next/image";

export default function PostDetail() {
    const params = useParams<{ slug: string }>();
    const [post, setPost] = useState<any>();
    const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

    const fetchPost = async () => {
        try {
            const data = await contentfulClient.getEntries<TypeBlogPostSkeleton>({
                content_type: "blogPost",
                limit: 1,
                "fields.slug": params.slug,
            });

            setPost(data.items[0].fields);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchRelatedPosts = async () => {
        try {
            const data = await contentfulClient.getEntries<TypeBlogPostSkeleton>({
                content_type: "blogPost",
                limit: 3,
                "fields.slug[ne]": params.slug,
            });

            setRelatedPosts(data.items.map((item) => item.fields));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPost();
        fetchRelatedPosts();
    }, []);

    return (
        <div className="container mx-auto px-4 md:px-22 lg:px-48 mt-16 sm:mt-24 md:mt-28 lg:mt-32">
            {post && (
                <div className="">
                    <div className="mb-6">
                        <Image
                            width={720}
                            height={480}
                            src={`https:${(post?.image as IContentfulAsset)?.fields.file.url}`}
                            alt={post?.title}
                            className="w-full h-60 md:h-80 object-cover rounded-md"
                        />
                    </div>

                    <div className="text-4xl text-black font-semibold mb-4">{post?.title}</div>

                    <div className="text-gray-600 text-sm mb-6 flex items-center justify-between space-x-4">
                        <div>
                            <div className="flex flex-wrap gap-2">
                                {post.categories.map((category: any, idx: any) => (
                                    <Link
                                        href={`/categories`}
                                        key={idx}
                                        className="bg-orange-500 text-white text-xs px-2 py-1 rounded-xl"
                                    >
                                        {category}
                                    </Link>
                                ))}
                            </div>

                        </div>
                        <div className="flex flex-wrap gap-4">
                            <span>By <strong className="text-black">{post?.author || "Unknown Author"}</strong></span>
                            <span>&bull;</span>
                            {post?.date
                                ? `${formatDistanceToNow(new Date(post.date), { addSuffix: true })}`
                                : "Unknown Date"}
                        </div>
                    </div>

                    <RichText document={post?.description} />
                </div>
            )}

            {relatedPosts.length > 0 && (
                <section className="my-10 lg:my-16">
                    <h2 className="text-3xl font-semibold mb-6">More Article</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {relatedPosts.map((relatedPost, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <Link href={`/posts/${relatedPost.slug}`}>
                                    <figure className="block overflow-hidden rounded-t-lg">
                                        <img
                                            src={`https:${(relatedPost.image as IContentfulAsset)?.fields.file.url}`}
                                            alt={relatedPost.title}
                                            className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </figure>
                                </Link>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-2">{relatedPost.title}</h3>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {relatedPost.categories.map((category: any, idx: any) => (
                                            <Link
                                                href={`/categories`}
                                                key={idx}
                                                className="bg-orange-500 text-white text-xs px-2 py-1 rounded-xl"
                                            >
                                                {category}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                                        <span>{formatDistanceToNow(relatedPost.date)} ago</span>
                                        <span>By {relatedPost.author}</span>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        {relatedPost.shortDescription.length > 100
                                            ? relatedPost.shortDescription.substring(0, 100) + "..."
                                            : relatedPost.shortDescription}
                                    </p>
                                    <Link href={`/posts/${relatedPost.slug}`}>
                                        <button className="mt-4 text-sm text-orange-600 border border-orange-600 px-3 py-1 rounded hover:bg-orange-600 hover:text-white transition-colors duration-300">
                                            Read More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
