import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#E7473C] text-[#F0F0F0]">
      <div className="container mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#F0F0F0] mb-6">
              YUMMA
            </h3>
            <p className="text-[#F0F0F0]/90 mb-6">
              Memberikan solusi teknologi terbaik untuk membantu bisnis Anda berkembang di era digital.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-[#F0F0F0] font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Beranda', 'Layanan', 'Tentang', 'Portofolio', 'Kontak'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[#F0F0F0]/90 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-[#F0F0F0] font-semibold mb-6">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-[#F0F0F0]/90">
                <FiMapPin />
                <span>Jl. Teknologi No. 123, Jakarta</span>
              </li>
              <li className="flex items-center space-x-3 text-[#F0F0F0]/90">
                <FiPhone />
                <span>+62 123 4567 890</span>
              </li>
              <li className="flex items-center space-x-3 text-[#F0F0F0]/90">
                <FiMail />
                <span>info@yumma.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-[#F0F0F0] font-semibold mb-6">Social Media</h4>
            <div className="flex space-x-4">
              {[
                { icon: <FiFacebook />, link: '#' },
                { icon: <FiTwitter />, link: '#' },
                { icon: <FiInstagram />, link: '#' },
                { icon: <FiLinkedin />, link: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-10 h-10 rounded-full bg-[#E7473C]/80 flex items-center justify-center text-white hover:bg-[#F0F0F0] hover:text-[#E7473C] transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#F0F0F0]/20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-[#F0F0F0]/90"
          >
            © {new Date().getFullYear()} Yumma. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
