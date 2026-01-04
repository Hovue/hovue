# Hovue Website

The official website for [Hovue](https://github.com/hovue/hovue) - An editable Vue components with motion baked in. Works seamlessly with Nuxt, Shadcn, and modern design systems.

Built with [Astro](https://astro.build) and Vue components.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```


## Documentation

The documentation structure is set up and ready for expansion. The docs are available at `/docs` route.

### Adding Search Functionality

Future search functionality can be added using:

1. **Algolia DocSearch** (Recommended for documentation sites)
   - Free for open source projects
   - Apply at: https://docsearch.algolia.com/
   - Add to `astro.config.mjs` when ready

2. **Pagefind** (Client-side search)
   - Zero-configuration search
   - Install: `npm install pagefind`
   - Works great with static sites

3. **Custom Search Implementation**
   - Use Astro's content collections
   - Implement client-side search with Vue components

### Adding Documentation Pages

Create new documentation pages in `src/pages/docs/`:
- Files automatically become routes
- Use the same layout structure as `docs/index.astro`
- Add navigation links in the sidebar component


## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Main Package**: [@hovue/hovue](https://github.com/hovue/hovue)
- **Documentation**: [https://hovue.dev](https://hovue.dev)
- **GitHub**: [https://github.com/hovue/hovue](https://github.com/hovue/hovue)

## Related Documentation

- [Contributing Guide](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Security Policy](SECURITY.md)
- [Changelog](CHANGELOG.md)

