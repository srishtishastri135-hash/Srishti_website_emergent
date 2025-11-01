import { MapPin, Mail, Phone, Linkedin, FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';
import Breadcrumb from '../components/Breadcrumb';
import ScrollReveal from '../components/ScrollReveal';
import AudioConsoleForm from '../components/AudioConsoleForm';
import { personalInfo } from '../data/mock';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);

    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#0e1320]">
      <Header currentPage="contact" />

      <main id="main-content" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Contact' }]} />

          <ScrollReveal>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4 text-[#e8f0f8]">
              Contact
            </h1>
            <p className="text-lg text-[#a8bcd4] mb-12 max-w-3xl">
              Available for audio engineering, post-production, and R&D projects. Reach out to discuss
              collaboration opportunities.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div>
                <Card hover={false} tilt3d={false} className="h-full">
                  <h2 className="text-2xl font-bold text-[#e8f0f8] mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#8FB3F5] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#e8f0f8] mb-1">Email</p>
                        <a
                          href={`mailto:${personalInfo.email}`}
                          className="text-[#a8bcd4] hover:text-[#8FB3F5] transition-colors focus-ring"
                        >
                          {personalInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#8FB3F5] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#e8f0f8] mb-1">Phone</p>
                        <a
                          href={`tel:${personalInfo.phone}`}
                          className="text-[#a8bcd4] hover:text-[#8FB3F5] transition-colors focus-ring"
                        >
                          {personalInfo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#8FB3F5] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#e8f0f8] mb-1">Location</p>
                        <p className="text-[#a8bcd4]">{personalInfo.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <Button href={`mailto:${personalInfo.email}`} variant="secondary" className="text-sm">
                      <Mail className="w-4 h-4" />
                      Email
                    </Button>
                    <Button href={`tel:${personalInfo.phone}`} variant="secondary" className="text-sm">
                      <Phone className="w-4 h-4" />
                      Call
                    </Button>
                    <Button href={personalInfo.linkedin} variant="secondary" className="text-sm">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Button>
                    <Button href={personalInfo.notion} variant="secondary" className="text-sm">
                      <FileText className="w-4 h-4" />
                      Notion
                    </Button>
                  </div>

                  <div className="glass-card rounded-lg p-4">
                    <p className="text-sm text-[#a8bcd4]">
                      Typically responds within 24-48 hours. Project briefs and collaboration inquiries welcome.
                    </p>
                  </div>
                </Card>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <Card hover={false} tilt3d={false} className="h-full">
                  <h2 className="text-2xl font-bold text-[#e8f0f8] mb-6">
                    Send a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#e8f0f8] mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#ffffff14] glass-card text-[#e8f0f8] focus:border-[#8FB3F5] focus:outline-none transition-colors focus-ring"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#e8f0f8] mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#ffffff14] glass-card text-[#e8f0f8] focus:border-[#8FB3F5] focus:outline-none transition-colors focus-ring"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#e8f0f8] mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-[#ffffff14] glass-card text-[#e8f0f8] focus:border-[#8FB3F5] focus:outline-none transition-colors resize-none focus-ring"
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <Send className="w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>

      {showToast && (
        <div className="fixed bottom-8 right-8 bg-gradient-to-r from-[#6B8DD6] via-[#8FB3F5] to-[#9BC8FF] text-[#0e1320] px-6 py-4 rounded-xl shadow-2xl animate-fade-in z-50">
          <p className="font-semibold">Opening your email client...</p>
        </div>
      )}

      <Footer />
    </div>
  );
}
