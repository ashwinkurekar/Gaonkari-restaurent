import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  BookOpen,
  Maximize2,
  Minimize2,
  Search,
  Sparkles,
} from 'lucide-react';
import { REAL_MENU_PDF_PAGES, MenuPdfPage, MenuSection } from '../data/realMenuPdfData.ts';
import { playPageTurnSound } from '../utils/audio.ts';
import { SafeImage } from './SafeImage.tsx';

// Image assets mapping for dish photos
import saojiChickenImg from '../assets/images/saoji_chicken_curry_1791979276649.jpg';
import saojiMuttonImg from '../assets/images/saoji_mutton_curry_1791979276472.jpg';
import varhadiChickenImg from '../assets/images/varhadi_chicken_curry_1791979324784.jpg';
import vegThaliImg from '../assets/images/maharashtrian_veg_thali_1791979277992.jpg';
import kothimbirVadiImg from '../assets/images/kothimbir_vadi_starter_1791980374014.jpg';
import puranPoliImg from '../assets/images/puran_poli_dessert_1791980374179.jpg';
import jeeraRiceImg from '../assets/images/jeera_rice_bowl_1791985938474.jpg';
import icedBeverageImg from '../assets/images/iced_cold_beverage_1791985938817.jpg';
import kadhaiPaneerImg from '../assets/images/paneer_tikka_kadhai_1791985941385.jpg';
import masalaPapadImg from '../assets/images/crispy_masala_papad_1791985942231.jpg';
import tandooriRotiImg from '../assets/images/tandoori_roti_stack_1791985942249.jpg';
import hakkaNoodlesImg from '../assets/images/hakka_noodles_bowl_1791986004687.jpg';
import manchowSoupImg from '../assets/images/hot_manchow_soup_1791986006048.jpg';

interface FlipbookMenuProps {
  initialPage?: number;
  onClose?: () => void;
  isStandalone?: boolean;
}

