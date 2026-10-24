import React, { useState } from 'react';
import { Maximize2, ExternalLink, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/portfolioData';
import { ProjectLightbox } from './ProjectLightbox';

interface PortfolioProps {
  onOpenInquiry: (projectTitle?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenInquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'logo', label: 'Logo Design' },
    { id: 'social', label: 'Social Media' },
    { id: 'print', label: 'Print Materials' },
    { id: 'packaging', label: 'Brand & 3D' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 relative bg-[#070b15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              03. Selected Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Portfolio & Creative Showcase
            </h2>
            <p className="mt-3 text-slate-300 text-base leading-relaxed">
              Explore recent projects across logo branding, high-engagement social media campaigns, luxury print collateral, and 3D visual identities.
            </p>
          </div>

          {/* Interactive Filter Tabs (Button elements compliant with zero-pill rule) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900 border border-slate-800 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout of Primary Showcase Works */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-800/80 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-black/60"
            >
              {/* Media Container */}
              <div
                className="relative overflow-hidden cursor-pointer aspect-[16/10] bg-slate-950"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090f1f] via-transparent to-transparent opacity-80" />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                  <div className="px-3.5 py-2 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-4 h-4" />
                    <span>View Case Study</span>
                  </div>
                </div>

                {/* Highlight Tag */}
                {project.highlightMetric && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[11px] font-mono text-amber-400 font-semibold">
                    {project.highlightMetric}
                  </div>
                )}
              </div>

              {/* Card Meta & Details */}
              <div className="p-6 space-y-4">
                {/* Clean unboxed metadata with separators */}
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="font-semibold text-amber-400">{project.categoryLabel}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{project.client}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="font-mono">{project.year}</span>
                </div>

                {/* Title */}
                <h3
                  onClick={() => setSelectedProject(project)}
                  className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                  {project.summary}
                </p>

                {/* Deliverables snippet */}
                <div className="pt-2 flex flex-wrap gap-1.5 text-[11px]">
                  {project.deliverables.slice(0, 3).map((item, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                  {project.deliverables.length > 3 && (
                    <span className="px-2 py-1 text-slate-500 font-mono">
                      +{project.deliverables.length - 3} more
                    </span>
                  )}
                </div>

                {/* Bottom Row: Software tools & Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <span>{project.tools.join(' · ')}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Presentation Breakdown Showcase (The 3 Slides from PDF) */}
        <div className="rounded-2xl p-8 bg-gradient-to-br from-slate-900 to-[#0b1329] border border-slate-800 space-y-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Direct Portfolio Highlights</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Core Specialty Breakdowns
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Curated directly from Muhammad Mahad Obaid’s official design portfolio deck:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Slide 5 Feature */}
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/90 space-y-3">
              <div className="text-xs font-mono text-amber-400 font-semibold uppercase">
                Slide 05 · Logo Design Showcase
              </div>
              <h4 className="text-base font-bold text-white">
                3D Metallic, Arabic Calligraphy & Athletic Marks
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Featuring the signature <strong>M Mahad Designer</strong> 3D chrome emblem, authentic <strong>مہاد ڈیزائنر</strong> Arabic badge, ornate gold calligraphy, and dynamic <strong>FITNESS</strong> silhouette branding.
              </p>
              <div className="pt-2 text-xs text-slate-400">
                <span className="text-white font-medium">Keywords:</span> Monogram, Arabic Typography, Vector Identity
              </div>
            </div>

            {/* Slide 6 Feature */}
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/90 space-y-3">
              <div className="text-xs font-mono text-amber-400 font-semibold uppercase">
                Slide 06 · Engaging Social Media
              </div>
              <h4 className="text-base font-bold text-white">
                Food Menu & Gadget E-Commerce Campaigns
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Proven creatives for <strong>Hot & Spicy</strong> chicken specials, <strong>Today’s Special Burger</strong> with 50% discount callouts, and clean <strong>Household Wireless Cleaner</strong> product promos with email integration.
              </p>
              <div className="pt-2 text-xs text-slate-400">
                <span className="text-white font-medium">Keywords:</span> High CTR, Instagram Posts, E-Commerce Sales
              </div>
            </div>

            {/* Slide 7 Feature */}
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/90 space-y-3">
              <div className="text-xs font-mono text-amber-400 font-semibold uppercase">
                Slide 07 · Impactful Print Materials
              </div>
              <h4 className="text-base font-bold text-white">
                Brochures, Luxury Cards & Panaflex Displays
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tangible branding including <strong>Electrical Services Ltd</strong> dark luxury cards, <strong>Arcus Architectural</strong> tri-fold brochures, holographic gradient foil cards, and large water-splash exhibition rollups.
              </p>
              <div className="pt-2 text-xs text-slate-400">
                <span className="text-white font-medium">Keywords:</span> 300 DPI, CMYK Print Ready, Die-Line Precision
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between flex-wrap gap-4 border-t border-slate-800/80">
            <span className="text-xs text-slate-400">
              Need custom designs similar to these showcased items?
            </span>
            <button
              type="button"
              onClick={() => onOpenInquiry('Custom Graphic Design Project')}
              className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Commission a Custom Design</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ProjectLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(title) => {
          setSelectedProject(null);
          onOpenInquiry(title);
        }}
      />
    </section>
  );
};
