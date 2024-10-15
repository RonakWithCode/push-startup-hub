import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white border-t-4 border-blue-500" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">Footer</h2>
      <div className="container mx-auto px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-extrabold tracking-tight">
                <span className="text-blue-300">Push</span>
                <span className="text-white">StartUpHub</span>
              </h3>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Empowering startups with innovative website and mobile app solutions to fuel their growth and success.
            </p>
          </div>
          <nav aria-label="Footer Navigation" className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-300">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-yellow-300 transition duration-300 ease-in-out">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-300">Contact Us</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Startup Street, Tech City, 12345</p>
              <p>Phone: <a href="tel:+11234567890" className="hover:text-yellow-300 transition duration-300">(123) 456-7890</a></p>
              <p>Email: <a href="mailto:info@pushstartuphub.com" className="hover:text-yellow-300 transition duration-300">info@pushstartuphub.com</a></p>
            </address>
            <div className="flex space-x-4 mt-6">
              {[
                { name: 'Instagram', href: 'https://www.instagram.com/push.startup/', icon: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z' },
                { name: 'Twitter', href: 'https://twitter.com/x/migrate?tok=7b2265223a222f707573685f73746172747570222c2274223a313732383835393038317d534a402d80921d1f767c57e90c725610', icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
                { name: 'WhatsApp', href: 'https://api.whatsapp.com/send/?phone=7023941072&text&type=phone_number&app_absent=0', icon: 'M20.472 3.528C18.208 1.264 15.208 0 12 0 5.472 0 0 5.472 0 12c0 2.088.552 4.128 1.584 5.928L0 24l6.168-1.56C7.872 23.448 9.912 24 12 24c6.528 0 12-5.472 12-12 0-3.208-1.264-6.208-3.528-8.472zM12 22.08c-1.992 0-3.936-.528-5.64-1.536l-.408-.24-4.2 1.08 1.104-4.032-.264-.432c-1.104-1.752-1.68-3.768-1.68-5.904 0-5.952 4.848-10.8 10.8-10.8 2.88 0 5.592 1.128 7.632 3.168 2.04 2.04 3.168 4.752 3.168 7.632 0 5.952-4.848 10.8-10.8 10.8zm5.904-8.088c-.336-.168-1.968-.96-2.28-1.08-.312-.12-.528-.168-.744.168-.216.336-.84 1.08-.96 1.296-.12.216-.24.24-.576.072-.336-.168-1.44-.528-2.736-1.68-.984-.888-1.656-1.992-1.848-2.328-.192-.336-.024-.528.144-.696.144-.168.336-.432.504-.648.168-.216.216-.36.336-.6.12-.24.072-.456-.024-.648-.096-.192-.744-1.8-1.032-2.448-.264-.624-.552-.552-.744-.552-.192 0-.408-.024-.624-.024-.216 0-.576.096-.888.456-.312.36-1.176 1.152-1.176 2.808 0 1.656 1.2 3.264 1.368 3.48.168.216 2.328 3.552 5.64 4.968 3.312 1.416 3.312.936 3.912.888.6-.048 1.944-.792 2.208-1.56.264-.768.264-1.416.192-1.56-.072-.144-.288-.216-.624-.36z' }
              ].map((item) => (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-300 transition duration-300" aria-label={`Follow us on ${item.name}`}>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d={item.icon} clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-800 text-center">
          <p className="text-sm text-gray-300">&copy; {currentYear} PushStartUpHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
