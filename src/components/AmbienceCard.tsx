import { MapPin, Radio } from 'lucide-react';
import AudioPlayer from './AudioPlayer';
import Card from './Card';

interface AmbienceCardProps {
  title: string;
  description: string;
  location: string;
  recordingType: string;
  duration?: number;
  audioUrl: string;
}

export default function AmbienceCard({
  title,
  description,
  location,
  recordingType,
  duration,
  audioUrl,
}: AmbienceCardProps) {
  return (
    <Card>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold text-[#e8f0f8] mb-2">{title}</h3>
          <p className="text-sm text-[#a8bcd4] mb-3 line-clamp-2">{description}</p>

          <div className="flex flex-wrap gap-3 text-xs mb-4">
            <div className="flex items-center gap-1.5 text-[#8FB3F5]">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#8FB3F5]">
              <Radio className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{recordingType}</span>
            </div>
          </div>
        </div>

        <AudioPlayer audioUrl={audioUrl} title={title} duration={duration} />
      </div>
    </Card>
  );
}
