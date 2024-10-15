import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-blue-900 text-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-800 opacity-50 transform -skew-y-6"></div>
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3/5 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Elevate Your <span className="text-blue-300">Digital Presence</span>
            </h2>
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              Partner with us to create experiences that captivate and convert.
            </p>
          </div>
          <div className="md:w-2/5 text-center md:text-right">
            <Link 
              href="#contact" 
              className="inline-block bg-blue-300 text-blue-900 hover:bg-blue-200 font-bold py-5 px-12 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
