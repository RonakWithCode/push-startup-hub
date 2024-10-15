"use client"
import Image from 'next/image';

export default function Portfolio() {
  const projects = [
    { title: 'E-commerce Platform', description: 'A scalable online store built with Next.js and Shopify', image: '/assets/projects/ecommerce.jpg' },
    { title: 'Fitness App', description: 'Cross-platform mobile app for personalized workout plans', image: '/assets/projects/fitness.jpg' },
    { title: 'WellVichAAr', description: 'Responsive website for a health center', image: '/assets/projects/wellvicAAr.jpg' },
    { title: 'Croft', description: 'Responsive website with advanced SEO optimization', image: '/assets/projects/Croft.jpg' },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image src={project.image} alt={project.title} width={600} height={400} className=" object-cover transition duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
