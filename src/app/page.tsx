import FeaturedPosts from '@/components/FeaturedPosts/page';
import { Button, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const categories = [
    {
      name: 'Console',
      description: 'Discover the latest games and news for gaming consoles.',
      image: '/categories/console.png',
    },
    {
      name: 'E-Sport',
      description: 'Competitive gaming at its finest, with tournaments and top players.',
      image: '/categories/esport.jpg',
    },
    {
      name: 'RPG',
      description: 'Dive into rich, immersive worlds with role-playing games.',
      image: '/categories/rpg.jpg',
    },
    {
      name: 'PC',
      description: 'Explore the world of PC gaming with custom builds and the latest titles.',
      image: '/categories/pc.jpg',
    },
  ];

  const featuredPosts = [
    {
      title: 'Exploring the New Horizon Game',
      excerpt: 'Dive into the world of Horizon with our latest insights and updates. Explore the immersive landscapes, dynamic gameplay mechanics, and the stunning narrative that unfolds as you venture into the unknown. Horizon continues to set new benchmarks in the gaming industry with its innovation and breathtaking visuals.',
      image: '/banner.png',
      date: new Date(2024, 9, 15),
      author: 'John Doe',
      categories: ['Action', 'Adventure'],
    },
    {
      title: 'Mastering Your Skills in Valorant',
      excerpt: 'Tips and tricks to elevate your gameplay in Valorant. Learn advanced strategies, improve your aim, and unlock secrets to mastering each agent’s abilities. Whether you’re a beginner or an experienced player, these techniques will help you climb the ranks and dominate the battlefield.',
      image: '/valorant.jpg',
      date: new Date(2024, 8, 30), // Example date
      author: 'Jane Smith',
      categories: ['Shooter', 'Esports'],
    },
    {
      title: 'The Rise of Indie Games',
      excerpt: 'Discover how indie games are reshaping the gaming industry. With innovative storytelling, unique gameplay mechanics, and passionate communities, indie games have become a driving force in the gaming world. These small studios are pushing boundaries and creating experiences that rival AAA titles.',
      image: '/indie-games.jpg',
      date: new Date(2024, 7, 25), // Example date
      author: 'Mark Johnson',
      categories: ['Indie', 'Gaming Industry'],
    },
  ];

  return (
    <>
      <section className="bg-gray-900 text-white">
        <div className="relative w-full h-[700px] bg-black">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/banner.png')" }}
          ></div>

          <div className="absolute inset-0 bg-black bg-opacity-20"></div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Game Blog</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Dive into the latest news and updates from the gaming world. Explore reviews, tips, and insights about the hottest games!
            </p>
          </div>
        </div>
      </section>

      <FeaturedPosts posts={featuredPosts} />

      <section className="bg-gray-900  py-20 md:py-32">
        <div className="container mx-auto px-4 text-white">
          <h2 className="text-4xl text-center text-white mb-16 font-semibold">Hot Topic Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(0, 4).map((category, index) => (
              <Box
                key={index}
                className="flex flex-col items-center border border-gray-700 rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
              >
                <Link href="/about-us" className="w-full h-full p-4 ">
                  <h3 className="text-xl font-bold mb-3 text-orange">{category.name}</h3>

                  <Image
                    width={480}
                    height={240}
                    src={category.image}
                    alt={category.name}
                    className="w-full h-32 object-cover rounded-md mb-3"
                  />

                  <div className="text-center text-gray-400 text-sm">
                    {category.description}
                  </div>
                </Link>
              </Box>
            ))}
          </div>
        </div>
      </section>

      <section className="  py-20 md:py-32">
        <div className="container mx-auto px-4 text-white">
          <Box className="flex flex-col lg:flex-row gap-12 items-center justify-between">
            <div className="lg:w-1/2 mb-4 lg:mb-0">
              <Image width={720} height={720}
                src="/newslatter.png"
                alt="Subscribe to Newsletter"
                className="w-full h-96 object-cover rounded-md"
              />
            </div>

            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl text-black font-semibold mb-3">Stay Updated with Our Newsletter</h2>
              <p className="text-gray-800 mb-6">
                Get the latest gaming news, updates, and exclusive offers delivered straight to your inbox.
              </p>
              <Button
                variant="contained"
                className="bg-[#F37901] text-white hover:bg-[#D96A00] mt-3"
                size="large"
                href="#subscribe"
              >
                Subscribe Now
              </Button>
            </div>
          </Box>
        </div>
      </section>
    </>
  );
}
