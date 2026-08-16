/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { GithubIntegration } from './components/GithubIntegration';
import { InstagramSection } from './components/InstagramSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Desktop Custom Fluid Cursor */}
      <CustomCursor />

      {/* Primary Sticky Header */}
      <Navbar />

      {/* Main Sections Hierarchy */}
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <GithubIntegration />
        <InstagramSection />
        <Contact />
      </main>

      {/* Cinematic Footer */}
      <Footer />
    </div>
  );
}
