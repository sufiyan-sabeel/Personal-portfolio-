/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoShowcase } from './components/VideoShowcase';
import { SecondHero } from './components/SecondHero';
import { FeatureCards } from './components/FeatureCards';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { GithubSection } from './components/GithubSection';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#02040a] text-white selection:bg-cyan-400/30 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Subtle Grain & Ambient Cinematic Lighting */}
      <div className="grain pointer-events-none" />
      <div className="cinematic-bg fixed inset-0 pointer-events-none z-0" />

      {/* Desktop Custom Fluid Cursor */}
      <CustomCursor />

      {/* Primary Sticky Header */}
      <Navbar />

      {/* Main Sections Hierarchy */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <VideoShowcase />
        <SecondHero />
        <FeatureCards />
        <About />
        <Projects />
        <GithubSection />
        <Skills />
        <Contact />
      </main>

      {/* Cinematic Minimal Footer */}
      <Footer />
    </div>
  );
}
