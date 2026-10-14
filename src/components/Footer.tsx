import React from 'react';
import { MapPin, ArrowUp, Info } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative bg-[#181513] text-[#F7F0E5] border-t border-[#35251F] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#35251F]">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-serif text-3xl font-bold tracking-widest text-[#F7F0E5]">
                  GAONKARI
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6A54D]" />
              </div>
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#D6A54D] font-medium mb-5">
                The Royal Saoji &amp; Maharashtrian Dining Experience
              </p>
              <p className="text-sm text-[#F7F0E5]/70 max-w-sm leading-relaxed font-light mb-6">
                Preserving the culinary heritage of Vidarbha with fiery Saoji spices, traditional clay-pot gravies, and authentic Maharashtrian hospitality in Nagpur.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#F7F0E5]/80">
              <MapPin className="w-4 h-4 text-[#D6A54D] shrink-0" />
              <span>Nagpur, Maharashtra, India</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A54D] mb-5">
              Quick Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#F7F0E5]/75">
              <li>
                <button
                  onClick={() => scrollToSection('#hero')}
                  className="hover:text-[#D6A54D] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#story')}
                  className="hover:text-[#D6A54D] transition-colors cursor-pointer"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#dishes')}
                  className="hover:text-[#D6A54D] transition-colors cursor-pointer"
                >
                  Signature Dishes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#experience')}
                  className="hover:text-[#D6A54D] transition-colors cursor-pointer"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="hover:text-[#D6A54D] transition-colors cursor-pointer"
                >
                  Contact &amp; Location
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details & Phase 1 Notice */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A54D] mb-5">
              Guest Inquiries
            </h4>
            <div className="p-4 rounded-sm bg-[#201C19] border border-[#35251F] text-xs text-[#F7F0E5]/80 space-y-3">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-[#D6A54D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#F7F0E5] block">Phase 1 Website Demo</span>
                  <p className="text-[#F7F0E5]/70 mt-1 leading-relaxed">
                    Official restaurant phone, direct WhatsApp reservation channel, and social media handles will be configured upon Phase 2 rollout.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#35251F] text-[11px] text-[#F7F0E5]/60 font-mono">
                Location: Nagpur, Maharashtra, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F0E5]/60">
          <p>© 2026 Gaonkari Restaurant, Nagpur. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 hover:text-[#D6A54D] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
