import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { LiveClock } from './LiveClock';
import { PERSONAL_INFO } from '../data/portfolio';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
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
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#030712]/80 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2.5 text-slate-100 font-display tracking-tight text-lg sm:text-xl font-bold"
          id="nav-brand-logo"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-slate-900 border border-white/10 group-hover:border-cyan-400/50 transition-colors shadow-inner">
            <span className="font-mono text-cyan-400 font-black text-sm tracking-tighter">US</span>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]"></span>
          </div>
          <div className="flex flex-col">
            <span className="leading-tight group-hover:text-cyan-300 transition-colors">
              UMAIZ <span className="text-cyan-400 font-mono">.</span>
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 leading-none">
              Dev & AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-300 bg-white/10 shadow-sm border border-cyan-400/30'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Live Clock */}
        <div className="hidden md:flex items-center gap-3">
          <LiveClock variant="badge" />

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            id="nav-cta-talk"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-[0_0_20px_rgba(37,99,235,0.35)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] border border-cyan-400/30"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white"
          aria-label="Toggle navigation menu"
          id="mobile-menu-btn"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden mt-2 mx-4 p-5 rounded-2xl glass-panel border border-cyan-500/20 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <LiveClock variant="hero" />
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-md"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
