import { defineNuxtModule, addComponent } from '@nuxt/kit'

export interface ModuleOptions {
  prefix?: string
}

// List of all available icons
const iconNames = [
  'ArrowRight',
  'ArrowLeft',
  'ArrowUp',
  'ArrowDown',
  'ChevronRight',
  'ChevronDown',
  'Check',
  'X',
  'Plus',
  'Minus',
  'Search',
  'Menu',
  'Home',
  'User',
  'Settings',
  'Bell',
  'Mail',
  'Heart',
  'Play',
  'Pause',
  'Volume',
  'Camera',
  'Image',
  'Music',
  'File',
  'Folder',
  'Copy',
  'Trash',
  'Download',
  'Upload',
  'Loader',
  'Refresh',
  'Sync',
  'Clock',
  'Calendar',
  'Star',
] as const

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@hovue/nuxt',
    configKey: 'hovue'
  },
  defaults: {
    prefix: 'Ho'
  },
  async setup(options, nuxt) {
    // Add all icon components with auto-import
    for (const iconName of iconNames) {
      addComponent({
        name: `${options.prefix}${iconName}`,
        export: `Ho${iconName}`,
        filePath: '@hovue/icons'
      })
    }
  }
})

declare module '@nuxt/schema' {
  interface NuxtConfig {
    hovue?: ModuleOptions
  }
}

