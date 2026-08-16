import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Sparkles, Terminal } from 'lucide-react';

export const SecondHero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToProjects = () => {
    const elem = document.getElementById('projects');
    if (elem) {
      const navOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="cinematic-showcase"
      ref={sectionRef}
      aria-label="Cinematic Portfolio Video Showcase"
      className="relative w-full min-h-[90vh] lg:min-h-screen flex items-end justify-start overflow-hidden bg-[#02040a] transition-colors duration-700"
    >
      {/* 
        Top Transition Gradient Mask:
        Dark cinematic fade bridging Hero 1 to Video smoothly without hard lines 
      */}
      <div
        className="absolute top-0 left-0 right-0 h-32 sm:h-48 z-20 pointer-events-none bg-gradient-to-b from-[#02040a] via-[#02040a]/80 to-transparent"
        aria-hidden="true"
      />

      {/* Fullscreen Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out pointer-events-none ${
          isInView ? 'opacity-90 scale-100' : 'opacity-0 scale-[1.02]'
        }`}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"
      />

      {/* Cinematic Layered Dark Overlay for Contrast */}
      <div
        className={`absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#02040a] via-[#02040a]/40 to-transparent transition-opacity duration-1000 ${
          isInView ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none bg-black/25"
        aria-hidden="true"
      />

      {/* Foreground Minimal Portfolio Message Content */}
      <div className="relative z-30 max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-2xl text-left">
          
          {/* Small Label */}
          <div
            className={`transition-all duration-700 ease-out mb-3.5 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-cyan-400/30">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                SELECTED WORK
              </span>
            </div>
          </div>

          {/* Main Text */}
          <div
            className={`transition-all duration-700 ease-out mb-3 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '350ms' }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight leading-tight">
              Ideas → Experiments → Products
            </h2>
          </div>

          {/* Short Description */}
          <div
            className={`transition-all duration-700 ease-out mb-6 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-300 font-normal leading-relaxed max-w-xl">
              A look into the systems, interfaces, and AI-powered projects I build.
            </p>
          </div>

          {/* Explore Arrow CTA */}
          <div
            className={`transition-all duration-700 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '650ms' }}
          >
            <button
              onClick={scrollToProjects}
              id="video-explore-work-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 group"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>

      {/* 
        Bottom Transition Gradient Mask:
        Fades smoothly into the About section 
      */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 sm:h-40 pointer-events-none bg-gradient-to-t from-[#02040a] via-[#02040a]/70 to-transparent z-20"
        aria-hidden="true"
      />
    </section>
  );
};
