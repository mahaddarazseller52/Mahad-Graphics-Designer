/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { EstimateCalculator } from './components/EstimateCalculator';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('Logo Design');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForInquiry(serviceTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenInquiry = (serviceOrProjectTitle?: string) => {
    if (serviceOrProjectTitle) {
      setSelectedServiceForInquiry(serviceOrProjectTitle);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070b15] text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950">
      {/* Top Bar Navigation */}
      <Header onOpenInquiry={() => handleOpenInquiry()} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenInquiry={() => handleOpenInquiry()} />

        {/* About & Philosophy Section */}
        <About onOpenInquiry={() => handleOpenInquiry()} />

        {/* Services & Capabilities Section */}
        <Services onSelectService={handleSelectService} />

        {/* Selected Portfolio & Slide Highlights */}
        <Portfolio onOpenInquiry={handleOpenInquiry} />

        {/* Interactive Scope & Estimate Calculator */}
        <EstimateCalculator initialService={selectedServiceForInquiry} />

        {/* Client Endorsements & FAQ */}
        <Testimonials />

        {/* Reach Out / Contact Form & Direct Links */}
        <Contact selectedServicePreset={selectedServiceForInquiry} />
      </main>

      {/* Quiet Footer */}
      <Footer />
    </div>
  );
}

