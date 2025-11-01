import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: number;
  title: string;
  items: string[];
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<number | null>(items[0]?.id || null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="glass-card rounded-2xl shadow-lg overflow-hidden transition-all duration-200"
        >
          <button
            onClick={() => toggleAccordion(item.id)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1f2738] transition-colors duration-200 focus-ring"
          >
            <h3 className="text-xl font-semibold text-[#e8f0f8]">{item.title}</h3>
            <ChevronDown
              className={`w-5 h-5 text-[#8FB3F5] transition-transform duration-200 ${
                openId === item.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openId === item.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-6">
              <ul className="space-y-3">
                {item.items.map((content, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#8FB3F5] mt-1.5">•</span>
                    <span className="text-[#a8bcd4] leading-relaxed">{content}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
