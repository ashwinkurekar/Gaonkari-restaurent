import React from 'react';
import saojiChickenImg from '../assets/images/saoji_chicken_curry_1791979276649.jpg';
import saojiMuttonImg from '../assets/images/saoji_mutton_curry_1791979276472.jpg';
import varhadiChickenImg from '../assets/images/varhadi_chicken_curry_1791979324784.jpg';
import vegThaliImg from '../assets/images/maharashtrian_veg_thali_1791979277992.jpg';
import { SafeImage } from './SafeImage.tsx';
import { Sparkles, Info } from 'lucide-react';

interface DishItem {
  id: string;
  name: string;
  marathiName: string;
  description: string;
  image: string;
  tag: string;
  spiciness: string;
}

const dishes: DishItem[] = [
  {
    id: 'saoji-chicken',
    name: 'Saoji Chicken Rassa',
    marathiName: 'सावजी चिकन रस्सा',
    description:
      'Nagpur’s iconic fiery preparation featuring tender chicken slow-cooked in hand-ground Saoji masala, black cardamom, dry coconut, and aromatic stone flower.',
    image: saojiChickenImg,
    tag: 'Nagpur Specialty',
    spiciness: 'Signature Spiced',
  },
  {
    id: 'saoji-mutton',
    name: 'Saoji Mutton Curry',
    marathiName: 'सावजी मटन करी',
    description:
      'Succulent cut of slow-braised mutton immersed in an intensely aromatic, dark roasted gravy simmered with traditional 32-ingredient Vidarbha spices.',
    image: saojiMuttonImg,
    tag: 'Chef Recommendation',
    spiciness: 'Bold & Fiery',
  },
  {
    id: 'varhadi-chicken',
    name: 'Varhadi Chicken',
    marathiName: 'वऱ्हाडी चिकन',
    description:
      'A rich regional Vidarbha recipe cooked with caramelized brown onions, roasted sesame seeds, coriander paste, and country-style spices.',
    image: varhadiChickenImg,
    tag: 'Vidarbha Classic',
    spiciness: 'Warm & Robust',
  },
  {
    id: 'mah-veg-thali',
    name: 'Maharashtrian Veg Thali',
    marathiName: 'महाराष्ट्रीयन व्हेज थाळी',
    description:
      'A royal, multi-course feast featuring dal varan, spicy usal, traditional pithla, freshly roasted jowar bhakri, fragrant rice, koshimbir, and regional accompaniments.',
    image: vegThaliImg,
    tag: 'Heritage Feast',
    spiciness: 'Delicately Balanced',
  },
];

export const SignatureDishes: React.FC = () => {
  return (
    <section id="dishes" className="relative py-20 sm:py-28 lg:py-32 bg-[#201C19] border-t border-[#35251F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-[#D6A54D]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D6A54D]">
              Culinary Highlights
            </span>
            <span className="w-6 h-px bg-[#D6A54D]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F7F0E5] leading-tight mb-4">
            Signature Dishes Preview
          </h2>
          <p className="text-base sm:text-lg text-[#F7F0E5]/75 font-light leading-relaxed">
            A curated glimpse into the culinary heritage of Gaonkari. Handcrafted gravies, freshly roasted spices, and traditional recipes perfected over generations.
          </p>

          {/* Phase Notice */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#35251F]/70 border border-[#D6A54D]/20 text-xs text-[#F7F0E5]/80">
            <Info className="w-3.5 h-3.5 text-[#D6A54D] shrink-0" />
            <span>These cards are a preview. The full interactive flipbook menu arrives in Phase 2.</span>
          </div>
        </div>

        {/* 4 Dish Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="group flex flex-col bg-[#26201B] rounded-sm overflow-hidden border border-[#35251F] hover:border-[#D6A54D]/40 transition-all duration-300 shadow-xl hover:shadow-black/60"
            >
              {/* Dish Image with Hover Zoom */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#201C19]">
                <SafeImage
                  src={dish.image}
                  alt={dish.name}
                  fallbackText={dish.name}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#26201B] via-transparent to-black/30" />

                {/* Subdued Category & Spiciness Labels */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-[10px] font-medium tracking-wider uppercase text-[#F7F0E5] bg-[#201C19]/80 backdrop-blur-sm px-2.5 py-1 rounded-sm border border-[#D6A54D]/30">
                    {dish.tag}
                  </span>
                </div>

                <div className="absolute bottom-2.5 right-3">
                  <span className="text-[11px] font-medium text-[#D6A54D] bg-[#201C19]/90 px-2 py-0.5 rounded-sm">
                    {dish.spiciness}
                  </span>
                </div>
              </div>

              {/* Dish Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F7F0E5] group-hover:text-[#D6A54D] transition-colors">
                      {dish.name}
                    </h3>
                  </div>

                  <span className="text-xs text-[#D6A54D]/75 font-serif italic mb-3 block">
                    {dish.marathiName}
                  </span>

                  <p className="text-xs sm:text-sm text-[#F7F0E5]/70 leading-relaxed font-light mb-4 line-clamp-3">
                    {dish.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="pt-4 border-t border-[#35251F] flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-[#F7F0E5]/50">Today&apos;s Catch &amp; Cuts</span>
                    <span className="text-xs sm:text-sm font-medium text-[#D6A54D] italic">
                      Ask us for today&apos;s price
                    </span>
                  </div>
                  <Sparkles className="w-3.5 h-3.5 text-[#D6A54D]/40" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action to view Flipbook Menu */}
        <div className="mt-12 text-center">
          <a
            href="#menu-book"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-[#201C19] bg-[#D6A54D] hover:bg-[#e2b765] rounded-sm transition-all shadow-xl hover:shadow-[#D6A54D]/20 cursor-pointer"
          >
            <span>Browse Complete 12-Page Royal Menu Flipbook</span>
            <Sparkles className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
