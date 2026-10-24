import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenInquiry?: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070b15]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single Wordmark text element */}
          <a
            href="#top"
            className="text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-tr from-amber-500 to-amber-300 inline-block shadow-sm shadow-amber-500/50" />
            <span>{DESIGNER_INFO.brandName}</span>
          </a>

          {/* Zone 2: 4-5 concise single-line text links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#about');
              }}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#services');
              }}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Services
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#portfolio');
              }}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Portfolio
            </a>
            <a
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#testimonials');
              }}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (onOpenInquiry) {
                  onOpenInquiry();
                } else {
                  handleNavClick('#contact');
                }
              }}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-md shadow-amber-400/20 flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#070b15]/98 px-6 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-3 pt-2 text-sm font-medium">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#about');
              }}
              className="text-slate-300 hover:text-amber-400 transition-colors py-1.5"
            >
              About Muhammad
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#services');
              }}
              className="text-slate-300 hover:text-amber-400 transition-colors py-1.5"
            >
              Services & Expertise
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#portfolio');
              }}
              className="text-slate-300 hover:text-amber-400 transition-colors py-1.5"
            >
              Selected Portfolio
            </a>
            <a
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#testimonials');
              }}
              className="text-slate-300 hover:text-amber-400 transition-colors py-1.5"
            >
              Client Reviews
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="text-slate-300 hover:text-amber-400 transition-colors py-1.5"
            >
              Contact & Inquiries
            </a>
          </nav>
          <div className="pt-2 border-t border-slate-800">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                if (onOpenInquiry) {
                  onOpenInquiry();
                } else {
                  handleNavClick('#contact');
                }
              }}
              className="w-full justify-center px-4 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
