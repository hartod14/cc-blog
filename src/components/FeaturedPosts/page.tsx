
import { formatDistanceToNow } from 'date-fns';
import contentfulClient from '@/contentful/contentfulClient';
import { TypeBlogPostSkeleton, IContentfulAsset } from '@/contentful/types/blogPost.types';
import Link from 'next/link';
import Image from 'next/image';


const getBlogPostsContentful = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeBlogPostSkeleton>({ limit: 6 });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default async function FeaturedPosts() {
  const maxDescriptionLength = 200;
  const posts = await getBlogPostsContentful();

  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-8 font-semibold">Featured Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts?.items?.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Link target='_blank' href={`posts/${post.fields.slug}`} aria-label={`Read more about ${post.fields.title}`}>
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
                  {post.fields.categories.map((category, idx) => (
                    <Link
                      href={`/categories`}
                      key={idx}
                      className="bg-orange-600 text-white font-bold text-xs px-2 py-1 rounded-xl"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{formatDistanceToNow(post.fields.date)} ago</span>
                  <span>By {post.fields.author}</span>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  {post.fields.shortDescription.length > maxDescriptionLength
                    ? post.fields.shortDescription.substring(0, maxDescriptionLength) + '...'
                    : post.fields.shortDescription}
                </p>
                <Link target='_blank' href={`posts/${post.fields.slug}`}>
                  <div className="text-right">
                    <button className="text-sm text-orange-600 border border-orange-600 px-3 py-1 font-semibold rounded hover:bg-orange-600 hover:text-white transition-colors duration-300">
                      Read More
                    </button>
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