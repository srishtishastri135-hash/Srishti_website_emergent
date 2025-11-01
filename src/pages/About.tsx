import { GraduationCap, Music, Radio, Cog, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Breadcrumb from '../components/Breadcrumb';
import Accordion from '../components/Accordion';
import WaveformSeparator from '../components/WaveformSeparator';
import ScrollReveal from '../components/ScrollReveal';
import { aboutContent, knowledgeAreas, valueHighlights } from '../data/mock';

export default function About() {
  // Break bio into sections for better visual presentation
  const bioSections = [
    {
      icon: <Music className="w-6 h-6" />,
      title: "Musical Foundation",
      content: "Trained in Carnatic music and formally educated at The Music School Bangalore, cultivating a refined ear that informs both technical work and creative decisions."
    },
    {
      icon: <Radio className="w-6 h-6" />,
      title: "Diverse Experience",
      content: "From sync sound and podcast engineering to live recording—spanning dialogue clean-up for comedy, Foley capture for film, and pre-mixing for worship performances."
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Technical Expertise",
      content: "Explores signal-flow optimization, restoration chains, networked audio routing, and innovative audio technology workflows."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Leadership & Innovation",
      content: "As Dante Certified Sound Engineer and CTO of Cymasonic Labs, leads R&D initiatives in audio technology and develops cutting-edge production workflows."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0e1320]">
      <Header currentPage="about" />

      <main id="main-content" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'About' }]} />

          <ScrollReveal>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-2 text-[#e8f0f8]">
              About
            </h1>
            <div className="mb-12">
              <span className="text-[#8FB3F5] font-medium text-lg">CTO, Cymasonic Labs</span>
            </div>
          </ScrollReveal>

          {/* Bio Section - Visual Card Grid */}
          <section className="mb-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-center gradient-text mb-4">Professional Journey</h2>
              <p className="text-center text-[#a8bcd4] mb-8 max-w-2xl mx-auto">
                Audio professional bridging music production, post-production, and research-driven development
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {bioSections.map((section, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B8DD6] to-[#8FB3F5] flex items-center justify-center text-[#0e1320]">
                        {section.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#e8f0f8] mb-2">
                          {section.title}
                        </h3>
                        <p className="text-[#a8bcd4] leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={400}>
              <Card className="bg-gradient-to-br from-[#6B8DD6]/15 via-[#8FB3F5]/8 to-[#9BC8FF]/15 border border-[#8FB3F5]/30">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8FB3F5] to-[#9BC8FF] flex items-center justify-center text-[#0e1320] pulse-glow">
                      <Music className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#e8f0f8] mb-2">
                      Commitment to Excellence
                    </h3>
                    <p className="text-[#a8bcd4] leading-relaxed">
                      Delivering polished, professional results across diverse audio formats and projects—from music production and film sound to live recording and technical R&D.
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </section>

          <WaveformSeparator />

          {/* Education Section - Timeline Style */}
          <section className="mb-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-center gradient-text mb-8">Education</h2>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto">
              <ScrollReveal>
                <Card className="relative overflow-hidden">
                  {/* Timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6B8DD6] via-[#8FB3F5] to-[#9BC8FF]"></div>
                  
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#6B8DD6] to-[#8FB3F5] flex items-center justify-center text-[#0e1320] relative z-10">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#e8f0f8] mb-2">
                        {aboutContent.education.institution}
                      </h3>
                    </div>
                  </div>

                  <div className="ml-16 space-y-6">
                    {aboutContent.education.years.map((year, index) => (
                      <div key={index} className="relative">
                        {/* Timeline dot */}
                        <div className="absolute -left-[4.5rem] top-2 w-3 h-3 rounded-full bg-[#8FB3F5] border-4 border-[#0e1320]"></div>
                        
                        <div className="glass-card p-4 rounded-xl">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge>{year.period}</Badge>
                          </div>
                          <p className="text-[#a8bcd4] leading-relaxed">
                            {year.achievement.split('**').map((part, i) => 
                              i % 2 === 1 ? <strong key={i} className="text-[#8FB3F5]">{part}</strong> : part
                            )}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </section>

          <WaveformSeparator />

          {/* Core Practice */}
          <section className="mb-16">
            <ScrollReveal>
              <h2 className="font-serif text-3xl font-bold mb-8 text-center gradient-text">
                Core Practice
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {valueHighlights.map((highlight, index) => (
                <ScrollReveal key={highlight.id} delay={index * 100}>
                  <a href="/work#selected" className="group">
                    <Card badge={highlight.category}>
                      <h3 className="text-xl font-bold text-[#e8f0f8] mb-3 group-hover:text-[#8FB3F5] transition-colors">
                        {highlight.title}
                      </h3>
                      <p className="text-[#a8bcd4] text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </Card>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </section>

          <WaveformSeparator />

          {/* Technical Knowledge */}
          <section>
            <ScrollReveal>
              <h2 className="font-serif text-3xl font-bold mb-8 gradient-text">
                Technical Knowledge
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <Accordion items={knowledgeAreas} />
            </ScrollReveal>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
