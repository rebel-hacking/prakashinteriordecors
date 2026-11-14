import React, { useState } from 'react';
import { MessageSquare, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/business';

interface ContactFormProps {
  preselectedService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ preselectedService = 'Bedroom Interiors' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preselectedService);
  const [locality, setLocality] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Client-side validations
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }

    const cleanPhone = phone.trim().replace(/[^0-9+]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setError('Please provide a valid 10-digit contact telephone number.');
      return;
    }

    // Construct structured WhatsApp message
    const lines = [
      `*New Interior Inquiry — Prakash Interior Decors*`,
      `• *Name:* ${name.trim()}`,
      `• *Phone:* ${cleanPhone}`,
      `• *Service Required:* ${service}`,
      locality.trim() ? `• *Location/Apartment:* ${locality.trim()}` : null,
      description.trim() ? `• *Requirements:* ${description.trim()}` : null,
      ``,
      `Hello, I would like to schedule a consultation regarding my residential interior requirements.`
    ].filter(Boolean);

    const fullMessage = lines.join('\n');
    const whatsappUrl = getWhatsAppLink(fullMessage);

    setIsSuccess(true);

    // Open WhatsApp in a new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-lg shadow-md border border-beigeGrey relative">
      <div className="mb-6">
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-mutedBlue block mb-1">
          WhatsApp Direct Inquiry
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-navy">
          Start Your Home Consultation
        </h3>
        <p className="text-xs sm:text-sm text-slateGrey mt-2 leading-relaxed">
          Fill in your home details below. On clicking submit, this will formulate your inquiry and open a direct WhatsApp conversation with our team at <strong className="text-navy">{BUSINESS_INFO.phone.display}</strong>.
        </p>
      </div>

      {error && (
        <div className="mb-6 p-3.5 bg-red-50 border border-red-200 rounded flex items-center gap-2.5 text-xs text-red-700">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
          <span>{error}</span>
        </div>
      )}

      {isSuccess && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded flex items-start gap-3 text-xs text-emerald-800">
          <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600 mt-0.5" />
          <div>
            <p className="font-semibold text-sm">Opening WhatsApp conversation...</p>
            <p className="mt-1 text-emerald-700">
              Your inquiry details have been composed. If WhatsApp did not launch automatically,{' '}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold hover:text-emerald-900"
              >
                click here to open manually
              </a>.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="client-name" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="client-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Ramesh Kumar"
            className="w-full px-4 py-3 bg-ivory/50 border border-beigeGrey rounded text-sm text-navy focus:bg-white focus:border-navy focus:outline-none transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="client-phone" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              id="client-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +91 98765 43210"
              className="w-full px-4 py-3 bg-ivory/50 border border-beigeGrey rounded text-sm text-navy focus:bg-white focus:border-navy focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="service-type" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5">
              Service Required
            </label>
            <select
              id="service-type"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-3 bg-ivory/50 border border-beigeGrey rounded text-sm text-navy focus:bg-white focus:border-navy focus:outline-none transition-colors"
            >
              <option value="Bedroom Interiors">Bedroom Interiors & Bedroom Design</option>
              <option value="Modular Kitchens">Modular Kitchen Design & Interiors</option>
              <option value="Customised Wardrobes">Customised & Designer Wardrobes</option>
              <option value="Complete Residential Furnishing">Complete Residential Furnishing</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="client-locality" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5">
            Apartment or Locality in Bengaluru (Optional)
          </label>
          <input
            id="client-locality"
            type="text"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
            placeholder="e.g. HRBR Layout, Kalyan Nagar, Hennur, Banaswadi"
            className="w-full px-4 py-3 bg-ivory/50 border border-beigeGrey rounded text-sm text-navy focus:bg-white focus:border-navy focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="client-description" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1.5">
            Brief Project Details or Dimensions (Optional)
          </label>
          <textarea
            id="client-description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Tell us about your room layout, desired wardrobe style, modular kitchen plan, or target move-in timeline..."
            className="w-full px-4 py-3 bg-ivory/50 border border-beigeGrey rounded text-sm text-navy focus:bg-white focus:border-navy focus:outline-none transition-colors"
          />
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2.5 bg-navy hover:bg-navy-dark text-ivory py-4 px-6 rounded font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.99]"
        >
          <MessageSquare className="w-4 h-4 text-champagne" />
          <span>Send Inquiry via WhatsApp</span>
          <ArrowRight className="w-4 h-4 text-champagne" />
        </button>

        <p className="text-[11px] text-slateGrey text-center leading-normal">
          🔒 No backend storage or data harvesting. Your inquiry is transmitted directly to Prakash Interior Decors on WhatsApp.
        </p>
      </form>
    </div>
  );
};

