import { Sun, Moon } from 'lucide-react';

interface SunMoonPhaseProps {
  available?: boolean;
  className?: string;
}

export default function SunMoonPhase({ available = true, className = '' }: SunMoonPhaseProps) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {available ? (
        <>
          <Sun className="w-5 h-5 text-[#8FB3F5] animate-pulse" aria-hidden="true" />
          <span className="text-sm text-[#8FB3F5] font-medium">Available for projects</span>
        </>
      ) : (
        <>
          <Moon className="w-5 h-5 text-[#a8bcd4]" aria-hidden="true" />
          <span className="text-sm text-[#a8bcd4] font-medium">Currently booked</span>
        </>
      )}
    </div>
  );
}