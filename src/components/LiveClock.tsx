import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface LiveClockProps {
  variant?: 'badge' | 'hero' | 'footer' | 'inline';
  className?: string;
}

export const LiveClock: React.FC<LiveClockProps> = ({ variant = 'badge', className = '' }) => {
  const [time, setTime] = useState<Date>(new Date());
  const [timezone, setTimezone] = useState<string>('');

  useEffect(() => {
    // Determine user's local timezone
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setTimezone(tz.replace('_', ' '));
    } catch {
      setTimezone('LOCAL');
    }

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const rawHours12 = hours % 12 || 12;
  const formattedHours = String(rawHours12).padStart(2, '0');
  const formattedMinutes = String(time.getMinutes()).padStart(2, '0');
  const formattedSeconds = String(time.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const formattedDate = time.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (variant === 'hero') {
    return (
      <div
        id="hero-live-clock"
        className={`inline-flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-4 py-2.5 rounded-xl glass-panel border border-cyan-500/20 text-xs text-slate-300 ${className}`}
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="font-mono uppercase tracking-widest text-[10px] text-cyan-400 font-semibold">
            LOCAL TIME • LIVE
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono">
          <span className="text-slate-100 font-semibold tracking-wider text-sm bg-slate-900/60 px-2 py-0.5 rounded border border-white/5">
            {formattedHours}:{formattedMinutes}:
            <span className="text-cyan-400 transition-all duration-300">{formattedSeconds}</span>{' '}
            <span className="text-[11px] text-orange-400">{ampm}</span>
          </span>
          <span className="hidden md:inline text-slate-400 text-[11px] border-l border-white/10 pl-2">
            {formattedDate}
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div id="footer-live-clock" className={`flex flex-col gap-1.5 ${className}`}>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase font-medium">
            LOCAL TIME • LIVE
          </span>
        </div>
        <div className="font-mono text-sm font-medium text-slate-200 flex items-center gap-2">
          <span>
            {formattedHours}:{formattedMinutes}:
            <span className="text-cyan-400">{formattedSeconds}</span> {ampm}
          </span>
          <span className="text-[11px] text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
            {timezone}
          </span>
        </div>
        <div className="text-xs text-slate-400">{formattedDate}</div>
      </div>
    );
  }

  // Default Badge Variant (Navbar or general use)
  return (
    <div
      id="navbar-live-clock"
      className={`hidden lg:flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/70 border border-white/10 text-xs font-mono text-slate-300 shadow-inner ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400"></span>
      </span>
      <Clock className="w-3.5 h-3.5 text-cyan-400/80" />
      <span className="tracking-wider text-slate-200 font-medium">
        {formattedHours}:{formattedMinutes}:<span className="text-cyan-400">{formattedSeconds}</span>{' '}
        <span className="text-[10px] text-orange-400">{ampm}</span>
      </span>
    </div>
  );
};
