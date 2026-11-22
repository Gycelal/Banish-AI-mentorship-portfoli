import React, { useState } from 'react';
import {
  MessageCircle,
  Mail,
  Phone,
  Send,
  Calendar,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import { personalInfo, coursePackages } from '../data/portfolioData';

export default function Contact() {
  const [studentAge, setStudentAge] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('Standard (24 hrs)');
  const [learningMode, setLearningMode] = useState('Online (1-on-1)');
  const [customNote, setCustomNote] = useState('');

  // Generate WhatsApp message with prefilled options
  const generateWhatsAppUrl = () => {
    let msg = `Hi Mohammed, I'd like to book a Free Demo Class.\n\n`;
    if (studentAge) msg += `• Student Age/Grade: ${studentAge}\n`;
    msg += `• Interested Package: ${selectedPackage}\n`;
    msg += `• Preferred Format: ${learningMode}\n`;
    if (customNote) msg += `• Additional Notes: ${customNote}\n`;
    msg += `\nPlease share available batch timings and fees. Thank you!`;

    return `${personalInfo.whatsappUrl}?text=${encodeURIComponent(msg)}`;
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`Demo Class Enquiry - ${selectedPackage}`);
    let body = `Hi Mohammed,\n\nI would like to enquire about a Free Demo Class for my child.\n\n`;
    if (studentAge) body += `Student Age/Grade: ${studentAge}\n`;
    body += `Interested Package: ${selectedPackage}\n`;
    body += `Preferred Format: ${learningMode}\n`;
    if (customNote) body += `Notes: ${customNote}\n`;
    body += `\nPlease reply with batch timings and fee details.\n\nThank you!`;

    return `mailto:${personalInfo.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">

      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Banner Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-3.5 py-1 rounded-full border border-indigo-800">
            Get In Touch
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mt-4 tracking-tight">
            Book a Free 30-Minute Demo Class
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Tell me the student’s age and which package interests you. I will reply directly with convenient batch timings and fee details.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Left Column: Direct Links & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">

            <div className="bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-lg">
              <h3 className="font-heading font-bold text-xl text-white mb-2">
                Fastest Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Reach out on WhatsApp for immediate responses, or send an email or Instagram message.
              </p>

              <div className="space-y-3.5">
                {/* WhatsApp button */}
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-white transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                        WhatsApp (Recommended)
                      </p>
                      <p className="text-xs text-slate-300">{personalInfo.phone}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Email button */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-white transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                        Email Inquiry
                      </p>
                      <p className="text-xs text-slate-300 truncate max-w-[180px] sm:max-w-none">
                        {personalInfo.email}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Instagram button */}
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 text-white transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0">
                      <InstagramIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                        Instagram Profile
                      </p>
                      <p className="text-xs text-slate-300">{personalInfo.instagramHandle}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick response promise */}
            <div className="bg-slate-800/40 rounded-2xl p-5 border border-slate-700/50 flex items-center gap-3">
              <Clock className="w-5 h-5 text-indigo-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-white">Prompt Reply Guaranteed:</span> Typically replies within 1–2 hours during daytime (IST).
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Demo Request Helper */}
          <div className="lg:col-span-7">
            <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-heading font-bold text-xl text-white">
                    Quick Demo Class Enquiry
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Select your preference to generate a prefilled message instantly.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800">
                  <Sparkles className="w-3.5 h-3.5" /> 100% Free Demo
                </span>
              </div>

              <div className="space-y-4">

                {/* Student Age / Grade input */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Student's Age or Current Grade
                  </label>
                  <input
                    type="text"
                    value={studentAge}
                    onChange={(e) => setStudentAge(e.target.value)}
                    placeholder="e.g. 13 years / Grade 8"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>

                {/* Package selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Interested Training Package
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {coursePackages.map((pkg) => (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setSelectedPackage(`${pkg.name} (${pkg.duration})`)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-center border transition-all ${selectedPackage.includes(pkg.name)
                          ? 'bg-indigo-600 border-indigo-400 text-white shadow-sm'
                          : 'bg-slate-900/80 border-slate-700 text-slate-300 hover:border-slate-600'
                          }`}
                      >
                        <div>{pkg.name}</div>
                        <div className="text-[10px] opacity-75 font-normal mt-0.5">{pkg.duration}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Training Format / Mode */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Preferred Format
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Online (1-on-1)', 'Small Batch (3-4 students)'].map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setLearningMode(mode)}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold text-center border transition-all ${learningMode === mode
                          ? 'bg-indigo-600 border-indigo-400 text-white'
                          : 'bg-slate-900/80 border-slate-700 text-slate-300 hover:border-slate-600'
                          }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Optional note */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Any specific goal or software interest? (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="e.g. Wants to make YouTube shorts, prepare for CBSE computer science, or learn AI prompting..."
                    className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  ></textarea>
                </div>

                {/* Action buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md transition-all duration-200"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>

                  <a
                    href={generateMailtoUrl()}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold text-sm transition-all duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email</span>
                  </a>
                </div>

                <p className="text-[11px] text-center text-slate-400 mt-2">
                  No advance payment or commitment required for demo classes.
                </p>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
