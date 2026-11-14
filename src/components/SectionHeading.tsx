import React from 'react';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'asymmetric';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  description,
  align = 'left',
  theme = 'light',
  className = ''
}) => {
  const isDark = theme === 'dark';

  if (align === 'asymmetric') {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline mb-12 lg:mb-16 ${className}`}>
        <div className="lg:col-span-7">
          {tag && (
            <p className={`text-xs uppercase tracking-[0.2em] font-semibold mb-3 ${isDark ? 'text-champagne' : 'text-mutedBlue'}`}>
              {tag}
            </p>
          )}
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] ${isDark ? 'text-ivory' : 'text-navy'}`}>
            {title}
          </h2>
        </div>
        {description && (
          <div className="lg:col-span-5">
            <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-ivory/70' : 'text-slateGrey'}`}>
              {description}
            </p>
          </div>
        )}
      </div>
    );
  }

  const alignStyles = align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl';

  return (
    <div className={`mb-12 lg:mb-16 ${alignStyles} ${className}`}>
      {tag && (
        <p className={`text-xs uppercase tracking-[0.2em] font-semibold mb-3 ${isDark ? 'text-champagne' : 'text-mutedBlue'}`}>
          {tag}
        </p>
      )}
      <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] ${isDark ? 'text-ivory' : 'text-navy'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-sm sm:text-base leading-relaxed ${isDark ? 'text-ivory/70' : 'text-slateGrey'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

