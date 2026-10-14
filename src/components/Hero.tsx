import React from 'react';
import { ArrowDown, Compass } from 'lucide-react';
import heroImg from '../assets/images/gaonkari_hero_dining_1791979275394.jpg';
import { SafeImage } from './SafeImage.tsx';

interface HeroProps {
  onDiscoverMenu?: () => void;
  onExperienceClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverMenu, onExperienceClick }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Cinematic Image with Layered Scrim */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src={heroImg}
          alt="Gaonkari Royal Dining Feast Nagpur"
          containerClassName="w-full h-full"
          className="w-full h-full object-cover object-center scale-100 transform hover:scale-102 transition-transform duration-1000 ease-out"
        />
        {/* Multistage luxury dark gradient scrim for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#201C19] via-[#201C19]/75 to-[#201C19]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#201C19]/85 via-transparent to-[#201C19]/85" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#201C19]/40 to-[#201C19]/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 sm:py-32 flex flex-col items-center">
        {/* Eyebrow & Location Label */}
        <div className="inline-flex items-center gap-2.5 sm:gap-3 px-4 py-1.5 rounded-full bg-[#201C19]/85 border border-[#D6A54D]/35 backdrop-blur-md mb-4 sm:mb-6 shadow-xl shadow-black/50">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D6A54D]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#D6A54D]">
            A TASTE OF MAHARASHTRA
          </span>
          <span className="text-[#F7F0E5]/40 text-xs">·</span>
          <span className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[#F7F0E5]/90">
            NAGPUR, MAHARASHTRA
          </span>
        </div>

        {/* ==================================================== */}
        {/* MAIN FOCAL POINT: LARGE ROYAL DEVANAGARI TYPOGRAPHY */}
        {/* ==================================================== */}
        <div className="relative my-3 sm:my-5 w-full flex flex-col items-center">
          {/* Subtle Maharashtrian Filigree Flank Ornaments */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-2 opacity-80">
            <div className="h-px w-10 sm:w-24 bg-gradient-to-r from-transparent via-[#D6A54D]/70 to-[#D6A54D]" />
            <span className="text-[#D6A54D] text-xs sm:text-sm font-serif">❖</span>
            <div className="h-px w-10 sm:w-24 bg-gradient-to-l from-transparent via-[#D6A54D]/70 to-[#D6A54D]" />
          </div>

          {/* Grand Marathi Restaurant Name: गांवकरी रेस्टॉरंट */}
          <h1
            style={{ fontFamily: '"Noto Serif Devanagari", "Playfair Display", Georgia, serif' }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-black tracking-normal leading-[1.3] sm:leading-[1.25] md:leading-[1.22] drop-shadow-[0_12px_40px_rgba(0,0,0,0.95)] select-none bg-gradient-to-b from-[#FFF8EE] via-[#F5E2BE] to-[#D6A54D] bg-clip-text text-transparent transform hover:scale-[1.01] transition-transform duration-500 pt-3 pb-2 sm:pt-6 sm:pb-3 text-center overflow-visible block w-full"
          >
            गांवकरी रेस्टॉरंट
          </h1>

          {/* English Subtitle Smaller Beneath Marathi Name */}
          <div className="mt-3 sm:mt-4">
            <p className="font-sans text-xs sm:text-sm md:text-base font-semibold tracking-[0.26em] sm:tracking-[0.32em] uppercase text-[#D6A54D] drop-shadow-md">
              The Royal Saoji &amp; Maharashtrian Dining Experience
            </p>
          </div>

          {/* Under-title Decorative Separator */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 mt-3 sm:mt-4 opacity-80">
            <div className="h-px w-16 sm:w-32 bg-gradient-to-r from-transparent via-[#A7472A]/70 to-[#D6A54D]/70" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#D6A54D]" />
            <div className="h-px w-16 sm:w-32 bg-gradient-to-l from-transparent via-[#A7472A]/70 to-[#D6A54D]/70" />
          </div>
        </div>

        {/* Narrative Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F7F0E5] leading-[1.2] mt-4 mb-4 max-w-2xl">
          Bold Flavours.{' '}
          <span className="italic font-normal text-[#D6A54D]">
            Royal Heritage.
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="text-sm sm:text-base md:text-lg text-[#F7F0E5]/85 font-light leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
          Discover the soul of Maharashtrian cuisine, where authentic Saoji spices, traditional recipes and warm hospitality come together.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={() => {
              if (onDiscoverMenu) onDiscoverMenu();
              else scrollTo('#menu-book');
            }}
            className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-[#201C19] bg-[#D6A54D] hover:bg-[#e2b765] transition-all duration-200 rounded-sm shadow-xl shadow-black/50 cursor-pointer active:scale-95"
          >
            Discover Our Menu
          </button>

          <button
            onClick={() => {
              if (onExperienceClick) onExperienceClick();
              else scrollTo('#experience');
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs sm:text-sm font-medium tracking-[0.15em] uppercase text-[#F7F0E5] bg-[#201C19]/60 hover:bg-[#F7F0E5]/10 border border-[#F7F0E5]/30 hover:border-[#D6A54D] backdrop-blur-sm transition-all duration-200 rounded-sm cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#D6A54D]" />
            <span>Experience Gaonkari</span>
          </button>
        </div>
      </div>

      {/* Decorative Bottom Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-xs tracking-widest text-[#F7F0E5]/50">
        <span className="uppercase text-[10px]">Scroll Down</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#D6A54D]" />
      </div>
    </section>
  );
};
