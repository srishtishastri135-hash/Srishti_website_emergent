import { ReactNode } from 'react';
import Badge from './Badge';

interface CardProps {
  children: ReactNode;
  badge?: string;
  className?: string;
  hover?: boolean;
  featured?: boolean;
}

export default function Card({ children, badge, className = '', hover = true, featured = false }: CardProps) {
  const hoverStyles = hover ? 'neon-glow-card' : '';
  const featuredStyles = featured ? 'ring-2 ring-[#8FB3F5] bg-[#8FB3F5]/10' : '';

  return (
    <div className={`glass-card rounded-2xl p-6 shadow-lg ${hoverStyles} ${featuredStyles} ${className}`}>
      {badge && (
        <div className="mb-4">
          <Badge>{badge}</Badge>
        </div>
      )}
      {children}
    </div>
  );
}
