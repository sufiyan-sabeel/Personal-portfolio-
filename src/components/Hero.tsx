import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';
import { LiveClock } from './LiveClock';
import heroPortrait from '../assets/images/umaiz_portrait_1786864188838.jpg';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      const navOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Personal Brand & Clean Minimalism Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7 text-left max-w-2xl">
            
            {/* Status & Available Indicator */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-3 glass px-3.5 py-1.5 rounded-full">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-70 font-bold text-white">
                  Available for innovative projects
                </span>
              </div>
              <LiveClock variant="hero" />
            </div>

            {/* Typography Stack */}
            <div className="space-y-3">
              <p className="text-xs sm:text-sm tracking-[0.4em] opacity-60 uppercase font-mono text-slate-300">
                Hello, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none text-white font-display">
                UMAIZ<br/>
                <span className="text-white">SUFIYAN</span>
              </h1>
              <p className="text-lg sm:text-xl text-cyan-400 font-medium tracking-wide pt-1">
                Student Developer & AI Builder
              </p>
            </div>

            {/* Clean Minimalist Description */}
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base font-normal max-w-xl">
              I build intelligent software, AI-powered experiences, and experimental digital products. Specialized in bridging the gap between sophisticated logic and seamless user experience.
            </p>

            {/* Clean Minimal Buttons */}
            <div className="flex flex-wrap items-center gap-5 pt-2 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('projects')}
                id="hero-primary-cta"
                className="bg-white text-black px-8 py-4 rounded-sm font-bold text-xs tracking-widest uppercase hover:bg-cyan-400 hover:text-black transition-colors duration-200 shadow-sm"
              >
                View Projects
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                id="hero-secondary-cta"
                className="border border-white/20 px-8 py-4 rounded-sm font-bold text-xs tracking-widest uppercase hover:bg-white/10 transition-colors text-white"
              >
                Get in Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-8 pt-4 border-t border-white/10 w-full text-[10px] tracking-widest uppercase font-bold text-gray-400">
              <span className="opacity-40">CONNECT //</span>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                id="hero-github-link"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                id="hero-instagram-link"
                className="hover:text-orange-400 transition-colors flex items-center gap-1.5"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Cinematic Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[420px]">
              
              {/* Card with Portrait Glow */}
              <div
                id="hero-portrait-card"
                className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden portrait-glow border border-white/10 group bg-[#0a0c14]"
              >
                {/* Image */}
                <img
                  src={heroPortrait}
                  alt="Umaiz Sufiyan - Student Developer & AI Builder"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  loading="eager"
                />

                {/* Cinematic Tint Gradients */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-orange-500/20 z-10 pointer-events-none" />

                {/* Bottom Identity Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-20 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <p className="text-[10px] tracking-[0.5em] uppercase text-cyan-400 mb-1 font-mono font-bold">
                    Identity
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold tracking-wide text-white font-display">
                    DEVELOPER • AI BUILDER
                  </h3>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
