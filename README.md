# Hovue

> Animated Vue Icons with Motion Baked In

[![npm version](https://img.shields.io/npm/v/@hovue/icons)](https://www.npmjs.com/package/@hovue/icons)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A collection of beautiful, animated Vue 3 icons with CSS-based animations. Perfect for modern Vue and Nuxt applications.

## 📦 Packages

This is a monorepo containing:

- **[@hovue/icons](./packages/icons)** - Core icon library
- **[@hovue/nuxt](./packages/nuxt)** - Nuxt module with auto-import
- **[@hovue/cli](./packages/cli)** - CLI tool for managing icons
- **[@hovue/website](./packages/website)** - Official documentation website

## 🚀 Quick Start

### Installation

```bash
# Install icons package
pnpm add @hovue/icons

# Or with Nuxt auto-import
pnpm add @hovue/icons @hovue/nuxt
```

### Usage

#### Vue 3

```vue
<script setup>
import { HoArrowRight, HoCheck } from '@hovue/icons'
</script>

<template>
  <HoArrowRight :size="24" animation="slide" />
  <HoCheck :size="32" color="green" animation="bounce" />
</template>
```

#### Nuxt 3

Add to `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['@hovue/nuxt']
})
```

Then use icons directly (auto-imported):

```vue
<template>
  <HoArrowRight :size="24" animation="slide" />
  <HoCheck :size="32" color="green" />
</template>
```

## 🎨 Features

- ✨ **36+ Beautiful Icons** - Carefully crafted SVG icons
- 🎭 **CSS Animations** - Smooth, performant animations on hover
- 🎯 **TypeScript** - Full type safety
- 📦 **Tree-shakeable** - Import only what you need
- 🚀 **Zero Dependencies** - No external animation libraries
- 🎨 **Customizable** - Size, color, and animation props
- ⚡ **Nuxt Ready** - Auto-import support

## 📚 Documentation

Visit [https://hovue.dev](https://hovue.dev) for complete documentation.

## 🛠️ Development

This is a monorepo managed by [pnpm](https://pnpm.io) and [Turbo](https://turbo.build).

```bash
# Install dependencies
pnpm install

# Develop all packages
pnpm dev

# Build all packages
pnpm build

# Run playground
cd playground
pnpm dev
```

## 📝 License

MIT © [Hovue Contributors](./LICENSE)

## 🙏 Acknowledgments

Inspired by [Heroicons](https://heroicons.com) and [Lucide](https://lucide.dev).
