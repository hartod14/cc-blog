import FeaturedPosts from '@/components/FeaturedPosts/page';
import Link from 'next/link';
import Image from 'next/image';

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
      excerpt: 'Dive into the world of Horizon with our latest insights and updates...',
      image: '/banner.png',
      date: new Date(2024, 9, 15),
      author: 'John Doe',
      categories: ['Action', 'Adventure'],
    },
    {
      title: 'Mastering Your Skills in Valorant',
      excerpt: 'Tips and tricks to elevate your gameplay in Valorant...',
      image: '/valorant.jpg',
      date: new Date(2024, 8, 30),
      author: 'Jane Smith',
      categories: ['Shooter', 'Esports'],
    },
  ];

  return (
    <>
      <section className="bg-gray-900 text-white">
        <div className="relative w-full h-[700px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/banner.png')" }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Game Blog</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Dive into the latest news and updates from the gaming world.
            </p>
          </div>
        </div>
      </section>

      <FeaturedPosts />

      <section className="bg-gray-900 py-20 md:py-32">
        <div className="container mx-auto px-4 text-white">
          <h2 className="text-4xl text-center mb-16 font-semibold">Hot Topic Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                href="/about-us"
                className="card bg-gray-800 shadow-lg rounded-lg hover:shadow-2xl transition-all"
              >
                <figure>
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={480}
                    height={240}
                    className="w-full h-32 object-cover"
                  />
                </figure>
                <div className="card-body text-center">
                  <h3 className="text-xl font-bold text-orange-500">{category.name}</h3>
                  <p className="text-gray-400 text-sm">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-gray-800">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
            <div className="lg:w-1/2">
              <Image
                src="/newslatter.png"
                alt="Subscribe to Newsletter"
                width={720}
                height={720}
                className="rounded-lg"
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-3">Stay Updated with Our Newsletter</h2>
              <p className="mb-6">Get the latest gaming news delivered to your inbox.</p>
              <button className="btn btn-primary bg-orange-500 hover:bg-orange-600 border-none text-white">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
