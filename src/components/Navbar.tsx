import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Beranda', 'Layanan', 'Tentang', 'Portofolio', 'Kontak'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#F0F0F0]/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-2xl font-bold ${
              isScrolled ? 'text-[#E7473C]' : 'text-[#F0F0F0]'
            }`}
          >
            YUMMA
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className={`${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#E7473C]' 
                    : 'text-[#F0F0F0] hover:text-white'
                } font-medium transition-colors`}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button dengan warna yang menyesuaikan */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={isScrolled ? 'text-gray-700' : 'text-white'}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu dengan warna baru */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg p-4"
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-700 hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
