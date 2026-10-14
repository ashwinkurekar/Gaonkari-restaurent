import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Story } from './components/Story.tsx';
import { SignatureDishes } from './components/SignatureDishes.tsx';
import { Experience } from './components/Experience.tsx';
import { Hospitality } from './components/Hospitality.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const scrollToDishes = () => {
    const el = document.querySelector('#dishes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperience = () => {
    const el = document.querySelector('#experience');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#201C19] text-[#F7F0E5] font-sans antialiased overflow-x-hidden selection:bg-[#A7472A] selection:text-white">
      {/* Refined Navigation Bar */}
      <Navbar onExploreMenu={scrollToDishes} />

      {/* Main Content Area */}
      <main>
        {/* A. Cinematic Hero Section */}
        <Hero
          onDiscoverMenu={scrollToDishes}
          onExperienceClick={scrollToExperience}
        />

        {/* B. Restaurant Introduction */}
        <Story />

        {/* C. Signature Dishes Preview */}
        <SignatureDishes />

        {/* D. The Gaonkari Experience */}
        <Experience />

        {/* E. Heritage & Hospitality */}
        <Hospitality />
      </main>

      {/* F. Contact & Footer */}
      <Footer />
    </div>
  );
}
