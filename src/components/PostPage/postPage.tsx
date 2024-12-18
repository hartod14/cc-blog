import { formatDistanceToNow } from "date-fns";
import Link from "next/link";

export default function PostList({ posts }: any) {
    const maxDescriptionLength = 200;

    if (!posts.length) {
        return <p className="text-center text-gray-500">No posts found.</p>;
    }

    return (
        <div>
            {posts.map((post: any, index: any) => (
                <div
                    key={index}
                    className="bg-white shadow-lg rounded-md overflow-hidden mb-6 flex flex-col md:flex-row"
                >
                    {/* Image */}
                    <div className="w-full flex-1 md:w-1/3">
                        <img
                            src={`https:${post.fields.image?.fields.file.url}`}
                            alt={post.fields.title}
                            className="object-cover w-full h-48 md:h-full"
                        />
                    </div>
                    {/* Content */}
                    <div className="p-4 flex-1">
                        <h3 className="text-xl font-semibold text-gray-800">{post.fields.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {post.fields.categories.map((category: any, idx: any) => (
                                <Link
                                    target="_blank"
                                    href={`/categories/${category}`}
                                    key={idx}
                                    className="bg-orange-500 text-white text-xs px-2 py-1 rounded-xl"
                                >
                                    {category}
                                </Link>
                            ))}
                        </div>
                        <div className="text-sm text-gray-500 mt-2">
                            {formatDistanceToNow(new Date(post.fields.date), { addSuffix: true })} | By{" "}
                            {post.fields.author}
                        </div>
                        <p className="text-gray-700 text-sm mb-4">
                            {post.fields.shortDescription.length > maxDescriptionLength
                                ? post.fields.shortDescription.substring(0, maxDescriptionLength) + "..."
                                : post.fields.shortDescription}
                        </p>
                        <a
                            href={`/blog/${post.fields.slug}`}
                            className="mt-4 inline-block text-[#F37901] hover:underline"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
