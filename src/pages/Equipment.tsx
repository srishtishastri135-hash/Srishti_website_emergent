import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Breadcrumb from '../components/Breadcrumb';
import WaveformSeparator from '../components/WaveformSeparator';
import ScrollReveal from '../components/ScrollReveal';
import { equipment } from '../data/mock';

export default function Equipment() {
  return (
    <div className="min-h-screen bg-[#0e1320]">
      <Header currentPage="studiogear" />

      <main id="main-content" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Studio & Gear' }]} />

          <ScrollReveal>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4 text-[#e8f0f8]">
              Studio & Gear
            </h1>
            <p className="text-lg text-[#a8bcd4] mb-12 max-w-3xl">
              Professional gear across studio recording, field capture, and live production workflows.
            </p>
          </ScrollReveal>

          <section className="mb-16">
            <ScrollReveal>
              <h2 className="font-serif text-3xl font-bold gradient-text mb-6">
                {equipment.microphones.title}
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {equipment.microphones.categories.map((category, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card hover={false} tilt3d={false}>
                    <h3 className="text-lg font-bold text-[#8FB3F5] mb-4">{category.name}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="text-[#8FB3F5] mt-1">•</span>
                          <span className="text-[#a8bcd4]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </section>

          <WaveformSeparator />

          <section className="mb-16">
            <ScrollReveal>
              <h2 className="font-serif text-3xl font-bold gradient-text mb-6">
                {equipment.interfaces.title}
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {equipment.interfaces.categories.map((category, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card hover={false} tilt3d={false}>
                    <h3 className="text-lg font-bold text-[#8FB3F5] mb-4">{category.name}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="text-[#8FB3F5] mt-1">•</span>
                          <span className="text-[#a8bcd4]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </section>

          <WaveformSeparator />

          <section className="mb-16">
            <ScrollReveal>
              <h2 className="font-serif text-3xl font-bold gradient-text mb-6">
                {equipment.software.title}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card hover={false} tilt3d={false}>
                <div className="flex flex-wrap gap-3">
                  {equipment.software.items.map((item, index) => (
                    <Badge key={index}>{item}</Badge>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          </section>

          <WaveformSeparator />

          <section>
            <ScrollReveal>
              <h2 className="font-serif text-3xl font-bold mb-6 gradient-text">
                {equipment.workflow.title}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="bg-gradient-to-br from-[#6B8DD6]/15 via-[#8FB3F5]/8 to-[#9BC8FF]/15 border border-[#8FB3F5]/30" tilt3d={false}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {equipment.workflow.badges.map((badge, index) => (
                    <Badge key={index} className="text-center py-2">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
