
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Tarifs', href: '#pricing' },
  { name: 'Témoignages', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'py-3 glass-effect' : 'py-5 bg-transparent'
      )}
    >
      <nav className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center z-10">
          <span className="text-2xl font-bold text-bang-blue">
            Bang<span className="text-bang-orange">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-bang-blue hover:text-bang-orange transition-colors duration-200 font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 bg-bang-orange hover:bg-opacity-90 text-white rounded-full font-medium transition-all"
          >
            Nous contacter
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden z-10 text-bang-blue"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        <div className={cn(
          'fixed inset-0 bg-white flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}>
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-bang-blue hover:text-bang-orange text-xl font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-3 mt-4 bg-bang-orange hover:bg-opacity-90 text-white rounded-full font-medium transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Nous contacter
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
