import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Story } from './components/Story.tsx';
import { SignatureDishes } from './components/SignatureDishes.tsx';
import { FlipbookMenu } from './components/FlipbookMenu.tsx';
import { Experience } from './components/Experience.tsx';
import { Hospitality } from './components/Hospitality.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const scrollToMenuBook = () => {
    const el = document.querySelector('#menu-book');
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
      <Navbar onExploreMenu={scrollToMenuBook} />

      {/* Main Content Area */}
      <main>
        {/* A. Cinematic Hero Section */}
        <Hero
          onDiscoverMenu={scrollToMenuBook}
          onExperienceClick={scrollToExperience}
        />

        {/* B. Restaurant Introduction */}
        <Story />

        {/* C. Signature Dishes Preview */}
        <SignatureDishes />

        {/* D. Interactive 12-Page Flipbook Menu (Phase 2) */}
        <section
          id="menu-book"
          className="py-16 sm:py-24 bg-[#181513] border-t border-[#35251F] relative"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-px bg-[#D6A54D]" />
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D6A54D]">
                  Interactive Royal Menu
                </span>
                <span className="w-6 h-px bg-[#D6A54D]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F7F0E5] leading-tight mb-3">
                Gaonkari Royal Flipbook Menu
              </h2>
              <p className="text-sm sm:text-base text-[#F7F0E5]/75 font-light max-w-2xl mx-auto">
                Explore our comprehensive 12-page traditional dining catalogue in double-page spread on desktop or responsive single-page on mobile. Complete with authentic Marathi Devanagari dish names, spice markers, and organic paper-flip audio.
              </p>
            </div>

            <FlipbookMenu isStandalone={false} />
          </div>
        </section>

        {/* E. The Gaonkari Experience */}
        <Experience />

        {/* F. Heritage & Hospitality */}
        <Hospitality />
      </main>

      {/* G. Contact & Footer */}
      <Footer />
    </div>
  );
}
