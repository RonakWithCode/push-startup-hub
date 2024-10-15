import Image from 'next/image';

export default function Services() {
  const services = [
    { title: 'Web Development', description: 'Custom, responsive websites tailored to your unique business needs and brand identity.', icon: 'assets/icons/web-dev.svg' },
    { title: 'Mobile App Creation', description: 'Innovative, user-friendly mobile applications for iOS and Android platforms.', icon: 'assets/icons/mobile-app.svg' },
    { title: 'Digital Marketing', description: 'Comprehensive strategies to boost your online presence and reach your target audience.', icon: 'assets/icons/digital-marketing.svg' },
    { title: 'SEO Optimization', description: 'Data-driven techniques to improve your search engine rankings and drive organic traffic.', icon: 'assets/icons/seo.svg' },
    { title: 'E-commerce Solutions', description: 'Custom e-commerce platforms to enhance your online sales and customer experience.', icon: 'assets/icons/ecommerce.svg' },
    { title: 'UI/UX Design', description: 'Intuitive, user-centered designs that ensure a seamless and engaging user experience.', icon: 'assets/icons/ui-ux.svg' },
    { title: 'SaaS Development', description: 'Scalable, cloud-based software solutions that provide ongoing value to your customers.', icon: 'assets/icons/saas.svg' },

  ];

  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <article key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition duration-300">
              <Image src={service.icon} alt={service.title} width={48} height={48} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
