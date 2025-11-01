import { MapPin, Mail, Phone, Linkedin, Instagram } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';
import WaveformSeparator from '../components/WaveformSeparator';
import AudioVisualizer from '../components/AudioVisualizer';
import ScrollReveal from '../components/ScrollReveal';
import Dreamcatcher from '../components/Dreamcatcher';
import FeatherLeafMotif from '../components/FeatherLeafMotif';
import SunMoonPhase from '../components/SunMoonPhase';
import { personalInfo, valueHighlights, selectedWorks } from '../data/mock';

export default function Home() {
  const featuredWorks = selectedWorks.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0e1320]">
      <Header currentPage="home" />

      <main id="main-content">
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
          {/* Beach image background with very dark overlay for maximum contrast */}
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
            {/* Very dark overlay - almost black for excellent text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/88 to-black/85"></div>
            {/* Additional dark layer with slight blue tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/70 via-[#0a0e18]/60 to-[#0e1320]/70"></div>
          </div>

          {/* Dreamcatcher decoration */}
          <div className="absolute top-24 right-8 hidden lg:block">
            <Dreamcatcher className="float" />
          </div>

          <div className="container mx-auto max-w-[800px] relative z-10 text-center">
            <ScrollReveal>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-[#e8f0f8]">
                {personalInfo.name}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-xl sm:text-2xl text-[#8FB3F5] mb-4 font-medium">
                Audio & Recording Engineer
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-base sm:text-lg text-[#e8f0f8] mb-4 leading-relaxed mx-auto">
                Research-driven audio development (R&D), end-to-end post workflows, and music/sound production for live and visual media.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="flex justify-center mb-6">
                <SunMoonPhase available={true} />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mb-8">
                <AudioVisualizer bars={30} className="mx-auto" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 text-sm text-[#e8f0f8]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8FB3F5]" aria-hidden="true" />
                  <span>{personalInfo.location}</span>
                </div>
                <span className="text-[#8FB3F5]" aria-hidden="true">•</span>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-[#8FB3F5] transition-colors focus-ring flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Email</span>
                </a>
                <span className="text-[#8FB3F5]" aria-hidden="true">•</span>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-[#8FB3F5] transition-colors focus-ring flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{personalInfo.phone}</span>
                </a>
                <span className="text-[#8FB3F5]" aria-hidden="true">•</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#8FB3F5] transition-colors focus-ring flex items-center gap-1.5"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-[#8FB3F5]" aria-hidden="true">•</span>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#8FB3F5] transition-colors focus-ring flex items-center gap-1.5"
                  aria-label="Instagram profile"
                >
                  <Instagram className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Instagram</span>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/work" icon>
                  View Selected Works
                </Button>
                <Button href="/contact" variant="outline">
                  Get in Touch
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <WaveformSeparator />

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="flex items-center justify-center mb-4">
                <FeatherLeafMotif type="feather" position="left" />
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center gradient-text">
                  Core Expertise
                </h2>
                <FeatherLeafMotif type="leaf" position="right" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-center text-[#a8bcd4] mb-12 max-w-2xl mx-auto">
                Comprehensive audio capabilities across research, production, and post-production workflows
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {valueHighlights.map((highlight, index) => (
                <ScrollReveal key={highlight.id} delay={index * 100}>
                  <Card badge={highlight.category} featured={highlight.featured}>
                    <h3 className="text-xl font-bold text-[#e8f0f8] mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-[#a8bcd4] leading-relaxed">
                      {highlight.description}
                    </p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <WaveformSeparator />

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#121826]">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-4 gradient-text">
                Selected Works
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-center text-[#a8bcd4] mb-12">
                Featured projects across production and post-production
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {featuredWorks.map((work, index) => (
                <ScrollReveal key={work.id} delay={index * 150}>
                  <Card badge={work.category}>
                    <h3 className="text-xl font-bold text-[#e8f0f8] mb-2">
                      {work.title}
                    </h3>
                    {work.subtitle && (
                      <p className="text-sm text-[#8FB3F5] font-medium mb-3">{work.subtitle}</p>
                    )}
                    <p className="text-[#a8bcd4] mb-4 text-sm">{work.role}</p>
                    <Button href={work.links[0].url} variant="secondary" className="text-sm">
                      View Project
                    </Button>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="text-center">
                <Button href="/work#selected" icon>
                  View Full Portfolio
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <WaveformSeparator />

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#6B8DD6]/10 via-[#8FB3F5]/5 to-[#9BC8FF]/10">
          <div className="container mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6 text-[#e8f0f8]">
                Let's Collaborate
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-[#a8bcd4] mb-8 max-w-2xl mx-auto">
                Available for audio engineering, post-production, and R&D projects. Professional workflows with
                structured handoffs.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href={`mailto:${personalInfo.email}`}>Email</Button>
                <Button href={personalInfo.linkedin} variant="outline">
                  LinkedIn
                </Button>
                <Button href="/contact" variant="secondary">
                  Contact Page
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
