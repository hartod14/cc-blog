"use client"
import contentfulClient from "@/contentful/contentfulClient";
import { TypeBlogPostSkeleton } from "@/contentful/types/blogPost.types";
import CategoriesSection from "@/components/Categories/categories";
import { useState, useEffect } from "react";

const categories = [
  { name: "Console", description: "Discover the latest games and news for gaming consoles." },
  { name: "E-Sport", description: "Competitive gaming at its finest, with tournaments and top players." },
  { name: "RPG", description: "Dive into rich, immersive worlds with role-playing games." },
  { name: "PC", description: "Explore the world of PC gaming with custom builds and the latest titles." },
];

const getBlogPostsContentful = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeBlogPostSkeleton>();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default function CategoriesPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPosts = await getBlogPostsContentful();
      setPosts(fetchedPosts?.items || []);
      setLoading(false);
    };
    fetchData();
  }, []);

  const postsByCategory = organizePostsByCategory(posts);

  return (
    <div>
      <section className="bg-gray-900 text-white">
        <div className="relative w-full h-[240px] bg-black">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/categories/banner.jpg')" }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
            <p className="text-lg md:text-xl max-w-2xl">Categories For You</p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 md:px-16 lg:px-32 py-8">
        {loading
          ? categories.map((_, index) => (
              <div
                key={index}
                className="mb-6 bg-gray-200 animate-pulse rounded-md p-4"
              >
                <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
                <div className="h-4 bg-gray-300 rounded-md"></div>
              </div>
            ))
          : categories.map((category, index) => (
              <CategoriesSection
                key={index}
                category={category}
                postsByCategory={postsByCategory}
              />
            ))}
      </div>
    </div>
  );
}

function organizePostsByCategory(posts: any) {
  return posts.reduce((acc: any, post: any) => {
    post.fields.categories.forEach((category: any) => {
      if (!acc[category]) acc[category] = [];
      acc[category].push(post);
    });
    return acc;
  }, {});
}
