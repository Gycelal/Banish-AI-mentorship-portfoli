import React from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, GraduationCap, Users } from 'lucide-react';
import banishHalf from '../assets/banishhalf.png';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 sm:pb-20 lg:pb-24">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Two-column hero: Image LEFT, Text RIGHT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">

          {/* ── LEFT: Modern image presentation ── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm">

              {/* Offset accent block behind — creates a layered depth effect */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl"
                style={{ background: '#2F54EB', opacity: 0.08 }}
              />
              <div
                className="absolute -bottom-1.5 -right-1.5 w-full h-full rounded-3xl"
                style={{ background: '#2F54EB', opacity: 0.06 }}
              />

              {/* Main image card */}
              <div className="relative rounded-3xl overflow-hidden" style={{ background: '#F2F5FB' }}>

                {/* Accent color strip along the left edge */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl"
                  style={{ background: 'linear-gradient(to bottom, #2F54EB, #7C4DFF)' }}
                />

                {/* Image — bg matches page so transparent edges are invisible */}
                <div className="flex items-end justify-center pt-6" style={{ minHeight: '460px' }}>
                  <img
                    src={banishHalf}
                    alt="Mohammed Banish — AI Educator"
                    className="max-w-full object-contain object-bottom select-none"
                    style={{ maxHeight: '460px', display: 'block' }}
                    loading="eager"
                  />
                </div>

                {/* Floating credential card at the bottom of the image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-heading font-bold text-sm text-slate-900">Mohammed Banish</p>
                    <p className="text-xs text-slate-500 mt-0.5">M.Sc. Computer Science · AI Educator</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                      <GraduationCap className="w-3 h-3" />
                      3+ yrs
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      <Users className="w-3 h-3" />
                      300+ students
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ── RIGHT: Heading, subtitle, highlights, CTAs ── */}
          <div className="lg:col-span-7 flex flex-col justify-center pb-4">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs sm:text-sm font-semibold w-fit mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
              AI & Digital Skills Education
            </div>

            <h1 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight">
              Learn AI, design and video, with a real teacher.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Hands-on training for students in AI tools, Canva, CapCut and everyday computer skills.
              Choose 12, 24 or 48 hours and finish with work you can show.
            </p>

            {/* Key highlights */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {[
                'School & CBSE Aligned',
                'Free Software Only',
                '1-on-1 & Small Batches',
                'Parent Showcase Included',
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#packages"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm sm:text-base shadow-md transition-all duration-200"
              >
                See the packages
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm sm:text-base border border-slate-300 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                Book a free demo
              </a>
            </div>

            {/* Trust line */}
            <p className="mt-6 pt-5 border-t border-slate-200/60 text-xs text-slate-400 flex flex-wrap gap-3">
              <span>CBSE Curriculum Aligned</span>
              <span>•</span>
              <span>Free Software Used</span>
              <span>•</span>
              <span>Parent Demonstrations</span>
            </p>

          </div>
        </div>

        {/* ── Training hours bar chart (unchanged) ── */}
        <div className="mt-14 pt-10 border-t border-slate-200/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Curriculum Structure</span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mt-1">
                Balanced Training Distribution Across All Hours
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Every package systematically covers foundational computing, AI tools, Canva design, and CapCut editing.
              </p>
            </div>
            <a
              href="#packages"
              className="text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 shrink-0"
            >
              Compare full package details <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-3.5 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs">
            {/* 12 hrs */}
            <div className="grid grid-cols-1 sm:grid-cols-[90px_1fr] items-center gap-2 sm:gap-4">
              <div className="flex items-baseline justify-between sm:justify-start gap-1">
                <span className="font-heading font-extrabold text-slate-900 text-base">12 hrs</span>
                <span className="text-xs text-slate-400 font-medium">Starter</span>
              </div>
              <div className="h-8 w-full bg-slate-100 rounded-lg overflow-hidden flex shadow-inner">
                <div style={{ width: '25%' }} className="h-full bg-blue-600 flex items-center justify-center text-[11px] font-bold text-white hover:opacity-90" title="Computer Skills: 3 hrs">3h</div>
                <div style={{ width: '33.3%' }} className="h-full bg-purple-600 flex items-center justify-center text-[11px] font-bold text-white hover:opacity-90" title="AI Tools: 4 hrs">4h</div>
                <div style={{ width: '25%' }} className="h-full bg-teal-600 flex items-center justify-center text-[11px] font-bold text-white hover:opacity-90" title="Canva Design: 3 hrs">3h</div>
                <div style={{ width: '16.7%' }} className="h-full bg-rose-500 flex items-center justify-center text-[11px] font-bold text-white hover:opacity-90" title="CapCut Video: 2 hrs">2h</div>
              </div>
            </div>
            {/* 24 hrs */}
            <div className="grid grid-cols-1 sm:grid-cols-[90px_1fr] items-center gap-2 sm:gap-4">
              <div className="flex items-baseline justify-between sm:justify-start gap-1">
                <span className="font-heading font-extrabold text-indigo-600 text-base">24 hrs</span>
                <span className="text-xs text-indigo-500 font-semibold">Standard ★</span>
              </div>
              <div className="h-8 w-full bg-slate-100 rounded-lg overflow-hidden flex shadow-inner">
                <div style={{ width: '20.8%' }} className="h-full bg-blue-600 flex items-center justify-center text-[11px] font-bold text-white hover:opacity-90" title="Computer Skills: 5 hrs">5h</div>
                <div style={{ width: '29.2%' }} className="h-full bg-purple-600 flex items-center justify-center text-[11px] font-bold text-white hover:opacity-90" title="AI Tools: 7 hrs">7h</div>
                <div style={{ width: '25%' }} className="h-full bg-teal-600 flex items-center justify-center text-[11px] font-bold text-white hover:opacity-90" title="Canva Design: 6 hrs">6h</div>
                <div style={{ width: '25%' }} className="h-full bg-rose-500 flex items-center justify-center text-[11px] font-bold text-white hover:opacity-90" title="CapCut Video: 6 hrs">6h</div>
              </div>
            </div>
            {/* 48 hrs */}
            <div className="grid grid-cols-1 sm:grid-cols-[90px_1fr] items-center gap-2 sm:gap-4">
              <div className="flex items-baseline justify-between sm:justify-start gap-1">
                <span className="font-heading font-extrabold text-slate-900 text-base">48 hrs</span>
                <span className="text-xs text-slate-400 font-medium">Pro</span>
              </div>
              <div className="h-8 w-full bg-slate-100 rounded-lg overflow-hidden flex shadow-inner">
                <div style={{ width: '16.7%' }} className="h-full bg-blue-600 flex items-center justify-center text-[11px] font-bold text-white hover:opacity-90" title="Computer Skills: 8 hrs">8h</div>
                <div style={{ width: '29.2%' }} className="h-full bg-purple-600 flex items-center justify-center text-[11px] font-bold text-white hover:opacity-90" title="AI Tools: 14 hrs">14h</div>
                <div style={{ width: '20.8%' }} className="h-full bg-teal-600 flex items-center justify-center text-[11px] font-bold text-white hover:opacity-90" title="Canva Design: 10 hrs">10h</div>
                <div style={{ width: '25%' }} className="h-full bg-rose-500 flex items-center justify-center text-[11px] font-bold text-white hover:opacity-90" title="CapCut Video: 12 hrs">12h</div>
                <div style={{ width: '8.3%' }} className="h-full bg-slate-900 flex items-center justify-center text-[11px] font-bold text-white hover:opacity-90" title="Final Showcase Project: 4 hrs">4h</div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-blue-600" /> Computer Skills</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-purple-600" /> AI Tools</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-teal-600" /> Canva Design</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-rose-500" /> CapCut Video</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-slate-900" /> Final Showcase Project</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
