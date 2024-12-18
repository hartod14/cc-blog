import contentfulClient from "@/contentful/contentfulClient";
import { TypeBlogPostSkeleton } from "@/contentful/types/blogPost.types";

export const getBlogPostsContentful = async () => {
    try {
        const data = await contentfulClient.getEntries<TypeBlogPostSkeleton>();
        return data;
    } catch (err) {
        console.error("Error fetching blog posts:", err);
        return { items: [] };
    }
};
