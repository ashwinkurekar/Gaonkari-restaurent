import React from 'react';
import { MapPin, ArrowUp, Phone, MessageSquare, Calendar } from 'lucide-react';

interface FooterProps {
  onOpenReservation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const restaurantPhone = '7620400833';
  const whatsappUrl = `https://wa.me/917620400833?text=${encodeURIComponent(
    'Namaskar Gaonkari Restaurant! I would like to inquire about dining and table availability.'
  )}`;

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
    <footer id="contact" className="relative bg-[#14110F] text-[#F7F0E5] border-t border-[#35251F] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#35251F]">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-serif text-3xl font-bold tracking-widest text-[#F7F0E5]">
                  GAONKARI
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6A54D]" />
              </div>
              <p
                style={{ fontFamily: '"Noto Serif Devanagari", serif' }}
                className="text-base text-[#D6A54D] font-bold mb-1"
              >
                गावकरी रेस्टॉरंट
              </p>
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#D6A54D]/90 font-medium mb-4">
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
                  House Specialties
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#menu-book')}
                  className="hover:text-[#D6A54D] transition-colors cursor-pointer"
                >
                  Menu Card Book
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#experience')}
                  className="hover:text-[#D6A54D] transition-colors cursor-pointer"
                >
                  The Experience
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details & Direct WhatsApp Reservations */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A54D] mb-5">
              Table Bookings &amp; Inquiries
            </h4>
            <div className="p-5 rounded-sm bg-[#1E1916] border border-[#D6A54D]/30 text-xs text-[#F7F0E5]/85 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-[#D6A54D] font-semibold">
                  Direct Line &amp; WhatsApp
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div className="space-y-2">
                <a
                  href={`tel:+91${restaurantPhone}`}
                  className="flex items-center gap-2.5 text-white hover:text-[#D6A54D] font-mono text-sm font-bold transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D6A54D]" />
                  <span>+91 {restaurantPhone}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 text-xs font-medium transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp: +91 {restaurantPhone}</span>
                </a>
              </div>

              {onOpenReservation && (
                <div className="pt-2 border-t border-[#35251F]">
                  <button
                    onClick={onOpenReservation}
                    className="w-full py-2.5 px-4 rounded-sm bg-gradient-to-r from-[#D6A54D] to-[#b88c3a] text-[#1E1916] font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-105 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Reserve a Table</span>
                  </button>
                </div>
              )}
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
