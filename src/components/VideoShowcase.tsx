import React from 'react';
import { motion } from 'motion/react';

export const VideoShowcase: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase font-bold mb-4"
        >
            WHAT I BUILD
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-2xl font-bold text-white mb-6"
        >
            AI • SOFTWARE • AUTOMATION
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative group w-full max-w-5xl mx-auto px-6"
      >
        {/* Ambient Glow */}
        <div className="absolute inset-6 bg-blue-500/10 blur-[60px] rounded-[40px] pointer-events-none -z-10 group-hover:bg-blue-500/20 transition-all duration-700" />
        
        {/* Container */}
        <div className="relative aspect-video w-full overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.12)] transition-transform duration-700 ease-out group-hover:scale-[1.02] group-hover:-translate-y-1">
            <img
                src="/src/assets/images/software_code_artwork_1786895638803.jpg"
                alt="Software Showcase"
                className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
        </div>
        
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-gray-400 max-w-xl mx-auto text-sm leading-relaxed"
        >
            A cinematic visual exploration of the technology and ideas behind my projects.
        </motion.p>
      </motion.div>
    </section>
  );
};
