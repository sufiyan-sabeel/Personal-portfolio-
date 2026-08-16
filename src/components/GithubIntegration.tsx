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
    <section id="github" className="relative py-24 bg-[#02040a] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-mono text-cyan-400 font-bold mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
              <span>Open Source & Code Activity</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-display">
              GITHUB ACTIVITY
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-gray-400 mt-2">
              CONNECTED PROFILE: @{PERSONAL_INFO.githubUsername}
            </p>
          </div>

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noreferrer"
            id="github-profile-btn"
            className="glass px-6 py-3 rounded-sm font-mono text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black border border-white/20 transition-all duration-200 inline-flex items-center gap-2.5"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>View GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-44 rounded-2xl glass border border-white/5 animate-pulse p-6"
              >
                <div className="h-4 w-2/3 bg-white/10 rounded mb-4"></div>
                <div className="h-3 w-full bg-white/5 rounded mb-2"></div>
                <div className="h-3 w-4/5 bg-white/5 rounded"></div>
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
                className="group p-6 rounded-2xl glass border border-white/10 hover:border-cyan-400/40 flex flex-col justify-between transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-cyan-400" />
                      <span className="font-mono text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                        {repo.name}
                      </span>
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400 px-2 py-0.5 rounded-sm bg-white/5 border border-white/10">
                      Public
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed mb-4 font-normal">
                    {repo.description || 'Repository maintained by Umaiz Sufiyan.'}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 text-[11px] font-mono text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                    <span>{repo.language || 'Code'}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-400">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3 text-gray-400" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </a>
            ))
          )}
        </div>

        {/* Bottom Status bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-sm glass border border-white/10 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Source code & repositories hosted on GitHub</span>
          </div>

          <button
            onClick={fetchGithubRepos}
            className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors text-[11px] uppercase tracking-wider"
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
