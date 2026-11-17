import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Users,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  FileCheck
} from 'lucide-react';
import { personalInfo, qualifications, experience } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column layout matching the original template */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Bio & Impact Numbers */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                Meet Your Instructor
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mt-3 tracking-tight">
                Dedicated ICT & AI Educator
              </h2>

              <div className="mt-6 space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  I am <strong className="text-slate-900 font-semibold">Mohammed Banish</strong>, an ICT and Computer Science teacher holding an <strong className="text-slate-900 font-semibold">M.Sc. in Computer Science</strong> from the University of Calicut. I have taught ICT, robotics, and applied computing to high school students for more than three years, following the CBSE curriculum.
                </p>
                <p>
                  At <strong className="text-slate-900 font-semibold">Peace Public School</strong>, I managed the digital learning ecosystem for 300+ students and personally trained 20+ fellow teachers on ERP systems, interactive smartboards, and e-learning pedagogical tools.
                </p>
                <p>
                  Because I actively design and edit for digital media, I don't teach Canva and video editing from textbooks—I teach from real-world, commercial experience that makes learning creative, fun, and immediately practical.
                </p>
              </div>

              {/* Verified Credentials Pill */}
              <div className="mt-6 p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100/90 flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-700">
                  <span className="font-bold text-slate-900">Apostille-Attested Credentials:</span> M.Sc. degree officially apostille-attested (Feb 2025) for international educational standards.
                </div>
              </div>
            </div>

            {/* Impact Metric Cards */}
            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center sm:text-left">
                <span className="block font-heading font-extrabold text-3xl text-indigo-600">
                  {personalInfo.experienceYears}
                </span>
                <span className="text-xs font-medium text-slate-500 mt-1 block">
                  Years Teaching
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center sm:text-left">
                <span className="block font-heading font-extrabold text-3xl text-indigo-600">
                  {personalInfo.studentsSupported}
                </span>
                <span className="text-xs font-medium text-slate-500 mt-1 block">
                  Students Mentored
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center sm:text-left">
                <span className="block font-heading font-extrabold text-3xl text-indigo-600">
                  {personalInfo.teachersTrained}
                </span>
                <span className="text-xs font-medium text-slate-500 mt-1 block">
                  Teachers Trained
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center sm:text-left">
                <span className="block font-heading font-extrabold text-3xl text-indigo-600">
                  {personalInfo.researchPapers}
                </span>
                <span className="text-xs font-medium text-slate-500 mt-1 block">
                  Published Papers
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Qualifications & Teaching Timeline */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                Background & Experience
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mt-3 tracking-tight">
                Academic & Professional Journey
              </h3>

              {/* Education & Experience Timeline */}
              <div className="mt-8 relative border-l-2 border-indigo-200 pl-6 sm:pl-8 space-y-7">
                
                {/* M.Sc. */}
                <div className="relative">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-xs"></div>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900">
                      M.Sc. Computer Science
                    </h4>
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                      2021 – 2023
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">
                    St. Thomas College (Autonomous), University of Calicut
                  </p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Degree apostille-attested (Feb 2025). Specialization in machine learning algorithms and computational research.
                  </p>
                </div>

                {/* B.Sc. */}
                <div className="relative">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-indigo-400 border-4 border-white shadow-xs"></div>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900">
                      B.Sc. Computer Science
                    </h4>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      2018 – 2021
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">
                    MES Ponnani College, University of Calicut
                  </p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Foundational programming, web technologies, database structures, and networking fundamentals.
                  </p>
                </div>

                {/* Diploma */}
                <div className="relative">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-teal-500 border-4 border-white shadow-xs"></div>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900">
                      Diploma in Graphic Designing
                    </h4>
                    <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">
                      2025
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">
                    GrapesGenix
                  </p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Hands-on mastery of Photoshop, Illustrator, Premiere Pro, Lightroom, DaVinci Resolve, and Canva.
                  </p>
                </div>

                {/* Teaching: BrightLine */}
                <div className="relative">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-purple-500 border-4 border-white shadow-xs"></div>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900">
                      ICT Teacher
                    </h4>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      Jun – Nov 2025
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">
                    BrightLine English School
                  </p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Taught interactive computing and modern digital literacy to secondary school students.
                  </p>
                </div>

                {/* Teaching: Peace Public School */}
                <div className="relative">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-rose-500 border-4 border-white shadow-xs"></div>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900">
                      ICT Teacher, PRO & Graphic Designer
                    </h4>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      2023 – 2025
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">
                    Peace Public School (CBSE)
                  </p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Managed digital learning platform for 300+ students and trained 20+ teachers on smartboards and ERP software.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
