interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'gradient';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-[#1f2738] text-[#8FB3F5] border border-[#8FB3F5]/30',
    gradient: 'bg-gradient-to-r from-[#6B8DD6] via-[#8FB3F5] to-[#9BC8FF] text-[#0e1320]',
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
