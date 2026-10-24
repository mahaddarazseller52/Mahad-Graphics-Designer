import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Send, 
  Check, 
  Copy, 
  MessageCircle, 
  ExternalLink,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { DESIGNER_INFO, SERVICES } from '../data/portfolioData';

interface ContactProps {
  selectedServicePreset?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedServicePreset }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: selectedServicePreset || 'Logo Design',
    timeline: 'Standard (3-5 days)',
    budget: '$50 - $150',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Also trigger mailto so user's client opens directly with prefilled brief
    const subject = encodeURIComponent(`Design Inquiry: ${formData.service} from ${formData.name}`);
    const body = encodeURIComponent(`Hi Muhammad Mahad,

My name is ${formData.name} (${formData.email}).
I'm inquiring about: ${formData.service}
Timeline: ${formData.timeline}
Budget: ${formData.budget}

Project Brief:
${formData.message}
`);

    window.open(`mailto:${DESIGNER_INFO.email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#090e1c] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            05. Reach Out
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Create Something Amazing
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            I'm always excited to collaborate on new projects and bring fresh ideas to life. Whether you're a startup looking for a strong brand identity or an established business needing a design refresh, I'm here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left 5 Columns: Direct Contact Cards & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Connect With Me</span>
              </h3>

              <div className="space-y-4 text-sm">
                {/* Email with copy button */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-3 truncate mr-2">
                    <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] text-slate-400 uppercase font-medium">Email</div>
                      <a
                        href={`mailto:${DESIGNER_INFO.email}`}
                        className="text-white hover:text-amber-400 transition-colors font-medium truncate block"
                      >
                        {DESIGNER_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase font-medium">Phone & WhatsApp</div>
                      <a
                        href={`tel:${DESIGNER_INFO.phone}`}
                        className="text-white hover:text-emerald-400 transition-colors font-medium block"
                      >
                        {DESIGNER_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/923313935888"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 transition-colors shrink-0 flex items-center gap-1 text-xs font-semibold"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">Chat</span>
                  </a>
                </div>

                {/* Alternate Phone */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase font-medium">Alternate Line</div>
                    <span className="text-white font-medium block">{DESIGNER_INFO.altPhone}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase font-medium">Location</div>
                    <span className="text-white font-medium block">{DESIGNER_INFO.location}</span>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-3 truncate mr-2">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] text-slate-400 uppercase font-medium">Official Website</div>
                      <a
                        href={DESIGNER_INFO.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-amber-400 hover:text-amber-300 font-mono text-xs block truncate transition-colors"
                      >
                        <span className="text-amber-400 font-mono text-xs block truncate hover:underline">
                          {DESIGNER_INFO.websiteDisplay || DESIGNER_INFO.website}
                        </span>
                      </a>
                    </div>
                  </div>
                  <a
                    href={DESIGNER_INFO.website}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-400 transition-colors shrink-0 flex items-center gap-1 text-xs"
                    title="Open live website"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Follow My Work / Social Channels from Slide 9 */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Follow My Work
              </h3>
              <p className="text-xs text-slate-400">
                Explore more of my latest daily design sketches, branding studies, and client work:
              </p>
              <div className="grid grid-cols-3 gap-3">
                {DESIGNER_INFO.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-slate-950/70 hover:bg-slate-900 border border-slate-800 hover:border-amber-400/50 text-center transition-all group shadow-sm hover:shadow-md"
                  >
                    <span className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors block">
                      {social.name}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 group-hover:text-amber-300/80 block truncate mt-1">
                      {social.handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Interactive Brief / Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-1">
                Send a Direct Design Brief
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in your project specifications and Muhammad will get back to you within 12 hours with initial ideas.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-slate-950/90 border border-emerald-500/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Inquiry Dispatched!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, {formData.name}. Your design brief has been sent to Muhammad Mahad Obaid. You can also message directly on WhatsApp for expedited review.
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <a
                      href="https://wa.me/923313935888"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Follow Up on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="Rush (24-48 Hours)">Rush (24-48 Hours)</option>
                        <option value="Standard (3-5 days)">Standard (3-5 days)</option>
                        <option value="Flexible (1-2 weeks)">Flexible (1-2 weeks)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="Under $50">Under $50</option>
                        <option value="$50 - $150">$50 - $150</option>
                        <option value="$150 - $350">$150 - $350</option>
                        <option value="$350+ Enterprise">$350+ Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
                      Project Description & Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your brand, color preferences, target audience, and any existing logos or reference materials..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                    <span className="text-[11px] text-slate-500">
                      Response within 12 hours · Vector files included
                    </span>

                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl font-bold text-xs text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-400/20"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Project Brief</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
