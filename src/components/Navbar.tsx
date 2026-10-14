import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onExploreMenu?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onExploreMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Story', href: '#story' },
    { label: 'Signature Dishes', href: '#dishes' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuClick = () => {
    setMobileMenuOpen(false);
    if (onExploreMenu) {
      onExploreMenu();
    } else {
      const element = document.querySelector('#dishes');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#201C19]/95 backdrop-blur-md border-b border-[#D6A54D]/15 py-3 shadow-lg shadow-black/30'
          : 'bg-gradient-to-b from-[#201C19]/90 via-[#201C19]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Subtitle */}
          <a
            href="#hero"
            className="group flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D6A54D]"
          >
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-widest text-[#F7F0E5] group-hover:text-[#D6A54D] transition-colors">
                GAONKARI
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6A54D] hidden sm:inline-block" />
            </div>
            <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#D6A54D]/90 font-medium">
              The Royal Saoji &amp; Maharashtrian Dining Experience
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-[#F7F0E5]/80 hover:text-[#D6A54D] transition-colors duration-200 py-1 border-b border-transparent hover:border-[#D6A54D]/50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleMenuClick}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#201C19] bg-gradient-to-r from-[#D6A54D] via-[#e2b765] to-[#D6A54D] hover:brightness-105 rounded-sm shadow-md transition-all duration-200 cursor-pointer active:scale-95"
            >
              <span>Explore Our Menu</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden p-2 text-[#F7F0E5] hover:text-[#D6A54D] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D6A54D]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#201C19]/98 border-b border-[#D6A54D]/20 px-6 pt-4 pb-8 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-medium text-[#F7F0E5]/90 hover:text-[#D6A54D] py-2 border-b border-[#35251F] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={handleMenuClick}
              className="w-full mt-4 flex items-center justify-center gap-2 py-3 text-xs font-semibold tracking-wider uppercase text-[#201C19] bg-[#D6A54D] rounded-sm"
            >
              <span>Explore Our Menu</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
