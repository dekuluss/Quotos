# Quotos - Stage 1 Skeleton

A frontend-only web application built with Next.js, React, and TypeScript.

## Project Overview

Quotos is a platform that unites users through philosophical ideas and thoughts, integrating Web3 capabilities for rewards and recognition.

**Current Stage:** Stage 1 - Skeleton (Layout, Structure, Components, IDs, Placeholders)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules
- **Package Manager:** npm

## Project Structure

```
quotos-app/
├── app/
│   ├── globals.css              # Global styles with CSS variables
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Welcome page (/)
│   ├── page.module.css          # Welcome page styles
│   └── home/
│       ├── page.tsx             # Home page (/home)
│       └── page.module.css      # Home page styles
├── public/
│   └── images/
│       ├── logo-placeholder.png
│       ├── pfp-placeholder.png
│       └── ethos-placeholder.png
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Color System

All colors are defined via CSS variables in `app/globals.css`:

```css
--color-bg-main: #0e0e0e;
--color-bg-secondary: #151515;
--color-bg-elevated: #1c1c1c;

--color-text-primary: #e6e6e6;
--color-text-secondary: #b3b3b3;
--color-text-muted: #7a7a7a;

--color-border-subtle: #2a2a2a;

--color-accent-yellow: #f5c842;
--color-accent-green: #3fb950;
--color-accent-blue: #3b82f6;
--color-accent-purple: #8b5cf6;
```

## Routes

- `/` - Welcome page (non-scrollable, centered logo and "Enter App" button)
- `/home` - Main application page with all sections

## Pages

### Welcome Page (`/`)

**Features:**
- Non-scrollable full-screen layout
- Centered Quotos logo
- Yellow "Enter App" button that routes to `/home`

**Key IDs:**
- `page-welcome`
- `welcome-center`
- `welcome-logo`
- `enter-app-button`

### Home Page (`/home`)

**Sections (in order):**

1. **Top Navigation Bar**
   - IDs: `home-navbar`, `navbar-left`, `navbar-right`, `connect-button`, `profile-pfp`
   - Features: Green "Connect" button (visual only), profile picture placeholder

2. **Logo Section**
   - IDs: `home-logo-section`, `home-logo`
   - Features: Centered Quotos logo

3. **Filter Strip**
   - ID: `home-filters`
   - Features: 4 colored filter cards (Actual, Interesting, Philosophy, Narratives)
   - TODO (Stage 3): Overlapping + scroll separation + glow on hover

4. **Posts Grid (2x2)**
   - ID: `home-posts-grid`
   - Features: 4 post cards with profile pictures, usernames, and text content
   - Post IDs: `post-1`, `post-2`, `post-3`, `post-4`
   - TODO (Stage 4): Post selection + narrative transition

5. **Narrative Canvas**
   - ID: `narrative-canvas`
   - Features: Placeholder section for future graph
   - TODO (Stage 4): pfp narrative graph with draggable nodes

6. **Expanding Input**
   - ID: `expanding-input-section`, `story-input`
   - Features: Input field with "Quote..." placeholder
   - TODO (Stage 5): Scroll-based width & placeholder change

7. **About Cards**
   - ID: `about-cards`
   - Features: 4 horizontal cards describing Quotos
   - TODO (Stage 6): Horizontal scroll movement

8. **Final Section**
   - ID: `final-section`
   - Features: Closing text, logo with "by Ethos", footer links
   - IDs: `closing-text`, `final-logo-container`, `final-logo`, `by-ethos`, `ethos-small-logo`, `final-footer`
   - TODO (Stage 7): Scroll lock + logo scaling

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Stage 1 Complete ✓

**What's included:**
- ✓ Complete layout structure
- ✓ All components with unique IDs
- ✓ CSS Modules for styling
- ✓ Color system via CSS variables
- ✓ Placeholder images (SVG-based)
- ✓ Clean, modular code
- ✓ TypeScript throughout
- ✓ Responsive grid layout
- ✓ All text in English
- ✓ TODO comments for future stages

**What's NOT included (by design):**
- ✗ Animations
- ✗ Backend logic
- ✗ Real authentication
- ✗ Wallet connection functionality
- ✗ Actual branding assets

## Future Stages (Planned)

- **Stage 2:** Basic interactions and hover states
- **Stage 3:** Filter strip animations (overlapping, scroll separation, glow)
- **Stage 4:** Post selection and narrative graph with draggable nodes
- **Stage 5:** Expanding input with scroll-based width changes
- **Stage 6:** Horizontal scroll animations for about cards
- **Stage 7:** Final section scroll lock and logo scaling

## Notes

- All major sections have unique IDs for easy JavaScript targeting
- CSS variables allow for easy theme changes
- Modular CSS keeps styles scoped and maintainable
- SVG placeholders are included for images (can be replaced with actual assets)
- No external dependencies beyond Next.js core

## GitHub Ready

This project is ready to be pushed to GitHub:

```bash
git init
git add .
git commit -m "Initial commit - Quotos Stage 1 skeleton"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Contributing

This is Stage 1 - a skeleton for future development. All interactive features and animations will be added in subsequent stages.
