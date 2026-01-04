import { useState, useEffect } from 'react';

interface NavItemProps {
  title: string;
  subtitle: string;
  icon: string;
  onClick: () => void;
}

interface MobileNavItemProps {
  title: string;
  icon: string;
  onClick: () => void;
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when drawer is open
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDrawerOpen]);

  return (
    <>
      {/* Gradient Background - Always visible at top */}
      <div className="fixed top-0 left-0 right-0 h-20 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 -z-10" />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href='/' className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold text-black border-b-2 border-black pb-1">
                it's me
              </h1>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <NavItem
                title="My Projects"
                subtitle="See all of nice project I have done"
                icon="↗"
                onClick={() => scrollToSection('projects')}
              />
              <NavItem
                title="About Me"
                subtitle="Learn about my self and I do"
                icon="↗"
                onClick={() => scrollToSection('experience')}
              />
              <NavItem
                title="Contact me"
                subtitle="hellotosunday@gmail.com"
                icon="↗"
                onClick={() => scrollToSection('contact')}
              />
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="lg:hidden p-2 text-black hover:text-[#C29A3A] transition-colors"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsDrawerOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-64 sm:w-80 bg-white shadow-xl transform transition-transform duration-300 ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-bold text-black"></h2>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 text-black hover:text-[#C29A3A] transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col p-4 space-y-4">
            <MobileNavItem
              title="My Projects"
              icon="↗"
              onClick={() => scrollToSection('projects')}
            />
            <MobileNavItem
              title="About Me"
              icon="↗"
              onClick={() => scrollToSection('experience')}
            />
            <MobileNavItem
              title="Contact me"
              icon="↗"
              onClick={() => scrollToSection('contact')}
            />
          </nav>
        </div>
      </div>
    </>
  );
};

const NavItem = ({ title, subtitle, icon, onClick }: NavItemProps) => {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-sm font-medium text-black group-hover:text-[#C29A3A] transition-colors">
          {title}
        </span>
        <span className="text-xs text-[#C29A3A] group-hover:text-[#C29A3A] transition-colors">
          {icon}
        </span>
      </div>
      <p className="text-xs text-gray-600 max-w-[150px]">{subtitle}</p>
    </div>
  );
};

const MobileNavItem = ({ title, icon, onClick }: MobileNavItemProps) => {
  return (
    <button
      onClick={onClick}
      className="group flex items-center justify-between w-full p-4 rounded-lg hover:bg-gray-100 transition-colors text-left"
    >
      <span className="text-base font-medium text-black group-hover:text-[#C29A3A] transition-colors">
        {title}
      </span>
      <span className="text-sm text-black group-hover:text-[#FFFF00] transition-colors">
        {icon}
      </span>
    </button>
  );
};

export default Header;
