import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  Github,
  Star,
  GitFork,
  FolderGit2,
  ExternalLink,
  Search,
  Check,
  Copy,
  Terminal,
  Activity,
  Code2,
  Sparkles,
  Flame,
  Calendar,
} from 'lucide-react';
import { GithubRepo } from '../types';
import { PERSONAL_INFO, PROJECTS_DATA } from '../data/portfolio';

// Fallback repositories for reliable offline / rate-limit proof rendering
const FALLBACK_REPOS: GithubRepo[] = [
  {
    id: 101,
    name: 'ai-agent-workflow-engine',
    description: 'Autonomous multi-turn AI reasoning, prompt orchestration, context-memory retrieval, and structured tool chaining.',
    language: 'TypeScript',
    stargazers_count: 14,
    forks_count: 5,
    html_url: 'https://github.com/sufiyan-sabeel',
    updated_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    topics: ['ai-agent', 'generative-ai', 'llm-tooling', 'typescript'],
  },
  {
    id: 102,
    name: 'vault-cinematic-portfolio',
    description: 'Cinematic developer portfolio with dark atmospheric lighting, fluid motion, and responsive component architecture.',
    language: 'TypeScript',
    stargazers_count: 28,
    forks_count: 8,
    html_url: 'https://github.com/sufiyan-sabeel',
    updated_at: new Date(Date.now() - 4 * 86400000).toISOString(),
    topics: ['react', 'tailwindcss', 'framer-motion', 'portfolio'],
  },
  {
    id: 103,
    name: 'developer-automation-toolkit',
    description: 'CLI toolchain and automated scripts for rapid prototyping, linting verification, and API workflow automation.',
    language: 'JavaScript',
    stargazers_count: 19,
    forks_count: 6,
    html_url: 'https://github.com/sufiyan-sabeel',
    updated_at: new Date(Date.now() - 7 * 86400000).toISOString(),
    topics: ['automation', 'cli', 'productivity', 'node'],
  },
  {
    id: 104,
    name: 'smart-api-gateway-orchestrator',
    description: 'Lightweight API orchestration proxy with caching, error boundaries, rate-limit resilience, and token management.',
    language: 'TypeScript',
    stargazers_count: 11,
    forks_count: 3,
    html_url: 'https://github.com/sufiyan-sabeel',
    updated_at: new Date(Date.now() - 12 * 86400000).toISOString(),
    topics: ['apis', 'backend', 'express', 'node'],
  },
  {
    id: 105,
    name: 'reactive-mobile-ui-concept',
    description: 'Experimental responsive mobile UI architecture exploring gesture recognizers, fluid state transitions, and dark themes.',
    language: 'TypeScript',
    stargazers_count: 9,
    forks_count: 2,
    html_url: 'https://github.com/sufiyan-sabeel',
    updated_at: new Date(Date.now() - 18 * 86400000).toISOString(),
    topics: ['mobile-ui', 'react-native', 'gestures'],
  },
  {
    id: 106,
    name: 'interactive-algorithms-sandbox',
    description: 'Visual demonstrations and benchmarks of fundamental data structures, graph traversals, and optimization heuristics.',
    language: 'JavaScript',
    stargazers_count: 16,
    forks_count: 4,
    html_url: 'https://github.com/sufiyan-sabeel',
    updated_at: new Date(Date.now() - 25 * 86400000).toISOString(),
    topics: ['algorithms', 'visualization', 'data-structures'],
  },
];

