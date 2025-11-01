import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/mock';
import Button from './Button';

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = 'home' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Works', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Studio & Gear', path: '/equipment' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex flex-col">
            <a href="/" className="font-serif text-xl lg:text-2xl font-bold gradient-text">
              {personalInfo.name}
            </a>
            <span className="text-xs text-[#8FB3F5] mt-0.5">Audio & Recording Engineer</span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors duration-200 focus-ring ${
                  currentPage === item.name.toLowerCase().replace(' & ', '')
                    ? 'gradient-text'
                    : 'text-[#a8bcd4] hover:text-[#8FB3F5]'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="mailto:Srishtishastri135@gmail.com" variant="secondary">
              Email Srishti
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-[#e8f0f8] focus-ring"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-[#121826] z-40 backdrop-blur-xl">
          <nav className="flex flex-col items-center gap-6 p-8">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`text-lg font-medium transition-colors duration-200 focus-ring ${
                  currentPage === item.name.toLowerCase().replace(' & ', '')
                    ? 'gradient-text'
                    : 'text-[#a8bcd4]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button href="mailto:Srishtishastri135@gmail.com" variant="secondary" className="mt-4">
              Email Srishti
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
