import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Breadcrumb from '../components/Breadcrumb';
import WaveformSeparator from '../components/WaveformSeparator';
import ScrollReveal from '../components/ScrollReveal';

const newsItems = [
  {
    id: 1,
    title: 'New Audio R&D Projects at Cymasonic Labs',
    date: '2025-03-15',
    excerpt: 'Exploring edge computing applications for real-time audio processing and bioacoustics research.',
  },
  {
    id: 2,
    title: 'Completed RSL Level 5 Associate Degree',
    date: '2025-02-20',
    excerpt: 'Successfully completed advanced studies in film scoring, orchestration, and audio technology at The Music School Bangalore.',
  },
  {
    id: 3,
    title: 'Podcast Engineering: Daybreak Series',
    date: '2025-01-10',
    excerpt: 'Post-production work on The Ken podcast series featuring speech optimization and restoration workflows.',
  },
];

export default function News() {
  return (
    <div className="min-h-screen bg-[#0e1320]">
      <Header currentPage="news" />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'News' }]} />

          <ScrollReveal>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4 text-[#e8f0f8]">
              News & Updates
            </h1>
            <p className="text-lg text-[#a8bcd4] mb-12">
              Latest projects, achievements, and insights from audio engineering and research.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 100}>
                <Card hover={false} tilt3d={false}>
                  <div className="flex flex-col gap-3">
                    <time className="text-sm text-[#8FB3F5] font-medium">
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <h2 className="text-2xl font-bold text-[#e8f0f8]">{item.title}</h2>
                    <p className="text-[#a8bcd4] leading-relaxed">{item.excerpt}</p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
