"use client"

import { useState, useEffect } from "react"
import contentfulClient from '@/contentful/contentfulClient';
import {
    IContentfulAsset,
    TypeBlogPostSkeleton,
} from "@/contentful/types/blogPost.types";
import { useParams } from "next/navigation";
import RichText from "@/components/Global/RichText";
import { Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export default function PostDetail() {
    const params = useParams<{ slug: string }>();
    const [post, setPost] = useState<Entry<TypeBlogPostSkeleton> | null>(null);

    const fetchPost = async () => {
        try {
            const data = await contentfulClient.getEntries<TypeBlogPostSkeleton>({
                content_type: "blogPost",
                limit: 1,
                "fields.slug": params.slug
            });

            setPost(data?.items[0] || null);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPost();
    }, [params.slug]);

    return (
        <div>
            {post && (
                <div className="mt-12 p-10">
                    <div>
                        <img
                            src={`https:${(post?.fields.image as IContentfulAsset)?.fields.file.url}`}
                            alt={String(post?.fields.title)}
                            className="w-full h-40 object-cover"
                        />
                    </div>
                    <div className="text-5xl text-black font-semibold">
                        {String(post?.fields.title)}
                    </div>
                    <RichText document={post?.fields.description as Document} />
                </div>
            )}
        </div>
    );
}
