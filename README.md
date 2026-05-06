# Menglong Portfolio

A highly premium, glassmorphism-themed portfolio built with modern web technologies. Designed with performance, beautiful micro-interactions, and robust feature integration in mind.

## 🚀 Technologies Used

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `framer-motion` | Powers smooth scroll animations, transitions, and the global modal |
| `html-to-image` | Creates high-fidelity, high-DPI snapshots of the DOM |
| `jspdf` | Handles A4 pagination and PDF document generation for the Resume |
| `@emailjs/browser` | Seamless client-side email delivery for the "Hire Me" contact form |
| `next-themes` | System/Dark/Light mode toggling |
| `lucide-react` | Clean, customizable SVG iconography |
| `sonner` / `react-hot-toast` | Elegant toast notification system for form submissions |
| `clsx` & `tailwind-merge` | Utility tools for resolving CSS class conflicts cleanly |

---

## 🐛 Bugs Encounters & Technical Solutions

During development, several complex bugs were encountered and resolved. Here is the technical breakdown:

### 1. Next.js `Image` Build Crash
**Bug**: The app crashed during build due to an invalid `unoptimized={tr}` boolean typo and missing dimensions on the Next.js `<Image>` component in the `Project.tsx` file.
**Solution**: Removed the invalid prop and enforced strict `width` and `height` properties to satisfy Next.js image optimization rules.
```tsx
// Fixed Implementation
<Image
  src={project.image}
  alt={project.title}
  width={600}
  height={400}
  priority // For LCP images
  className="w-full h-full object-cover group-hover:scale-105 transition"
/>
```

### 2. PDF Capture Hiding Animated Elements
**Bug**: When generating the PDF resume without scrolling the page first, the bottom elements were entirely missing from the snapshot. `framer-motion`'s `whileInView` directive keeps elements at `opacity: 0` until they are manually scrolled into the viewport.
**Solution**: Created a `.pdf-exporting` class that forces all child elements to ignore inline framer-motion styles using `!important`, ensuring full visibility during the capture window.
```css
/* Globals or Style Block */
.pdf-exporting * {
  opacity: 1 !important;
  transform: none !important;
}
```
```javascript
// Temporarily added to the cloned DOM node before capture
clone.classList.add("pdf-exporting");
```

### 3. Mobile PDF Formatting (A4 Scale Crash)
**Bug**: Downloading the PDF from a mobile device captured the single-column (stacked) mobile layout. Because a single-column layout is extremely tall, shrinking it down to fit on an A4 page made the text unreadably tiny and left massive white space on the sides.
**Solution**: Created an off-screen DOM clone and utilized a JavaScript class-mapping script. The script automatically replaces all mobile Tailwind classes (`flex-col`, `w-28`, `grid-cols-1`, `p-6`) with their exact desktop equivalents (`flex-row`, `w-36`, `grid-cols-3`, `p-12`) prior to generating the image. This guarantees the exported PDF perfectly mirrors the desktop view, regardless of the user's actual device.
```javascript
const forceDesktopClasses = (el: Element) => {
  const classMap: Record<string, string> = {
    "flex-col": "flex-row",
    "items-center": "items-end",
    "w-28": "w-36",
    "text-center": "text-left",
    "grid-cols-1": "grid-cols-3",
    "p-6": "p-12"
  };
  
  Object.entries(classMap).forEach(([mobile, desktop]) => {
    if (el.classList.contains(mobile)) {
      el.classList.remove(mobile);
      el.classList.add(desktop);
    }
  });
};

// Apply to clone before taking the snapshot
clone.querySelectorAll("*").forEach(forceDesktopClasses);
```

### 4. Missing Export Dependencies
**Bug**: Attempting to click "Download PDF" threw a runtime error: `Cannot find module 'html-to-image'`. The libraries were imported in the file but missing from `package.json`.
**Solution**: Installed the necessary modules directly to the project.
```bash
npm install html-to-image jspdf
```

---

## 💻 Running Locally

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
