# @hovue/icons

Animated Vue icons with motion baked in.

## Installation

```bash
pnpm add @hovue/icons
# or
npm install @hovue/icons
```

## Usage

```vue
<script setup>
import { HoArrowRight, HoCheck, HoSettings } from '@hovue/icons'
</script>

<template>
  <HoArrowRight :size="24" animation="slide" />
  <HoCheck :size="32" color="green" animation="bounce" />
  <HoSettings :size="20" animation="rotate" />
</template>
```

## Props

All icons accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Icon size in pixels |
| `color` | `string` | `'currentColor'` | Icon color (CSS color value) |
| `animation` | `'slide' \| 'bounce' \| 'rotate' \| 'pulse' \| 'fade'` | `'slide'` | Animation type on hover |
| `animationDuration` | `number` | `300` | Animation duration in milliseconds |

## Available Icons

- **Arrows**: ArrowRight, ArrowLeft, ArrowUp, ArrowDown
- **Chevrons**: ChevronRight, ChevronDown
- **Actions**: Check, X, Plus, Minus
- **Navigation**: Search, Menu, Home
- **User**: User, Settings, Bell, Mail
- **Media**: Play, Pause, Volume, Camera, Image, Music
- **Files**: File, Folder, Copy, Trash
- **System**: Download, Upload, Loader, Refresh, Sync
- **Time**: Clock, Calendar
- **UI**: Heart, Star

## Animations

Icons support CSS-based animations on hover:

- **slide** - Slides horizontally
- **bounce** - Bounces up and down
- **rotate** - Rotates 180 degrees
- **pulse** - Pulses in size
- **fade** - Fades in/out

## Tree Shaking

Icons are tree-shakeable. Import only what you need:

```vue
<script setup>
// ✅ Good - only imports what you use
import { HoArrowRight } from '@hovue/icons'

// ❌ Avoid - imports everything
import * as Icons from '@hovue/icons'
</script>
```

## TypeScript

Full TypeScript support with type definitions included.

## License

MIT

