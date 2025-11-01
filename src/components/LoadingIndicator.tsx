export default function LoadingIndicator() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0e1320]/80 backdrop-blur-sm" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-4">
        {/* Audio waveform loading animation */}
        <div className="flex items-center gap-1 h-12">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 bg-gradient-to-t from-[#6B8DD6] via-[#8FB3F5] to-[#9BC8FF] rounded-full loading-bar"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
        <p className="text-[#8FB3F5] text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}