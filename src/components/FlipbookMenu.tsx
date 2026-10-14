import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  BookOpen,
  Maximize2,
  Minimize2,
  Sparkles,
  Flame,
  Leaf,
  Info,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import { menuCategories, MenuItem } from '../data/menuData.ts';
import { playPageTurnSound } from '../utils/audio.ts';
import { SafeImage } from './SafeImage.tsx';
import heroImg from '../assets/images/gaonkari_hero_dining_1791979275394.jpg';
import puranPoliImg from '../assets/images/puran_poli_dessert_1791980374179.jpg';

interface FlipbookMenuProps {
  initialPage?: number;
  onClose?: () => void;
  isStandalone?: boolean;
}

export const FlipbookMenu: React.FC<FlipbookMenuProps> = ({
  initialPage = 1,
  onClose,
  isStandalone = false,
}) => {
  // Mobile uses single page 1..12. Desktop uses spread indices 0..6 (where 0 is cover, 1 is pp. 2-3, 2 is pp. 4-5, etc.)
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<'forward' | 'backward'>('forward');
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [vegFilter, setVegFilter] = useState<'all' | 'veg' | 'nonveg'>('all');

  const totalPages = 12;

  // Track responsive screen size for double-spread vs single-page view
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        goToPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isDesktop]);

  const triggerFlip = (direction: 'forward' | 'backward', targetPage: number) => {
    if (isFlipping) return;
    setFlipDirection(direction);
    setIsFlipping(true);
    playPageTurnSound(isMuted);

    setTimeout(() => {
      setCurrentPage(targetPage);
      setIsFlipping(false);
    }, 280);
  };

  const goToNext = () => {
    if (isDesktop) {
      // Desktop spreads: 1 -> 2 (shows 2 & 3) -> 4 (shows 4 & 5) -> 6 -> 8 -> 10 -> 12
      if (currentPage === 1) {
        triggerFlip('forward', 2);
      } else if (currentPage >= 2 && currentPage < 12) {
        const next = Math.min(currentPage + 2, 12);
        triggerFlip('forward', next);
      }
    } else {
      if (currentPage < totalPages) {
        triggerFlip('forward', currentPage + 1);
      }
    }
  };

  const goToPrev = () => {
    if (isDesktop) {
      if (currentPage === 12) {
        triggerFlip('backward', 10);
      } else if (currentPage > 2) {
        triggerFlip('backward', currentPage - 2);
      } else if (currentPage === 2 || currentPage === 3) {
        triggerFlip('backward', 1);
      }
    } else {
      if (currentPage > 1) {
        triggerFlip('backward', currentPage - 1);
      }
    }
  };

  const jumpToPage = (pageNum: number) => {
    if (pageNum === currentPage) return;
    const direction = pageNum > currentPage ? 'forward' : 'backward';
    // If desktop and pageNum is odd and not 1, align to even start of spread
    const target = isDesktop && pageNum > 1 && pageNum < 12 && pageNum % 2 !== 0 ? pageNum - 1 : pageNum;
    triggerFlip(direction, target);
  };

  // Helper to get category for a given page number (pages 3..12)
  const getCategoryForPage = (page: number) => {
    return menuCategories.find((c) => c.pageNumber === page);
  };

  // Render individual dish item with spice and veg badges
  const renderDishItem = (item: MenuItem) => {
    const isVisible =
      vegFilter === 'all' ||
      (vegFilter === 'veg' && item.isVeg) ||
      (vegFilter === 'nonveg' && !item.isVeg);

    if (!isVisible) return null;

    return (
      <div
        key={item.id}
        className="group relative pb-3 border-b border-[#D6A54D]/15 last:border-b-0 hover:bg-[#F7F0E5]/50 transition-colors p-2 rounded-sm"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              {/* Veg / Non-Veg Indicator */}
              <span
                className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center border shrink-0 ${
                  item.isVeg
                    ? 'border-emerald-700 bg-emerald-50 text-emerald-700'
                    : 'border-red-700 bg-red-50 text-red-700'
                }`}
                title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-emerald-700' : 'bg-red-700'}`} />
              </span>

              {/* English Dish Name */}
              <h4 className="font-serif text-sm sm:text-base font-bold text-[#201C19] group-hover:text-[#A7472A] transition-colors leading-tight">
                {item.name}
              </h4>

              {/* Popular Star */}
              {item.popular && (
                <span className="text-[10px] font-semibold text-[#A7472A] bg-[#A7472A]/10 px-1.5 py-0.5 rounded-xs tracking-wider uppercase">
                  Signature
                </span>
              )}
            </div>

            {/* Devanagari Marathi Name */}
            <p className="text-xs font-serif text-[#A7472A] font-medium tracking-wide mt-0.5">
              {item.marathiName}
            </p>

            {/* Description */}
            <p className="text-xs text-[#35251F]/80 leading-relaxed font-light mt-1">
              {item.description}
            </p>

            {/* Dietary Tags */}
            {item.dietary && item.dietary.length > 0 && (
              <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                {item.dietary.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] uppercase tracking-wider text-[#35251F]/60 bg-[#D6A54D]/10 px-1.5 py-0.5 rounded-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Pricing & Spice */}
          <div className="text-right shrink-0 flex flex-col items-end">
            <span className="text-xs sm:text-[13px] font-semibold text-[#201C19] font-mono tracking-tight">
              {item.demoPrice}
            </span>
            <div className="flex items-center gap-0.5 mt-1" title={`Spice: ${item.spiceLevel}`}>
              {Array.from({
                length:
                  item.spiceLevel === 'fiery'
                    ? 3
                    : item.spiceLevel === 'spicy'
                    ? 2
                    : 1,
              }).map((_, i) => (
                <Flame key={i} className="w-3 h-3 text-[#A7472A] fill-[#A7472A]" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render a single menu page content based on pageNumber (1..12)
  const renderPage = (pageNum: number, side: 'left' | 'right' | 'single') => {
    // ----------------------------------------------------
    // PAGE 1: FRONT COVER
    // ----------------------------------------------------
    if (pageNum === 1) {
      return (
        <div className="relative w-full h-full min-h-[580px] sm:min-h-[640px] bg-gradient-to-br from-[#201C19] via-[#2D231E] to-[#181513] text-[#F7F0E5] p-6 sm:p-10 flex flex-col justify-between rounded-sm border-2 border-[#D6A54D]/40 shadow-2xl overflow-hidden select-none">
          {/* Subtle gold foil border pattern */}
          <div className="absolute inset-2 sm:inset-3 border border-[#D6A54D]/30 pointer-events-none rounded-xs" />
          <div className="absolute inset-3 sm:inset-4 border border-[#D6A54D]/15 pointer-events-none rounded-xs" />

          {/* Corner gold ornaments */}
          <div className="absolute top-4 left-4 text-[#D6A54D]/60 text-xs">❖</div>
          <div className="absolute top-4 right-4 text-[#D6A54D]/60 text-xs">❖</div>
          <div className="absolute bottom-4 left-4 text-[#D6A54D]/60 text-xs">❖</div>
          <div className="absolute bottom-4 right-4 text-[#D6A54D]/60 text-xs">❖</div>

          {/* Top Crest */}
          <div className="text-center pt-6">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#D6A54D]">
              Royal Maharashtrian Hospitality
            </span>
            <div className="w-12 h-px bg-[#D6A54D]/50 mx-auto mt-2" />
          </div>

          {/* Center Brand Lockup */}
          <div className="text-center my-auto py-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-full border-2 border-[#D6A54D] flex items-center justify-center bg-[#201C19]/80 shadow-inner">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D6A54D] tracking-widest">
                ग
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-[0.15em] text-[#F7F0E5] uppercase mb-2">
              GAONKARI
            </h1>
            <p className="font-serif text-base sm:text-lg text-[#D6A54D] italic tracking-wide mb-4">
              गावकरी रेस्टॉरंट, नागपूर
            </p>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#35251F]/90 border border-[#D6A54D]/30 text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[#F7F0E5]/90">
              The Royal Saoji &amp; Maharashtrian Dining Experience
            </div>
          </div>

          {/* Bottom Cover Footer */}
          <div className="text-center pb-4 text-xs text-[#F7F0E5]/70 space-y-2">
            <p className="tracking-widest uppercase text-[10px] text-[#D6A54D]">
              Nagpur, Maharashtra · Estd. Saoji Heritage
            </p>
            <p className="text-[11px] text-[#F7F0E5]/50">
              Interactive Flipbook Menu · Edition 2026
            </p>
            <div className="pt-2">
              <button
                onClick={goToNext}
                className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-wider uppercase text-[#201C19] bg-[#D6A54D] hover:bg-[#e2b765] rounded-sm transition-all shadow-md cursor-pointer"
              >
                <span>Open Menu</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      );
    }

    // ----------------------------------------------------
    // PAGE 2: TABLE OF CONTENTS & GASTRONOMY NOTE
    // ----------------------------------------------------
    if (pageNum === 2) {
      return (
        <div className="relative w-full h-full min-h-[580px] sm:min-h-[640px] bg-[#FAF5EE] text-[#201C19] p-6 sm:p-8 flex flex-col justify-between rounded-sm border border-[#D6A54D]/30 shadow-inner overflow-y-auto">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#D6A54D]/30">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A7472A] font-bold block">
                  Table of Contents · अनुक्रमणिका
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#201C19]">
                  Royal Dining Chapters
                </h3>
              </div>
              <span className="text-xs font-serif text-[#D6A54D] font-bold">Pg. 02</span>
            </div>

            {/* Philosophy snippet */}
            <div className="my-3 p-3 rounded-xs bg-[#F0E6D6]/70 border-l-2 border-[#D6A54D] text-xs text-[#35251F]/80 leading-relaxed font-light">
              <span className="font-semibold text-[#201C19]">Gaonkari Heritage:</span> Every recipe in this royal book pays homage to the weaving community of Nagpur and the agricultural heartlands of Maharashtra.
            </div>

            {/* Interactive Chapters List */}
            <div className="space-y-1.5 mt-3">
              {menuCategories.map((cat, idx) => (
                <button
                  key={cat.id}
                  onClick={() => jumpToPage(cat.pageNumber)}
                  className="w-full text-left flex items-center justify-between py-1.5 px-2 rounded-xs hover:bg-[#F0E6D6] transition-colors group cursor-pointer"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-mono font-semibold text-[#A7472A]">
                      {(idx + 1).toString().padStart(2, '0')}.
                    </span>
                    <div>
                      <span className="text-xs font-serif font-bold text-[#201C19] group-hover:text-[#A7472A] transition-colors">
                        {cat.title}
                      </span>
                      <span className="text-[11px] text-[#A7472A]/80 font-serif italic ml-2 hidden sm:inline">
                        {cat.marathiTitle}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[11px] font-mono font-semibold text-[#D6A54D] group-hover:text-[#201C19]">
                      Pg. {cat.pageNumber.toString().padStart(2, '0')}
                    </span>
                    <ChevronRight className="w-3 h-3 text-[#A7472A]/50 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-3 border-t border-[#D6A54D]/20 text-[10px] text-[#35251F]/60 flex items-center justify-between">
            <span>Tap any chapter to flip directly</span>
            <span className="font-serif italic text-[#A7472A]">गावकरी पाककृती संग्रह</span>
          </div>
        </div>
      );
    }

    // ----------------------------------------------------
    // PAGES 3 to 11: MENU CATEGORIES
    // ----------------------------------------------------
    const cat = getCategoryForPage(pageNum);

    if (cat && pageNum < 12) {
      return (
        <div className="relative w-full h-full min-h-[580px] sm:min-h-[640px] bg-[#FAF5EE] text-[#201C19] p-5 sm:p-8 flex flex-col justify-between rounded-sm border border-[#D6A54D]/30 shadow-inner overflow-y-auto">
          <div>
            {/* Page Header */}
            <div className="flex items-start justify-between pb-3 border-b-2 border-[#D6A54D]/30 mb-3">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A7472A] font-bold block">
                  {cat.subtitle}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#201C19] leading-tight">
                  {cat.title}
                </h3>
                <span className="text-xs font-serif text-[#A7472A] font-medium block">
                  {cat.marathiTitle}
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-[#D6A54D] bg-[#201C19] text-white px-2 py-0.5 rounded-xs">
                Pg. {pageNum.toString().padStart(2, '0')}
              </span>
            </div>

            {/* Optional Category Visual Spotlight Banner */}
            {cat.image && (
              <div className="mb-4 relative rounded-xs overflow-hidden h-28 sm:h-32 border border-[#D6A54D]/30 shadow-sm">
                <SafeImage
                  src={cat.image}
                  alt={cat.imageAlt || cat.title}
                  fallbackText={cat.title}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201C19]/80 via-transparent to-transparent flex items-end p-2.5">
                  <p className="text-[11px] text-[#F7F0E5] font-light italic">
                    {cat.description}
                  </p>
                </div>
              </div>
            )}

            {/* Dish Items List */}
            <div className="space-y-2">
              {cat.items.map((item) => renderDishItem(item))}
            </div>
          </div>

          {/* Page Footer with Demo Disclaimer */}
          <div className="pt-3 border-t border-[#D6A54D]/20 flex items-center justify-between text-[10px] text-[#35251F]/70">
            <span className="italic">*Prices shown are demo estimates for presentation.</span>
            <span className="font-serif text-[#A7472A] font-semibold">Gaonkari Nagpur</span>
          </div>
        </div>
      );
    }

    // ----------------------------------------------------
    // PAGE 12: DESSERTS & BACK COVER
    // ----------------------------------------------------
    if (pageNum === 12) {
      const dessertCat = getCategoryForPage(12);
      return (
        <div className="relative w-full h-full min-h-[580px] sm:min-h-[640px] bg-gradient-to-br from-[#201C19] via-[#2A1F1A] to-[#181513] text-[#F7F0E5] p-5 sm:p-8 flex flex-col justify-between rounded-sm border-2 border-[#D6A54D]/40 shadow-2xl overflow-y-auto">
          {/* Ornaments */}
          <div className="absolute inset-2 border border-[#D6A54D]/25 pointer-events-none rounded-xs" />

          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#D6A54D]/30 mb-3">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D6A54D] font-bold block">
                  Sweet Confections &amp; Digestives
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F7F0E5]">
                  गोडधोड मिष्टान्न आणि पान
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-[#D6A54D]">Pg. 12</span>
            </div>

            {/* Dessert Image */}
            <div className="mb-4 relative rounded-xs overflow-hidden h-28 sm:h-32 border border-[#D6A54D]/30">
              <SafeImage
                src={puranPoliImg}
                alt="Royal Puran Poli and Shrikhand"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201C19]/80 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-[11px] text-[#F7F0E5] italic">
                  Pure Sajuk Toop Puran Poli &amp; Kesar Shrikhand
                </span>
              </div>
            </div>

            {/* Dessert Items with Dark Theme Styling */}
            <div className="space-y-2">
              {dessertCat?.items.map((item) => (
                <div
                  key={item.id}
                  className="pb-2 border-b border-[#35251F] last:border-b-0 flex items-start justify-between gap-2"
                >
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                      <h4 className="font-serif text-sm font-bold text-[#F7F0E5]">
                        {item.name}
                      </h4>
                    </div>
                    <p className="text-xs font-serif text-[#D6A54D] italic mt-0.5">
                      {item.marathiName}
                    </p>
                    <p className="text-[11px] text-[#F7F0E5]/70 leading-relaxed font-light mt-0.5">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#D6A54D] shrink-0">
                    {item.demoPrice}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Royal Seal & Thank You */}
          <div className="pt-4 border-t border-[#D6A54D]/30 text-center">
            <div className="inline-flex items-center gap-2 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#D6A54D]" />
              <span className="text-xs font-serif italic text-[#D6A54D]">
                &ldquo;अतिथी देवो भवः — आपले समाधान हेच आमचे कर्तव्य&rdquo;
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#D6A54D]" />
            </div>
            <p className="text-[10px] text-[#F7F0E5]/60">
              Gaonkari Restaurant · Nagpur, Maharashtra · Thank you for dining with royalty.
            </p>
            <div className="mt-3">
              <button
                onClick={() => jumpToPage(1)}
                className="text-[11px] uppercase tracking-wider text-[#D6A54D] hover:underline cursor-pointer"
              >
                ↩ Back to Cover
              </button>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  // Calculate current spread pages for desktop double view
  const leftPage = currentPage === 1 ? 1 : currentPage % 2 === 0 ? currentPage : currentPage - 1;
  const rightPage = leftPage === 1 ? null : leftPage + 1 <= totalPages ? leftPage + 1 : null;

  return (
    <div
      className={`relative w-full ${
        isFullscreen
          ? 'fixed inset-0 z-50 bg-[#14110F]/98 backdrop-blur-xl p-4 sm:p-8 flex flex-col justify-between overflow-y-auto'
          : 'my-8 sm:my-12'
      }`}
    >
      {/* Top Toolbar: Category Selector, Dietary Filters, Mute Toggle, Fullscreen */}
      <div className="max-w-6xl mx-auto w-full mb-4 sm:mb-6 flex flex-wrap items-center justify-between gap-3 bg-[#26201B] border border-[#D6A54D]/25 p-3 rounded-sm shadow-lg text-xs">
        {/* Category Jump Selector */}
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#D6A54D] shrink-0" />
          <span className="font-semibold text-[#F7F0E5] tracking-wide hidden sm:inline">
            Jump to Section:
          </span>
          <select
            value={currentPage}
            onChange={(e) => jumpToPage(Number(e.target.value))}
            className="bg-[#201C19] text-[#F7F0E5] border border-[#D6A54D]/30 rounded-xs px-2.5 py-1 text-xs focus:outline-none focus:border-[#D6A54D] cursor-pointer"
          >
            <option value={1}>Page 1: Front Cover</option>
            <option value={2}>Page 2: Table of Contents</option>
            {menuCategories.map((c) => (
              <option key={c.id} value={c.pageNumber}>
                Page {c.pageNumber}: {c.title}
              </option>
            ))}
          </select>
        </div>

        {/* Dietary Filter Buttons */}
        <div className="flex items-center gap-1 bg-[#201C19] p-1 rounded-xs border border-[#35251F]">
          <button
            onClick={() => setVegFilter('all')}
            className={`px-2.5 py-0.5 rounded-xs font-medium transition-colors cursor-pointer ${
              vegFilter === 'all'
                ? 'bg-[#D6A54D] text-[#201C19] font-bold'
                : 'text-[#F7F0E5]/70 hover:text-[#F7F0E5]'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setVegFilter('veg')}
            className={`px-2 py-0.5 rounded-xs font-medium flex items-center gap-1 transition-colors cursor-pointer ${
              vegFilter === 'veg'
                ? 'bg-emerald-700 text-white font-bold'
                : 'text-emerald-400 hover:text-emerald-300'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Veg</span>
          </button>
          <button
            onClick={() => setVegFilter('nonveg')}
            className={`px-2 py-0.5 rounded-xs font-medium flex items-center gap-1 transition-colors cursor-pointer ${
              vegFilter === 'nonveg'
                ? 'bg-red-700 text-white font-bold'
                : 'text-red-400 hover:text-red-300'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <span>Non-Veg</span>
          </button>
        </div>

        {/* Audio Mute & Fullscreen Controls */}
        <div className="flex items-center gap-2">
          {/* Mute Sound Button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`p-1.5 rounded-xs border transition-colors flex items-center gap-1 cursor-pointer ${
              isMuted
                ? 'bg-[#35251F] text-[#F7F0E5]/50 border-transparent'
                : 'bg-[#D6A54D]/15 text-[#D6A54D] border-[#D6A54D]/30 hover:bg-[#D6A54D]/25'
            }`}
            title={isMuted ? 'Turn Sound On' : 'Mute Page Turn Sound'}
            aria-label={isMuted ? 'Turn Sound On' : 'Mute Page Turn Sound'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            <span className="hidden sm:inline text-[11px]">
              {isMuted ? 'Muted' : 'Sound On'}
            </span>
          </button>

          {/* Fullscreen Expand Button */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 rounded-xs bg-[#201C19] border border-[#35251F] hover:border-[#D6A54D]/40 text-[#F7F0E5] transition-colors cursor-pointer"
            title={isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Close button if provided */}
          {onClose && (
            <button
              onClick={onClose}
              className="px-2.5 py-1 rounded-xs bg-[#A7472A] hover:bg-[#A7472A]/80 text-white text-xs font-semibold cursor-pointer"
            >
              Close
            </button>
          )}
        </div>
      </div>

      {/* Main Flipbook Book Container */}
      <div className="max-w-6xl mx-auto w-full relative">
        {/* Navigation Arrow Left */}
        <button
          onClick={goToPrev}
          disabled={currentPage <= 1 || isFlipping}
          aria-label="Previous Page"
          className={`absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#201C19] border border-[#D6A54D]/40 text-[#D6A54D] hover:bg-[#D6A54D] hover:text-[#201C19] flex items-center justify-center shadow-xl transition-all duration-200 cursor-pointer ${
            currentPage <= 1 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Navigation Arrow Right */}
        <button
          onClick={goToNext}
          disabled={currentPage >= totalPages || isFlipping}
          aria-label="Next Page"
          className={`absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#201C19] border border-[#D6A54D]/40 text-[#D6A54D] hover:bg-[#D6A54D] hover:text-[#201C19] flex items-center justify-center shadow-xl transition-all duration-200 cursor-pointer ${
            currentPage >= totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Book Viewport with 3D Perspective */}
        <div
          className={`relative w-full rounded-sm shadow-2xl transition-transform duration-300 ${
            isFlipping
              ? flipDirection === 'forward'
                ? 'scale-[0.985] brightness-95'
                : 'scale-[0.985] brightness-95'
              : 'scale-100'
          }`}
          style={{ perspective: '1600px' }}
        >
          {isDesktop ? (
            /* DESKTOP DOUBLE-PAGE SPREAD */
            currentPage === 1 ? (
              /* Front Cover: Single Centered Spread */
              <div className="max-w-xl mx-auto transition-all duration-300">
                {renderPage(1, 'single')}
              </div>
            ) : currentPage === 12 ? (
              /* Back Cover: Single Centered Spread */
              <div className="max-w-xl mx-auto transition-all duration-300">
                {renderPage(12, 'single')}
              </div>
            ) : (
              /* Double Page Spread: Left & Right with Spine */
              <div className="grid grid-cols-2 gap-0 relative bg-[#1B1715] rounded-sm p-1.5 border-4 border-[#35251F] shadow-2xl">
                {/* Center Book Spine Line / Shadow */}
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-4 z-10 pointer-events-none bg-gradient-to-r from-black/40 via-black/10 to-black/40 shadow-inner" />

                {/* Left Page */}
                <div className="pr-1 transition-all duration-300">
                  {renderPage(leftPage, 'left')}
                </div>

                {/* Right Page */}
                <div className="pl-1 transition-all duration-300">
                  {rightPage ? renderPage(rightPage, 'right') : null}
                </div>
              </div>
            )
          ) : (
            /* MOBILE SINGLE PAGE */
            <div className="w-full max-w-lg mx-auto">
              {renderPage(currentPage, 'single')}
            </div>
          )}
        </div>

        {/* Bottom Pagination & Progress Scrubber */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F7F0E5]/70">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[#D6A54D]">
              {isDesktop && currentPage > 1 && currentPage < 12
                ? `Pages ${leftPage} – ${rightPage} of ${totalPages}`
                : `Page ${currentPage} of ${totalPages}`}
            </span>
            <span>·</span>
            <span className="text-[#F7F0E5]/60 text-[11px]">
              Use arrow keys or click buttons to flip
            </span>
          </div>

          {/* Quick Page Pip Bullets */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            {Array.from({ length: totalPages }).map((_, i) => {
              const pNum = i + 1;
              const isActive =
                isDesktop && currentPage > 1 && currentPage < 12
                  ? pNum === leftPage || pNum === rightPage
                  : pNum === currentPage;
              return (
                <button
                  key={pNum}
                  onClick={() => jumpToPage(pNum)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    isActive
                      ? 'w-6 bg-[#D6A54D] rounded-full'
                      : 'bg-[#35251F] hover:bg-[#D6A54D]/50'
                  }`}
                  title={`Go to Page ${pNum}`}
                  aria-label={`Go to Page ${pNum}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
