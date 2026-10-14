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
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Cinematic Image with Layered Scrim */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src={heroImg}
          alt="Gaonkari Royal Dining Feast Nagpur"
          containerClassName="w-full h-full"
          className="w-full h-full object-cover object-center scale-100 transform hover:scale-102 transition-transform duration-1000 ease-out"
        />
        {/* Multistage luxury dark gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#201C19] via-[#201C19]/70 to-[#201C19]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#201C19]/80 via-transparent to-[#201C19]/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#201C19]/40 to-[#201C19]/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 sm:py-32">
        {/* Location & Eyebrow Tag */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#201C19]/70 border border-[#D6A54D]/30 backdrop-blur-sm mb-6 sm:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D6A54D]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#D6A54D]">
            A TASTE OF MAHARASHTRA
          </span>
          <span className="text-[#F7F0E5]/40 text-xs">·</span>
          <span className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[#F7F0E5]/80">
            NAGPUR, MAHARASHTRA
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F7F0E5] leading-[1.12] sm:leading-[1.1] mb-6 max-w-4xl mx-auto">
          Bold Flavours.{' '}
          <span className="italic font-normal text-[#D6A54D] block sm:inline">
            Royal Heritage.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-[#F7F0E5]/85 font-light leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12">
          Discover the soul of Maharashtrian cuisine, where authentic Saoji spices, traditional recipes and warm hospitality come together.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={() => {
              if (onDiscoverMenu) onDiscoverMenu();
              else scrollTo('#dishes');
            }}
            className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-[#201C19] bg-[#D6A54D] hover:bg-[#e2b765] transition-all duration-200 rounded-sm shadow-xl shadow-black/40 cursor-pointer active:scale-95"
          >
            Discover Our Menu
          </button>

          <button
            onClick={() => {
              if (onExperienceClick) onExperienceClick();
              else scrollTo('#experience');
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs sm:text-sm font-medium tracking-[0.15em] uppercase text-[#F7F0E5] bg-transparent hover:bg-[#F7F0E5]/5 border border-[#F7F0E5]/30 hover:border-[#D6A54D] transition-all duration-200 rounded-sm cursor-pointer"
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
