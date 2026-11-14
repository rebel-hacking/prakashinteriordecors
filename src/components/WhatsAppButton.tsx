import React from 'react';
import { MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '../data/business';

interface WhatsAppButtonProps {
  message?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'champagne' | 'compact';
  label?: string;
  className?: string;
  showIcon?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  variant = 'primary',
  label = 'Discuss on WhatsApp',
  className = '',
  showIcon = true
}) => {
  const link = getWhatsAppLink(message);

  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  
  let variantStyles = "";
  switch (variant) {
    case 'primary':
      variantStyles = "bg-navy hover:bg-navy-dark text-ivory px-6 py-3.5 text-sm uppercase tracking-wider shadow-sm hover:shadow-md active:scale-[0.99]";
      break;
    case 'secondary':
      variantStyles = "bg-mutedBlue hover:bg-mutedBlue-dark text-ivory px-5 py-3 text-sm tracking-wide";
      break;
    case 'champagne':
      variantStyles = "bg-champagne hover:bg-champagne-dark text-navy-dark px-6 py-3.5 text-sm font-semibold tracking-wider shadow-sm";
      break;
    case 'outline':
      variantStyles = "border border-navy/30 hover:border-navy text-navy hover:bg-navy/5 px-5 py-3 text-sm tracking-wide";
      break;
    case 'compact':
      variantStyles = "bg-navy hover:bg-navy-dark text-ivory px-3.5 py-2 text-xs uppercase tracking-wider";
      break;
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles} ${className}`}
      aria-label={`${label} via WhatsApp at +91 95913 44715`}
    >
      {showIcon && (
        <MessageSquare className="w-4 h-4 mr-2 text-champagne shrink-0" aria-hidden="true" />
      )}
      <span>{label}</span>
    </a>
  );
};

