import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Curriculum from './components/Curriculum';
import About from './components/About';
import Certificates from './components/Certificates';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Courses />
        <Curriculum />
        <About />
        <Certificates />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
