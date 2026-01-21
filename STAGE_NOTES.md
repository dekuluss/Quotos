# Stage Implementation Notes

This document outlines the TODO items and implementation notes for each upcoming stage of the Quotos application.

## Stage 1: Skeleton ✓ COMPLETE

**Completed:**
- ✓ Full project structure with Next.js App Router
- ✓ TypeScript configuration
- ✓ CSS Modules for all pages
- ✓ CSS variables for color system
- ✓ Welcome page with centered layout (non-scrollable)
- ✓ Home page with all sections and IDs
- ✓ SVG placeholder images
- ✓ Clean, modular code with comments
- ✓ GitHub-ready structure

---

## Stage 2: Basic Interactions (Planned)

**Focus:** Add basic interactivity without animations

**Tasks:**
- [ ] Add hover states for all buttons
- [ ] Add focus states for input field
- [ ] Add click handlers for filter cards
- [ ] Add hover states for post cards
- [ ] Add cursor pointer to interactive elements
- [ ] Test all navigation flows

**Files to modify:**
- `app/home/page.module.css` - Add hover/focus states
- `app/page.module.css` - Add button hover states

---

## Stage 3: Filter Strip Animations

**Focus:** Overlapping filters, scroll separation, glow on hover

**Location:** `#home-filters` section in `/home`

**Tasks:**
- [ ] Implement overlapping effect for filter cards
  - Position: `position: relative` with negative margins
  - Z-index stacking on hover
  
- [ ] Add scroll-based separation
  - Use `IntersectionObserver` or scroll event
  - Increase gap between cards on scroll
  - Smooth transition animation
  
- [ ] Add glow effect on hover
  - `box-shadow` with accent color
  - Different glow color per filter type
  - Smooth opacity transition

**New files needed:**
- `app/home/components/FilterStrip.tsx`
- `app/home/components/FilterStrip.module.css`

**CSS properties to add:**
```css
.filterCard {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.filterCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(var(--accent-rgb), 0.4);
  z-index: 10;
}
```

---

## Stage 4: Post Selection & Narrative Graph

**Focus:** Interactive post selection + pfp narrative graph with draggable nodes

### Part A: Post Selection

**Location:** `#home-posts-grid` section

**Tasks:**
- [ ] Add click handler to post cards
- [ ] Add selected state styling
- [ ] Implement transition to narrative view
- [ ] Store selected posts in state

**State management:**
```typescript
const [selectedPosts, setSelectedPosts] = useState<string[]>([])
```

### Part B: Narrative Graph

**Location:** `#narrative-canvas` section

**Tasks:**
- [ ] Implement graph visualization library (e.g., react-force-graph, vis-network)
- [ ] Create node components with pfp images
- [ ] Add drag-and-drop functionality
- [ ] Connect nodes with lines/curves
- [ ] Add zoom and pan controls
- [ ] Link selected posts to graph nodes

**Libraries to consider:**
- `react-force-graph-2d`
- `react-flow`
- Custom implementation with `canvas` or `svg`

**New files needed:**
- `app/home/components/NarrativeGraph.tsx`
- `app/home/components/NarrativeGraph.module.css`
- `app/home/hooks/useGraphDrag.ts`

---

## Stage 5: Expanding Input

**Focus:** Scroll-based width expansion & dynamic placeholder

**Location:** `#expanding-input-section`

**Tasks:**
- [ ] Track scroll position with `useEffect` + scroll event
- [ ] Calculate width based on scroll percentage
  - Start: 600px width
  - End: 100% width (or specific max-width)
  
- [ ] Change placeholder text based on scroll
  - Initial: "Quote..."
  - Mid-scroll: "Share your story..."
  - End-scroll: "What's on your mind today?"
  
- [ ] Smooth width transition animation
- [ ] Ensure input remains focused during expansion

**Implementation approach:**
```typescript
useEffect(() => {
  const handleScroll = () => {
    const scrollPercent = window.scrollY / document.body.scrollHeight
    // Calculate width and update placeholder
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
```

**New files needed:**
- `app/home/components/ExpandingInput.tsx`
- `app/home/hooks/useScrollProgress.ts`

---

## Stage 6: About Cards Horizontal Scroll

**Focus:** Horizontal scroll movement with scroll indicator

**Location:** `#about-cards` section

**Tasks:**
- [ ] Implement horizontal scroll container
- [ ] Add scroll snap points for each card
- [ ] Add scroll indicators/dots
- [ ] Add arrow navigation (optional)
- [ ] Smooth scroll behavior
- [ ] Mobile touch scroll support

**CSS properties:**
```css
.aboutCards {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  scroll-behavior: smooth;
}

.aboutCard {
  scroll-snap-align: start;
}
```

**Optional enhancements:**
- [ ] Parallax effect during scroll
- [ ] Card fade-in on scroll into view
- [ ] Auto-scroll feature

**New files needed:**
- `app/home/components/AboutCardsScroll.tsx`
- `app/home/hooks/useHorizontalScroll.ts`

---

## Stage 7: Final Section - Scroll Lock & Logo Scaling

**Focus:** Pin section in place + scale logo on scroll

**Location:** `#final-section`

**Tasks:**
- [ ] Implement scroll lock mechanism
  - Pin section when it enters viewport
  - Continue showing while scrolling within buffer zone
  
- [ ] Scale logo based on scroll position
  - Start: 150px
  - End: 300px (or other target size)
  - Smooth scale transition
  
- [ ] Fade in footer links on scroll
- [ ] Add "by Ethos" subtitle animation

**Implementation approach:**
- Use `position: sticky` or scroll event
- Calculate scale factor: `scale = 1 + (scrollProgress * 1)`
- Apply `transform: scale(X)` to logo

**CSS:**
```css
#final-section {
  position: sticky;
  top: 0;
  min-height: 100vh;
}

#final-logo {
  transition: transform 0.3s ease;
}
```

**New files needed:**
- `app/home/components/FinalSection.tsx`
- `app/home/hooks/useScrollLock.ts`

---

## Stage 8: Polish & Performance (Future)

**Focus:** Optimization, accessibility, and final touches

**Tasks:**
- [ ] Optimize images (convert SVG placeholders to real assets)
- [ ] Add loading states
- [ ] Implement error boundaries
- [ ] Add accessibility attributes (ARIA labels)
- [ ] Keyboard navigation support
- [ ] Performance optimization (code splitting, lazy loading)
- [ ] Add meta tags and SEO
- [ ] Mobile responsiveness refinement
- [ ] Cross-browser testing

---

## Technical Considerations

### State Management
- Start with React `useState` and `useContext`
- Consider Zustand or Redux if complexity increases

### Animation Libraries (if needed)
- Framer Motion - for complex animations
- GSAP - for timeline-based animations
- react-spring - for physics-based animations

### Performance Optimizations
- Use `React.memo` for heavy components
- Implement virtualization for large lists
- Lazy load sections below fold
- Optimize scroll event listeners with throttle/debounce

### Accessibility
- Ensure keyboard navigation
- Add ARIA labels to interactive elements
- Maintain color contrast ratios (WCAG AA)
- Add skip navigation links

---

## Development Workflow

1. Create feature branch for each stage
2. Implement components in isolated files
3. Test in development mode
4. Merge to main after stage completion
5. Deploy to preview environment
6. User testing and feedback
7. Iterate before moving to next stage

---

## Notes

- All animations should be smooth (60fps target)
- Respect user's motion preferences (`prefers-reduced-motion`)
- Test on multiple browsers and devices
- Keep bundle size under control
- Document all major changes in this file
