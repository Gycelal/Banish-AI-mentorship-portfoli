import React, { useState } from 'react';
import {
  Monitor,
  Bot,
  Palette,
  Video,
  CheckCircle,
  PlusCircle,
  ShieldCheck,
  Sparkles,
  Lock,
  Award
} from 'lucide-react';
import { curriculumTracks, teachingPillars } from '../data/portfolioData';

export default function Curriculum() {
  const [activeTab, setActiveTab] = useState('all');

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Monitor':
        return <Monitor className="w-6 h-6" />;
      case 'Bot':
        return <Bot className="w-6 h-6" />;
      case 'Palette':
        return <Palette className="w-6 h-6" />;
      case 'Video':
        return <Video className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-indigo-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-teal-600" />;
      case 'Award':
        return <Award className="w-5 h-5 text-amber-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="curriculum" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
            Curriculum Breakdown
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mt-3 tracking-tight">
            What Students Learn & Master
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Hands-on training using accessible, industry-standard free tools so families never incur unexpected software subscriptions.
          </p>
        </div>

        {/* 4 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {curriculumTracks.map((track) => (
            <div
              key={track.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
            >
              {/* Top Accent Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: track.color }}
              ></div>

              <div>
                {/* Header with Icon and Title */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-sm"
                    style={{ backgroundColor: track.color }}
                  >
                    {getIcon(track.icon)}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Core Pillar
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-1">
                  {track.title}
                </h3>
                <p className="text-sm font-semibold text-slate-500 mb-3">
                  {track.subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {track.description}
                </p>

                {/* Core Topics Checklist */}
                <div className="mb-6 space-y-2.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Foundation Topics (All Packages):
                  </p>
                  <ul className="space-y-2">
                    {track.coreTopics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pro Extension Highlight Box */}
              <div className="mt-4 pt-4 border-t border-slate-100 bg-slate-50/80 -mx-7 -mb-7 sm:-mx-8 sm:-mb-8 p-5 sm:px-8 border-b-0 rounded-b-3xl">
                <div className="flex items-start gap-2.5">
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-wide bg-indigo-600 text-white px-2 py-0.5 rounded-md shrink-0 mt-0.5">
                    Pro 48h
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-800">Advanced Extension:</strong> {track.proBonus}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* 4 Guiding Pedagogical Principles */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 text-center mb-8">
            Why Parents & Students Choose This Training
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachingPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                  {getPillarIcon(pillar.icon)}
                </div>
                <h4 className="font-heading font-bold text-base text-slate-900 mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
