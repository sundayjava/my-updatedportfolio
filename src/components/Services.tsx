import { motion } from "framer-motion";
import { useState } from "react";
import {
  Monitor,
  Smartphone,
  Server,
  TrendingUp,
  Target,
  PenTool,
  RefreshCw,
} from "lucide-react";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const services = [
    {
      title: "Web Development",
      description:
        "I design and build fast, responsive, and secure websites that help businesses grow online.",
      icon: Monitor,
      color: "bg-blue-500",
      dark: true,
    },
    {
      title: "Mobile App Development",
      description:
        "Create powerful and user-friendly mobile applications that deliver great experiences on every device.",
      icon: Smartphone,
      color: "bg-purple-500",
      dark: false,
    },
    {
      title: "Backend Development",
      description:
        "Build robust and scalable server-side applications with secure APIs, databases, and cloud infrastructure.",
      icon: Server,
      color: "bg-indigo-500",
      dark: false,
    },
    {
      title: "SEO and Promotion",
      description:
        "Boost visibility and reach with our SEO and digital marketing strategies built to grow your audience.",
      icon: TrendingUp,
      color: "bg-blue-400",
      dark: false,
    },
    {
      title: "Brand Strategy",
      description:
        "Develop a clear brand identity and positioning that connects with your audience and drives results.",
      icon: Target,
      color: "bg-orange-500",
      dark: false,
    },
    {
      title: "Content Creation",
      description:
        "Engage your audience with high-quality content including visuals, videos, and copy tailored to your brand.",
      icon: PenTool,
      color: "bg-green-500",
      dark: false,
    },
    {
      title: "Image Editing & Conversion",
      description:
        "Professional image editing and conversion tool at cionde.com - Transform images to any format with quality control.",
      icon: RefreshCw,
      color: "bg-cyan-500",
      dark: false,
      link: "https://cionde.com",
    },
  ];

  return (
    <section id="services" className="relative min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Links Bar */}
        <motion.div
          className="flex flex-wrap items-center justify-between gap-4 pb-12 md:mb-12 mb-0"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Side - Line + Social Links */}
          <div className="flex items-center gap-8">
            {/* Decorative Line on Left */}
            <div className="hidden md:block w-20 lg:w-32 h-px bg-black"></div>

            <motion.a
              href="https://web.facebook.com/profile.php?id=61583701907793"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-[#a16207] transition-colors text-sm"
              whileHover={{ y: -2 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>FACEBOOK</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/sunday-david-951369266/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-[#a16207] transition-colors text-sm"
              whileHover={{ y: -2 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LINKEDIN</span>
            </motion.a>

            <motion.a
              href="https://x.com/HellotoSunday"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-[#a16207] transition-colors text-sm"
              whileHover={{ y: -2 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              <span>TWITTER</span>
            </motion.a>
          </div>

          {/* Middle Separator Line */}
          <div className="hidden lg:block flex-1 mx-8 h-px bg-black"></div>

          {/* Right Side - Email */}
          <motion.a
            href="mailto:hellotosunday@gmail.com"
            className="flex items-center uppercase gap-2 text-black hover:text-[#a16207] transition-colors text-sm"
            whileHover={{ y: -2 }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>hellotosunday@gmail.com</span>
          </motion.a>
        </motion.div>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between md:items-center items-start gap-8 mb-16">
          {/* Center - Heading */}
          <div className="">
            <motion.p
              className="text-sm font-light tracking-wider mb-4 text-black"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              MY SERVICES ?
            </motion.p>
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              WHAT I'M
              <br />
              OFFERING
            </motion.h2>
          </div>

          {/* Right - Description and Button */}
          <motion.div
            className="lg:max-w-3xl space-y-6 flex md:flex-row flex-col gap-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-gray-600 leading-relaxed flex-1">
              I offer comprehensive fullstack development services, from
              crafting beautiful user interfaces to building powerful backend
              systems. Let's bring your ideas to life with modern, scalable
              solutions.
            </p>
            <motion.button
              className="p-4 bg-black text-white rounded-full font-medium hover:bg-[#C29A3A] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
            >
              ALL SERVICES
            </motion.button>
          </motion.div>
        </div>

        {/* Services Grid - Show only first 3 */}
        <div className="flex items-center gap-6">
          {/* Left Side - Scroll Down */}
          <div className="md:flex flex-col gap-2 items-center hidden">
            <span className="text-xs font-bold tracking-wider vertical-text">
              SCROLL DOWN
            </span>
            <div className="w-px h-16 bg-black"></div>
            <motion.div
              className="w-12 h-12 rounded-full border border-black flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const experienceSection = document.getElementById("experience");
                if (experienceSection) {
                  const offset = 80;
                  const elementPosition =
                    experienceSection.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`group relative p-8 min-h-[320px] flex flex-col justify-between transition-all duration-300 ${
                  service.dark
                    ? "bg-black text-white"
                    : "bg-white text-black border border-black hover:border-[#C29A3A]"
                }`}
                whileHover={{ y: -8 }}
              >
                {/* Icon */}
                <div className="mb-6">
                  {
                    <service.icon
                      className={`w-12 h-12 ${
                        service.dark ? "text-white" : "text-black"
                      }`}
                      strokeWidth={1.5}
                    />
                  }
                </div>

                {/* Title */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      service.dark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Read More Link */}
                <motion.div
                  className="flex items-center gap-2 mt-6 cursor-pointer group/link"
                  whileHover={{ x: 5 }}
                  onClick={() => {
                    setShowComingSoon(true);
                    setTimeout(() => setShowComingSoon(false), 3000);
                  }}
                >
                  <span
                    className={`text-sm font-medium ${
                      service.dark
                        ? "text-white"
                        : "text-black group-hover:text-[#C29A3A]"
                    } transition-colors`}
                  >
                    READ MORE
                  </span>
                  <svg
                    className={`w-4 h-4 ${
                      service.dark
                        ? "text-white"
                        : "text-black group-hover:text-[#C29A3A]"
                    } transition-colors`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content */}
          <motion.div
            className="relative bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 scrollbar-hide"
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-black hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Top Notch Services
              </h2>
            </div>

            {/* Services Grid - 2, 3, 2 Layout */}
            <div className="space-y-6">
              {/* Row 1 - 2 items */}
              <div className="grid md:grid-cols-2 gap-6">
                {services.slice(0, 2).map((service, index) => (
                  <motion.div
                    key={index}
                    className={`${service.color} bg-opacity-10 border border-gray-200 rounded-xl p-6 hover:scale-105 transition-transform`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="mb-4">
                      {
                        <service.icon
                          className="w-10 h-10 text-black"
                          strokeWidth={1.5}
                        />
                      }
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Row 2 - 3 items */}
              <div className="grid md:grid-cols-3 gap-6">
                {services.slice(2, 5).map((service, index) => (
                  <motion.div
                    key={index}
                    className={`${service.color} bg-opacity-10 border border-gray-200 rounded-xl p-6 hover:scale-105 transition-transform`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index + 2) * 0.1 }}
                  >
                    <div className="mb-4">
                      {
                        <service.icon
                          className="w-10 h-10 text-black"
                          strokeWidth={1.5}
                        />
                      }
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Row 3 - 2 items */}
              <div className="grid md:grid-cols-2 gap-6">
                {services.slice(5, 7).map((service, index) => (
                  <motion.div
                    key={index}
                    className={`${
                      service.color
                    } bg-opacity-10 border border-gray-200 rounded-xl p-6 hover:scale-105 transition-transform ${
                      service.link ? "cursor-pointer" : ""
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index + 5) * 0.1 }}
                    onClick={() => {
                      if (service.link) {
                        window.open(
                          service.link,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }
                    }}
                  >
                    <div className="mb-4">
                      {
                        <service.icon
                          className="w-10 h-10 text-black"
                          strokeWidth={1.5}
                        />
                      }
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Coming Soon Popup */}
      {showComingSoon && (
        <motion.div
          className="fixed top-8 left-1/2 -translate-x-1/2 z-[200] bg-black text-white px-8 py-4 rounded-full shadow-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          <div className="flex items-center gap-3">
            <span className="font-semibold text-lg">Coming Soon!</span>
          </div>
        </motion.div>
      )}

      <style>{`
        .vertical-text {
          writing-mode: vertical-lr;
          text-orientation: mixed;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Services;
