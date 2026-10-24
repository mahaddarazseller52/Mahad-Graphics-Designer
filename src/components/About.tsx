import React from 'react';
import { CheckCircle2, Award, Download, MessageSquare, Compass, Sliders, Layers, Globe, ExternalLink } from 'lucide-react';
import { DESIGNER_INFO, SKILLS_SOFTWARE, CORE_PRINCIPLES } from '../data/portfolioData';

interface AboutProps {
  onOpenInquiry?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenInquiry }) => {
  const handleDownloadDeck = () => {
    // Generate a clean printable brief
    window.print();
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#090e1c] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            01. Introduction & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Crafting Visual Stories That Connect
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Translating complex ideas and brand ambitions into compelling, unforgettable visual identities.
          </p>
        </div>

        {/* 2-Column Split: Portrait & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
              <img
                src="/src/assets/images/regenerated_image_1792840300228.png"
                alt="Muhammad Mahad Obaid - Graphic Designer Portrait"
                referrerPolicy="no-referrer"
                className="w-full aspect-[1/1] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b15] via-transparent to-transparent opacity-80" />

              {/* Live Portfolio Link Badge */}
              <a
                href={DESIGNER_INFO.website}
                target="_blank"
                rel="noreferrer"
                className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-[11px] font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-all shadow-md group/link"
                title="Open live portfolio website"
              >
                <Globe className="w-3.5 h-3.5 text-sky-400" />
                <span>Live Portfolio</span>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover/link:text-amber-300" />
              </a>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">{DESIGNER_INFO.name}</h3>
                    <p className="text-xs text-amber-400 font-medium">{DESIGNER_INFO.jobTitle}</p>
                  </div>
                  <div className="p-2 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-400">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Experience Badge */}
            <div className="mt-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Active on Freelance & Agency Contracts</span>
              </div>
              <span className="font-mono text-slate-400">Karachi, PK</span>
            </div>
          </div>

          {/* Narrative & Scope Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Hello! I’m <span className="text-white font-semibold">{DESIGNER_INFO.name}</span>, a creative and detail-oriented graphic designer passionate about turning ideas into visually powerful designs. My mission is to translate complex business concepts into compelling visual narratives that immediately resonate with target audiences.
              </p>
              <p>
                I specialize in <strong className="text-white font-medium">brand identity, social media design, and tactile print materials</strong>, focusing on clean, modern, and impactful visuals that help businesses grow and stand out in crowded digital marketplaces.
              </p>
              <p>
                Every project I undertake begins with understanding your unique voice, target demographics, and market competitors. Whether you are a startup needing your first distinctive logo mark or an established enterprise requiring a cohesive brand refresh, I deliver precision-engineered assets ready for web, app, and high-DPI print production.
              </p>
            </div>

            {/* Services Checklist from presentation */}
            <div className="pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Core Capabilities & Deliverable Formats
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-200">
                {[
                  'Social Media Design',
                  'Flyer & Poster',
                  'Business Card',
                  'Wedding & Event Cards',
                  'Campaign Design',
                  'Panaflex & Large Displays',
                  'Sticker & Decal Design',
                  'Book & Magazine Covers',
                  'Packaging & Box Art',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  if (onOpenInquiry) {
                    e.preventDefault();
                    onOpenInquiry();
                  }
                }}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss Your Project</span>
              </a>

              <a
                href={DESIGNER_INFO.website}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/70 rounded-lg transition-colors flex items-center gap-2"
              >
                <Globe className="w-4 h-4 text-sky-400" />
                <span>Visit Live Site</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <button
                type="button"
                onClick={handleDownloadDeck}
                className="px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/70 rounded-lg transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Print / Save Deck</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tools of My Trade & Core Design Principles */}
        <div className="mt-20 pt-14 border-t border-slate-800/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Design Software Proficiency */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
                  Skills & Stack
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Tools of My Trade
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Proficiency in industry-standard design tools ensures high-quality output across digital and print media.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {SKILLS_SOFTWARE.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/70 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-bold text-white">{skill.name}</span>
                      <span className="text-xs font-mono font-medium text-amber-400 tabular-nums">
                        {skill.level}%
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mb-2.5">{skill.role}</p>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Design Principles */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
                  Methodology
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Core Design Principles
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  My creative approach is rooted in fundamental visual theories and commercial psychology.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {CORE_PRINCIPLES.map((principle, idx) => {
                  const icons = [Compass, Sliders, Layers, Award];
                  const Icon = icons[idx % icons.length];
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/70 flex flex-col justify-between hover:border-slate-700 transition-colors"
                    >
                      <div className="space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-2">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-bold text-white">{principle.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
