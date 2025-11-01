export default function Dreamcatcher({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`w-32 h-32 opacity-20 ${className}`}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer ring */}
      <circle
        cx="100"
        cy="100"
        r="60"
        stroke="url(#dreamcatcherGradient)"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Audio cable web pattern */}
      <path
        d="M 100 40 L 100 160"
        stroke="url(#cableGradient)"
        strokeWidth="1"
        strokeDasharray="2,3"
      />
      <path
        d="M 40 100 L 160 100"
        stroke="url(#cableGradient)"
        strokeWidth="1"
        strokeDasharray="2,3"
      />
      
      {/* Diagonal cables */}
      <path
        d="M 58 58 L 142 142"
        stroke="url(#cableGradient)"
        strokeWidth="1"
        strokeDasharray="2,3"
      />
      <path
        d="M 142 58 L 58 142"
        stroke="url(#cableGradient)"
        strokeWidth="1"
        strokeDasharray="2,3"
      />
      
      {/* Inner web circles */}
      <circle
        cx="100"
        cy="100"
        r="40"
        stroke="url(#cableGradient)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.6"
      />
      <circle
        cx="100"
        cy="100"
        r="20"
        stroke="url(#cableGradient)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.4"
      />
      
      {/* Center connector (like XLR) */}
      <circle
        cx="100"
        cy="100"
        r="8"
        fill="url(#centerGradient)"
      />
      <circle
        cx="97"
        cy="97"
        r="2"
        fill="#8FB3F5"
      />
      <circle
        cx="103"
        cy="97"
        r="2"
        fill="#8FB3F5"
      />
      <circle
        cx="100"
        cy="103"
        r="2"
        fill="#8FB3F5"
      />
      
      {/* Hanging feathers (audio jacks) */}
      <g opacity="0.7">
        <path
          d="M 85 160 L 85 180"
          stroke="url(#featherStroke)"
          strokeWidth="1.5"
        />
        <circle cx="85" cy="185" r="3" fill="url(#featherStroke)" />
        <path d="M 82 185 L 88 185" stroke="#6B8DD6" strokeWidth="1" />
      </g>
      
      <g opacity="0.7">
        <path
          d="M 100 160 L 100 185"
          stroke="url(#featherStroke)"
          strokeWidth="1.5"
        />
        <circle cx="100" cy="190" r="3" fill="url(#featherStroke)" />
        <path d="M 97 190 L 103 190" stroke="#6B8DD6" strokeWidth="1" />
      </g>
      
      <g opacity="0.7">
        <path
          d="M 115 160 L 115 180"
          stroke="url(#featherStroke)"
          strokeWidth="1.5"
        />
        <circle cx="115" cy="185" r="3" fill="url(#featherStroke)" />
        <path d="M 112 185 L 118 185" stroke="#6B8DD6" strokeWidth="1" />
      </g>
      
      <defs>
        <linearGradient id="dreamcatcherGradient" x1="40" y1="40" x2="160" y2="160">
          <stop offset="0%" stopColor="#6B8DD6" />
          <stop offset="50%" stopColor="#8FB3F5" />
          <stop offset="100%" stopColor="#9BC8FF" />
        </linearGradient>
        <linearGradient id="cableGradient" x1="40" y1="40" x2="160" y2="160">
          <stop offset="0%" stopColor="#8FB3F5" />
          <stop offset="100%" stopColor="#9BC8FF" />
        </linearGradient>
        <linearGradient id="centerGradient" x1="92" y1="92" x2="108" y2="108">
          <stop offset="0%" stopColor="#6B8DD6" />
          <stop offset="100%" stopColor="#8FB3F5" />
        </linearGradient>
        <linearGradient id="featherStroke" x1="80" y1="160" x2="120" y2="190">
          <stop offset="0%" stopColor="#8FB3F5" />
          <stop offset="100%" stopColor="#6B8DD6" />
        </linearGradient>
      </defs>
    </svg>
  );
}