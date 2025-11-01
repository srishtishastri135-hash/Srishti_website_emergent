import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';
import Breadcrumb from '../components/Breadcrumb';
import WaveformSeparator from '../components/WaveformSeparator';
import ScrollReveal from '../components/ScrollReveal';
import { selectedWorks, cymasonic } from '../data/mock';

export default function Work() {
  const [filter, setFilter] = useState<string>('all');

  const filteredWorks =
    filter === 'all'
      ? selectedWorks
      : selectedWorks.filter((work) => {
          const category = work.category.toLowerCase();
          if (filter === 'music-production') return category === 'production' && work.title.includes('Music');
          if (filter === 'podcast') return work.title.toLowerCase().includes('podcast');
          if (filter === 'film-short') return work.title.toLowerCase().includes('film') || work.title.toLowerCase().includes('short');
          if (filter === 'live') return work.title.toLowerCase().includes('live') || work.title.toLowerCase().includes('worship');
          return category === filter;
        });

  return (
    <div className="min-h-screen bg-[#0e1320]">
      <Header currentPage="work" />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Work' }]} />

          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4 text-[#e8f0f8]">
            Work
          </h1>
          <p className="text-lg text-[#a8bcd4] mb-12 max-w-3xl">
            Curated work across Production and Post-Production. Selected highlights below; full grid follows.
          </p>

          <section id="selected" className="scroll-mt-24">
            <h2 className="font-serif text-3xl font-bold mb-8 gradient-text">Selected Works</h2>

            <div className="space-y-8">
              {selectedWorks.map((work) => (
                <Card key={work.id} badge={work.category} className="border-l-4 border-[#8FB3F5]">
                  <h3 className="text-2xl font-bold text-[#e8f0f8] mb-2">
                    {work.title}
                  </h3>
                  {work.subtitle && (
                    <p className="text-sm text-[#8FB3F5] font-semibold mb-3">{work.subtitle}</p>
                  )}
                  <p className="text-[#a8bcd4] mb-6">{work.role}</p>

                  <div className="flex flex-wrap gap-3">
                    {work.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target={link.placeholder ? undefined : '_blank'}
                        rel={link.placeholder ? undefined : 'noopener noreferrer'}
                        className="inline-flex items-center gap-2 px-4 py-2 glass-card hover:bg-[#1f2738] text-[#8FB3F5] rounded-lg text-sm font-medium transition-all duration-200 focus-ring"
                      >
                        {link.label}
                        {!link.placeholder && <ExternalLink className="w-3.5 h-3.5" />}
                      </a>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <BohoSeparator />

          <section>
            <Card className="bg-gradient-to-br from-[#6B8DD6]/15 via-[#8FB3F5]/8 to-[#9BC8FF]/15 border border-[#8FB3F5]/30">
              <h3 className="text-2xl font-bold text-[#e8f0f8] mb-2">
                {cymasonic.title}
              </h3>
              <p className="text-sm text-[#8FB3F5] font-semibold mb-6">{cymasonic.company}</p>

              <ul className="space-y-2 mb-6">
                {cymasonic.services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#8FB3F5] mt-1">•</span>
                    <span className="text-[#a8bcd4]">{service}</span>
                  </li>
                ))}
              </ul>

              <Button href="/contact" variant="primary">
                Contact for Similar Work
              </Button>
            </Card>
          </section>

          <BohoSeparator />

          <section>
            <h2 className="font-serif text-3xl font-bold mb-8 gradient-text">Full Portfolio</h2>

            <div className="flex flex-wrap gap-3 mb-8">
              {['all', 'music-production', 'post-production', 'podcast', 'film-short', 'live'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-200 focus-ring ${
                    filter === f
                      ? 'bg-gradient-to-r from-[#6B8DD6] via-[#8FB3F5] to-[#9BC8FF] text-[#0e1320]'
                      : 'border-2 border-[#8FB3F5]/50 text-[#8FB3F5] hover:bg-[#1f2738]'
                  }`}
                >
                  {f === 'all' ? 'All' : f === 'music-production' ? 'Music Production' : f === 'film-short' ? 'Film/Short' : f.replace('-', ' ')}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorks.map((work) => (
                <Card key={work.id} badge={work.category}>
                  <h3 className="text-xl font-bold text-[#e8f0f8] mb-2">
                    {work.title}
                  </h3>
                  {work.subtitle && (
                    <p className="text-sm text-[#8FB3F5] font-medium mb-3">{work.subtitle}</p>
                  )}
                  <p className="text-sm text-[#a8bcd4] mb-4">{work.role}</p>
                  <Button href={work.links[0].url} variant="secondary" className="text-sm w-full">
                    View Project
                  </Button>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
