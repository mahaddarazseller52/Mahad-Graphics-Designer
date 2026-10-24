import React from 'react';
import { 
  PenTool, 
  Palette, 
  Share2, 
  CreditCard, 
  Youtube, 
  Package, 
  FileText, 
  Layers, 
  ArrowRight,
  Clock,
  Check
} from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  PenTool,
  Palette,
  Share2,
  CreditCard,
  Youtube,
  Package,
  FileText,
  Layers,
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 lg:py-28 relative bg-[#070b15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              02. Services & Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              End-to-End Creative Solutions
            </h2>
            <p className="mt-3 text-slate-300 text-base leading-relaxed">
              From initial brand marks to high-converting social campaigns and large-format print displays, every service is tailored to elevate your business presence.
            </p>
          </div>

          <div className="text-xs text-slate-400 border-l border-slate-800 pl-4 py-1 hidden lg:block">
            <span className="text-white font-medium block">Custom Packages Available</span>
            <span>All deliverables include vector & high-res print files</span>
          </div>
        </div>

        {/* 8-Card Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service: ServiceItem) => {
            const Icon = iconMap[service.iconName] || PenTool;
            return (
              <div
                key={service.id}
                className="rounded-2xl p-6 bg-slate-900/50 border border-slate-800/80 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-black/50"
              >
                <div className="space-y-4">
                  {/* Icon & popular tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.popular && (
                      <span className="text-[11px] font-semibold text-amber-400/90 tracking-wide">
                        High Demand
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-amber-300/80 mt-1 font-medium">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="pt-2 border-t border-slate-800/70 space-y-1.5">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Deliverables
                    </div>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Turnaround & Inquire Action */}
                <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{service.turnaround}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 group/btn transition-colors cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
