# Quotos - Quick Start Guide

## Installation & Setup

### 1. Navigate to Project Directory
```bash
cd quotos-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Open in Browser
Visit: **http://localhost:3000**

---

## What You'll See

### Welcome Page (/)
- Centered Quotos logo
- Yellow "Enter App" button
- Clean, non-scrollable layout

### Home Page (/home)
- **Top Nav**: Connect button + profile picture
- **Logo Section**: Centered Quotos branding
- **Filter Strip**: 4 colored category filters
- **Posts Grid**: 2x2 grid of sample posts
- **Narrative Canvas**: Placeholder for future graph
- **Expanding Input**: "Quote..." input field
- **About Cards**: 4 horizontal info cards
- **Final Section**: Closing message + Ethos branding

---

## Project Structure Overview

```
quotos-app/
├── app/
│   ├── page.tsx              # Welcome page
│   ├── page.module.css       # Welcome styles
│   ├── home/
│   │   ├── page.tsx          # Main app page
│   │   └── page.module.css   # Home styles
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles + CSS variables
├── public/
│   └── images/               # Placeholder images (SVG)
└── [config files]
```

---

## Key Features (Stage 1)

✓ **Fully Typed**: TypeScript throughout  
✓ **Modular CSS**: CSS Modules for scoped styling  
✓ **Color System**: CSS variables for easy theming  
✓ **Clean IDs**: All major elements have unique IDs  
✓ **Responsive**: Mobile-friendly grid layouts  
✓ **GitHub Ready**: Includes .gitignore and documentation  

---

## Customization

### Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --color-bg-main: #0e0e0e;
  --color-accent-yellow: #f5c842;
  /* etc... */
}
```

### Content
- **Posts**: Edit in `app/home/page.tsx` (search for "post-1", "post-2", etc.)
- **About Cards**: Edit in `app/home/page.tsx` (search for "about-cards")
- **Footer Links**: Edit in `app/home/page.tsx` (search for "final-footer")

### Images
Replace SVG placeholders in `public/images/`:
- `logo-placeholder.png` - Main Quotos logo
- `pfp-placeholder.png` - Profile pictures
- `ethos-placeholder.png` - Ethos logo

---

## Next Steps

This is **Stage 1** - a clean skeleton with no animations or backend logic.

**Future Stages:**
- Stage 2: Basic interactions
- Stage 3: Filter animations
- Stage 4: Post selection + narrative graph
- Stage 5: Expanding input
- Stage 6: Horizontal scroll
- Stage 7: Scroll lock + logo scaling

See `STAGE_NOTES.md` for detailed implementation plans.

---

## Build for Production

```bash
npm run build
npm start
```

---

## Troubleshooting

**Port 3000 already in use?**
```bash
# Kill existing process
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

**Images not loading?**
- Ensure SVG files are in `public/images/`
- Check file names match exactly (case-sensitive)
- Clear browser cache

---

## Support

For questions or issues:
1. Check `README.md` for full documentation
2. Review `STAGE_NOTES.md` for implementation details
3. Inspect browser console for errors

---

**Happy Coding!** 🚀
