import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(8px)", "blur(12px)"]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { path: '/', label: 'Home', internal: true },
    { path: '/services', label: 'Services', internal: true },
    { path: '/about', label: 'About', internal: true },
    { path: '/contact', label: 'Contact', internal: true },
    { path: 'https://huntmynest.com/', label: 'Properties', internal: false },
  ];

  const renderLink = (link: typeof navLinks[0], isMobile: boolean = false) => {
    const commonClasses = isMobile
      ? `font-manrope text-lg py-2 transition-colors ${
          link.internal && isActive(link.path)
            ? 'text-[#2E3192] font-semibold'
            : 'text-[#374151] hover:text-[#2E3192]'
        }`
      : `font-manrope transition-colors ${
          link.internal && isActive(link.path)
            ? 'text-[#2E3192] font-semibold'
            : 'text-[#374151] hover:text-[#2E3192]'
        }`;

    if (link.internal) {
      return (
        <Link
          key={link.path}
          to={link.path}
          className={commonClasses}
          onClick={closeMobileMenu}
        >
          {link.label}
        </Link>
      );
    } else {
      return (
        <a
          key={link.path}
          href={link.path}
          target="_blank"
          rel="noopener noreferrer"
          className={commonClasses}
          onClick={closeMobileMenu}
        >
          {link.label}
          <ExternalLink className="inline w-3 h-3 ml-1" />
        </a>
      );
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ backgroundColor: `rgba(255, 255, 255, ${bgOpacity.get()})`, backdropFilter: backdropBlur }}
      className="sticky top-0 z-50 border-b border-[#E6D5C3]"
    >
      <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
          <img 
            src="/logo.png" 
            alt="RealEstate" 
            className="h-14 w-auto"/>  
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => renderLink(link, false))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#374151] hover:text-[#2E3192] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="font-material-icons text-2xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-[#E6D5C3] shadow-lg py-4 px-8 flex flex-col gap-4">
          {navLinks.map((link) => renderLink(link, true))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
