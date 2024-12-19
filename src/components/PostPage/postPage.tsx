import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
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
                    <div className="w-full flex-1 md:w-1/3">
                        <Link target='_blank' href={`posts/${post.fields.slug}`}>
                            <Image
                                width={720}
                                height={480}
                                src={`https:${post.fields.image?.fields.file.url}`}
                                alt={post.fields.title}
                                className="object-cover w-full h-48 md:h-full hover:scale-105 transition-transform duration-300"
                            />
                        </Link>
                    </div>
                    <div className="p-4 flex-1">
                        <h3 className="text-xl font-semibold text-gray-800">{post.fields.title}</h3>
                        <div className="flex flex-wrap gap-2 my-2">
                            {post.fields.categories.map((category: any, idx: any) => (
                                <Link
                                    href={`/categories`}
                                    key={idx}
                                    className="bg-orange-600 text-white text-xs px-2 py-1 rounded-xl font-bold"
                                >
                                    {category}
                                </Link>
                            ))}
                        </div>
                        <div className="text-sm text-gray-500 mt-2 mb-1">
                            {formatDistanceToNow(new Date(post.fields.date), { addSuffix: true })} | By{" "}
                            {post.fields.author}
                        </div>
                        <p className="text-gray-700 text-sm mb-4">
                            {post.fields.shortDescription.length > maxDescriptionLength
                                ? post.fields.shortDescription.substring(0, maxDescriptionLength) + "..."
                                : post.fields.shortDescription}
                        </p>
                        <Link target='_blank' href={`posts/${post.fields.slug}`}>
                            <div className="text-right">
                                <button className="text-sm text-orange-600 border border-orange-600 px-3 py-1 rounded font-semibold hover:bg-orange-600 hover:text-white transition-colors duration-300">
                                    Read More
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}