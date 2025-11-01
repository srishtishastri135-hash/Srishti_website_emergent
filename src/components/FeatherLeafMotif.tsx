interface FeatherLeafMotifProps {
  type?: 'feather' | 'leaf';
  position?: 'left' | 'right';
  className?: string;
}

export default function FeatherLeafMotif({ type = 'feather', position = 'left', className = '' }: FeatherLeafMotifProps) {
  const positionClass = position === 'left' ? 'mr-4' : 'ml-4';
  const rotationClass = position === 'left' ? 'rotate-[-15deg]' : 'rotate-[15deg]';

  if (type === 'leaf') {
    return (
      <svg
        className={`w-8 h-8 opacity-40 ${positionClass} ${rotationClass} ${className}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C12 2 7 4 7 12C7 16 9 20 12 22C15 20 17 16 17 12C17 4 12 2 12 2Z"
          stroke="url(#leafGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="url(#leafFill)"
          opacity="0.3"
        />
        <path
          d="M12 2C12 2 7 6 12 12"
          stroke="url(#leafGradient)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="leafGradient" x1="7" y1="2" x2="17" y2="22">
            <stop offset="0%" stopColor="#A7C4B5" />
            <stop offset="100%" stopColor="#8FB3F5" />
          </linearGradient>
          <linearGradient id="leafFill" x1="7" y1="2" x2="17" y2="22">
            <stop offset="0%" stopColor="#A7C4B5" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8FB3F5" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      className={`w-8 h-8 opacity-40 ${positionClass} ${rotationClass} ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C12 2 8 4 6 8C4 12 3 18 4 22C5 22 8 20 10 16C11 14 12 10 12 2Z"
        stroke="url(#featherGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="url(#featherFill)"
        opacity="0.4"
      />
      <path d="M12 2L10 8" stroke="url(#featherGradient)" strokeWidth="0.8" />
      <path d="M12 5L9 10" stroke="url(#featherGradient)" strokeWidth="0.8" />
      <path d="M12 8L8 13" stroke="url(#featherGradient)" strokeWidth="0.8" />
      <path d="M11 11L7 16" stroke="url(#featherGradient)" strokeWidth="0.8" />
      <defs>
        <linearGradient id="featherGradient" x1="3" y1="2" x2="12" y2="22">
          <stop offset="0%" stopColor="#9BC8FF" />
          <stop offset="50%" stopColor="#8FB3F5" />
          <stop offset="100%" stopColor="#6B8DD6" />
        </linearGradient>
        <linearGradient id="featherFill" x1="3" y1="2" x2="12" y2="22">
          <stop offset="0%" stopColor="#9BC8FF" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#6B8DD6" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
}