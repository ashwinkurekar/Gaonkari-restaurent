import React from 'react';
import saojiChickenImg from '../assets/images/saoji_chicken_curry_1791979276649.jpg';
import saojiMuttonImg from '../assets/images/saoji_mutton_curry_1791979276472.jpg';
import varhadiChickenImg from '../assets/images/varhadi_chicken_curry_1791979324784.jpg';
import vegThaliImg from '../assets/images/maharashtrian_veg_thali_1791979277992.jpg';
import { SafeImage } from './SafeImage.tsx';
import { Sparkles, ArrowDown } from 'lucide-react';

interface DishItem {
  id: string;
  name: string;
  marathiName: string;
  description: string;
  image: string;
  tag: string;
  price: string;
  portion: string;
}

const dishes: DishItem[] = [
  {
    id: 'gaonkari-special-mutton',
    name: 'Gaonkari Special Mutton',
    marathiName: 'गावकरी स्पेशल मटन',
    description:
      'Our crowning specialty prepared in authentic slow-simmered Vidarbha roasted masala gravy with tender prime goat cuts.',
    image: saojiMuttonImg,
    tag: 'House Special · Pg 2',
    price: '399/-',
    portion: 'Plate (Half 629/- · Full 1269/-)',
  },
  {
    id: 'gaonkari-special-chicken',
    name: 'Gaonkari Special Chicken',
    marathiName: 'गावकरी स्पेशल चिकन',
    description:
      'Signature chicken prepared with stone-ground roasted spices, black cardamom, dry coconut, and rich regional tarri gravy.',
    image: saojiChickenImg,
    tag: 'House Special · Pg 6',
    price: '379/-',
    portion: 'Plate (Half 559/- · Full 1129/-)',
  },
  {
    id: 'mutton-warhadi',
    name: 'Mutton Warhadi',
    marathiName: 'मटन वऱ्हाडी',
    description:
      'A true Vidarbha classic simmered with charred shallots, roasted sesame seeds, and fragrant whole spices.',
    image: varhadiChickenImg,
    tag: 'Vidarbha Classic · Pg 2',
    price: '399/-',
    portion: 'Plate (Half 629/- · Full 1269/-)',
  },
  {
    id: 'gaonkari-swad-zunka',
    name: 'Zunka & Pithal (Ambat Besan)',
    marathiName: 'झुणका आणि पिठलं',
    description:
      'Traditional spiced gram flour delicacy tempered with mustard seeds, green chilies, and garlic. Perfect with Bhakar.',
    image: vegThaliImg,
    tag: 'Gaonkari Swad · Pg 7',
    price: '249/-',
    portion: 'Zunka 249/- · Pithal 199/-',
  },
];

export const SignatureDishes: React.FC = () => {
  return (
    <section id="dishes" className="relative py-20 sm:py-28 lg:py-32 bg-[#201C19] border-t border-[#35251F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-[#D6A54D]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D6A54D]">
              Culinary Highlights
            </span>
            <span className="w-6 h-px bg-[#D6A54D]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F7F0E5] leading-tight mb-4">
            House Specialties
          </h2>
          <p className="text-base sm:text-lg text-[#F7F0E5]/75 font-light leading-relaxed">
            Signature preparations from our official restaurant menu card. Handcrafted gravies, freshly roasted spices, and verified kitchen pricing.
          </p>
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

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-medium tracking-wider uppercase text-[#F7F0E5] bg-[#201C19]/85 backdrop-blur-sm px-2.5 py-1 rounded-sm border border-[#D6A54D]/30">
                    {dish.tag}
                  </span>
                </div>
              </div>

              {/* Dish Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F7F0E5] group-hover:text-[#D6A54D] transition-colors mb-1">
                    {dish.name}
                  </h3>

                  <span
                    style={{ fontFamily: '"Noto Serif Devanagari", serif' }}
                    className="text-xs text-[#D6A54D] font-medium mb-3 block"
                  >
                    {dish.marathiName}
                  </span>

                  <p className="text-xs sm:text-sm text-[#F7F0E5]/70 leading-relaxed font-light mb-4 line-clamp-3">
                    {dish.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="pt-4 border-t border-[#35251F] flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-[#F7F0E5]/50">
                      {dish.portion}
                    </span>
                    <span className="text-base font-bold text-white font-mono">
                      {dish.price}
                    </span>
                  </div>
                  <Sparkles className="w-4 h-4 text-[#D6A54D]/60" />
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
            <span>Explore Complete 12-Page Menu Card Book</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
