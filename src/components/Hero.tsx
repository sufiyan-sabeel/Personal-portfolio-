import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Github, Instagram, Clock, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';
import heroAbstractBg from '../assets/images/hero_abstract_bg_1786896116352.jpg';

export const Hero: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  
  // Parallax glow coordinates (10-20px subtle shift, desktop only)
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const clockTimer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(clockTimer);
  }, []);

  useEffect(() => {
    // Check if user prefers reduced motion or is on mobile
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches || window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      setParallaxOffset({ x: x * 15, y: y * 15 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const hours = currentTime.getHours();
  const rawHours12 = hours % 12 || 12;
  const formattedHours = String(rawHours12).padStart(2, '0');
  const formattedMinutes = String(currentTime.getMinutes()).padStart(2, '0');
  const formattedSeconds = String(currentTime.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const formattedDay = currentTime.toLocaleDateString(undefined, { weekday: 'long' }).toUpperCase();
  const formattedDate = currentTime.toLocaleDateString(undefined, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).toUpperCase();

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
      ref={heroRef}
      aria-label="Umaiz Sufiyan Portfolio Hero"
      className="relative w-full min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 70% 45%, rgba(37, 99, 235, 0.12), transparent 38%),
          radial-gradient(circle at 30% 80%, rgba(249, 115, 22, 0.08), transparent 35%),
          #050507
        `,
      }}
    >
      {/* Subtle Grain Overlay */}
      <div className="grain pointer-events-none" aria-hidden="true" />

      {/* Layer 2: AI Abstract Technology Visual (Reduced opacity 0.16, zero people, abstract background) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-15 sm:opacity-20 transition-opacity duration-1000"
        aria-hidden="true"
      >
        <img
          src={heroAbstractBg}
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Dark gradient mask to keep center-left uncluttered for readable typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050507] via-[#050507]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-[#050507]/80" />
      </div>

      {/* Layer 3: Main Atmospheric Glows (Blue & Orange) with Parallax & Ambient Motion */}
      <div
        className="absolute top-1/3 right-1/4 w-[500px] sm:w-[650px] h-[500px] rounded-full pointer-events-none z-[1] transition-transform duration-300 ease-out animate-ambient-slow"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.38) 0%, rgba(6, 182, 212, 0.18) 35%, transparent 70%)',
          filter: 'blur(60px)',
          transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/6 w-[400px] sm:w-[500px] h-[400px] rounded-full pointer-events-none z-[1] transition-transform duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.28) 0%, rgba(234, 88, 12, 0.12) 35%, transparent 70%)',
          filter: 'blur(75px)',
          transform: `translate(${-parallaxOffset.x * 0.8}px, ${-parallaxOffset.y * 0.8}px)`,
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Main Grid: Info on left, Portrait & Live Clock on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Personal Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            
            {/* 1. Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="mb-3.5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-cyan-400/30 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  {PERSONAL_INFO.eyebrow}
                </span>
              </div>
            </motion.div>

            {/* 2. Name Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
              className="mb-4"
            >
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-[1.05]"
                style={{
                  textShadow: '0 0 30px rgba(59, 130, 246, 0.12)',
                }}
              >
                {PERSONAL_INFO.name.toUpperCase()}
              </h1>
            </motion.div>

            {/* 3. Main Statement */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
              className="mb-4"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-medium font-display leading-snug max-w-xl">
                {PERSONAL_INFO.mainStatement}
              </p>
            </motion.div>

            {/* 4. Supporting Text */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
              className="mb-8"
            >
              <p className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed max-w-lg">
                {PERSONAL_INFO.supportingText}
              </p>
            </motion.div>

            {/* 5. Action Buttons: VIEW PROJECTS →, GITHUB →, INSTAGRAM → */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: 'easeOut' }}
              className="w-full sm:w-auto"
            >
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
                
                {/* Primary Button with Subtle Blue Glow */}
                <button
                  onClick={() => scrollToSection('projects')}
                  id="hero-view-projects-btn"
                  className="group w-full sm:w-auto px-7 py-3.5 rounded-lg bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px] hover:shadow-[0_0_30px_rgba(59,130,246,0.28)]"
                >
                  <span>VIEW PROJECTS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Secondary: GitHub */}
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  id="hero-github-btn"
                  className="flex-1 sm:flex-none px-6 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 font-mono font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  <span>GITHUB →</span>
                </a>

                {/* Social: Instagram */}
                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  id="hero-instagram-btn"
                  className="flex-1 sm:flex-none px-6 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-orange-400/40 font-mono font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <Instagram className="w-3.5 h-3.5 text-orange-400" />
                  <span>INSTAGRAM →</span>
                </a>

              </div>
            </motion.div>

          </div>

          {/* Right Column: Original Portrait Image & Live Clock Display */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end order-1 lg:order-2">
            
            {/* Portrait Image Container with Layered Studio Shadows */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              className="relative w-64 sm:w-72 md:w-80 lg:w-88 aspect-[4/5] rounded-2xl overflow-hidden glass border border-white/15 transition-all duration-500 group portrait-glow"
            >
              {/* Subtle top/corner glow border */}
              <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl border border-cyan-400/20 group-hover:border-cyan-400/50 transition-colors duration-500" />
              
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_112712_da9d53df-6d27-4b12-bdf6-aa9dc2622bdf.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              {/* Original Real Portrait (Zero AI alteration) */}
              <img
                src={PERSONAL_INFO.portraitImage}
                alt="Umaiz Sufiyan"
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
                className={`w-full h-full object-cover object-center transition-all duration-700 ${
                  imgLoaded ? 'opacity-100' : 'opacity-90 blur-0'
                }`}
              />

              {/* Fallback container if local asset is being linked */}
              {imgError && (
                <div className="absolute inset-0 bg-[#060913] flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold text-lg mb-3">
                    US
                  </div>
                  <span className="font-display font-bold text-white text-base">Umaiz Sufiyan</span>
                  <span className="font-mono text-xs text-gray-400 mt-1">Student Developer & AI Builder</span>
                </div>
              )}

              {/* Bottom Subtle Vignette Gradient for Depth */}
              <div 
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050507]/90 via-[#050507]/40 to-transparent pointer-events-none z-10" 
                aria-hidden="true"
              />

              {/* Monogram tag */}
              <div className="absolute bottom-3.5 left-3.5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="font-mono text-[10px] text-gray-200 uppercase tracking-widest font-semibold">
                  UMAIZ SUFIYAN
                </span>
              </div>
            </motion.div>

            {/* Live Clock Component under portrait */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: 'easeOut' }}
              className="mt-5 w-64 sm:w-72 md:w-80 lg:w-88 p-4 rounded-xl glass border border-white/10 flex flex-col items-start"
              id="hero-live-clock-card"
            >
              <div className="w-full flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-400 font-bold flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  <span>LOCAL TIME</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              <div className="w-full flex items-baseline justify-between">
                <div className="font-mono text-xl sm:text-2xl font-bold tracking-wider text-white">
                  {formattedHours}:{formattedMinutes}:{formattedSeconds}{' '}
                  <span className="text-xs text-orange-400 font-semibold">{ampm}</span>
                </div>
              </div>

              <div className="w-full flex items-center justify-between mt-1 text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                <span>{formattedDay}</span>
                <span>{formattedDate}</span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
