import React, { useState } from 'react';
import { Calculator, Clock, Check, Sparkles, MessageCircle, Mail } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface EstimateCalculatorProps {
  initialService?: string;
  onSendDirectInquiry?: (details: string) => void;
}

interface PackageOption {
  id: string;
  name: string;
  basePriceUSD: number;
  baseDays: number;
  description: string;
}

const PACKAGES: PackageOption[] = [
  {
    id: 'logo',
    name: 'Logo Design & Monogram',
    basePriceUSD: 65,
    baseDays: 2,
    description: '3 custom concept directions, vector source files, unlimited palette variations.',
  },
  {
    id: 'identity',
    name: 'Complete Brand Identity Suite',
    basePriceUSD: 180,
    baseDays: 5,
    description: 'Logo mark, typography rules, brand style manual, stationery and digital assets.',
  },
  {
    id: 'social',
    name: 'Social Media Pack (6 Creatives)',
    basePriceUSD: 55,
    baseDays: 2,
    description: 'High-converting Instagram feed & story templates, ad promotional graphics.',
  },
  {
    id: 'print',
    name: 'Business Cards & Stationery',
    basePriceUSD: 40,
    baseDays: 2,
    description: 'Double-sided luxury card layout, letterhead, print-ready CMYK with bleeds.',
  },
  {
    id: 'packaging',
    name: 'Packaging & Die-Line Label',
    basePriceUSD: 120,
    baseDays: 4,
    description: 'Commercial die-cut packaging artwork, barcode placement, 3D bottle/box mockups.',
  },
  {
    id: 'display',
    name: 'Panaflex & Large Exhibition Rollup',
    basePriceUSD: 50,
    baseDays: 2,
    description: 'High-resolution vector banner for trade shows, events, and outdoor storefronts.',
  },
];

interface AddonOption {
  id: string;
  name: string;
  priceUSD: number;
  days: number;
}

const ADDONS: AddonOption[] = [
  { id: 'mockups', name: '3D Photorealistic Client Mockups', priceUSD: 15, days: 0 },
  { id: 'guidelines', name: 'Comprehensive Brand Style Guide PDF', priceUSD: 25, days: 1 },
  { id: 'rush', name: 'Rush Priority Delivery (Express 24h Queue)', priceUSD: 25, days: -1 },
  { id: 'socialkit', name: 'Social Profile & Banner Setup Kit', priceUSD: 20, days: 0 },
];

export const EstimateCalculator: React.FC<EstimateCalculatorProps> = ({
  initialService,
  onSendDirectInquiry,
}) => {
  const [selectedPkgId, setSelectedPkgId] = useState<string>(() => {
    if (initialService) {
      const match = PACKAGES.find((p) =>
        initialService.toLowerCase().includes(p.name.toLowerCase().split(' ')[0])
      );
      if (match) return match.id;
    }
    return 'logo';
  });

  const [selectedAddons, setSelectedAddons] = useState<string[]>(['mockups']);
  const [currency, setCurrency] = useState<'USD' | 'PKR'>('USD');

  const selectedPkg = PACKAGES.find((p) => p.id === selectedPkgId) || PACKAGES[0];

  const totalUSD =
    selectedPkg.basePriceUSD +
    selectedAddons.reduce((sum, aId) => {
      const a = ADDONS.find((x) => x.id === aId);
      return sum + (a ? a.priceUSD : 0);
    }, 0);

  const totalPKR = totalUSD * 280; // approximate market exchange rate

  const estimatedDays = Math.max(
    1,
    selectedPkg.baseDays +
      selectedAddons.reduce((sum, aId) => {
        const a = ADDONS.find((x) => x.id === aId);
        return sum + (a ? a.days : 0);
      }, 0)
  );

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const getInquiryText = () => {
    const addonsList = selectedAddons
      .map((id) => ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    return `Hi Mahad! I'm interested in commissioning a design project:
- Package: ${selectedPkg.name}
- Add-ons: ${addonsList || 'None'}
- Estimated Timeline: ~${estimatedDays} days
- Estimated Budget: ${currency === 'USD' ? `$${totalUSD} USD` : `Rs. ${totalPKR.toLocaleString()} PKR`}
Looking forward to discussing details!`;
  };

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(getInquiryText());
    const phoneClean = DESIGNER_INFO.phone.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${phoneClean}?text=${text}`, '_blank');
  };

  const handleEmailOrder = () => {
    const subject = encodeURIComponent(`Design Project Inquiry: ${selectedPkg.name}`);
    const body = encodeURIComponent(getInquiryText());
    window.open(`mailto:${DESIGNER_INFO.email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section className="py-16 bg-[#090f20] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Estimate Your Project Scope & Timeline
          </h2>
          <p className="mt-2 text-slate-300 text-sm leading-relaxed">
            Configure your deliverables to receive an instant timeline estimate and transparent price range before reaching out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Columns: Selection of Package & Add-ons */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Package Selection */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                1. Select Core Deliverable
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PACKAGES.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPkgId(pkg.id)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      selectedPkgId === pkg.id
                        ? 'bg-amber-400/10 border-amber-400 text-white shadow-md'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-white">{pkg.name}</span>
                      <span className="text-xs font-mono font-semibold text-amber-400">
                        ${pkg.basePriceUSD}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      {pkg.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Add-ons */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                2. Optional Add-ons & Speed
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-lg border text-left flex items-center justify-between transition-colors cursor-pointer text-xs ${
                        isChecked
                          ? 'bg-slate-800/90 border-amber-400/60 text-white'
                          : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isChecked
                              ? 'bg-amber-400 border-amber-400 text-slate-950'
                              : 'border-slate-700 bg-slate-800'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="font-medium">{addon.name}</span>
                      </div>
                      <span className="font-mono text-amber-400 font-semibold shrink-0 ml-2">
                        +${addon.priceUSD}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Estimate Summary Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Summary Quote
                </span>
                <span className="text-[11px] text-slate-400 block">
                  Muhammad Mahad Obaid Studio
                </span>
              </div>

              {/* Currency Selector */}
              <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs">
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`px-2 py-0.5 rounded font-semibold transition-colors cursor-pointer ${
                    currency === 'USD'
                      ? 'bg-amber-400 text-slate-950'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  USD
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('PKR')}
                  className={`px-2 py-0.5 rounded font-semibold transition-colors cursor-pointer ${
                    currency === 'PKR'
                      ? 'bg-amber-400 text-slate-950'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  PKR
                </button>
              </div>
            </div>

            {/* Calculations Display */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Selected Deliverable:</span>
                <span className="font-semibold text-white">{selectedPkg.name}</span>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Active Add-ons:</span>
                <span className="font-semibold text-white">{selectedAddons.length} selected</span>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Estimated Delivery:</span>
                </span>
                <span className="font-mono font-semibold text-amber-400">
                  {estimatedDays} Business Days
                </span>
              </div>
            </div>

            {/* Total Highlight */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">
                  Estimated Investment
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                  {currency === 'USD' ? `$${totalUSD}` : `Rs. ${totalPKR.toLocaleString()}`}
                </span>
              </div>
              <div className="text-right text-[10px] text-slate-400 max-w-[120px] leading-tight">
                Includes all vector source files & revisions
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Discuss via WhatsApp (+92 331 3935888)</span>
              </button>

              <button
                type="button"
                onClick={handleEmailOrder}
                className="w-full py-3 px-4 rounded-xl font-medium text-xs text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Send Brief via Email</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
