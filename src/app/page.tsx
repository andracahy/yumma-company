'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiMonitor, FiSmartphone, FiCloud, FiCode } from 'react-icons/fi';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/banner1.jpeg',
      title: 'Solusi Digital untuk',
      highlight: 'Masa Depan',
      desc: 'Menghadirkan inovasi teknologi untuk membangun bisnis Anda'
    },
    {
      image: '/images/banner2.jpeg', 
      title: 'Kembangkan Bisnis',
      highlight: 'Bersama Kami',
      desc: 'Tim profesional siap membantu transformasi digital perusahaan Anda'
    },
    {
      image: '/images/banner3.jpeg',
      title: 'Teknologi Terkini',
      highlight: 'Untuk Anda',
      desc: 'Menggunakan teknologi modern untuk solusi yang optimal'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="beranda" className="h-screen relative overflow-hidden">
        {/* Sliding content */}
        <AnimatePresence initial={false}>
          {slides.map((slide, index) => (
            currentSlide === index && (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{
                  x: { type: "spring", stiffness: 100, damping: 20 },
                  opacity: { duration: 0.3 }
                }}
                className="absolute inset-0"
              >
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Content */}
                <div className="relative h-full flex items-center">
                  <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center text-white">
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-4 text-sm md:text-base font-medium tracking-wider text-[#E7473C]"
                      >
                      </motion.div>

                      <motion.h1
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                      >
                        {slide.title}{' '}
                        <span className="text-[#E7473C]">{slide.highlight}</span>
                      </motion.h1>

                      <motion.p 
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="text-lg md:text-xl mb-8 text-gray-200"
                      >
                        {slide.desc}
                      </motion.p>

                      <motion.div 
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex justify-center gap-4"
                      >
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-[#E7473C] w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section - More responsive */}
      <section id="layanan" className="min-h-screen py-20 flex items-center bg-[#F0F0F0]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-2 text-gray-900">Layanan Kami</h2>
            <p className="text-gray-600">Solusi lengkap untuk kebutuhan digital Anda</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiMonitor size={40} />,
                title: "Web Development",
                desc: "Website modern dan responsif"
              },
              {
                icon: <FiSmartphone size={40} />,
                title: "Mobile Apps",
                desc: "Aplikasi mobile Android & iOS"
              },
              {
                icon: <FiCloud size={40} />,
                title: "Cloud Solutions",
                desc: "Infrastruktur cloud yang aman"
              },
              {
                icon: <FiCode size={40} />,
                title: "Custom Software",
                desc: "Software sesuai kebutuhan"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-[#E7473C]/20 hover:border-[#E7473C]"
              >
                <div className="text-[#E7473C] mb-4">{service.icon}</div>
                <h3 className="text-gray-900 text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - More responsive */}
      <section id="tentang" className="min-h-screen py-20 flex items-center bg-[#F0F0F0]">
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/test.png"
                alt="About Us"
                className="rounded-2xl shadow-lg w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Tentang Kami</h2>
              <p className="text-gray-700 mb-6">
                Kami adalah tim profesional yang berdedikasi dalam memberikan solusi teknologi terbaik untuk bisnis Anda. Dengan pengalaman lebih dari 5 tahun dalam industri IT, kami telah membantu ratusan perusahaan dalam transformasi digital mereka.
              </p>
              <ul className="space-y-4">
                {[
                  'Pengalaman lebih dari 5 tahun',
                  'Tim profesional dan berdedikasi',
                  'Solusi teknologi terkini',
                  'Layanan pelanggan 24/7'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center space-x-3 text-gray-900" // Updated text color
                  >
                    <span className="h-2 w-2 bg-[#E7473C] rounded-full" />
                    <span className="font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - More responsive */}
      <section id="portofolio" className="min-h-screen py-20 flex items-center bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8" // Reduced margin
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Portfolio Kami</h2>
            <p className="text-gray-900 font-medium">Beberapa proyek terbaik yang telah kami kerjakan</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Reduced gap */}
            {[
              {
                title: 'E-Commerce Platform',
                category: 'Web Development',
                image: '/images/test.png',  // Updated path
                tech: ['React', 'Node.js', 'MongoDB']
              },
              {
                title: 'Mobile Banking App',
                category: 'Mobile Development',
                image: '/images/test.png',  // Updated path
                tech: ['Flutter', 'Firebase']
              },
              {
                title: 'Cloud Infrastructure',
                category: 'Cloud Solution',
                image: '/images/test.png',  // Updated path
                tech: ['AWS', 'Docker', 'Kubernetes']
              },
              // Add more portfolio items as needed
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#E7473C]/20 hover:border-[#E7473C]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[#E7473C] text-sm font-medium">
                    {item.category}
                  </span>
                  <h3 className="text-gray-900 text-xl font-semibold mt-2">{item.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#E7473C]/10 text-[#E7473C] font-medium rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - More responsive */}
      <section id="kontak" className="min-h-screen py-20 flex items-center bg-[#F0F0F0]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto" // Reduced max width
          >
            <div className="text-center mb-8"> {/* Reduced margin */}
              <h2 className="text-4xl font-bold mb-2 text-gray-900">Hubungi Kami</h2>
              <p className="text-gray-900 font-medium">Ada proyek yang ingin didiskusikan?</p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Reduced gap */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  placeholder="Nama"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-[#E7473C] focus:ring-2 focus:ring-[#E7473C]/20 outline-none transition text-gray-900 placeholder-gray-500"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-[#E7473C] focus:ring-2 focus:ring-[#E7473C]/20 outline-none transition text-gray-900 placeholder-gray-500"
                />
              </motion.div>

              <motion.div
                className="md:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <textarea
                  placeholder="Pesan"
                  rows={4} // Reduced rows
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-[#E7473C] focus:ring-2 focus:ring-[#E7473C]/20 outline-none transition text-gray-900 placeholder-gray-500"
                ></textarea>
              </motion.div>

              <motion.div
                className="md:col-span-2 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#E7473C] hover:bg-[#E7473C]/90 text-[#F0F0F0] font-semibold rounded-lg transition-colors"
                >
                  Kirim Pesan
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
