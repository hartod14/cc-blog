import { formatDistanceToNow } from 'date-fns';
import contentfulClient from '@/contentful/contentfulClient';
import {
    TypeBlogPostSkeleton,
    IContentfulAsset,
} from "@/contentful/types/blogPost.types";
import Link from 'next/link';

const getBlogPostsContentful = async () => {
    try {
        const data = await contentfulClient.getEntries<TypeBlogPostSkeleton>()
        return data
    } catch (err) {
        console.log(err);
    }
}

export default async function FeaturedPosts() {
    const maxDescriptionLength = 200;
    const posts = await getBlogPostsContentful();
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl text-center mb-16 font-semibold">Featured Posts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {posts && posts.items?.map((post, index) => (
                        <div key={index} className="card bg-gray-100 shadow-lg">
                            <Link href={`posts/${post.fields.slug}`}>
                                <figure>
                                    <img
                                        src={`https:${(post.fields.image as IContentfulAsset)?.fields.file.url}`}
                                        alt={post.fields.title}
                                        className="w-full h-40 object-cover"
                                    />
                                </figure>
                            </Link>
                            <div className="card-body">
                                <h3 className="text-xl font-bold">{post.fields.title}</h3>
                                <div className="flex flex-wrap gap-2 my-2">
                                    {post.fields.categories.map((category, idx) => (
                                        <span
                                            key={idx}
                                            className="badge badge-primary bg-orange-500 text-white"
                                        >
                                            {category}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>{formatDistanceToNow(post.fields.date)} ago</span>
                                    <span>By {post.fields.author}</span>
                                </div>
                                {/* <p className="text-gray-700 text-sm mt-2">
                                    {post.fields.description.length > maxDescriptionLength
                                        ? post.fields.description.substring(0, maxDescriptionLength) + '...'
                                        : post.fields.description}
                                </p> */}
                                <Link href={`posts/${post.fields.slug}`}>
                                    <div className="card-actions justify-end mt-3">
                                        <button className="btn btn-sm btn-outline btn-primary">Read More</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
