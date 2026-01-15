# Changelog

All notable changes to Hovue will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.2] - 2026-01-15

### Added

#### Monorepo Structure
- Complete monorepo setup with pnpm and Turbo
- Workspace configuration for all packages
- Shared build and development scripts

#### Packages
- **@hovue/icons@0.0.2** - Core icon library with 36+ animated icons
  - Vue 3 components with CSS animations
  - TypeScript definitions
  - Tree-shakeable ESM and CJS builds
  - Zero dependencies
- **@hovue/nuxt@0.0.2** - Nuxt 3 module with auto-import
  - Automatic icon component registration
  - TypeScript support
  - Zero-configuration setup
- **@hovue/cli** - CLI tool for managing icons
  - Icon listing and management commands
  - Project initialization helpers
- **@hovue/website** - Official documentation website
  - Astro-based static site
  - Comprehensive documentation
  - Interactive playground integration

#### Website Features
- Modern, Chakra UI-inspired design
- Dark mode with system preference detection
- Fully responsive design (mobile, tablet, desktop)
- Interactive playground for testing icons
- Real-time icon search and filtering
- Category-based icon filtering (Arrows, Actions, UI, Media, Files, Loaders)
- Copy-to-clipboard functionality for all code snippets
- Copy buttons on all code blocks (docs and homepage)
- Smooth page transitions (no white flash)
- Previous/Next navigation for documentation pages
- Scrollable sidebar navigation
- Mobile-friendly navigation with overlay menu

#### Documentation
- Installation guide with npm, pnpm, yarn, and bun instructions
- Quick start guide with Vue 3 and Nuxt 3 examples
- Complete API reference
- Animation guide with all available animations
- Examples gallery with interactive demos
- Contributing guidelines
- Code of Conduct
- Security policy
- GitHub issue and PR templates
- CI/CD workflows

#### SEO & Performance
- Comprehensive SEO optimization
- Open Graph meta tags (Facebook, LinkedIn)
- Twitter Card meta tags
- JSON-LD structured data
- Sitemap generation
- Robots.txt configuration
- Canonical URLs
- Optimized meta tags for social sharing

#### npm Integration
- Published packages to npm
- npm badges (version, downloads, bundle size, license)
- "View on npm" buttons
- npm installation instructions
- Package verification commands

#### Deployment
- Vercel deployment configuration
- Automated build pipeline
- Playground integration with website
- Cache optimization
- Production-ready configuration

### Changed
- Migrated from basic HTML to Astro + Vue architecture
- Restructured project into monorepo
- Improved mobile responsiveness across all pages
- Enhanced copy functionality with icon buttons
- Optimized build process for faster deployments

### Fixed
- Mobile responsiveness issues in playground
- Deployment caching issues
- Playground 404 errors on production
- Copy button positioning and styling consistency
- White flash on page navigation in dark mode
- Build order dependencies for monorepo packages

## [0.0.1] - 2026-01-07

### Added
- Initial project setup
- Basic website structure
- Icon library foundation

---

## Release Notes

For detailed release notes, visit our [GitHub Releases](https://github.com/hovue/hovue/releases) page.

