import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link

export default function About() {
  return (
    <>
      <section className="bg-gray-900 text-white">
        <div className="relative w-full h-[400px] bg-black">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/about-us/banner.jpg')" }}
          ></div>

          <div className="absolute inset-0 bg-black bg-opacity-10"></div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About the GameBlog</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              History, Vission & Mission, and Our Teams
            </p>
          </div>
        </div>
      </section>
      <div className="bg-white text-black container mx-auto px-4 py-12">
        <section className="md:flex items-center gap-10 mb-12">
          <div className="md:flex-1 animate-up-down">
            <Image
              src="/about-us/pic1.png"
              alt="aboutus"
              width={720}
              height={720}
              className="object-cover w-full"
            />
          </div>
          <div className="py-8 md:flex-1">
            <h2 className="text-3xl font-semibold mb-4 text-center md:text-start text-primary">Blog History</h2>
            <p className="text-lg text-gray-800">
              Our blog started with a passion for gaming and a desire to share the latest news,
              updates, and insights about the gaming world. Initially, we focused on providing
              reviews for newly released games, but over time we expanded to include guides,
              opinion pieces, and game industry news. Today, we strive to deliver content that
              resonates with gamers of all types, keeping them informed about the latest trends
              and breakthroughs in the gaming community.
            </p>
          </div>
        </section>

        <section className="md:flex items-center gap-10 mb-12">
          <div className="md:flex-1 animate-up-down">
            <Image
              src="/about-us/pic2.png"
              alt="aboutus"
              width={720}
              height={720}
              className="object-cover w-full"
            />
          </div>
          <div className='py-8 order-last md:order-first md:flex-1'>
            <h2 className="text-3xl font-semibold text-center md:text-start text-primary mb-4">Mission</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-800">
                Our mission is to provide a reliable source of game news and updates, offering
                reviews, analysis, and perspectives on everything related to gaming. We aim to
                engage with our readers through high-quality content, fostering a community of
                passionate gamers who love discussing the latest game releases, trends, and
                innovations.
              </p>
            </div>
          </div>
        </section>

        <section className="md:flex items-center gap-10 mb-12">
          <div className="md:flex-1 animate-up-down">
            <Image
              src="/about-us/pic3.png"
              alt="aboutus"
              width={720}
              height={720}
              className="object-cover w-full"
            />
          </div>
          <div className='py-8 md:flex-1'>
            <h2 className="text-3xl font-semibold text-center md:text-start mb-4 text-primary">Vision</h2>
            <p className="text-lg text-gray-800">
              Our vision is to become one of the leading voices in the gaming blogosphere,
              offering readers a blend of timely news, honest opinions, and in-depth features
              on the games that matter most. We strive to inspire both new and seasoned gamers
              through our engaging and informative content.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Meet the Authors</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center text-center w-full md:w-1/4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary mb-4">
                <Image
                  src="/about-us/author1.jpg"
                  alt="Author Image"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <p className="text-xl font-semibold text-black">John Doe</p>
              <p className="text-lg text-gray-700">Game Journalist & Enthusiast</p>
              <p className="text-gray-800 mt-2">
                John shares gaming tips, explores new genres, and keeps gamers updated on trends.
              </p>
            </div>

            <div className="flex flex-col items-center text-center w-full md:w-1/4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary mb-4">
                <Image
                  src="/about-us/author5.jpg"
                  alt="Author Image"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <p className="text-xl font-semibold text-black">Jane Smith</p>
              <p className="text-lg text-gray-700">Game Developer & Designer</p>
              <p className="text-gray-800 mt-2">
                Jane designs immersive worlds and engaging game mechanics, focusing on creativity.
              </p>
            </div>

            <div className="flex flex-col items-center text-center w-full md:w-1/4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary mb-4">
                <Image
                  src="/about-us/author3.jpg"
                  alt="Author Image"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <p className="text-xl font-semibold text-black">Alex Lee</p>
              <p className="text-lg text-gray-700">Gaming Streamer & Content Creator</p>
              <p className="text-gray-800 mt-2">
                Alex shares gaming experiences through live streams, commentary, and tips.
              </p>
            </div>

            <div className="flex flex-col items-center text-center w-full md:w-1/4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary mb-4">
                <Image
                  src="/about-us/author4.jpg"
                  alt="Author Image"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <p className="text-xl font-semibold text-black">Sam Taylor</p>
              <p className="text-lg text-gray-700">Esports Analyst & Commentator</p>
              <p className="text-gray-800 mt-2">
                Sam provides expert analysis and commentary on esports tournaments.
              </p>
            </div>

            <div className="flex flex-col items-center text-center w-full md:w-1/4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary mb-4">
                <Image
                  src="/about-us/author2.jpg"
                  alt="Author Image"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <p className="text-xl font-semibold text-black">Sam Taylor</p>
              <p className="text-lg text-gray-700">Esports Analyst & Commentator</p>
              <p className="text-gray-800 mt-2">
                Sam provides expert analysis and commentary on esports tournaments.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-black to-gray-700 text-white py-20 px-4 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center mb-6 text-primary">Contact Information</h2>
          <p className="text-lg text-center mb-8">
            We'd love to hear from our readers! Feel free to reach out to us through any of the following platforms:
          </p>
          <div className="flex flex-wrap gap-4 justify-center space-x-8">
            <Link
              href="mailto:contact@gameblog.com"
              className="text-xl text-white hover:text-primary transition-all"
            >
              Email
            </Link>
            <Link
              href="https://twitter.com/gameblog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white hover:text-primary transition-all"
            >
              Twitter
            </Link>
            <Link
              href="https://facebook.com/gameblog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white hover:text-primary transition-all"
            >
              Facebook
            </Link>
            <Link
              href="https://instagram.com/gameblog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white hover:text-primary transition-all"
            >
              Instagram
            </Link>
            <Link
              href="https://discord.gg/gameblog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white hover:text-primary transition-all"
            >
              Discord
            </Link>
            <Link
              href="https://youtube.com/gameblog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white hover:text-primary transition-all"
            >
              YouTube
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
