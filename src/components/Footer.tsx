import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <div className="text-3xl font-bold text-blue-500">GetEmployed</div>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="/" className="hover:text-blue-400">Home</a>
            <a href="/about" className="hover:text-blue-400">About</a>
            <a href="/services" className="hover:text-blue-400">Services</a>
            <a href="/contact" className="hover:text-blue-400">Contact</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 GetEmployed. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
