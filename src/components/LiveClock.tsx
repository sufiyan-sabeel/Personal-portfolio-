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
        className={`glass px-4 py-2 rounded-xl flex items-center gap-3 text-xs text-white ${className}`}
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="font-mono uppercase tracking-[0.2em] text-[9px] text-cyan-400 font-bold">
            Live
          </span>
        </div>

        <div className="font-mono text-xs tracking-wider text-cyan-400 font-medium border-l border-white/10 pl-3">
          {formattedHours}:{formattedMinutes}:
          <span className="text-white">{formattedSeconds}</span>{' '}
          <span className="text-[10px] text-orange-400">{ampm}</span>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div id="footer-live-clock" className={`glass px-6 py-4 rounded-xl flex flex-col items-end min-w-[220px] ${className}`}>
        <span className="text-[9px] tracking-[0.3em] uppercase opacity-50 mb-1 font-bold text-slate-300">
          Local Time • Live
        </span>
        <div id="clock" className="text-xl font-mono tracking-wider font-medium text-cyan-400">
          {formattedHours}:{formattedMinutes}:{formattedSeconds} {ampm}
        </div>
        <div id="date" className="text-[10px] uppercase tracking-widest opacity-40 mt-1 text-slate-300">
          {formattedDate}
        </div>
      </div>
    );
  }

  // Default Badge Variant (Navbar or general use)
  return (
    <div
      id="navbar-live-clock"
      className={`hidden lg:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass text-xs font-mono text-slate-200 ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
      <span className="tracking-wider text-cyan-400 font-medium">
        {formattedHours}:{formattedMinutes}:<span className="text-white">{formattedSeconds}</span>{' '}
        <span className="text-[10px] text-orange-400 font-semibold">{ampm}</span>
      </span>
    </div>
  );
};
