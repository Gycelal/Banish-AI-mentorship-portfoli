import React, { useState } from 'react';
import {
  Award,
  Shield,
  Cpu,
  Globe,
  Palette,
  Terminal,
  Languages,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { certificates } from '../data/portfolioData';

export default function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & Data', 'Security', 'Design & Teaching', 'Leadership', 'Languages'];

  const filteredCerts = selectedCategory === 'All'
    ? certificates
    : certificates.filter(c => c.category.includes(selectedCategory));

  const getCategoryIcon = (category) => {
    if (category.includes('AI') || category.includes('Data')) {
      return <Cpu className="w-5 h-5 text-indigo-600" />;
    }
    if (category.includes('Security') || category.includes('Infrastructure')) {
      return <Shield className="w-5 h-5 text-blue-600" />;
    }
    if (category.includes('Design') || category.includes('Teaching')) {
      return <Palette className="w-5 h-5 text-teal-600" />;
    }
    if (category.includes('Languages')) {
      return <Languages className="w-5 h-5 text-amber-500" />;
    }
    return <Award className="w-5 h-5 text-purple-600" />;
  };

  return (
    <section id="certificates" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Professional Accreditations
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mt-3 tracking-tight">
            Verified Certifications
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Continuous professional learning in artificial intelligence, cybersecurity, networking, data science, and modern pedagogy.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/90'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredCerts.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-indigo-300 shadow-2xs hover:shadow-sm transition-all duration-200 flex items-start gap-4"
            >
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 shrink-0">
                {getCategoryIcon(cert.category)}
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 leading-snug">
                  {cert.title}
                </h4>
                <p className="text-xs font-medium text-slate-500 mt-1 flex items-center justify-between">
                  <span>{cert.issuer}</span>
                  <span className="text-indigo-600 font-semibold shrink-0 ml-2">{cert.year}</span>
                </p>
                <div className="mt-2.5 flex items-center gap-2">
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-sm">
                    {cert.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
