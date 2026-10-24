import React, { useState } from 'react';
import { Star, Quote, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { TESTIMONIALS, FAQS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="testimonials" className="py-20 lg:py-28 relative bg-[#070b15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            04. Client Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Clients Say
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Real feedback from startup founders, creative leads, and business owners who partnered with Muhammad Mahad Obaid.
          </p>
        </div>

        {/* 3 Testimonials in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/90 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-200 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author attribution */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">{item.author}</div>
                  <div className="text-xs text-slate-400 font-medium">
                    {item.role} · <span className="text-amber-400/90">{item.company}</span>
                  </div>
                </div>
                <Quote className="w-6 h-6 text-slate-700 shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Frequently Asked Questions (Client Clarifications) */}
        <div className="pt-12 border-t border-slate-800/80 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Project Collaboration FAQ</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800/80 bg-slate-900/40 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-md bg-slate-800 text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
