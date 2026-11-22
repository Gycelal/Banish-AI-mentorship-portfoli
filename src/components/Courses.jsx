import React from 'react';
import {
  Check,
  Clock,
  Calendar,
  Sparkles,
  MessageCircle,
  Award,
  ArrowRight
} from 'lucide-react';
import { coursePackages, personalInfo } from '../data/portfolioData';

export default function Courses() {
  const createWhatsAppLink = (message) => {
    return `${personalInfo.whatsappUrl}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="packages" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Training Packages
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mt-3 tracking-tight">
            Choose Your Learning Package
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every package covers all four core areas: Computer Skills, AI Tools, Canva Design, and CapCut Video Editing. The longer the course, the deeper the project portfolio.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {coursePackages.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col rounded-3xl transition-all duration-300 ${isPopular
                  ? 'bg-slate-900 text-white shadow-xl shadow-indigo-900/10 ring-2 ring-indigo-500 scale-[1.02] md:-translate-y-2'
                  : 'bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
                  }`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div className="p-7 sm:p-8 flex flex-col h-full">

                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-heading font-bold text-2xl tracking-tight">
                      {pkg.name}
                    </h3>
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${isPopular
                        ? 'bg-indigo-950 text-indigo-300 border border-indigo-800'
                        : 'bg-slate-100 text-slate-600'
                        }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>

                  <p className={`text-xs sm:text-sm font-medium mb-5 ${isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                    {pkg.tagline}
                  </p>

                  {/* Hours Big Display */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className={`font-heading font-extrabold text-4xl sm:text-5xl tracking-tight ${isPopular ? 'text-white' : 'text-indigo-600'}`}>
                        {pkg.duration}
                      </span>
                      <span className={`text-xs font-medium ${isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                        total training
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs mt-1 text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{pkg.weeks} duration</span>
                    </div>
                  </div>

                  {/* Module Breakdown List */}
                  <div className={`pt-4 pb-5 border-t ${isPopular ? 'border-slate-800' : 'border-slate-100'}`}>
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                      Hour Breakdown:
                    </p>
                    <ul className="space-y-2 text-sm">
                      {pkg.modules.map((m, idx) => (
                        <li key={idx} className="flex items-center justify-between">
                          <span className="flex items-center gap-2">
                            <Check className={`w-4 h-4 shrink-0 ${isPopular ? 'text-emerald-400' : 'text-emerald-500'}`} />
                            <span className={isPopular ? 'text-slate-200' : 'text-slate-700'}>
                              {m.label}
                            </span>
                          </span>
                          <span className={`font-semibold text-xs ${isPopular ? 'text-indigo-300' : 'text-indigo-600'}`}>
                            {m.hours}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables / You Get */}
                  <div className={`mt-auto pt-4 border-t ${isPopular ? 'border-slate-800' : 'border-slate-100'}`}>
                    <div className="flex items-start gap-2.5">
                      <Award className={`w-4 h-4 mt-0.5 shrink-0 ${isPopular ? 'text-amber-400' : 'text-amber-500'}`} />
                      <p className={`text-xs leading-relaxed ${isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                        <strong className={isPopular ? 'text-white' : 'text-slate-900'}>You get:</strong>{' '}
                        {pkg.outcome}
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 pt-2">
                    <a
                      href={createWhatsAppLink(pkg.whatsappEnquiry)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm ${isPopular
                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white hover:shadow-indigo-500/25'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                        }`}
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Free Consultation Banner */}
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900">
              Not sure which package fits your student?
            </h4>
            <p className="text-sm text-slate-600 mt-1">
              Connect directly with Mohammed Banish. We assess your child's age, grade level, and current interest to recommend the most rewarding path.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-300 transition-colors"
            >
              Request Free Demo
            </a>
            <a
              href={`https://wa.me/${personalInfo.phoneRaw}?text=${encodeURIComponent("Hi Mohammed, I'd like help choosing the best course package for my child.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm inline-flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
