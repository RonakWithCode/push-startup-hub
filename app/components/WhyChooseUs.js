export default function WhyChooseUs() {
  const reasons = [
    { title: 'Expertise', description: 'Our team of seasoned professionals brings years of experience in cutting-edge technologies.' },
    { title: 'Tailored Solutions', description: 'We craft bespoke digital solutions that align perfectly with your business objectives.' },
    { title: 'Proven Track Record', description: 'Our portfolio showcases a history of successful projects and satisfied clients.' },
    { title: 'Ongoing Support', description: 'We provide dedicated support and maintenance to ensure your digital assets thrive.' },
  ];

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Partner With Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <article key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
