import React from 'react';
import heroImg from '../assets/images/gaonkari_hero_dining_1791979275394.jpg';
import { SafeImage } from './SafeImage.tsx';
import { Quote } from 'lucide-react';

export const Hospitality: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-[#201C19] border-t border-[#35251F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-sm overflow-hidden border border-[#D6A54D]/25 shadow-2xl">
          {/* Background Image with Deep Scrim */}
          <div className="absolute inset-0 z-0">
            <SafeImage
              src={heroImg}
              alt="Authentic Maharashtrian dining experience at Gaonkari"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover object-center filter brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#201C19] via-[#201C19]/80 to-[#201C19]/90" />
            <div className="absolute inset-0 bg-[#A7472A]/10 mix-blend-overlay" />
          </div>

          {/* Content Box */}
          <div className="relative z-10 p-8 sm:p-14 lg:p-20 max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#D6A54D]" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D6A54D]">
                Heritage &amp; Culture
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F7F0E5] leading-[1.2] mb-6">
              More Than a Meal.{' '}
              <span className="italic font-normal text-[#D6A54D] block sm:inline">
                A Maharashtrian Experience.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#F7F0E5]/85 font-light leading-relaxed mb-8">
              In Maharashtra, the dining table is a sacred circle where generations unite. 
              The food is bold and unapologetic, carrying the warmth of the sun-drenched black soil, 
              the fragrance of slow-charred onions, and the spirited fire of freshly crushed Saoji peppercorns.
            </p>

            <blockquote className="relative p-6 bg-[#201C19]/80 border-l-2 border-[#D6A54D] backdrop-blur-md rounded-r-sm">
              <Quote className="w-6 h-6 text-[#D6A54D]/40 mb-2" />
              <p className="font-serif text-lg sm:text-xl italic text-[#F7F0E5] font-normal leading-relaxed">
                &ldquo;Every bowl we serve in Nagpur reflects a deep reverence for the spice artisans of Vidarbha—crafted to awaken the senses and nurture the soul.&rdquo;
              </p>
              <footer className="mt-3 text-xs tracking-wider uppercase text-[#D6A54D] font-medium">
                The Culinary Philosophy of Gaonkari
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
