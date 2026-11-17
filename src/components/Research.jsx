import React from 'react';
import { BookOpen, ShieldAlert, Cpu, ArrowUpRight, Sparkles } from 'lucide-react';
import { researchPapers } from '../data/portfolioData';

export default function Research() {
  return (
    <section id="research" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
            Academic Research
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mt-3 tracking-tight">
            Published Research & Studies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Scholarly work in cybersecurity ethics and algorithmic machine learning that directly informs the student curriculum.
          </p>
        </div>

        {/* Research Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchPapers.map((paper) => (
            <div
              key={paper.id}
              className="rounded-3xl p-7 sm:p-8 bg-gradient-to-br from-slate-50 via-white to-slate-50/50 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                    <BookOpen className="w-3.5 h-3.5" />
                    Published Research
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {paper.year}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 leading-snug mb-3">
                  {paper.title}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-indigo-600 mb-4">
                  {paper.author} {paper.institution && `· ${paper.institution}`}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {paper.summary}
                </p>
              </div>

              {/* Curriculum Connection Badge */}
              <div className="pt-4 border-t border-slate-200/80 bg-white/70 rounded-xl p-3.5 border">
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong className="text-indigo-900 font-semibold flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    Classroom Impact:
                  </strong>
                  {paper.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
