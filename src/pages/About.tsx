import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Breadcrumb from '../components/Breadcrumb';
import Accordion from '../components/Accordion';
import BohoSeparator from '../components/BohoSeparator';
import { aboutContent, knowledgeAreas, valueHighlights } from '../data/mock';

export default function About() {
  const renderBioWithBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-[#0e1320]">
      <Header currentPage="about" />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'About' }]} />

          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-2 text-[#e8f0f8]">
            About
          </h1>
          <div className="mb-8">
            <span className="text-[#8FB3F5] font-medium">CTO, Cymasonic Labs</span>
          </div>

          <section className="max-w-3xl mb-16">
            <h2 className="text-2xl font-bold text-[#e8f0f8] mb-4">Bio</h2>
            <div className="text-[#a8bcd4] leading-relaxed space-y-4">
              <p>{renderBioWithBold(aboutContent.bio)}</p>
            </div>
          </section>

          <section className="max-w-3xl mb-16">
            <h2 className="text-2xl font-bold text-[#e8f0f8] mb-4">Education</h2>
            <Card hover={false}>
              <h3 className="text-xl font-bold text-[#e8f0f8] mb-4">
                {aboutContent.education.institution}
              </h3>
              <div className="space-y-4">
                {aboutContent.education.years.map((year, index) => (
                  <div key={index}>
                    <p className="font-semibold text-[#8FB3F5] mb-2">{year.period}</p>
                    <p className="text-[#a8bcd4] leading-relaxed">
                      {renderBioWithBold(year.achievement)}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          <BohoSeparator />

          <section className="mb-16">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center gradient-text">
              Core Practice
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {valueHighlights.map((highlight) => (
                <a key={highlight.id} href="/work#selected" className="group">
                  <Card badge={highlight.category}>
                    <h3 className="text-xl font-bold text-[#e8f0f8] mb-3 group-hover:text-[#8FB3F5] transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-[#a8bcd4] text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </Card>
                </a>
              ))}
            </div>
          </section>

          <BohoSeparator />

          <section>
            <h2 className="font-serif text-3xl font-bold mb-8 gradient-text">
              Technical Knowledge
            </h2>
            <Accordion items={knowledgeAreas} />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
