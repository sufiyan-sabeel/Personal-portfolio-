import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, ExternalLink, RefreshCw, Code, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';
import { GithubRepo } from '../types';

export const GithubIntegration: React.FC = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Fallback curated repo items if GitHub API rate-limits or is offline
  const fallbackRepos: GithubRepo[] = [
    {
      id: 1,
      name: 'sufiyan-sabeel',
      description: 'Personal repository and developer profile configuration.',
      language: 'Markdown',
      stargazers_count: 0,
      forks_count: 0,
      html_url: `https://github.com/${PERSONAL_INFO.githubUsername}`,
      updated_at: new Date().toISOString(),
    },
    {
      id: 2,
      name: 'ai-development-lab',
      description: 'Exploratory projects and workflows in AI, autonomous agents, and software tools.',
      language: 'TypeScript',
      stargazers_count: 0,
      forks_count: 0,
      html_url: `https://github.com/${PERSONAL_INFO.githubUsername}`,
      updated_at: new Date().toISOString(),
    },
    {
      id: 3,
      name: 'web-engineering-toolkit',
      description: 'Modular React & TypeScript components and responsive UI templates.',
      language: 'TypeScript',
      stargazers_count: 0,
      forks_count: 0,
      html_url: `https://github.com/${PERSONAL_INFO.githubUsername}`,
      updated_at: new Date().toISOString(),
    },
  ];

  const fetchGithubRepos = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(
        `https://api.github.com/users/${PERSONAL_INFO.githubUsername}/repos?sort=updated&per_page=6`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch repos');
      }
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        setRepos(data);
      } else {
        setRepos(fallbackRepos);
      }
    } catch {
      setError(true);
      setRepos(fallbackRepos);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubRepos();
  }, []);

  return (
    <section id="github" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full glass-panel-subtle border border-cyan-500/30 w-fit mb-3">
              <Github className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-cyan-300 font-semibold">
                OPEN SOURCE & CODE ACTIVITY
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
              GITHUB ACTIVITY
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mt-2">
              CONNECTED PROFILE: @{PERSONAL_INFO.githubUsername}
            </p>
          </div>

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noreferrer"
            id="github-profile-btn"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-mono text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 border border-white/20 hover:border-cyan-400/50 shadow-md transition-all duration-200"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>VIEW GITHUB PROFILE</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-44 rounded-2xl glass-panel border border-white/5 animate-pulse p-6"
              >
                <div className="h-4 w-2/3 bg-slate-800 rounded mb-4"></div>
                <div className="h-3 w-full bg-slate-800/60 rounded mb-2"></div>
                <div className="h-3 w-4/5 bg-slate-800/60 rounded"></div>
              </div>
            ))
          ) : (
            repos.slice(0, 6).map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                id={`github-repo-${repo.name}`}
                className="group p-6 rounded-2xl glass-panel-interactive border border-white/10 hover:border-cyan-500/40 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-cyan-400" />
                      <span className="font-mono text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                        {repo.name}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-500 uppercase px-2 py-0.5 rounded bg-white/5">
                      Public
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4 font-light">
                    {repo.description || 'Repository maintained by Umaiz Sufiyan.'}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    <span>{repo.language || 'Code'}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-400">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500/80" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3 text-slate-500" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </a>
            ))
          )}
        </div>

        {/* Bottom Status bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl glass-panel-subtle border border-white/5 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Source code & repositories hosted on GitHub</span>
          </div>

          <button
            onClick={fetchGithubRepos}
            className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors text-[11px]"
            title="Refresh GitHub Repositories"
          >
            <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
            <span>Sync</span>
          </button>
        </div>

      </div>
    </section>
  );
};
