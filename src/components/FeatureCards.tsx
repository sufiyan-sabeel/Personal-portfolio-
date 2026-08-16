import React from 'react';
import { motion } from 'motion/react';
import { Brain, Code2, Zap, LucideIcon } from 'lucide-react';

import aiArtwork from '../assets/images/ai_building_artwork_1786895619975.jpg';
import softwareArtwork from '../assets/images/software_code_artwork_1786895638803.jpg';
import automationArtwork from '../assets/images/automation_network_artwork_1786895657475.jpg';

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  delay: number;
  image?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  gradient,
  delay,
  image,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
        delay,
      }}
      className="relative flex items-center justify-center group w-full"
    >
      {/* Glowing Ambient Background */}
      <div
        className="absolute w-full h-[260px] md:h-[300px] opacity-60 group-hover:opacity-80 rounded-[40px] pointer-events-none transition-opacity duration-300"
        style={{
          background: gradient,
          filter: 'blur(45px)',
        }}
      />

      {/* Card Foreground with Gradient Border */}
      <div
        className="relative self-stretch w-full h-[260px] md:h-[300px] rounded-[40px] z-10 overflow-hidden transform group-hover:-translate-y-1 transition-all duration-300"
        style={{
          background: `linear-gradient(#1A1A1C, #1A1A1C) padding-box, ${gradient} border-box`,
          border: '8px solid transparent',
        }}
      >
        {/* Abstract Technology Artwork Layer */}
        {image && (
          <div className="absolute inset-0 pointer-events-none opacity-25 group-hover:opacity-35 group-hover:scale-105 transition-all duration-500 overflow-hidden">
            <img
              src={image}
              alt=""
              aria-hidden="true"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1C] via-[#1A1A1C]/75 to-[#1A1A1C]/30" />
          </div>
        )}

        {/* Card Inner Content */}
        <div className="w-full h-full p-7 flex flex-col justify-between relative z-10">
          <div className="flex items-center justify-between">
            <Icon
              size={32}
              strokeWidth={2.5}
              className="text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </div>

          <div>
            <h3 className="text-white font-medium text-xl mb-3 tracking-tight font-display">
              {title}
            </h3>
            <p className="text-gray-400 text-[14px] leading-[1.6] font-normal selection:bg-white/20">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const FeatureCards: React.FC = () => {
  const cards: FeatureCardProps[] = [
    {
      title: 'AI BUILDING',
      description:
        'I explore AI systems, intelligent assistants, and generative AI to turn ideas into useful software.',
      icon: Brain,
      gradient: 'linear-gradient(137deg, #4361EE 0%, #7DD3FC 45%, #06B6D4 100%)',
      delay: 0.1,
      image: aiArtwork,
    },
    {
      title: 'SOFTWARE',
      description:
        'I build modern web and software experiences with a focus on clean interfaces, useful functionality, and practical engineering.',
      icon: Code2,
      gradient: 'linear-gradient(137deg, #FFFFFF 0%, #A78BFA 45%, #6366F1 100%)',
      delay: 0.2,
      image: softwareArtwork,
    },
    {
      title: 'AUTOMATION',
      description:
        'I experiment with AI agents, automation, APIs, and connected tools to make technology more capable and interactive.',
      icon: Zap,
      gradient: 'linear-gradient(137deg, #FF3D77 0%, #E0AEFF 45%, #F72585 100%)',
      delay: 0.3,
      image: automationArtwork,
    },
  ];

  return (
    <section
      id="features"
      aria-label="What I Build - Core Pillars"
      className="relative w-full bg-[#0A0A0B] py-24 md:py-32 px-6 sm:px-8 lg:px-12 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Dark gradient fade from the previous cinematic video section */}
      <div
        className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#02040a] to-[#0A0A0B] pointer-events-none"
        aria-hidden="true"
      />

      {/* Section Introduction */}
      <div className="relative z-10 max-w-2xl text-center mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-cyan-400/30 mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            WHAT I BUILD
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight mb-4"
        >
          Ideas into working technology.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed max-w-lg mx-auto"
        >
          AI, software, and automation — explored through real projects and experiments.
        </motion.p>
      </div>

      {/* 3-Card Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-3 lg:gap-3 w-full max-w-[936px] mx-auto">
        {cards.map((card, idx) => (
          <FeatureCard key={idx} {...card} />
        ))}
      </div>

      {/* Bottom transition gradient to following section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#02040a] to-[#0A0A0B] pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
};
