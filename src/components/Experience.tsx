import React from 'react';
import { UtensilsCrossed, Flame, HeartHandshake } from 'lucide-react';

interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icon: React.ElementType;
}

const pillars: Pillar[] = [
  {
    number: '01',
    title: 'The Richness of Maharashtrian Cuisine',
    subtitle: 'From Vidarbha to the Desh',
    description:
      'Maharashtrian gastronomy is defined by deep agricultural wisdom—jowar and bajra bhakris, stone-ground grain flours, indigenous legumes, fresh grated coconut, and tangy kokum. We honor this regional diversity with dishes that celebrate authentic, earthy nutrition.',
    highlights: ['Traditional Jowar & Bajra Bhakris', 'Fresh Regional Legumes & Usal', 'Authentic Varan Bhat & Pithla'],
    icon: UtensilsCrossed,
  },
  {
    number: '02',
    title: 'Depth & Character of Saoji Spices',
    subtitle: 'Slow-Roasted Aromatic Masalas',
    description:
      'Saoji cuisine originates from the Halba Koshti weaving community of Vidarbha, celebrated across India for its intricate 32-spice blends. Rather than blunt chili heat, true Saoji cooking builds upon patiently dry-roasted spices, poppy seeds, stone flower, and black pepper for complex, lingering aroma.',
    highlights: ['Hand-Pounded Masala Blends', 'Stone Flower (Dagad Phool) Notes', 'Slow-Simmered Layered Heat'],
    icon: Flame,
  },
  {
    number: '03',
    title: 'Warmth of Sharing a Traditional Meal',
    subtitle: 'The Spirit of Atithi Devo Bhava',
    description:
      'In Maharashtrian homes, food is not merely consumed—it is shared with generosity and devotion. From ceremonial bronze tableware to attentive table service, our dining room provides a peaceful space for families and friends to connect over steaming hot gravies and freshly baked breads.',
    highlights: ['Customary Bronze & Brass Dining', 'Family-Style Feasting Tables', 'Genuine Vidarbha Warmth'],
    icon: HeartHandshake,
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 sm:py-28 lg:py-32 bg-[#1C1816] border-t border-[#35251F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-[#D6A54D]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D6A54D]">
              Tradition in Every Detail
            </span>
            <span className="w-6 h-px bg-[#D6A54D]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F7F0E5] leading-tight mb-4">
            The Gaonkari Experience
          </h2>
          <p className="text-base sm:text-lg text-[#F7F0E5]/75 font-light leading-relaxed">
            Three enduring pillars guide our dining room in Nagpur, celebrating the heritage, spices, and heartfelt generosity of Maharashtra.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="relative bg-[#201C19] border border-[#35251F] hover:border-[#D6A54D]/40 rounded-sm p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group"
              >
                {/* Top Corner Number */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-sm bg-[#35251F]/60 border border-[#D6A54D]/30 flex items-center justify-center text-[#D6A54D] group-hover:bg-[#D6A54D] group-hover:text-[#201C19] transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-serif text-3xl font-light text-[#D6A54D]/40 group-hover:text-[#D6A54D] transition-colors">
                    {pillar.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F7F0E5] mb-1.5 leading-snug">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-wider text-[#D6A54D] block mb-4">
                    {pillar.subtitle}
                  </span>
                  <p className="text-sm text-[#F7F0E5]/70 leading-relaxed font-light mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Bullet highlights */}
                <div className="pt-5 border-t border-[#35251F]/80 space-y-2">
                  {pillar.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-xs text-[#F7F0E5]/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D6A54D]/70 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
