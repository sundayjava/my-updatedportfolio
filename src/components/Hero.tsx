import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 md:pb-20 pb-2 overflow-hidden bg-white">
      {/* Top Center Gradient Blob - Growing Animation with Soft Faded Edges */}
      <motion.div 
        className="absolute left-1/3 -translate-x-1/2 -top-32 w-[500px] h-[500px] pointer-events-none blur-3xl opacity-20"
        style={{
          background: "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.8) 0%, rgba(139, 92, 246, 0.6) 40%, rgba(251, 191, 36, 0.4) 70%, transparent 100%)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0],
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-180px)]">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Wave Emoji */}
            <motion.div 
              className="text-5xl sm:text-6xl"
              variants={fadeInVariants}
              whileHover={{ rotate: [0, 10, -10, 0], transition: { duration: 0.5 } }}
            >
              👋
            </motion.div>
            
            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-black">
                Hello! <span className="font-bold">I'm Sunday</span>
              </h1>
              
              {/* Decorative Line with Title */}
              <div className="flex items-center gap-4 mt-6">
                <motion.div 
                  className="w-20 sm:w-32 h-px bg-black"
                  initial={{ width: 0 }}
                  animate={{ width: "80px" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                <div className="flex items-center gap-2">
                  <span className="text-lg sm:text-xl font-normal text-black">Fullstack Software Engineer</span>
                  <motion.span 
                    className="text-xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    ✦
                  </motion.span>
                </div>
              </div>
            </motion.div>
            
            {/* Description */}
            <motion.p 
              className="text-base sm:text-lg text-black leading-relaxed max-w-xl"
              variants={itemVariants}
            >
              Hello! I'm Sunday, a <span className="font-semibold">fullstack software engineer</span> passionate about crafting elegant solutions that bridge design and functionality. I build scalable web and mobile applications, design robust backend systems, and turn complex problems into seamless user experiences.
            </motion.p>
            
            {/* Checkmark List */}
            <motion.div className="space-y-2" variants={itemVariants}>
              {[
                "Clean, scalable, and maintainable code",
                "Performance-optimized applications",
                "Modern tech stack and best practices"
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                >
                  <svg className="w-5 h-5 text-black mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-base sm:text-lg text-black">{text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap items-center gap-6 pt-4"
              variants={itemVariants}
            >
              <motion.button 
                className="bg-black text-white px-8 py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    const offset = 80;
                    const elementPosition = contactSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
              >
                Let's Talk
              </motion.button>
              <motion.button 
                className="flex items-center gap-2 text-black text-base sm:text-lg font-medium border-b-2 border-black pb-1 hover:text-[#C29A3A] hover:border-[#C29A3A] transition-colors"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/cv.pdf';
                  link.download = 'Sunday_CV.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Cv
                <motion.svg 
                  className="w-5 h-5" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </motion.svg>
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Image Area */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            variants={slideInRight}
            initial="hidden"
            animate="visible"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Squiggly Line Top */}
              <motion.svg 
                className="absolute top-10 left-0 w-32 h-32 text-black opacity-50" 
                viewBox="0 0 100 100" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <path d="M10,50 Q30,20 50,50 T90,50" />
              </motion.svg>
              
              {/* Squiggly Line Bottom Right */}
              <motion.svg 
                className="absolute bottom-20 right-0 w-40 h-40 text-black opacity-50" 
                viewBox="0 0 100 100" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                animate={{ 
                  rotate: [0, -10, 10, 0],
                  x: [0, 10, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <path d="M10,20 Q30,60 50,20 T90,20 Q70,60 50,80" />
              </motion.svg>
              
              {/* Hello Circle */}
              <motion.div 
                className="absolute top-1/2 left-16 transform -translate-y-1/2 bg-black text-white w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold z-10"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
              >
                Hello
              </motion.div>
              
              {/* Diagonal Lines */}
              <motion.div 
                className="absolute top-20 right-1/4 w-px h-32 bg-black transform rotate-45"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
              <motion.div 
                className="absolute bottom-32 left-1/3 w-px h-24 bg-black transform -rotate-45"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              />
            </div>
            
            {/* Image Placeholder */}
            <motion.div 
              className="relative z-20 w-full max-w-md lg:max-w-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src="/profile-pic.webp" 
                  alt="Sunday - Fullstack Software Engineer"
                  className="w-full h-full object-contain object-center"
                />
                {/* Bottom gradient overlay */}
                <div className="absolute md:block hidden bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white via-white to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-black py-6 overflow-hidden">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{
            x: ["0%", "-33.333%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {/* Repeat content 3 times for seamless loop */}
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-center gap-8 px-4">
              <span className="text-white text-lg sm:text-xl font-bold tracking-wider">REACTJS</span>
              <span className="text-white text-xl">✦</span>
              <span className="text-white text-lg sm:text-xl font-bold tracking-wider">NEXTJS</span>
              <span className="text-white text-xl">✦</span>
              <span className="text-white text-lg sm:text-xl font-bold tracking-wider">VUE</span>
              <span className="text-white text-xl">✦</span>
              <span className="text-white text-lg sm:text-xl font-bold tracking-wider">NUXT</span>
              <span className="text-white text-xl">✦</span>
              <span className="text-white text-lg sm:text-xl font-bold tracking-wider">REACT NATIVE</span>
              <span className="text-white text-xl">✦</span>
              <span className="text-white text-lg sm:text-xl font-bold tracking-wider">NODEJS</span>
              <span className="text-white text-xl">✦</span>
              <span className="text-white text-lg sm:text-xl font-bold tracking-wider">RUST</span>
              <span className="text-white text-xl">✦</span>
              <span className="text-white text-lg sm:text-xl font-bold tracking-wider">WORDPRESS</span>
              <span className="text-white text-xl">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
