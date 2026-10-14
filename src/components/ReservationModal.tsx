import React, { useState } from 'react';
import {
  X,
  Calendar,
  Clock,
  Users,
  MapPin,
  MessageSquare,
  Printer,
  CheckCircle2,
  Phone,
  AlertCircle,
  Share2,
  Sparkles,
} from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const restaurantPhone = '7620400833';
  const whatsappNumber = '917620400833';

  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [mealPeriod, setMealPeriod] = useState<'lunch' | 'dinner'>('dinner');
  const [timeSlot, setTimeSlot] = useState('8:00 PM');
  const [guestCount, setGuestCount] = useState('4');
  const [seatingPreference, setSeatingPreference] = useState('Traditional Dining Hall');
  const [occasion, setOccasion] = useState('Casual Dining');
  const [specialRequests, setSpecialRequests] = useState('');

  // Submission & Summary State
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string; date?: string }>({});

  if (!isOpen) return null;

  const lunchSlots = ['12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM'];
  const dinnerSlots = [
    '7:00 PM',
    '7:30 PM',
    '8:00 PM',
    '8:30 PM',
    '9:00 PM',
    '9:30 PM',
    '10:00 PM',
    '10:30 PM',
  ];

  const validateForm = () => {
    const newErrors: { name?: string; phone?: string; date?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Please provide your full name';
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!date) {
      newErrors.date = 'Please select a dining date';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Generate readable booking reference
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const ref = `GAON-${randomSuffix}`;
    setReferenceId(ref);
    setIsSubmitted(true);
  };

  const formatWhatsAppMessage = () => {
    const lines = [
      `*NAMASKAR GAONKARI RESTAURANT*`,
      `I would like to request a table reservation:`,
      ``,
      `• *Ref No:* ${referenceId}`,
      `• *Name:* ${name}`,
      `• *Mobile:* ${phone}`,
      `• *Date:* ${date}`,
      `• *Time:* ${timeSlot} (${mealPeriod.toUpperCase()})`,
      `• *Guests:* ${guestCount} Person(s)`,
      `• *Seating:* ${seatingPreference}`,
      `• *Occasion:* ${occasion}`,
      specialRequests ? `• *Special Notes:* ${specialRequests}` : '',
      ``,
      `Kindly confirm table availability. Thank you!`,
    ].filter(Boolean);

    return encodeURIComponent(lines.join('\n'));
  };

  const handleWhatsAppSend = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${formatWhatsAppMessage()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setSpecialRequests('');
    setErrors({});
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-[#1E1916] text-[#F7F0E5] border border-[#D6A54D]/35 rounded-sm shadow-2xl overflow-hidden my-auto"
        id="printable-reservation-slip"
      >
        {/* Top Gold Foil Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#A7472A] via-[#D6A54D] to-[#A7472A]" />

        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#35251F] flex items-center justify-between bg-[#191513]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#D6A54D] font-bold">
                गावकरी रेस्टॉरंट · नागपूर
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6A54D]" />
            </div>
            <h3 id="reservation-title" className="font-serif text-xl sm:text-2xl font-bold text-[#F7F0E5]">
              {isSubmitted ? 'Reservation Request Summary' : 'Reserve Your Dining Table'}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close reservation modal"
            className="p-1.5 rounded-sm text-[#F7F0E5]/70 hover:text-white hover:bg-[#35251F] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 max-h-[78vh] overflow-y-auto">
          {!isSubmitted ? (
            /* Reservation Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Notice Banner */}
              <div className="p-3.5 rounded-sm bg-[#26201B] border border-[#D6A54D]/25 flex items-start gap-2.5 text-xs text-[#F7F0E5]/80">
                <AlertCircle className="w-4 h-4 text-[#D6A54D] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-[#D6A54D]">Instant WhatsApp Workflow:</strong> Submit your request to generate a reservation slip and dispatch directly to Gaonkari restaurant management on <span className="font-mono text-white font-semibold">+91 {restaurantPhone}</span> for instant confirmation.
                </p>
              </div>

              {/* Guest Details: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="res-name" className="block text-xs font-medium uppercase tracking-wider text-[#D6A54D] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="res-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full bg-[#14110F] border border-[#35251F] focus:border-[#D6A54D] rounded-sm px-3.5 py-2.5 text-sm text-[#F7F0E5] focus:outline-none transition-colors"
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="res-phone" className="block text-xs font-medium uppercase tracking-wider text-[#D6A54D] mb-1.5">
                    WhatsApp / Mobile Number *
                  </label>
                  <input
                    id="res-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="10-digit mobile number"
                    className="w-full bg-[#14110F] border border-[#35251F] focus:border-[#D6A54D] rounded-sm px-3.5 py-2.5 text-sm text-[#F7F0E5] focus:outline-none transition-colors"
                  />
                  {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Date & Meal Period */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="res-date" className="block text-xs font-medium uppercase tracking-wider text-[#D6A54D] mb-1.5">
                    Dining Date *
                  </label>
                  <div className="relative">
                    <input
                      id="res-date"
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                        if (errors.date) setErrors({ ...errors, date: undefined });
                      }}
                      className="w-full bg-[#14110F] border border-[#35251F] focus:border-[#D6A54D] rounded-sm px-3.5 py-2.5 text-sm text-[#F7F0E5] focus:outline-none transition-colors"
                    />
                    <Calendar className="w-4 h-4 text-[#D6A54D] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Lunch / Dinner Selector */}
                <div>
                  <span className="block text-xs font-medium uppercase tracking-wider text-[#D6A54D] mb-1.5">
                    Service Time *
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setMealPeriod('lunch');
                        setTimeSlot(lunchSlots[0]);
                      }}
                      className={`py-2 px-3 text-xs font-semibold rounded-sm border transition-all cursor-pointer ${
                        mealPeriod === 'lunch'
                          ? 'bg-[#D6A54D] text-[#1E1916] border-[#D6A54D]'
                          : 'bg-[#14110F] text-[#F7F0E5]/75 border-[#35251F] hover:border-[#D6A54D]/50'
                      }`}
                    >
                      Lunch Service
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setMealPeriod('dinner');
                        setTimeSlot(dinnerSlots[2]);
                      }}
                      className={`py-2 px-3 text-xs font-semibold rounded-sm border transition-all cursor-pointer ${
                        mealPeriod === 'dinner'
                          ? 'bg-[#D6A54D] text-[#1E1916] border-[#D6A54D]'
                          : 'bg-[#14110F] text-[#F7F0E5]/75 border-[#35251F] hover:border-[#D6A54D]/50'
                      }`}
                    >
                      Dinner Service
                    </button>
                  </div>
                </div>
              </div>

              {/* Time Slots Chips */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#D6A54D] mb-1.5">
                  Select Seating Time Slot: {timeSlot}
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {(mealPeriod === 'lunch' ? lunchSlots : dinnerSlots).map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`py-2 px-2 text-xs rounded-sm border font-mono transition-all cursor-pointer ${
                        timeSlot === slot
                          ? 'bg-[#A7472A] text-white border-[#D6A54D] font-bold shadow-md'
                          : 'bg-[#14110F] text-[#F7F0E5]/80 border-[#35251F] hover:border-[#D6A54D]/40'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guests Count & Seating Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="res-guests" className="block text-xs font-medium uppercase tracking-wider text-[#D6A54D] mb-1.5">
                    Number of Guests
                  </label>
                  <select
                    id="res-guests"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full bg-[#14110F] border border-[#35251F] focus:border-[#D6A54D] rounded-sm px-3.5 py-2.5 text-sm text-[#F7F0E5] focus:outline-none transition-colors cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest (Single)' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="res-seating" className="block text-xs font-medium uppercase tracking-wider text-[#D6A54D] mb-1.5">
                    Seating Preference
                  </label>
                  <select
                    id="res-seating"
                    value={seatingPreference}
                    onChange={(e) => setSeatingPreference(e.target.value)}
                    className="w-full bg-[#14110F] border border-[#35251F] focus:border-[#D6A54D] rounded-sm px-3.5 py-2.5 text-sm text-[#F7F0E5] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Traditional Dining Hall">Traditional Dining Hall (Family &amp; Main)</option>
                    <option value="AC Comfort Section">Indoor AC Section</option>
                    <option value="Celebration Long Table">Celebration / Party Long Table</option>
                  </select>
                </div>
              </div>

              {/* Occasion & Special Requests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="res-occasion" className="block text-xs font-medium uppercase tracking-wider text-[#D6A54D] mb-1.5">
                    Occasion (Optional)
                  </label>
                  <select
                    id="res-occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full bg-[#14110F] border border-[#35251F] focus:border-[#D6A54D] rounded-sm px-3.5 py-2.5 text-sm text-[#F7F0E5] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Casual Dining">Casual Dining</option>
                    <option value="Birthday Celebration">Birthday Celebration</option>
                    <option value="Family Anniversary">Anniversary</option>
                    <option value="Family Get-Together">Family Gathering</option>
                    <option value="Business Feast">Business Dining</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="res-notes" className="block text-xs font-medium uppercase tracking-wider text-[#D6A54D] mb-1.5">
                    Special Dietary / Baby Chair Notes
                  </label>
                  <input
                    id="res-notes"
                    type="text"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="e.g. Mild spice for kids, baby chair"
                    className="w-full bg-[#14110F] border border-[#35251F] focus:border-[#D6A54D] rounded-sm px-3.5 py-2.5 text-sm text-[#F7F0E5] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-sm bg-gradient-to-r from-[#D6A54D] via-[#e2b765] to-[#D6A54D] text-[#1E1916] font-bold text-sm tracking-wider uppercase shadow-xl hover:brightness-105 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#1E1916]" />
                  <span>Review &amp; Generate Booking Slip</span>
                </button>
              </div>
            </form>
          ) : (
            /* ================================================= */
            /* RESERVATION SUMMARY & DIRECT WHATSAPP CONFIRMATION */
            /* ================================================= */
            <div className="space-y-6">
              {/* Success Badge */}
              <div className="p-4 rounded-sm bg-emerald-950/40 border border-emerald-500/40 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Reservation Request Slip Prepared
                  </h4>
                  <p className="text-xs text-emerald-200/80 mt-1 leading-relaxed">
                    Reference ID: <strong className="font-mono text-white">{referenceId}</strong>. To finalize table allocation with restaurant staff, tap below to transmit this booking directly to WhatsApp.
                  </p>
                </div>
              </div>

              {/* Printable Voucher Card */}
              <div className="p-5 sm:p-6 bg-[#14110F] rounded-sm border border-[#D6A54D]/30 space-y-4 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-[#35251F]">
                  <div>
                    <h5 className="font-serif text-lg font-bold text-[#F7F0E5]">Gaonkari Restaurant</h5>
                    <p className="text-[11px] text-[#D6A54D] tracking-wider uppercase font-medium">
                      Nagpur, Maharashtra · The Royal Saoji Dining
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase text-[#F7F0E5]/50 block">Booking Slip Ref</span>
                    <span className="font-mono text-sm font-bold text-[#D6A54D]">{referenceId}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-[#F7F0E5]/50 uppercase tracking-wider text-[10px] block">Guest Name</span>
                    <span className="font-semibold text-white mt-0.5 block">{name}</span>
                  </div>

                  <div>
                    <span className="text-[#F7F0E5]/50 uppercase tracking-wider text-[10px] block">Contact Mobile</span>
                    <span className="font-semibold text-white mt-0.5 block font-mono">{phone}</span>
                  </div>

                  <div>
                    <span className="text-[#F7F0E5]/50 uppercase tracking-wider text-[10px] block">Party Size</span>
                    <span className="font-semibold text-white mt-0.5 block">{guestCount} Guests</span>
                  </div>

                  <div>
                    <span className="text-[#F7F0E5]/50 uppercase tracking-wider text-[10px] block">Dining Date</span>
                    <span className="font-semibold text-white mt-0.5 block">{date}</span>
                  </div>

                  <div>
                    <span className="text-[#F7F0E5]/50 uppercase tracking-wider text-[10px] block">Time Slot</span>
                    <span className="font-semibold text-[#D6A54D] mt-0.5 block font-mono">{timeSlot}</span>
                  </div>

                  <div>
                    <span className="text-[#F7F0E5]/50 uppercase tracking-wider text-[10px] block">Seating</span>
                    <span className="font-semibold text-white mt-0.5 block truncate">{seatingPreference}</span>
                  </div>
                </div>

                {specialRequests && (
                  <div className="pt-3 border-t border-[#35251F] text-xs">
                    <span className="text-[#F7F0E5]/50 uppercase tracking-wider text-[10px] block">Special Instructions</span>
                    <span className="text-[#F7F0E5]/80 mt-0.5 block italic">&ldquo;{specialRequests}&rdquo;</span>
                  </div>
                )}

                <div className="pt-3 border-t border-[#35251F] flex items-center justify-between text-[11px] text-[#F7F0E5]/60">
                  <span>Restaurant WhatsApp: +91 {restaurantPhone}</span>
                  <span>Order ready in ~15 mins</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {/* Primary WhatsApp Confirmation Button */}
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full py-3.5 px-6 rounded-sm bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:brightness-110 text-white font-bold text-sm tracking-wider uppercase shadow-xl flex items-center justify-center gap-2.5 transition-all cursor-pointer active:scale-98"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Confirm on WhatsApp (+91 {restaurantPhone})</span>
                </button>

                {/* Secondary Actions: Call & Print/PDF */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:+91${restaurantPhone}`}
                    className="py-2.5 px-4 rounded-sm bg-[#14110F] border border-[#35251F] hover:border-[#D6A54D] text-[#F7F0E5] text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D6A54D]" />
                    <span>Call Staff</span>
                  </a>

                  <button
                    onClick={handlePrint}
                    className="py-2.5 px-4 rounded-sm bg-[#14110F] border border-[#35251F] hover:border-[#D6A54D] text-[#F7F0E5] text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5 text-[#D6A54D]" />
                    <span>Print / Save Slip</span>
                  </button>
                </div>

                <div className="text-center pt-2">
                  <button
                    onClick={handleReset}
                    className="text-xs text-[#D6A54D] hover:underline cursor-pointer"
                  >
                    ← Edit or Make Another Request
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
