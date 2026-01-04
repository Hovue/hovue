# Architecture

This document describes the technical architecture of the Hovue website.

## Overview

The Hovue website is built with:
- **Astro** - Static site generator
- **Vue 3** - Interactive components
- **TypeScript** - Type safety
- **CSS Variables** - Theming system

## Project Structure

```
/
├── public/                 # Static assets
│   ├── logo.png
│   └── robots.txt
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── IconsShowcase.astro
│   │   ├── Installation.astro
│   │   ├── DocsPreview.astro
│   │   ├── CTA.astro
│   │   ├── Footer.astro
│   │   ├── CodePreview.vue
│   │   └── ThemeToggle.vue
│   ├── layouts/           # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/             # Routes
│   │   ├── index.astro
│   │   ├── docs/
│   │   │   └── index.astro
│   │   ├── [...404].astro
│   │   └── sitemap.xml.ts
│   ├── styles/            # Global styles
│   │   └── global.css
│   └── content/           # Content collections
│       └── docs/
├── .github/               # GitHub configuration
│   ├── workflows/
│   ├── ISSUE_TEMPLATE/
│   └── FUNDING.yml
├── astro.config.mjs       # Astro configuration
├── package.json
└── tsconfig.json
```

## Component Architecture

### Astro Components

Astro components are used for:
- Static content
- Layout structure
- Server-side rendering

**Example:**
```astro
---
// Component script (runs at build time)
const { title } = Astro.props;
---

<div class="component">
  <h1>{title}</h1>
</div>

<style>
  .component {
    /* Scoped styles */
  }
</style>
```

### Vue Components

Vue components are used for:
- Interactive features
- Client-side interactivity
- Dynamic content

**Example:**
```vue
<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>
```

## Styling System

### CSS Variables

The site uses CSS variables for theming:

```css
:root {
  --primary: #319795;
  --text-primary: #1a202c;
  /* ... */
}

.dark {
  --primary: #4fd1c7;
  --text-primary: #f7fafc;
  /* ... */
}
```

### Design Tokens

- Colors: Primary, secondary, text, background
- Spacing: Consistent spacing scale
- Typography: Font sizes and weights
- Borders: Radius and width

## Routing

### File-based Routing

Astro uses file-based routing:
- `src/pages/index.astro` → `/`
- `src/pages/docs/index.astro` → `/docs`
- `src/pages/[...404].astro` → Catch-all 404

### Dynamic Routes

Dynamic routes use `getStaticPaths()`:

```astro
---
export async function getStaticPaths() {
  return [{ params: { slug: 'example' } }];
}
---
```

## Build Process

### Development

```bash
npm run dev
```

- Starts dev server on `localhost:4321`
- Hot module replacement
- Fast refresh

### Production

```bash
npm run build
```

1. **Static Generation**
   - Astro generates static HTML
   - Vue components are hydrated
   - Assets are optimized

2. **Output**
   - `dist/` directory
   - Static HTML files
   - Optimized assets

## Performance Optimizations

### Static Site Generation

- All pages pre-rendered at build time
- No server required
- Fast initial load

### Code Splitting

- Automatic code splitting
- Vue components loaded on demand
- Minimal JavaScript

### Asset Optimization

- Images optimized
- CSS minified
- JavaScript bundled

## SEO

### Meta Tags

All pages include:
- Title
- Description
- Open Graph tags
- Twitter Card tags
- Canonical URLs

### Sitemap

Dynamic sitemap generation at `/sitemap.xml`

### robots.txt

Configured for search engine crawling

## Dark Mode

### Implementation

1. Theme toggle component (Vue)
2. localStorage persistence
3. System preference detection
4. CSS variable switching

### Usage

```vue
<script setup>
import { useTheme } from './composables/useTheme';
const { toggleTheme } = useTheme();
</script>
```

## State Management

### Local State

- Vue components use `ref()` and `reactive()`
- No global state management needed

### Persistence

- Theme preference: localStorage
- No other persistent state

## TypeScript

### Configuration

- `tsconfig.json` for TypeScript config
- Type checking in development
- Type definitions for Astro

### Usage

```typescript
interface Props {
  title: string;
}

const { title }: Props = Astro.props;
```

## Testing Strategy

### Current

- Manual testing
- Build verification

### Future

- Unit tests (Vitest)
- E2E tests (Playwright)
- Visual regression tests

## Deployment

### Static Hosting

The site is deployed as static files:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Cloudflare Pages

### CI/CD

GitHub Actions workflows:
- `ci.yml` - Build verification
- `release.yml` - Release automation
- `deploy.yml` - Deployment (future)

## Browser Support

- Modern browsers (last 2 versions)
- Chrome, Firefox, Safari, Edge
- Mobile browsers
- Progressive enhancement

## Security

### Headers

Security headers configured:
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection

### Content Security Policy

Can be added via hosting platform

## Future Improvements

- [ ] Add content collections for docs
- [ ] Implement search with Algolia
- [ ] Add analytics
- [ ] Performance monitoring
- [ ] A/B testing framework

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Vue 3 Documentation](https://vuejs.org)
- [TypeScript Documentation](https://www.typescriptlang.org)

