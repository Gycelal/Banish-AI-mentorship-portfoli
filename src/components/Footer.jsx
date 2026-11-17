import React from 'react';
import { ArrowUp, Heart, MessageCircle, Mail, Globe } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-heading font-extrabold flex items-center justify-center text-sm">
                MB
              </div>
              <span className="font-heading font-bold text-white text-base">
                Mohammed Banish
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed max-w-sm">
              Empowering school students with practical AI literacy, visual design in Canva, video storytelling in CapCut, and everyday computer skills.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
            <a href="#packages" className="hover:text-white transition-colors">Packages</a>
            <a href="#curriculum" className="hover:text-white transition-colors">What You Learn</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#certificates" className="hover:text-white transition-colors">Certificates</a>
            <a href="#research" className="hover:text-white transition-colors">Research</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-indigo-400 border border-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-rose-400 border border-slate-800 transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-indigo-600 text-slate-300 hover:text-white border border-slate-800 transition-all ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & languages */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Mohammed Banish. All rights reserved.</p>
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <span>Languages: {personalInfo.languages.join(' · ')}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
