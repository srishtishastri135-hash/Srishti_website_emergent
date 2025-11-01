export default function AudioVisualizer({ bars = 40, className = '' }: { bars?: number; className?: string }) {
  return (
    <div className={`flex items-end justify-center gap-1 h-20 ${className}`}>
      {Array.from({ length: bars }).map((_, i) => {
        const delay = (i * 0.05).toFixed(2);
        const duration = (0.5 + Math.random() * 0.8).toFixed(2);
        const height = 20 + Math.random() * 60;
        
        return (
          <div
            key={i}
            className="audio-bar w-1 bg-gradient-to-t from-[#6B8DD6] via-[#8FB3F5] to-[#9BC8FF] rounded-full"
            style={{
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              height: `${height}%`,
            }}
          />
        );
      })}
    </div>
  );
}
