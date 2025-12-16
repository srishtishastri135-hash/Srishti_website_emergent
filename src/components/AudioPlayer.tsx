import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
  audioUrl: string;
  title: string;
  duration?: number;
  className?: string;
}

export default function AudioPlayer({ audioUrl, title, duration, className = '' }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          console.error('Failed to play audio');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const totalDuration = audioRef.current?.duration || duration || 0;
  const formatTime = (time: number) => {
    if (!isFinite(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`w-full ${className}`}>
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      <div className="glass-card rounded-lg p-4 space-y-4">
        <div className="flex items-center gap-3">
          <button
            onClick={handlePlayPause}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#6B8DD6] via-[#8FB3F5] to-[#9BC8FF] text-[#0e1320] flex items-center justify-center hover:shadow-lg hover:shadow-[#8FB3F5]/50 transition-all duration-200 focus-ring"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" fill="currentColor" aria-hidden="true" />
            ) : (
              <Play className="w-5 h-5 ml-0.5" fill="currentColor" aria-hidden="true" />
            )}
          </button>

          <div className="flex-grow">
            <h4 className="text-sm font-semibold text-[#e8f0f8] truncate">{title}</h4>
            <p className="text-xs text-[#8FB3F5]">
              {formatTime(currentTime)} / {formatTime(totalDuration)}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max={totalDuration || 0}
            value={currentTime}
            onChange={handleProgressChange}
            className="w-full h-1.5 bg-[#1f2738] rounded-lg appearance-none cursor-pointer accent-[#8FB3F5]"
            aria-label="Audio progress"
          />
        </div>

        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-[#8FB3F5]" aria-hidden="true" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="flex-grow h-1.5 bg-[#1f2738] rounded-lg appearance-none cursor-pointer accent-[#8FB3F5]"
            aria-label="Volume control"
          />
        </div>
      </div>
    </div>
  );
}
