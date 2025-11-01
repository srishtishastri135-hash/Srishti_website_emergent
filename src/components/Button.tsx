import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  icon?: boolean;
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  icon = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 focus-ring';

  const variants = {
    primary: 'bg-gradient-to-r from-[#6B8DD6] via-[#8FB3F5] to-[#9BC8FF] text-[#0e1320] shadow-lg neon-glow-button hover-lift',
    secondary: 'glass-card text-[#8FB3F5] hover:bg-[#1f2738] hover-lift',
    outline: 'border-2 border-[#8FB3F5]/50 text-[#8FB3F5] bg-transparent hover:bg-gradient-to-r hover:from-[#6B8DD6] hover:via-[#8FB3F5] hover:to-[#9BC8FF] hover:text-[#0e1320] hover:border-transparent neon-glow-button',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel');
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal && !href.startsWith('mailto') && !href.startsWith('tel') ? 'noopener noreferrer' : undefined}
      >
        {children}
        {icon && <ArrowRight className="w-4 h-4" />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}
