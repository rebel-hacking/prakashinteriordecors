import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; path?: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs text-slateGrey">
      <ol className="flex items-center space-x-2">
        <li className="inline-flex items-center">
          <Link to="/" className="hover:text-navy inline-flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <ChevronRight className="w-3.5 h-3.5 text-beigeGrey shrink-0" />
            {item.path ? (
              <Link to={item.path} className="hover:text-navy transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-navy font-semibold" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

