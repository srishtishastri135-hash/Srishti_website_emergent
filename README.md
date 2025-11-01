# Srishti Shastri Portfolio

Professional portfolio website for Srishti Shastri - Sound & Music Professional, CTO at Cymasonic Labs.

## Features

- **Multi-page portfolio** with Home, Work, About, Equipment, and Contact pages
- **Responsive design** optimized for mobile, tablet, and desktop
- **Pastel boho aesthetic** with professional blue gradient theme
- **Interactive components** including accordions, filters, and form validation
- **SEO optimized** with structured data (JSON-LD)
- **Performance optimized** with smooth animations and transitions

## Tech Stack

- **Vite 5.4** - Fast build tool and dev server
- **React 18.3** - Modern UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS 3.4** - Utility-first styling
- **React Router DOM** - Client-side routing
- **Lucide React** - Beautiful icons

## Design System

### Color Palette
- Primary Gradient: `#9BC2FF` → `#6EA6FF` → `#3B62FF`
- Mist Blue: `#EAF2FF`
- Sand: `#E8DFD6`
- Sage Accent: `#A7C4B5`

### Typography
- Headings: **Cormorant Garamond** (serif)
- Body: **Manrope** (sans-serif)

### Key Components
- Sticky header with backdrop blur
- Gradient text effects
- Interactive cards with hover states
- Filter system for portfolio items
- Accordion sections
- Breadcrumb navigation
- Mobile hamburger menu
- Contact form with toast notifications
- Boho decorative separators

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Accordion.tsx
│   ├── Badge.tsx
│   ├── BohoSeparator.tsx
│   ├── Breadcrumb.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Footer.tsx
│   └── Header.tsx
├── pages/           # Page components
│   ├── Home.tsx
│   ├── Work.tsx
│   ├── About.tsx
│   ├── Equipment.tsx
│   └── Contact.tsx
├── data/            # Content data
│   └── mock.js
├── App.tsx          # Router configuration
├── index.css        # Global styles
└── main.tsx         # App entry point
```

## Development

```bash
# Install dependencies
npm install

# Start dev server (runs automatically)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Type check
npm run typecheck
```

## Content Management

All content is centralized in `src/data/mock.js`:
- Personal information and contact details
- Portfolio works with links
- Education and biography
- Equipment lists
- Service offerings

## Responsive Behavior

- **Desktop (>1024px)**: Full horizontal navigation, multi-column layouts
- **Tablet (768-1024px)**: Condensed layouts, flexible grids
- **Mobile (<768px)**: Forced light mode, hamburger menu, single-column layouts

## Accessibility

- Semantic HTML elements
- ARIA labels on icons and interactive elements
- Keyboard navigation support
- Focus indicators
- WCAG AA contrast standards
- Smooth scroll behavior

## Browser Support

Modern browsers supporting ES6+ and CSS Grid:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private portfolio website. All rights reserved.
