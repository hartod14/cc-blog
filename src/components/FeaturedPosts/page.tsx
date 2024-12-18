"use client"

import { useState, useEffect } from "react"
import contentfulClient from '@/contentful/contentfulClient';
import {
  IContentfulAsset,
  TypeBlogPostSkeleton,
} from "@/contentful/types/blogPost.types";
import { useParams } from "next/navigation";
import RichText from "@/components/Global/RichText";

export default function PostDetail() {
  const params = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>();

  const fetchPost = async () => {
    try {
      const data = await contentfulClient.getEntries<TypeBlogPostSkeleton>({
        content_type: "blogPost",
        limit: 1,
        "fields.slug": params.slug
      })

      setPost(data.items[0].fields)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div>
      {post && (
        <div className="mt-12 p-10">
          <div>
            <img
              src={`https:${(post?.image as IContentfulAsset)?.fields.file.url}`}
              alt={post?.title}
              className="w-full h-40 object-cover"
            />
          </div>
          <div className="tex-5xl text-black font-semibold">
            {post?.title}
          </div>
          <RichText document={post?.description} />
        </div>
      )
      }
    </div>
  )
}