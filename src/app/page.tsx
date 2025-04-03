'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiMonitor, FiSmartphone, FiCloud, FiCode } from 'react-icons/fi';

export default function Home() {
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
      
      {/* Hero Section - More responsive */}
      <section id="beranda" className="min-h-screen py-20 flex items-center relative overflow-hidden bg-[#E7473C]">
        <div 
          className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"
          style={{
            transform: 'translateY(var(--scroll-offset, 0))',
            transition: 'transform 0.1s linear'
          }}
        />
        <div className="container relative mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center text-white"
            style={{
              transform: 'translateY(var(--scroll-offset-content, 0))',
              transition: 'transform 0.2s linear'
            }}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Solusi Digital untuk
              <span className="text-[#F0F0F0]"> Masa Depan</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8 text-[#F0F0F0]/80">
              Menghadirkan inovasi teknologi untuk membangun bisnis Anda
            </motion.p>
            <motion.button
              variants={fadeInUp}
              className="px-8 py-4 bg-[#F0F0F0] text-[#E7473C] hover:bg-white font-semibold rounded-full transition-colors"
            >
              Mulai Sekarang
            </motion.button>
          </motion.div>
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
