import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-black mb-4">Who We Are</h1>
        <p className="text-lg text-gray-700">Since 2008, we have been empowering the gaming ecosystem with real-time access to the most comprehensive living library of video game metadata.</p>
      </section>

      {/* Vision Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-black mb-4">Our Vision</h2>
        <div className="flex items-center justify-between">
          <div className="w-1/2 pr-4">
            <h3 className="text-2xl font-bold">To revolutionize how video games are discovered and perceived</h3>
            <ul className="list-disc pl-6 mt-4 text-lg text-gray-700">
              <li>Enhancing the lives of gamers worldwide</li>
              <li>Fostering a vibrant global gaming community</li>
            </ul>
          </div>
          <div className="w-1/2">
            <Image src="/vision-image.jpg" width={500} height={400} alt="Vision" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-black mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">By harnessing the power of data, we unlock new gaming experiences through human-centric products that elevate lives within the global gaming community.</p>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-black mb-4">Our Values</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex items-start">
            <span className="mr-4 text-3xl">⚡</span>
            <div>
              <h3 className="text-xl font-bold text-black">We are Extraordinary</h3>
              <p className="text-lg text-gray-700">We transform the ordinary into extraordinary experiences.</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="mr-4 text-3xl">💡</span>
            <div>
              <h3 className="text-xl font-bold text-black">We are Human-Centric</h3>
              <p className="text-lg text-gray-700">We prioritize well-being and recognize the infinite value of everyone.</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="mr-4 text-3xl">🔥</span>
            <div>
              <h3 className="text-xl font-bold text-black">We are Committed</h3>
              <p className="text-lg text-gray-700">We are passionately committed to our cause, driven by craft.</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="mr-4 text-3xl">🔍</span>
            <div>
              <h3 className="text-xl font-bold text-black">We Act with Integrity</h3>
              <p className="text-lg text-gray-700">Integrity guides us to do what is right, not just profitable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-black mb-4">Our Team</h2>
        <div className="grid grid-cols-3 gap-8">
          {['Frode Krisner', 'Karan Madon', 'Ole Torsvik'].map((name, idx) => (
            <div key={idx} className="text-center">
              <Image src={`/team-${idx + 1}.jpg`} width={150} height={150} alt={name} className="mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-bold text-black">{name}</h3>
              <p className="text-lg text-gray-700">Founder</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
