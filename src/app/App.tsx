import React from 'react';
import { HeroHeader } from './components/HeroHeader';
import { HeroSection } from './components/HeroSection';
import { SignatureExperiences } from './components/SignatureExperiences';
import { PremiumAddOns } from './components/PremiumAddOns';
import { SEOContent } from './components/SEOContent';
import { ReelsSection } from './components/ReelsSection';
import { Gallery } from './components/Gallery';
import { StaysSection } from './components/StaysSection';
import { RanchRules } from './components/RanchRules';
import { QuickBookFlow } from './components/QuickBookFlow';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { FloatingInstagramButton } from './components/FloatingInstagramButton';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 selection:bg-[#F2A65A]/30">
      <HeroHeader />
      <HeroSection />
      <RanchRules />
      <PremiumAddOns />
      <SignatureExperiences />
      <StaysSection />
      <Gallery />
      <ReelsSection />
      <SEOContent />
      <QuickBookFlow />
      <BookingSection />
      <FloatingInstagramButton />
      <Footer />
    </div>
  );
}