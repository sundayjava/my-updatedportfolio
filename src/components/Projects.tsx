import { motion } from 'framer-motion';

const Projects = () => {
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

  return (
    <section id="projects" className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 relative">
          {/* Decorative Dots Pattern - Left Side */}
          <motion.div 
            className="absolute left-0 md:left-12 top-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.4, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-6 gap-1.5">
              {[...Array(48)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-black rounded-full"></div>
              ))}
            </div>
          </motion.div>

          {/* Decorative Circle - Top Right */}
          <motion.div 
            className="absolute -top-16 right-1/2 w-12 h-12 rounded-full border border-black flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.3, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-3 h-3 rounded-full bg-black"></div>
          </motion.div>

          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            CASE STUDY
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Showcasing innovative solutions across web, mobile, and backend development. Each project represents a unique challenge solved with modern technologies and best practices.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Project 1: Full Width Card with Split Layout */}
          <motion.div
            variants={cardVariants}
            className="group relative bg-white hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -8 }}
          >
            <div className="grid md:grid-cols-2 gap-8 md:p-8 p-4">
              {/* Left Side - Content */}
              <div className="flex flex-col justify-between space-y-6">
                {/* Category Badge */}
                <span className="inline-block px-6 py-2 bg-black text-white text-xs font-medium tracking-wider rounded-full w-fit">
                  WEB DESIGN
                </span>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                  Cryptocurrency Exchange <span className="text-gray-400">Platform</span>
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  Enterprise-grade crypto trading platform with real-time charts, secure transactions, and advanced trading features powered by Nuxt.js and Rust backend.
                </p>

                {/* See Details Link */}
                <motion.a
                  href="https://betacrypto.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black cursor-pointer group/link pt-4 border-t-2 border-black w-fit"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm font-medium">See Details</span>
                  <svg
                    className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
              </div>

              {/* Right Side - Preview Image */}
              <div className="overflow-hidden rounded-lg h-[350px]">
                <motion.img
                  src="/betacrypto.webp"
                  alt="Cryptocurrency Exchange"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Project 2: Full Width Card with Split Layout */}
          <motion.div
            variants={cardVariants}
            className="group relative bg-white hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -8 }}
          >
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:p-8 p-4">
                {/* Right Side - Preview Image */}
              <div className="overflow-hidden rounded-lg h-[350px]">
                <motion.img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                  alt="AI Skincare App"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              {/* Left Side - Content */}
              <div className="flex flex-col justify-between space-y-6">
                {/* Category Badge */}
                <span className="inline-block px-6 py-2 bg-black text-white text-xs font-medium tracking-wider rounded-full w-fit">
                  MOBILE APP
                </span>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                  AI Skincare <span className="text-gray-400">recommendation system</span>
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  React Native mobile application with AI-powered personalized skincare analysis and product recommendations. Seamless integration with machine-learning models.
                </p>

                {/* See Details Link */}
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black cursor-pointer group/link pt-4 border-t-2 border-black w-fit"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm font-medium">See Details</span>
                  <svg
                    className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Project 3: Full Width Card with Split Layout */}
          <motion.div
            variants={cardVariants}
            className="group relative bg-white hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -8 }}
          >
            <div className="grid md:grid-cols-2 gap-8 md:p-8 p-4">
              {/* Left Side - Content */}
              <div className="flex flex-col justify-between space-y-6">
                {/* Category Badge */}
                <span className="inline-block px-6 py-2 bg-black text-white text-xs font-medium tracking-wider rounded-full w-fit">
                  FULLSTACK
                </span>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                  Enterprise Image Editing <span className="text-gray-400">& News Platform</span>
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  Full-stack news and image editing SaaS platform with admin dashboard for content management, author dashboard for writing articles, and advanced image manipulation tools. Built with Next.js and Rust backend.
                </p>

                {/* See Details Link */}
                <motion.a
                  href="https://cionde.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black cursor-pointer group/link pt-4 border-t-2 border-black w-fit"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm font-medium">See Details</span>
                  <svg
                    className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
              </div>

              {/* Right Side - Preview Image */}
              <div className="overflow-hidden rounded-lg h-[350px]">
                <motion.img
                  src="/cionde.webp"
                  alt="SaaS Dashboard"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
