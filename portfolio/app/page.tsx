'use client';

import { useState } from 'react';

export default function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <main className={`min-h-screen transition-colors duration-300 relative selection:bg-[#38BDF8] selection:text-[#0F172A] ${darkMode ? 'bg-[#0F172A] text-[#F8FAFC]' : 'bg-[#F8FAFC] text-[#0F172A]'}`}>
      
      {/* 1. STICKY NAVIGATION BAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0F172A]/85 backdrop-blur-md border-b border-[#1E293B]">
        <nav className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          
          {/* Left Menu Links */}
          <ul className="flex gap-8 text-sm font-medium text-slate-300">
            <li><a href="#home" className="hover:text-[#38BDF8] transition-colors">Home</a></li>
            <li><a href="#education" className="hover:text-[#38BDF8] transition-colors">Education</a></li>
            <li><a href="#skills" className="hover:text-[#38BDF8] transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-[#38BDF8] transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-[#38BDF8] transition-colors">Contact</a></li>
          </ul>

          {/* Right Social Icons */}
          <div className="flex items-center gap-5 text-slate-300">
            <a href="https://www.linkedin.com/in/viditsharma-software/" target="_blank" rel="noopener noreferrer" className="hover:text-[#38BDF8] transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            
            <a href="https://github.com/viditsmart" target="_blank" rel="noopener noreferrer" className="hover:text-[#38BDF8] transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* LIGHT/DARK MODE TOGGLE BUTTON */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl border transition flex items-center justify-center ${darkMode ? 'bg-[#1E293B] border-[#334155] text-yellow-400 hover:bg-[#334155]' : 'bg-white border-[#E2E8F0] text-amber-500 hover:bg-slate-100 shadow-sm'}`}
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                /* Sun Icon */
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                /* Moon Icon */
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>  
          </div>

          

        </nav>
      </header>

      {/* 2. HERO SECTION (Split Layout matching Figma) */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Column: Text & CTA */}
          <div className="text-left space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#F8FAFC]">
              Vidit Sharma
            </h1>
            <p className={`text-base md:text-lg leading-relaxed max-w-lg ${darkMode ? 'text-slate-300' : 'text-[#475569]'}`}>
              Intro: I'm Vidit Sharma, a passionate beginner developer and problem-solver. From building independent projects to pushing my limits at a hackathon, I love the logic of coding just as much as I love biking outdoors or gaming. I'm always eager to learn, build, and grow.
            </p>
            <div>
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 bg-[#38BDF8] hover:bg-[#7dd3fc] text-[#0F172A] font-semibold px-7 py-3.5 rounded-xl transition shadow-[0_0_20px_rgba(56,189,248,0.4)]"
              >
                Let's get started <span>&gt;</span>
              </a>
            </div>
          </div>

          {/* Right Column: Circular Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[320px] h-[320px] md:w-[416px] md:h-[416px] rounded-full overflow-hidden border-2 border-[#334155] shadow-2xl">
              {/* Replace the src below with your actual profile picture path or import */}
              <img 
                src="/Grad photo.png" 
                alt="Vidit Sharma" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="min-h-[80vh] py-24 px-8 max-w-7xl mx-auto flex flex-col justify-center">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Education</h2>
          
        </div>

        {/* Education Card */}
        <div className={`p-8 rounded-2xl border transition ${darkMode ? 'bg-[#1E293B]/40 border-[#334155]' : 'bg-white border-[#E2E8F0] shadow-sm'}`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
            <div>
              <h3 className="text-2xl font-bold text-[#F8FAFC]">University of Texas at Dallas</h3>
              <p className="text-[#38BDF8] font-medium text-lg">Bachelor of Science in Computer Science</p>
            </div>
            
            <div className="text-left md:text-right">
              <span className="inline-block bg-[#1E293B] text-slate-200 px-3 py-1 rounded-lg text-sm font-medium border border-[#334155]">
                Expected Graduation: May 2029
              </span>
              
            </div>
          </div>

          {/* Relevant Coursework */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-2.5">
              <span className="bg-[#1E293B] text-slate-300 px-3 py-1.5 rounded-lg text-sm border border-[#334155]">Programming Fundamentals (C++)</span>
              <span className="bg-[#1E293B] text-slate-300 px-3 py-1.5 rounded-lg text-sm border border-[#334155]">Computer Science 1 & 2 (Java)</span>
              <span className="bg-[#1E293B] text-slate-300 px-3 py-1.5 rounded-lg text-sm border border-[#334155]">Discrete Math for Computing 1</span>
              <span className="bg-[#1E293B] text-slate-300 px-3 py-1.5 rounded-lg text-sm border border-[#334155]">Computer Architecture</span>
              <span className="bg-[#1E293B] text-slate-300 px-3 py-1.5 rounded-lg text-sm border border-[#334155]">Probability and Stats in CS/SE</span>
              <span className="bg-[#1E293B] text-slate-300 px-3 py-1.5 rounded-lg text-sm border border-[#334155]">Professional & Technical Communication</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SKILLS SECTION */}
      <section id="skills" className="min-h-screen py-24 px-8 max-w-7xl mx-auto flex flex-col justify-center">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Skills & Expertise</h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-6 rounded-2xl border transition ${darkMode ? 'bg-[#1E293B]/40 border-[#334155]' : 'bg-white border-[#E2E8F0] shadow-sm'}`}>
            <h3 className="text-xl font-semibold mb-4 text-[#38BDF8]">Languages</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#1E293B] text-slate-200 px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[#334155]">C++</span>
              <span className="bg-[#1E293B] text-slate-200 px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[#334155]">Python</span>
              <span className="bg-[#1E293B] text-slate-200 px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[#334155]">Java</span>
              <span className="bg-[#1E293B] text-slate-200 px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[#334155]">JavaScript</span>
              <span className="bg-[#1E293B] text-slate-200 px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[#334155]">Typescript</span>
              <span className="bg-[#1E293B] text-slate-200 px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[#334155]">Swift</span>
              <span className="bg-[#1E293B] text-slate-200 px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[#334155]">HTML/CSS</span>
              <span className="bg-[#1E293B] text-slate-200 px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[#334155]">Assembly</span>
            </div>
          </div>
          <div className="bg-[#1E293B]/40 border border-[#334155] p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-[#38BDF8]">Frameworks & Tools</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#1E293B] text-slate-200 px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[#334155]">React</span>
              <span className="bg-[#1E293B] text-slate-200 px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[#334155]">Node.js</span>
              <span className="bg-[#1E293B] text-slate-200 px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[#334155]">Git</span>
              <span className="bg-[#1E293B] text-slate-200 px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[#334155]">Github</span>
              <span className="bg-[#1E293B] text-slate-200 px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[#334155]">Google Cloud Firestore</span>
              
            </div>
          </div>
          <div className="bg-[#1E293B]/40 border border-[#334155] p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-[#38BDF8]">Developer Concepts</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#1E293B] text-slate-200 px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[#334155]">Object-Oriented Design</span>
              <span className="bg-[#1E293B] text-slate-200 px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[#334155]">Data Structures</span>
              <span className="bg-[#1E293B] text-slate-200 px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[#334155]">Algorithms</span>
              <span className="bg-[#1E293B] text-slate-200 px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[#334155]">Software Testing</span>
              <span className="bg-[#1E293B] text-slate-200 px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[#334155]">Debugging</span>
              <span className="bg-[#1E293B] text-slate-200 px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[#334155]">CI/CD Workflows</span>
            </div>
          </div>
          <div className="bg-[#1E293B]/40 border border-[#334155] p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-[#38BDF8]">Libraries and Analytics</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#1E293B] text-slate-200 px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[#334155]">NumPy</span>
              <span className="bg-[#1E293B] text-slate-200 px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[#334155]">Pandas</span>
              <span className="bg-[#1E293B] text-slate-200 px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[#334155]">Matplotlib</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects" className="min-h-screen py-24 px-8 max-w-7xl mx-auto flex flex-col justify-center">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Projects</h2>
          <p className="text-slate-400">A showcase of my recent backend, data analysis, and full-stack development work.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project 1: T-Mobilers (Hackathon) */}
          <div className="bg-[#1E293B]/40 border border-[#334155] p-8 rounded-2xl flex flex-col justify-between hover:border-[#38BDF8]/50 transition">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-[#F8FAFC]">T-Mobilers</h3>
                <span className="bg-[#1E293B] text-[#38BDF8] px-3 py-1 rounded-lg text-xs font-semibold border border-[#334155]">Hackathon Project • Nov 2025</span>
              </div>
              <ul className="space-y-2.5 text-slate-300 text-sm leading-relaxed mb-6">
                <li>• Developed a full-stack feedback analysis web application utilizing React to integrate Google Gemini AI for automated realtime semantic sentiment analysis with a team of 4 developers.</li>
                <li>• Designed an automated backend pipeline using Google Apps Script to ingest, process, and persist survey payload responses directly into a Google Cloud Firestore database.</li>
                <li>• Utilized Git and GitHub for collaborative version control, managing branch workflows, and resolving code conflicts across team environments.</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#334155]/60">
              <span className="bg-[#1E293B] text-slate-300 px-2.5 py-1 rounded text-xs font-medium border border-[#334155]">React</span>
              <span className="bg-[#1E293B] text-slate-300 px-2.5 py-1 rounded text-xs font-medium border border-[#334155]">Google Gemini AI</span>
              <span className="bg-[#1E293B] text-slate-300 px-2.5 py-1 rounded text-xs font-medium border border-[#334155]">Firestore</span>
              <span className="bg-[#1E293B] text-slate-300 px-2.5 py-1 rounded text-xs font-medium border border-[#334155]">Git</span>
            </div>

            <div className="pt-4 border-t border-[#334155]/60 flex items-center justify-between flex-wrap gap-4">
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#1E293B] text-slate-300 px-2.5 py-1 rounded text-xs font-medium border border-[#334155]">React</span>
                <span className="bg-[#1E293B] text-slate-300 px-2.5 py-1 rounded text-xs font-medium border border-[#334155]">Firestore</span>
              </div>
              
              {/* GitHub Button */}
              <a 
                href="https://github.com/JFMcCM/Hackathon_T-Mobile_Challenge" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#38BDF8] hover:text-white bg-[#1E293B] hover:bg-[#334155] px-3 py-1.5 rounded-lg border border-[#334155] transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub →
              </a>
            </div>
          </div>

          {/* Project 2: RPG Character Management System */}
          <div className="bg-[#1E293B]/40 border border-[#334155] p-8 rounded-2xl flex flex-col justify-between hover:border-[#38BDF8]/50 transition">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-[#F8FAFC]">RPG Character Management System</h3>
                <span className="bg-[#1E293B] text-slate-300 px-3 py-1 rounded-lg text-xs font-semibold border border-[#334155]">Jul 2026 - Aug 2026</span>
              </div>
              <ul className="space-y-2.5 text-slate-300 text-sm leading-relaxed mb-6">
                <li>• Engineered a console-based C++ backend simulation using OOP principles, class inheritance, and dynamic polymorphism.</li>
                <li>• Managed dynamic memory allocation via polymorphic pointer arrays across 3 character subclasses while implementing 12+ core functional modules for turn-based combat, custom sorting, and file I/O serialization.</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#334155]/60">
              <span className="bg-[#1E293B] text-slate-300 px-2.5 py-1 rounded text-xs font-medium border border-[#334155]">C++</span>
              <span className="bg-[#1E293B] text-slate-300 px-2.5 py-1 rounded text-xs font-medium border border-[#334155]">OOP</span>
              <span className="bg-[#1E293B] text-slate-300 px-2.5 py-1 rounded text-xs font-medium border border-[#334155]">File I/O</span>
            </div>

            <div className="pt-4 border-t border-[#334155]/60 flex items-center justify-between flex-wrap gap-4">
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#1E293B] text-slate-300 px-2.5 py-1 rounded text-xs font-medium border border-[#334155]">React</span>
                <span className="bg-[#1E293B] text-slate-300 px-2.5 py-1 rounded text-xs font-medium border border-[#334155]">Firestore</span>
              </div>
              
              {/* GitHub Button */}
              <a 
                href="https://github.com/viditsmart/RPG-Character-Management-System" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#38BDF8] hover:text-white bg-[#1E293B] hover:bg-[#334155] px-3 py-1.5 rounded-lg border border-[#334155] transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub →
              </a>
            </div>
          </div>

          {/* Project 3: FoodHub Data Analysis */}
          <div className="bg-[#1E293B]/40 border border-[#334155] p-8 rounded-2xl flex flex-col justify-between hover:border-[#38BDF8]/50 transition md:col-span-2">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-[#F8FAFC]">FoodHub Data Analysis Project</h3>
                <span className="bg-[#1E293B] text-slate-300 px-3 py-1 rounded-lg text-xs font-semibold border border-[#334155]">Jan 2026 - Aug 2026</span>
              </div>
              <ul className="space-y-2.5 text-slate-300 text-sm leading-relaxed mb-6">
                <li>• Analyzed weekly operational data for 1,000+ New York food delivery orders, identifying preparation and delivery bottlenecks to optimize restaurant fulfillment workflows.</li>
                <li>• Evaluated cuisine demand and customer ratings across 50+ restaurant partners monthly, delivering actionable insights that improved customer experience and business margins.</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#334155]/60">
              <span className="bg-[#1E293B] text-slate-300 px-2.5 py-1 rounded text-xs font-medium border border-[#334155]">Data Analysis</span>
              <span className="bg-[#1E293B] text-slate-300 px-2.5 py-1 rounded text-xs font-medium border border-[#334155]">Statistics</span>
              <span className="bg-[#1E293B] text-slate-300 px-2.5 py-1 rounded text-xs font-medium border border-[#334155]">Workflow Optimization</span>
            </div>

            <div className="pt-4 border-t border-[#334155]/60 flex items-center justify-between flex-wrap gap-4">
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#1E293B] text-slate-300 px-2.5 py-1 rounded text-xs font-medium border border-[#334155]">React</span>
                <span className="bg-[#1E293B] text-slate-300 px-2.5 py-1 rounded text-xs font-medium border border-[#334155]">Firestore</span>
              </div>
              
              {/* GitHub Button */}
              <a 
                href="https://github.com/viditsmart/Project-Python-Foundations-Foodhub-Data-Analysis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#38BDF8] hover:text-white bg-[#1E293B] hover:bg-[#334155] px-3 py-1.5 rounded-lg border border-[#334155] transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="min-h-[70vh] py-24 px-8 max-w-7xl mx-auto flex flex-col justify-center items-center text-center border-t border-[#1E293B]">
        <h2 className="text-3xl font-bold tracking-tight mb-4 text-[#F8FAFC]">Get In Touch</h2>
        
        {/* Email Card with Icon */}
        <a 
          href="mailto:your.utd.email@utdallas.edu"
          className="inline-flex items-center gap-3 bg-[#1E293B]/60 hover:bg-[#1E293B] text-[#F8FAFC] font-medium px-8 py-4 rounded-xl border border-[#334155] hover:border-[#38BDF8] transition group shadow-lg"
        >
          {/* Mail Icon SVG */}
          <svg className="w-5 h-5 text-[#38BDF8] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-sm md:text-base tracking-wide">DAL135728@utdallas.edu</span>
        </a>

        <a 
            href="tel:9452894982"
            className="inline-flex items-center gap-3 bg-[#1E293B]/60 hover:bg-[#1E293B] text-[#F8FAFC] font-medium px-6 py-4 rounded-xl border border-[#334155] hover:border-[#38BDF8] transition group shadow-lg"
          >
            <svg className="w-5 h-5 text-[#38BDF8] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-sm md:text-base tracking-wide">945-289-4982</span>
          </a>
      </section>
    </main>
  );
}