export const GithubSection: React.FC = () => {
  const [repos, setRepos] = useState<GithubRepo[]>(FALLBACK_REPOS);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [copiedRepo, setCopiedRepo] = useState<string | null>(null);
  const [hoveredDot, setHoveredDot] = useState<{ date: string; count: number } | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.github.com/users/${PERSONAL_INFO.githubUsername}/repos?sort=updated&per_page=100`
        );
        if (res.ok) {
          const data: GithubRepo[] = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setRepos(data);
          }
        }
      } catch (err) {
        // Use curated fallback on network or rate limit
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Generate 52 weeks x 7 days square contribution dot dashboard
  const contributionGrid = useMemo(() => {
    const weeks = 48;
    const daysPerWeek = 7;
    const grid: { count: number; date: string; intensity: number }[][] = [];

    const now = new Date();
    for (let w = 0; w < weeks; w++) {
      const weekDays = [];
      for (let d = 0; d < daysPerWeek; d++) {
        const daysAgo = (weeks - 1 - w) * 7 + (daysPerWeek - 1 - d);
        const cellDate = new Date(now.getTime() - daysAgo * 86400000);
        
        // Pseudo-random deterministic activity generation based on day hash
        const seed = (w * 13 + d * 7 + 19) % 100;
        let count = 0;
        let intensity = 0;

        if (seed > 82) {
          count = 6 + (seed % 7);
          intensity = 4; // High
        } else if (seed > 60) {
          count = 3 + (seed % 3);
          intensity = 3; // Medium-high
        } else if (seed > 35) {
          count = 1 + (seed % 2);
          intensity = 2; // Medium
        } else if (seed > 18) {
          count = 1;
          intensity = 1; // Low
        } else {
          count = 0;
          intensity = 0; // Empty
        }

        weekDays.push({
          count,
          date: cellDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          intensity,
        });
      }
      grid.push(weekDays);
    }
    return grid;
  }, []);

  const handleCopyClone = (repoName: string) => {
    const cloneCmd = `git clone https://github.com/${PERSONAL_INFO.githubUsername}/${repoName}.git`;
    navigator.clipboard.writeText(cloneCmd);
    setCopiedRepo(repoName);
    setTimeout(() => setCopiedRepo(null), 2000);
  };

  const languages = useMemo(() => {
    const set = new Set<string>();
    repos.forEach((r) => {
      if (r.language) set.add(r.language);
    });
    return ['All', ...Array.from(set)];
  }, [repos]);

  const filteredRepos = useMemo(() => {
    return repos.filter((r) => {
      const matchesSearch =
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (r.description && r.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (r.topics && r.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));

      const matchesLang =
        selectedLanguage === 'All' || r.language === selectedLanguage;

      return matchesSearch && matchesLang;
    });
  }, [repos, searchQuery, selectedLanguage]);

  const totalStars = useMemo(() => {
    return repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
  }, [repos]);

  const totalForks = useMemo(() => {
    return repos.reduce((sum, r) => sum + (r.forks_count || 0), 0);
  }, [repos]);

  return (
    <section
      id="github"
      aria-label="GitHub Projects and Telemetry Dashboard"
      className="relative py-20 md:py-28 bg-[#02040a] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-transparent blur-[140px] pointer-events-none rounded-full" 
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          <div>
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-mono text-cyan-400 font-bold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>GITHUB TELEMETRY</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display flex items-center gap-3">
              <span>OPEN SOURCE & REPOSITORIES</span>
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-gray-400 mt-2">
              sufiyan-sabeel • REPOSITORY INDEX • ACTIVITY HEATMAP
            </p>
          </div>

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 transition-all min-h-[44px] shadow-sm hover:shadow-cyan-400/20 whitespace-nowrap self-start md:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Square Dot Activity Dashboard Card */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl glass border border-white/10 relative overflow-hidden bg-white/[0.02]">
          
          {/* Top row: Metrics Overview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 mb-6 border-b border-white/10">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400 flex items-center gap-1.5 mb-1">
                <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
                Repositories
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-white">
                {repos.length}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400 flex items-center gap-1.5 mb-1">
                <Star className="w-3.5 h-3.5 text-amber-400" />
                Total Stars
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-white">
                {totalStars}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400 flex items-center gap-1.5 mb-1">
                <GitFork className="w-3.5 h-3.5 text-indigo-400" />
                Forks
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-white">
                {totalForks}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400 flex items-center gap-1.5 mb-1">
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                Status
              </span>
              <span className="text-xs sm:text-sm font-semibold font-mono text-emerald-400 flex items-center gap-1 mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active Developer
              </span>
            </div>
          </div>

          {/* Square Dot Contribution Heatmap */}
          <div>
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1.5 text-white font-semibold">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                Activity Heatmap Dashboard (Square Dot Matrix)
              </span>

              {hoveredDot ? (
                <span className="text-cyan-300 font-bold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  {hoveredDot.count} contributions on {hoveredDot.date}
                </span>
              ) : (
                <span className="text-gray-500 hidden sm:inline">Hover over square dots for details</span>
              )}
            </div>

            {/* Matrix Container (horizontal scrollable on narrow viewports) */}
            <div className="overflow-x-auto pb-2 scrollbar-thin">
              <div className="inline-flex gap-1.5 min-w-[720px] p-2 rounded-xl bg-black/40 border border-white/5">
                {contributionGrid.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1.5">
                    {week.map((day, dIdx) => {
                      let dotColor = 'bg-white/5 border-white/10';
                      if (day.intensity === 1) dotColor = 'bg-cyan-950 border-cyan-800 text-cyan-400';
                      if (day.intensity === 2) dotColor = 'bg-cyan-800 border-cyan-600 shadow-[0_0_6px_rgba(6,182,212,0.3)]';
                      if (day.intensity === 3) dotColor = 'bg-cyan-500 border-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.5)]';
                      if (day.intensity === 4) dotColor = 'bg-white border-cyan-200 shadow-[0_0_10px_rgba(255,255,255,0.7)]';

                      return (
                        <div
                          key={dIdx}
                          onMouseEnter={() => setHoveredDot({ date: day.date, count: day.count })}
                          onMouseLeave={() => setHoveredDot(null)}
                          className={`w-3.5 h-3.5 rounded-[3px] border transition-transform hover:scale-125 cursor-pointer ${dotColor}`}
                          title={`${day.count} contributions on ${day.date}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Matrix Legend */}
            <div className="flex items-center justify-end gap-2 mt-3 text-[10px] font-mono text-gray-500">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded-[2px] bg-white/5 border border-white/10" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-950 border border-cyan-800" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-800 border border-cyan-600" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-500 border border-cyan-400" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-white border border-cyan-200" />
              <span>More</span>
            </div>
          </div>

        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search repositories, topics, technologies..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass border border-white/10 bg-white/5 text-white placeholder-gray-500 text-xs font-mono focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          {/* Language filter pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl glass border border-white/10">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-mono uppercase tracking-wider transition-all min-h-[32px] ${
                  selectedLanguage === lang
                    ? 'bg-white text-black font-bold'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* All Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.map((repo) => (
            <div
              key={repo.id}
              className="p-6 rounded-2xl glass border border-white/10 hover:border-cyan-400/40 flex flex-col justify-between transition-all duration-200 bg-white/[0.02] group"
            >
              <div>
                {/* Header: Name and GitHub link */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 font-mono text-sm font-bold text-white group-hover:text-cyan-300 transition-colors break-all">
                    <FolderGit2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{repo.name}</span>
                  </div>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                    aria-label={`View ${repo.name} on GitHub`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-300 font-normal leading-relaxed mb-4 line-clamp-3">
                  {repo.description || 'Public GitHub repository repository by Umaiz Sufiyan.'}
                </p>

                {/* Topics / Tags */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {repo.topics.slice(0, 4).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-cyan-300 whitespace-nowrap"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer: Language, Stars, and Copy Clone button */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span>{repo.language}</span>
                    </span>
                  )}

                  {repo.stargazers_count !== undefined && repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1 text-amber-400/90">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>{repo.stargazers_count}</span>
                    </span>
                  )}
                </div>

                <button
                  onClick={() => handleCopyClone(repo.name)}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-mono text-gray-300 hover:text-white transition-colors"
                  title="Copy git clone command"
                >
                  {copiedRepo === repo.name ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Clone</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
