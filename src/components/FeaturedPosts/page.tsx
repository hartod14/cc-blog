"use client"

import { Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { formatDistanceToNow } from 'date-fns';

interface Post {
    title: string;
    excerpt: string;
    image: string;
    date: Date;
    author: string;
    categories: string[];
}

interface FeaturedPostsProps {
    posts: Post[];
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
    const maxDescriptionLength = 200;

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl text-center text-black mb-16 font-semibold">Featured Posts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="flex flex-col">
                            <Card className="shadow-lg">
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={post.image}
                                    alt={post.title}
                                />
                                <CardContent>
                                    <h3 className="text-xl font-semibold">{post.title}</h3>

                                    <div className="flex flex-wrap my-2">
                                        {post.categories.map((category, idx) => (
                                            <Chip
                                                key={idx}
                                                label={category}
                                                clickable
                                                size="small"
                                                className="mr-1 mb-1 text-xs text-white"
                                                sx={{
                                                    backgroundColor: '#F37901',
                                                    '&:hover': {
                                                        backgroundColor: '#D56F00',
                                                    },
                                                }}
                                            />
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between text-sm my-2">
                                        <p className="text-gray-400">
                                            {formatDistanceToNow(post.date)} ago
                                        </p>
                                        <p className="text-gray-400">By {post.author}</p>
                                    </div>

                                    <p className="text-gray-800 text-sm">
                                        {post.excerpt.length > maxDescriptionLength
                                            ? post.excerpt.substring(0, maxDescriptionLength) + '...'
                                            : post.excerpt}
                                    </p>

                                    <div className="flex justify-end mt-3">
                                        <Button variant="text" color="primary">
                                            Read More
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
