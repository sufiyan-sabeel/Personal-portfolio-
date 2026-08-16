import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'GitHub', id: 'github' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(targetId);
    const elem = document.getElementById(targetId);
    if (elem) {
      const navOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 pt-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-xl px-5 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-[#060913]/90 backdrop-blur-md border border-white/15 shadow-lg shadow-black/40'
            : 'bg-white/[0.04] backdrop-blur-sm border border-white/10'
        }`}
      >
        {/* Left: Brand Identity */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-lg sm:text-xl font-bold font-display tracking-tight text-white hover:text-cyan-400 transition-colors flex items-center gap-2 group"
          id="nav-brand-logo"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
          <span>vault portfolio - umaiz sufiyan</span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-400 font-semibold bg-white/5'
                    : 'text-gray-300 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-cyan-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: GitHub Direct CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noreferrer"
            id="nav-github-btn"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-bold text-black bg-white hover:bg-cyan-400 transition-all duration-200 px-4 py-2 rounded-lg shadow-sm hover:shadow-cyan-400/20 whitespace-nowrap min-h-[36px]"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub →</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 bg-[#060913]/95 backdrop-blur-xl border border-white/15 rounded-xl shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`px-4 py-2.5 rounded-lg text-sm font-mono tracking-wider transition-colors ${
                activeSection === item.id
                  ? 'text-cyan-400 font-bold bg-white/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 mt-1 border-t border-white/10 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-mono font-bold text-black bg-white hover:bg-cyan-400 transition-colors w-full"
            >
              <Github className="w-4 h-4" />
              <span>GitHub →</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
