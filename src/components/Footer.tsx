import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'Github', url: 'https://github.com/sundayjava' },
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/sunday-david-951369266/' },
    { name: 'Instagram', url: 'https://www.instagram.com/sunday_david_001?igsh=MWczMXF3cWQ5a2lyZg==' },
    { name: 'Tiktok', url: 'https://www.tiktok.com/@sundxtech?_r=1&_t=ZS-92nf0AjePFw' },
  ];

  return (
    <footer className="relative py-12 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <svg 
              className="w-12 h-12" 
              viewBox="0 0 50 50" 
              fill="none"
            >
              <path 
                d="M15 15 L35 35 M35 15 L15 35" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round"
                className="text-black"
              />
            </svg>
          </motion.div> */}

          {/* Social Links */}
          <motion.div 
            className="flex flex-wrap items-center gap-6 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socialLinks.map((link, _index) => (
              <motion.a
                key={link.name}
                href={link.url}
                className="text-black hover:text-[#C29A3A] transition-colors text-sm md:text-base"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-gray-600 text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Personal portfolio©2024
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
