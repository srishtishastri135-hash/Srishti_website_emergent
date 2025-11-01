import { ReactNode, useRef, MouseEvent } from 'react';
import Badge from './Badge';

interface CardProps {
  children: ReactNode;
  badge?: string;
  className?: string;
  hover?: boolean;
  featured?: boolean;
  tilt3d?: boolean;
}

export default function Card({ children, badge, className = '', hover = true, featured = false, tilt3d = true }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const hoverStyles = hover ? 'neon-glow-card' : '';
  const featuredStyles = featured ? 'ring-2 ring-[#8FB3F5] bg-[#8FB3F5]/10' : '';
  const tiltStyles = tilt3d && hover ? 'card-3d' : '';

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!tilt3d || !hover || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (!tilt3d || !hover || !cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
  };

  return (
    <div
      ref={cardRef}
      className={`glass-card rounded-2xl p-6 shadow-lg ${hoverStyles} ${featuredStyles} ${tiltStyles} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {badge && (
        <div className="mb-4">
          <Badge>{badge}</Badge>
        </div>
      )}
      {children}
    </div>
  );
}
