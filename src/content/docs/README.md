# Documentation Content

This directory is ready for future content collections or markdown-based documentation.

## Future Setup Options

### Option 1: Astro Content Collections
Use Astro's content collections for type-safe markdown documentation:

```bash
npm install @astrojs/mdx
```

Then configure in `astro.config.mjs`:
```js
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
});
```

### Option 2: Markdown Files
Simply add `.md` files here and create pages that render them.

### Option 3: Keep Current Structure
Continue using `.astro` files in `src/pages/docs/` for full control over styling and layout.

