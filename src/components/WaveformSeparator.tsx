import { useEffect, useRef } from 'react';

export default function WaveformSeparator() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    
    const waves = svgRef.current.querySelectorAll('.wave-path');
    waves.forEach((wave, index) => {
      (wave as SVGPathElement).style.animationDelay = `${index * 0.3}s`;
    });
  }, []);

  return (
    <div className="flex items-center justify-center my-16 overflow-hidden">
      <svg
        ref={svgRef}
        className="w-full max-w-2xl h-16"
        viewBox="0 0 800 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="wave-path"
          d="M0,30 Q100,10 200,30 T400,30 T600,30 T800,30"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          className="wave-path"
          d="M0,30 Q100,20 200,30 T400,30 T600,30 T800,30"
          stroke="url(#gradient2)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          className="wave-path"
          d="M0,30 Q100,40 200,30 T400,30 T600,30 T800,30"
          stroke="url(#gradient3)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          opacity="0.4"
        />
        
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="800" y2="0">
            <stop offset="0%" stopColor="#6B8DD6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8FB3F5" stopOpacity="1" />
            <stop offset="100%" stopColor="#9BC8FF" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0" y1="0" x2="800" y2="0">
            <stop offset="0%" stopColor="#9BC8FF" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#6B8DD6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8FB3F5" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0" y1="0" x2="800" y2="0">
            <stop offset="0%" stopColor="#8FB3F5" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#9BC8FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6B8DD6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
