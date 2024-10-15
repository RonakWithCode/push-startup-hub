import Image from 'next/image';

export default function WhatWeAre() {
  const traits = [
    { title: 'Innovative', description: 'Leveraging cutting-edge technologies to create forward-thinking solutions for your business.', icon: 'assets/icons/innovative.svg' },
    { title: 'Reliable', description: 'Delivering robust, scalable applications that stand the test of time and grow with your needs.', icon: 'assets/icons/reliable.svg' },
    { title: 'Results-Driven', description: 'Focusing on measurable outcomes that directly impact your business growth and success.', icon: 'assets/icons/results.svg' },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Empowering Your Digital Journey</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {traits.map((trait, index) => (
            <article key={index} className="flex flex-col items-center text-center">
              <Image src={trait.icon} alt={trait.title} width={64} height={64} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">{trait.title}</h3>
              <p className="text-gray-300">{trait.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
