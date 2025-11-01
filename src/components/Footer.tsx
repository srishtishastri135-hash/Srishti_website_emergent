import { personalInfo } from '../data/mock';
import { Mail, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0e18] border-t border-[#ffffff08]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-bold gradient-text mb-2">{personalInfo.name}</h3>
            <p className="text-sm text-[#a8bcd4]">Sound Engineer & Audio Professional</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-[#a8bcd4] hover:text-[#8FB3F5] transition-colors focus-ring"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a8bcd4] hover:text-[#8FB3F5] transition-colors focus-ring"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a8bcd4] hover:text-[#8FB3F5] transition-colors focus-ring"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a href="/" className="text-[#a8bcd4] hover:text-[#8FB3F5] transition-colors focus-ring">Home</a>
            <a href="/work" className="text-[#a8bcd4] hover:text-[#8FB3F5] transition-colors focus-ring">Works</a>
            <a href="/about" className="text-[#a8bcd4] hover:text-[#8FB3F5] transition-colors focus-ring">About</a>
            <a href="/equipment" className="text-[#a8bcd4] hover:text-[#8FB3F5] transition-colors focus-ring">Equipment</a>
            <a href="/contact" className="text-[#a8bcd4] hover:text-[#8FB3F5] transition-colors focus-ring">Contact</a>
          </nav>

          <div className="border-t border-[#ffffff08] pt-6 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a8bcd4]">
            <p>© {currentYear} {personalInfo.name}</p>
            <button
              onClick={scrollToTop}
              className="hover:text-[#8FB3F5] transition-colors focus-ring"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
