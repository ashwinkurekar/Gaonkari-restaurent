import React from 'react';
import ambianceImg from '../assets/images/gaonkari_hospitality_ambiance_1791979278490.jpg';
import { SafeImage } from './SafeImage.tsx';
import { Flame, Sparkles } from 'lucide-react';

export const Story: React.FC = () => {
  return (
    <section id="story" className="relative py-20 sm:py-28 lg:py-32 bg-[#201C19] border-t border-[#35251F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with elegant decorative frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Subtle decorative offset border in saffron gold */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#D6A54D]/30 pointer-events-none rounded-sm hidden sm:block" />
              
              <div className="relative overflow-hidden rounded-sm shadow-2xl border border-[#35251F]">
                <SafeImage
                  src={ambianceImg}
                  alt="Gaonkari Restaurant warm Maharashtrian ambiance in Nagpur"
                  containerClassName="aspect-[4/3] w-full"
                  className="w-full h-full object-cover transform hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201C19]/80 via-transparent to-transparent" />
                
                {/* Image caption badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#F7F0E5]/90 bg-[#201C19]/80 backdrop-blur-md px-4 py-2 rounded-sm border border-[#D6A54D]/20">
                  <span className="font-medium tracking-wide">Nagpur Dining Sanctuary</span>
                  <span className="text-[#D6A54D] text-[11px] tracking-wider uppercase">Authentic Ambiance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-[#D6A54D]" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D6A54D]">
                Our Story &amp; Philosophy
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F7F0E5] leading-[1.2] mb-6">
              Rooted in Tradition.{' '}
              <span className="italic font-normal text-[#D6A54D]">
                Served with Pride.
              </span>
            </h2>

            {/* Authentic Copy */}
            <div className="space-y-4 text-base sm:text-lg text-[#F7F0E5]/80 font-light leading-relaxed">
              <p>
                At Gaonkari, our table is an ode to the culinary heart of Vidarbha and Maharashtra. 
                We celebrate the storied culinary traditions of our soil—where rustic simplicity meets the 
                intense, multi-layered aromas of slow-roasted spices.
              </p>
              <p>
                Our signature Saoji preparations are hand-ground using traditional spice blends that evoke 
                generations of home-style craftsmanship. Each recipe is slow-simmered in small batches, ensuring 
                that the deep earthy notes of coriander seeds, black cardamom, star anise, and roasted onions 
                unfold in every steaming bowl.
              </p>
              <p>
                Whether you join us for a fiery Saoji rassa, a comforting Varhadi curry, or a bountiful 
                vegetarian thali, our doors in Nagpur welcome you with the timeless warmth of authentic 
                Maharashtrian hospitality.
              </p>
            </div>

            {/* Cultural highlights */}
            <div className="mt-8 pt-8 border-t border-[#35251F] grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#35251F] text-[#D6A54D] shrink-0 border border-[#D6A54D]/20">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F7F0E5] tracking-wide">Signature Saoji Spices</h4>
                  <p className="text-xs text-[#F7F0E5]/60 mt-0.5">Slow-roasted regional blends with robust, warming heat.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#35251F] text-[#D6A54D] shrink-0 border border-[#D6A54D]/20">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F7F0E5] tracking-wide">Warm Vidarbha Hospitality</h4>
                  <p className="text-xs text-[#F7F0E5]/60 mt-0.5">Customary service inspired by authentic community feasts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
