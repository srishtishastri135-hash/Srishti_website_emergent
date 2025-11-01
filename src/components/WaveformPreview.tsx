interface WaveformPreviewProps {
  bars?: number;
  className?: string;
}

export default function WaveformPreview({ bars = 50, className = '' }: WaveformPreviewProps) {
  return (
    <div className={`flex items-center justify-center gap-[2px] h-12 ${className}`} role="img" aria-label="Audio waveform visualization">
      {Array.from({ length: bars }).map((_, i) => {
        // Create a more realistic waveform pattern
        const position = i / bars;
        const height = 20 + Math.sin(position * Math.PI * 4) * 30 + Math.random() * 20;
        
        return (
          <div
            key={i}
            className="waveform-bar w-[2px] bg-gradient-to-t from-[#6B8DD6] via-[#8FB3F5] to-[#9BC8FF] rounded-full opacity-60"
            style={{
              height: `${height}%`,
              animationDelay: `${i * 0.02}s`,
            }}
          />
        );
      })}
    </div>
  );
}