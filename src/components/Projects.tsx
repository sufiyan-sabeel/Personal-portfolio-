import React, { useState } from 'react';
import { ArrowUpRight, Github, Code, ExternalLink, Sparkles, FolderGit2, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolio';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'AI' | 'Web' | 'Tools' | 'Mobile'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3" />
            Completed
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
            <Clock className="w-3 h-3 animate-spin" />
            In Progress
          </span>
        );
      case 'Prototype':
      case 'Active':
      default:
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
            <Sparkles className="w-3 h-3" />
            {status}
          </span>
        );
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full glass-panel-subtle border border-cyan-500/30 w-fit mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-cyan-300 font-semibold">
                PORTFOLIO SHOWCASE
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
              SELECTED WORK
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mt-2">
              ENGINEERED DIGITAL PRODUCTS, AI EXPERIMENTS & TOOLS
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
            {(['All', 'AI', 'Web', 'Tools', 'Mobile'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                id={`filter-btn-${filter.toLowerCase()}`}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group relative rounded-3xl glass-panel border border-white/10 hover:border-cyan-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)] overflow-hidden"
            >
              {/* Dual Tone Subtle Accent Lighting on Hover */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-cyan-500/20 to-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Top status & category row */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20">
                      {project.category}
                    </span>
                    {getStatusBadge(project.status)}
                  </div>

                  <span className="font-mono text-[10px] text-slate-500 tracking-widest">
                    #{project.id}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors mb-3 leading-snug">
                  {project.title}
                </h3>

                {/* Highlight */}
                <div className="text-xs font-mono text-orange-400/90 mb-3 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-orange-400"></span>
                  <span>{project.highlight}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  id={`project-github-${project.id}`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-300 hover:text-cyan-300 transition-colors group/btn"
                >
                  <Github className="w-4 h-4 text-slate-400 group-hover/btn:text-cyan-300" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform text-slate-500 group-hover/btn:text-cyan-300" />
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-colors"
                >
                  Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Project Deep-dive Details */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative max-w-xl w-full p-6 sm:p-8 rounded-3xl glass-panel border border-cyan-500/30 shadow-2xl bg-[#060d1f]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                    {selectedProject.category}
                  </span>
                  {getStatusBadge(selectedProject.status)}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 text-sm font-mono"
                >
                  ✕ Close
                </button>
              </div>

              <h3 className="text-2xl font-bold font-display text-white mb-2">
                {selectedProject.title}
              </h3>
              
              <div className="font-mono text-xs text-orange-400 mb-4">
                {selectedProject.highlight}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <span className="block font-mono text-xs uppercase text-slate-400 mb-2">
                  Core Technologies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-xs font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
