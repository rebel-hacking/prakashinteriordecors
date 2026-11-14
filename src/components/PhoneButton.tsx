import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface PhoneButtonProps {
  variant?: 'outline' | 'solid' | 'text';
  className?: string;
  label?: string;
  showNumber?: boolean;
}

export const PhoneButton: React.FC<PhoneButtonProps> = ({
  variant = 'outline',
  className = '',
  label = 'Call Now',
  showNumber = true
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  
  let variantStyles = "";
  if (variant === 'outline') {
    variantStyles = "border border-navy/20 hover:border-navy text-navy hover:bg-navy/5 px-5 py-3 text-sm tracking-wide";
  } else if (variant === 'solid') {
    variantStyles = "bg-navy hover:bg-navy-dark text-ivory px-5 py-3 text-sm tracking-wide";
  } else {
    variantStyles = "text-navy hover:text-mutedBlue underline-offset-4 hover:underline text-sm";
  }

  return (
    <a
      href={`tel:${BUSINESS_INFO.phone.tel}`}
      className={`${baseStyles} ${variantStyles} ${className}`}
      aria-label={`Call Prakash Interior Decors at ${BUSINESS_INFO.phone.display}`}
    >
      <Phone className="w-4 h-4 mr-2 text-mutedBlue shrink-0" aria-hidden="true" />
      <span>{showNumber ? `${label}: ${BUSINESS_INFO.phone.display}` : label}</span>
    </a>
  );
};

