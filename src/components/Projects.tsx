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
          <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-sm border border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3" />
            Completed
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-sm border border-cyan-500/20">
            <Clock className="w-3 h-3 animate-spin" />
            In Progress
          </span>
        );
      case 'Prototype':
      case 'Active':
      default:
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-sm border border-orange-500/20">
            <Sparkles className="w-3 h-3" />
            {status}
          </span>
        );
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-[#02040a] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Section Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-mono text-cyan-400 font-bold mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
              <span>Portfolio Showcase</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-display">
              SELECTED WORK
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-gray-400 mt-2">
              ENGINEERED DIGITAL PRODUCTS, AI EXPERIMENTS & TOOLS
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1 rounded-sm glass border border-white/10">
            {(['All', 'AI', 'Web', 'Tools', 'Mobile'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                id={`filter-btn-${filter.toLowerCase()}`}
                className={`px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-white text-black font-bold'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
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
              className="group relative rounded-2xl glass border border-white/10 hover:border-cyan-400/40 p-7 sm:p-8 flex flex-col justify-between transition-all duration-200"
            >
              <div>
                {/* Top status & category row */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400 font-bold px-2.5 py-1 rounded-sm bg-white/5 border border-white/10">
                      {project.category}
                    </span>
                    {getStatusBadge(project.status)}
                  </div>

                  <span className="font-mono text-[10px] text-gray-500 tracking-widest">
                    #{project.id}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
                  {project.title}
                </h3>

                {/* Highlight */}
                <div className="text-xs font-mono text-orange-400/90 mb-3 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-orange-400"></span>
                  <span>{project.highlight}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-300 font-normal leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-sm text-[11px] font-mono bg-white/5 border border-white/10 text-gray-300"
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
                  className="inline-flex items-center gap-2 text-xs font-mono font-medium text-gray-300 hover:text-cyan-300 transition-colors group/btn"
                >
                  <Github className="w-4 h-4 text-gray-400 group-hover/btn:text-cyan-300" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform text-gray-500 group-hover/btn:text-cyan-300" />
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-3.5 py-1.5 rounded-sm text-xs font-mono tracking-wider uppercase text-cyan-400 bg-white/5 hover:bg-cyan-400 hover:text-black border border-cyan-400/30 transition-all"
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
              className="relative max-w-xl w-full p-8 rounded-2xl glass border border-cyan-500/30 shadow-2xl bg-[#0a0c14]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase text-cyan-400 px-2.5 py-1 rounded-sm bg-white/5 border border-cyan-500/30">
                    {selectedProject.category}
                  </span>
                  {getStatusBadge(selectedProject.status)}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white p-1 rounded-sm hover:bg-white/10 text-sm font-mono"
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

              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-normal">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <span className="block font-mono text-xs uppercase tracking-wider text-gray-400 mb-2">
                  Core Technologies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-sm bg-white/5 border border-white/10 text-xs font-mono text-gray-300"
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
                  className="flex items-center gap-2 px-6 py-3 rounded-sm text-xs font-mono font-bold tracking-wider uppercase text-black bg-white hover:bg-cyan-400 transition-colors"
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
