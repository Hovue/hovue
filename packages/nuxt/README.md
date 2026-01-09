# @hovue/nuxt

Nuxt module for [@hovue/icons](../icons) with auto-import support.

## Installation

```bash
pnpm add @hovue/icons @hovue/nuxt
```

## Usage

Add to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['@hovue/nuxt'],
  hovue: {
    prefix: 'Ho' // Optional, defaults to 'Ho'
  }
})
```

## Auto-Import

Icons are automatically imported and available in your templates:

```vue
<template>
  <div>
    <HoArrowRight :size="24" animation="slide" />
    <HoCheck :size="32" color="green" />
    <HoSettings :size="20" />
  </div>
</template>
```

## Configuration

### `prefix`

Change the component prefix (default: `'Ho'`):

```ts
export default defineNuxtConfig({
  modules: ['@hovue/nuxt'],
  hovue: {
    prefix: 'Icon' // Now use <IconArrowRight />
  }
})
```

## Available Icons

See [@hovue/icons](../icons) for the complete list of available icons.

