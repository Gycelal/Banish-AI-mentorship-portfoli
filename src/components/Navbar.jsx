import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Packages', href: '#packages' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'About', href: '#about' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Research', href: '#research' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/70 backdrop-blur-sm border-b border-slate-200/50 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="font-heading font-extrabold text-slate-900 text-lg tracking-tight hover:text-indigo-600 transition-colors"
            aria-label="Mohammed Banish - Home"
          >
            Mohammed Banish
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-indigo-600 rounded-lg hover:bg-slate-100/70 transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-sm hover:shadow transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Book Free Demo</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-slate-100 mt-3 animate-fade-in">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition-colors"
                >
                  Book Free Demo Class
                </a>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  Chat on WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
