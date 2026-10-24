import React from 'react';
import { ArrowRight, Sparkles, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenInquiry?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section id="top" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-sky-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Unboxed Kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wider uppercase text-amber-400">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{DESIGNER_INFO.tagline}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400 normal-case tracking-normal">Karachi, Pakistan</span>
            </div>

            {/* Headline with balanced wrapping */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              Crafting Visual Stories & Brand Identities That Resonate
            </h1>

            {/* Subhead / Lead copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Hello! I’m <strong className="font-semibold text-white">{DESIGNER_INFO.name}</strong>, a modern graphic designer passionate about turning ideas into visually powerful brand designs, viral social campaigns, and impactful print collateral.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#portfolio"
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-lg shadow-amber-400/20 flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>View Portfolio Showcase</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  if (onOpenInquiry) {
                    e.preventDefault();
                    onOpenInquiry();
                  }
                }}
                className="px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
              >
                <span>Get a Free Quote</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* Direct unboxed contact metadata row */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{DESIGNER_INFO.location}</span>
              </div>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href={`mailto:${DESIGNER_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{DESIGNER_INFO.email}</span>
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href={`tel:${DESIGNER_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{DESIGNER_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Container at Matching Height */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl glow-cyan">
              <img
                src="/src/assets/images/hero_design_showcase_1791962063465.jpg"
                alt="Muhammad Mahad Obaid - Graphic Design Studio Workspace & 3D Brand Artwork"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b15] via-transparent to-black/30 pointer-events-none" />

              {/* Floating Designer Credit Card overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0b1222]/90 backdrop-blur-md border border-slate-700/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden border border-amber-400/40 shrink-0">
                    <img
                      src="/src/assets/images/regenerated_image_1792840303646.png"
                      alt="Muhammad Mahad Obaid Portrait"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white tracking-wide">
                      {DESIGNER_INFO.name}
                    </div>
                    <div className="text-[11px] text-amber-400/90 font-medium">
                      Brand Identity & Visual Specialist
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-mono">
                    Status
                  </span>
                  <span className="text-xs font-semibold text-emerald-400">
                    Available for Projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI / Metrics Strip below the hero split */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {DESIGNER_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
