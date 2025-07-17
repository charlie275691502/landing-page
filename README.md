# Foameo Landing

A landing page for Foameo Labs, built with Next.js, React, and Tailwind CSS. 

## Features
- **Next.js 15** for server-side rendering and routing
- **React 18** functional components
- **Tailwind CSS** for utility-first styling
- **Custom fonts** (Bauhaus Chez Display, DotGothic16, DM Sans, Asap)
- **Responsive design** with custom CSS modules and Tailwind
- **Mission-driven content** for blockchain and AI agentic UX

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm (v9+) or yarn or pnpm

### Installation
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Project Structure
```
foameo-landing/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout, global fonts, metadata
│       ├── page.tsx        # Main landing page content
│       └── globals.css     # Global styles and font-face
├── public/
│   └── fonts/              # Custom font files
├── tailwind.config.ts      # Tailwind configuration
├── postcss.config.mjs      # PostCSS configuration
├── main.tsx                # (Legacy/alternate entry, see src/app/page.tsx)
├── main.module.css         # (Legacy/alternate styles)
├── package.json            # Project metadata and scripts
└── .gitignore
```

## Styling
- Uses Tailwind CSS with custom theme extensions (see `tailwind.config.ts`).
- Custom fonts loaded via Google Fonts and local font-face.
- Responsive and accessible design.

## Scripts
- `dev` – Start development server
- `build` – Build for production
- `start` – Start production server
- `lint` – Run ESLint

## License
This project is for Foameo Labs. Contact the team for usage details. 