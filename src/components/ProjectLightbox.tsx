import React, { useEffect } from 'react';
import { X, Check, ArrowRight, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { PortfolioProject } from '../data/portfolioData';

interface ProjectLightboxProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  project,
  onClose,
  onInquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#090f1f] border border-slate-800 rounded-2xl shadow-2xl z-10 text-slate-100 flex flex-col">
        {/* Top Bar with title & close button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#090f1f]/95 backdrop-blur-md border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              {project.categoryLabel}
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-xs text-slate-400 font-medium">{project.client}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Visual Feature */}
          <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[520px] object-contain bg-black/40 mx-auto"
            />
            {project.highlightMetric && (
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs shadow-lg">
                {project.highlightMetric}
              </div>
            )}
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 8 Columns: Narrative, Challenge & Solution */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Challenge & Brief</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>The Creative Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Right 4 Columns: Metadata, Tools, Palette & Action */}
            <div className="lg:col-span-4 space-y-6">
              {/* Deliverables Checklist */}
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Deliverables Produced
                </h4>
                <ul className="space-y-2 text-xs text-slate-200">
                  {project.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools Used */}
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Software Used
                </h4>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/80 font-mono text-[11px]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Color Palette */}
              {project.palette && project.palette.length > 0 && (
                <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Color Palette Harmony
                  </h4>
                  <div className="flex items-center gap-2">
                    {project.palette.map((color, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-1">
                        <div
                          className="w-8 h-8 rounded-lg border border-slate-700 shadow-sm"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                        <span className="text-[10px] font-mono text-slate-400 uppercase">
                          {color}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onInquire(project.title);
                }}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Project Like This</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
