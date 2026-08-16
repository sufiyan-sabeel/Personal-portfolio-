import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Github, ExternalLink, Sparkles, FolderGit2, CheckCircle2, Clock, X } from 'lucide-react';
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
          <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 whitespace-nowrap">
            <CheckCircle2 className="w-3 h-3" />
            Completed
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20 whitespace-nowrap">
            <Clock className="w-3 h-3" />
            In Progress
          </span>
        );
      case 'Prototype':
      case 'Active':
      default:
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-md border border-orange-500/20 whitespace-nowrap">
            <Sparkles className="w-3 h-3" />
            {status}
          </span>
        );
    }
  };

  return (
    <section id="projects" className="relative py-20 md:py-28 bg-[#02040a] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Section Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-mono text-cyan-400 font-bold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>SHOWCASE</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
              SELECTED PROJECTS
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-gray-400 mt-2">
              AI EXPERIMENTS • WEB APPLICATIONS • TOOLS
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 p-1.5 rounded-xl glass border border-white/10 w-full sm:w-auto">
            {(['All', 'AI', 'Web', 'Tools', 'Mobile'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                id={`filter-btn-${filter.toLowerCase()}`}
                className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 min-h-[40px] flex items-center justify-center whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-white text-black font-bold shadow-sm'
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
              className="group relative rounded-2xl glass border border-white/10 hover:border-cyan-400/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 bg-white/[0.02]"
            >
              <div>
                {/* Top status & category row */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400 font-bold px-2.5 py-1 rounded-md bg-white/5 border border-white/10 whitespace-nowrap">
                      {project.category}
                    </span>
                    {getStatusBadge(project.status)}
                  </div>

                  <span className="font-mono text-[10px] text-gray-500 tracking-widest whitespace-nowrap">
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
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-gray-300 whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  id={`project-github-${project.id}`}
                  className="inline-flex items-center justify-center gap-2 text-xs font-mono font-bold text-white hover:text-cyan-300 transition-colors group/btn px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/40 min-h-[44px] whitespace-nowrap"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform text-gray-400 group-hover/btn:text-cyan-300" />
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2.5 rounded-lg text-xs font-mono tracking-wider uppercase text-cyan-400 hover:text-black hover:bg-cyan-400 border border-cyan-400/30 transition-all font-bold min-h-[44px] flex items-center justify-center whitespace-nowrap"
                >
                  Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Project Details */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-xl w-full p-6 sm:p-8 rounded-2xl glass border border-cyan-500/30 shadow-2xl bg-[#0a0c14] max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase text-cyan-400 px-2.5 py-1 rounded-md bg-white/5 border border-cyan-500/30 whitespace-nowrap">
                      {selectedProject.category}
                    </span>
                    {getStatusBadge(selectedProject.status)}
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 text-sm font-mono flex items-center gap-1 min-h-[40px]"
                    aria-label="Close details modal"
                  >
                    <X className="w-4 h-4" />
                    <span className="hidden sm:inline">Close</span>
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
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-gray-300 whitespace-nowrap"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-5 border-t border-white/10">
                  <a
                    href="https://github.com/sufiyan-sabeel"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-gray-400 hover:text-cyan-400 flex items-center gap-1.5 transition-colors py-1"
                  >
                    <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>github.com/sufiyan-sabeel</span>
                  </a>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-mono font-bold tracking-wider uppercase text-black bg-white hover:bg-cyan-400 transition-colors w-full sm:w-auto justify-center min-h-[44px]"
                    >
                      <Github className="w-4 h-4" />
                      <span>Open GitHub Repo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
