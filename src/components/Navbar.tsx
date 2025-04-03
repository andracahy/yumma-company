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
          {/* Logo */}
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

          {/* Mobile Menu Button - Improved visibility */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            } transition-all`}
            aria-label="Menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu - Updated styling */}
        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isScrolled ? 'bg-[#F0F0F0]/95' : 'bg-[#E7473C]/95'
          } backdrop-blur-md rounded-lg mt-4`}
        >
          <div className="py-2">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-lg ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-200/50' 
                    : 'text-white hover:bg-white/10'
                } transition-colors`}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
