import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900/80">
          {/* Brand & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-bold text-white text-base tracking-tight">
              {DESIGNER_INFO.brandName}
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-slate-700">·</span>
            <span className="text-amber-400 font-medium">
              {DESIGNER_INFO.tagline}
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-slate-700">·</span>
            <span className="text-slate-400">
              {DESIGNER_INFO.location}
            </span>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-xs">
              <a
                href={DESIGNER_INFO.website}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 transition-colors"
              >
                Portfolio
              </a>
              {DESIGNER_INFO.socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quiet copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>
            © {new Date().getFullYear()} {DESIGNER_INFO.name}. All visual assets and client works protected.
          </p>
          <p className="flex items-center gap-1">
            <span>Crafted with precision & passion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