export const FlipbookMenu: React.FC<FlipbookMenuProps> = ({
  initialPage = 1,
  onClose,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<'forward' | 'backward'>('forward');
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const totalPages = 12;

  // Responsive layout tracking
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keyboard navigation
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
    }, 240);
  };

  const goToNext = () => {
    if (isDesktop) {
      if (currentPage < totalPages) {
        const next = currentPage % 2 === 1 ? currentPage + 2 : currentPage + 1;
        triggerFlip('forward', Math.min(next, totalPages));
      }
    } else {
      if (currentPage < totalPages) {
        triggerFlip('forward', currentPage + 1);
      }
    }
  };

  const goToPrev = () => {
    if (isDesktop) {
      if (currentPage > 1) {
        const prev = currentPage % 2 === 1 ? currentPage - 2 : currentPage - 1;
        triggerFlip('backward', Math.max(prev, 1));
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
    const target = isDesktop && pageNum % 2 === 0 ? pageNum - 1 : pageNum;
    triggerFlip(direction, target);
  };

  // Helper to get image asset by imageType
  const getDishImage = (imageType: string) => {
    switch (imageType) {
      case 'mutton-curry':
        return saojiMuttonImg;
      case 'chilly-chicken':
      case 'chicken-starter':
      case 'tandoori-chicken':
        return saojiChickenImg;
      case 'biryani':
      case 'chicken-rice':
        return varhadiChickenImg;
      case 'paneer-tikka':
      case 'paneer-tawa':
      case 'kadhai-paneer':
      case 'chilly-paneer':
        return kothimbirVadiImg;
      case 'vanga-masala':
      case 'pithla-zunka':
      case 'shev-bhaji':
      case 'veg-curry':
      case 'dal-tadka':
        return vegThaliImg;
      case 'roti-stack':
      case 'masala-papad':
        return puranPoliImg;
      default:
        return saojiChickenImg;
    }
  };

  // Render a specific section inside a PDF page
  const renderSection = (section: MenuSection) => {
    return (
      <div key={section.badge} className="mb-4 last:mb-0">
        {/* Grey Pill Badge Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-b from-[#E6E6E6] via-[#D0D0D0] to-[#B8B8B8] text-[#111111] font-bold text-xs sm:text-sm tracking-wide shadow-sm border border-white/40">
            {section.badge}
          </div>

          {/* Multi-column header labels if present */}
          {section.columns && (
            <div className="flex items-center gap-3 sm:gap-5 pr-1 font-semibold text-[11px] sm:text-xs text-[#E6E6E6] tracking-wider">
              {section.columns.map((col) => (
                <span key={col} className="w-12 text-right">
                  {col}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Menu Items Table */}
        <div className="space-y-1">
          {section.items.map((item, idx) => {
            const matchesSearch =
              !searchQuery ||
              item.name.toLowerCase().includes(searchQuery.toLowerCase());

            return (
              <div
                key={idx}
                className={`flex items-baseline justify-between text-xs sm:text-[13px] py-0.5 leading-tight transition-colors ${
                  matchesSearch ? 'opacity-100' : 'opacity-30'
                } hover:bg-white/5 rounded-xs px-1`}
              >
                {/* Item Name */}
                <span className="text-white font-medium pr-2 truncate max-w-[65%]">
                  {item.name}
                </span>

                {/* Price columns */}
                {item.platePrice || item.halfPrice || item.fullPrice ? (
                  <div className="flex items-center gap-3 sm:gap-5 font-semibold text-white shrink-0 font-mono text-[11px] sm:text-xs">
                    <span className="w-12 text-right">{item.platePrice || '—'}</span>
                    <span className="w-12 text-right">{item.halfPrice || '—'}</span>
                    <span className="w-12 text-right">{item.fullPrice || '—'}</span>
                  </div>
                ) : item.volume ? (
                  <div className="flex items-center gap-4 font-semibold text-white shrink-0 font-mono text-xs">
                    <span className="text-[#C0C0C0] text-[11px]">{item.volume}</span>
                    <span className="w-12 text-right">{item.price}</span>
                  </div>
                ) : (
                  <span className="font-semibold text-white shrink-0 font-mono">
                    {item.price}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Render a full original PDF Menu Page
  const renderPdfPage = (pageData: MenuPdfPage) => {
    return (
      <div className="relative w-full h-full min-h-[620px] sm:min-h-[720px] bg-[#0A0A0A] text-white p-4 sm:p-6 flex flex-col justify-between border-2 border-[#262626] rounded-xs shadow-2xl overflow-hidden select-none">
        {/* Dark smoky subtle background vignette */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#0D0B0A] to-[#1F140E]/40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#A7472A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            {/* Header if present (Page 1 & Page 10) */}
            {pageData.hasHeaderLogo && (
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                {/* Authentic Gaonkari Circular Logo Lockup */}
                <div className="flex items-center gap-2">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-br from-[#8C3A27] via-[#5C2318] to-[#2E100A] border-2 border-[#D6A54D]/80 flex flex-col items-center justify-center shadow-lg p-0.5">
                    {/* Huts silhouette */}
                    <div className="w-6 h-2 flex justify-center gap-0.5 mb-0.5">
                      <div className="w-2.5 h-1.5 border-t-2 border-l border-r border-[#D6A54D]" />
                      <div className="w-2.5 h-1.5 border-t-2 border-l border-r border-[#D6A54D]" />
                    </div>
                    <span
                      style={{ fontFamily: '"Noto Serif Devanagari", serif' }}
                      className="text-[9px] sm:text-[10px] font-black text-white leading-none tracking-tight"
                    >
                      गावकरी
                    </span>
                    <span className="text-[6px] text-[#D6A54D] leading-none mt-0.5">
                      रेस्टॉरंट
                    </span>
                  </div>

                  <div>
                    <span
                      style={{ fontFamily: '"Noto Serif Devanagari", serif' }}
                      className="text-lg sm:text-xl font-bold tracking-tight text-white block leading-none"
                    >
                      गावकरी
                    </span>
                    <span className="text-[8px] uppercase tracking-widest text-[#D6A54D]">
                      रेस्टॉरंट
                    </span>
                  </div>
                </div>

                {/* Script "Menu Card" Title */}
                <div className="text-right flex items-center gap-3">
                  <span
                    style={{ fontFamily: '"Playfair Display", cursive, serif' }}
                    className="text-2xl sm:text-3xl font-normal italic text-white tracking-wide"
                  >
                    Menu Card
                  </span>

                  {/* Veg / Non-Veg Square Symbol */}
                  {pageData.vegSymbol && (
                    <div
                      className={`w-4 h-4 rounded-xs border-2 flex items-center justify-center p-0.5 ${
                        pageData.vegSymbol === 'veg'
                          ? 'border-emerald-500 bg-white'
                          : 'border-red-600 bg-white'
                      }`}
                      title={pageData.vegSymbol === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          pageData.vegSymbol === 'veg' ? 'bg-emerald-600' : 'bg-red-600'
                        }`}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Layout with Side Photographs */}
            <div className="grid grid-cols-12 gap-3 items-start">
              {/* Menu items column */}
              <div
                className={
                  pageData.photoSlots && pageData.photoSlots.length > 0
                    ? 'col-span-8 sm:col-span-8'
                    : 'col-span-12'
                }
              >
                {pageData.sections.map((sec) => renderSection(sec))}
              </div>

              {/* Photos Column matching original PDF placements */}
              {pageData.photoSlots && pageData.photoSlots.length > 0 && (
                <div className="col-span-4 sm:col-span-4 flex flex-col gap-3 pt-1">
                  {pageData.photoSlots.map((slot, pIdx) => (
                    <div
                      key={pIdx}
                      className="relative rounded-full overflow-hidden aspect-square border-2 border-white/20 shadow-xl bg-black"
                    >
                      <SafeImage
                        src={getDishImage(slot.imageType)}
                        alt={slot.alt}
                        containerClassName="w-full h-full"
                        className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/60 pointer-events-none" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Banner if present (Page 1 & Page 10) */}
          {pageData.hasBottomBanner && (
            <div className="mt-4 pt-2">
              <div className="w-full py-1.5 px-3 rounded-full bg-black/90 border border-white/40 text-center shadow-lg">
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-white">
                  Your Order will be ready in at Least 15 Minutes
                </span>
              </div>
            </div>
          )}

          {/* Page Number Indicator */}
          <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-[#A0A0A0]">
            <span>Gaonkari Restaurant · Nagpur</span>
            <span className="font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded-xs">
              Page {pageData.pageNumber}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Determine current spread for desktop
  const leftPageNum = currentPage % 2 === 1 ? currentPage : currentPage - 1;
  const rightPageNum = leftPageNum + 1 <= totalPages ? leftPageNum + 1 : null;

  const leftPageData = REAL_MENU_PDF_PAGES.find((p) => p.pageNumber === leftPageNum);
  const rightPageData = rightPageNum
    ? REAL_MENU_PDF_PAGES.find((p) => p.pageNumber === rightPageNum)
    : null;

  const singlePageData = REAL_MENU_PDF_PAGES.find((p) => p.pageNumber === currentPage);

  return (
    <div
      className={`relative w-full ${
        isFullscreen
          ? 'fixed inset-0 z-50 bg-black/95 backdrop-blur-xl p-3 sm:p-6 flex flex-col justify-between overflow-y-auto'
          : 'my-6 sm:my-10'
      }`}
    >
      {/* Top Toolbar: Quick Search, Jump Selector, Sound, Fullscreen */}
      <div className="max-w-6xl mx-auto w-full mb-4 flex flex-wrap items-center justify-between gap-3 bg-[#1C1816] border border-[#D6A54D]/30 p-2.5 sm:p-3 rounded-sm shadow-xl text-xs">
        {/* Page Jump Selector */}
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#D6A54D] shrink-0" />
          <span className="font-semibold text-white tracking-wide hidden sm:inline">
            Original Menu Page:
          </span>
          <select
            value={currentPage}
            onChange={(e) => jumpToPage(Number(e.target.value))}
            className="bg-[#0A0A0A] text-white border border-[#D6A54D]/40 rounded-xs px-2.5 py-1 text-xs focus:outline-none focus:border-[#D6A54D] cursor-pointer"
          >
            {REAL_MENU_PDF_PAGES.map((p) => (
              <option key={p.pageNumber} value={p.pageNumber}>
                Page {p.pageNumber}: {p.sections.map((s) => s.badge).join(' & ')}
              </option>
            ))}
          </select>
        </div>

        {/* Search Filter input */}
        <div className="relative flex-1 max-w-xs min-w-[150px]">
          <Search className="w-3.5 h-3.5 text-[#D6A54D] absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search dish name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0A0A0A] text-white text-xs pl-8 pr-3 py-1 rounded-xs border border-white/20 focus:border-[#D6A54D] focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-xs"
            >
              ×
            </button>
          )}
        </div>

        {/* Audio Mute & Fullscreen Controls */}
        <div className="flex items-center gap-2">
          {/* Mute Sound Button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`p-1.5 rounded-xs border transition-colors flex items-center gap-1 cursor-pointer ${
              isMuted
                ? 'bg-[#2A2420] text-white/50 border-transparent'
                : 'bg-[#D6A54D]/20 text-[#D6A54D] border-[#D6A54D]/40 hover:bg-[#D6A54D]/30'
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
            className="p-1.5 rounded-xs bg-[#0A0A0A] border border-white/20 hover:border-[#D6A54D] text-white transition-colors cursor-pointer"
            title={isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

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
          className={`absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1C1816] border border-[#D6A54D]/50 text-[#D6A54D] hover:bg-[#D6A54D] hover:text-[#201C19] flex items-center justify-center shadow-2xl transition-all duration-200 cursor-pointer ${
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
          className={`absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1C1816] border border-[#D6A54D]/50 text-[#D6A54D] hover:bg-[#D6A54D] hover:text-[#201C19] flex items-center justify-center shadow-2xl transition-all duration-200 cursor-pointer ${
            currentPage >= totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Book Viewport with 3D Perspective */}
        <div
          className={`relative w-full rounded-sm shadow-2xl transition-transform duration-300 ${
            isFlipping ? 'scale-[0.985] brightness-95' : 'scale-100'
          }`}
          style={{ perspective: '1600px' }}
        >
          {isDesktop ? (
            /* DESKTOP DOUBLE-PAGE SPREAD */
            <div className="grid grid-cols-2 gap-0 relative bg-[#14110F] rounded-sm p-1.5 border-4 border-[#2E241E] shadow-2xl">
              {/* Center Book Spine */}
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-4 z-10 pointer-events-none bg-gradient-to-r from-black/60 via-black/10 to-black/60 shadow-inner" />

              {/* Left Page */}
              <div className="pr-1 transition-all duration-300">
                {leftPageData && renderPdfPage(leftPageData)}
              </div>

              {/* Right Page */}
              <div className="pl-1 transition-all duration-300">
                {rightPageData && renderPdfPage(rightPageData)}
              </div>
            </div>
          ) : (
            /* MOBILE SINGLE PAGE */
            <div className="w-full max-w-lg mx-auto">
              {singlePageData && renderPdfPage(singlePageData)}
            </div>
          )}
        </div>

        {/* Bottom Pagination & Progress Scrubber */}
        <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#E6E6E6]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[#D6A54D]">
              {isDesktop && rightPageNum
                ? `Pages ${leftPageNum} – ${rightPageNum} of ${totalPages}`
                : `Page ${currentPage} of ${totalPages}`}
            </span>
            <span>·</span>
            <span className="text-white/60 text-[11px]">
              Original Menu Card (Nagpur) · Verified Official Prices
            </span>
          </div>

          {/* Quick Page Pip Bullets */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            {REAL_MENU_PDF_PAGES.map((p) => {
              const isActive =
                isDesktop && rightPageNum
                  ? p.pageNumber === leftPageNum || p.pageNumber === rightPageNum
                  : p.pageNumber === currentPage;
              return (
                <button
                  key={p.pageNumber}
                  onClick={() => jumpToPage(p.pageNumber)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    isActive
                      ? 'w-6 bg-[#D6A54D] rounded-full'
                      : 'bg-[#35251F] hover:bg-[#D6A54D]/60'
                  }`}
                  title={`Go to Page ${p.pageNumber}`}
                  aria-label={`Go to Page ${p.pageNumber}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
