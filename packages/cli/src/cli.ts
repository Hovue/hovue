#!/usr/bin/env node

import { Command } from 'commander'
import chalk from 'chalk'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { ensureDir } from 'fs-extra'
import { join, dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const program = new Command()

program
  .name('hovue')
  .description('CLI tool for Hovue icons')
  .version('0.0.1')

program
  .command('list')
  .description('List all available icons')
  .action(() => {
    const icons = [
      'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown',
      'ChevronRight', 'ChevronDown',
      'Check', 'X', 'Plus', 'Minus',
      'Search', 'Menu', 'Home', 'User', 'Settings',
      'Bell', 'Mail', 'Heart',
      'Play', 'Pause', 'Volume',
      'Camera', 'Image', 'Music',
      'File', 'Folder',
      'Copy', 'Trash',
      'Download', 'Upload',
      'Loader', 'Refresh', 'Sync',
      'Clock', 'Calendar', 'Star',
    ]

    console.log(chalk.bold('\n📦 Available Hovue Icons:\n'))
    icons.forEach((icon: string, index: number) => {
      const padded = icon.padEnd(20)
      if (index % 3 === 0) console.log()
      process.stdout.write(chalk.cyan(padded))
    })
    console.log('\n')
  })

program
  .command('init')
  .description('Initialize Hovue configuration')
  .option('-d, --dir <dir>', 'Target directory', '.')
  .action((options) => {
    const targetDir = resolve(options.dir)
    const configPath = join(targetDir, 'hovue.config.json')

    if (existsSync(configPath)) {
      console.log(chalk.yellow('⚠️  hovue.config.json already exists'))
      return
    }

    const config = {
      prefix: 'Ho',
      outputDir: './src/components/icons',
      importStyle: 'named'
    }

    writeFileSync(configPath, JSON.stringify(config, null, 2))
    console.log(chalk.green('✅ Created hovue.config.json'))
    console.log(chalk.gray(`   Location: ${configPath}`))
  })

program
  .command('add <icons...>')
  .description('Add icon(s) to your project')
  .option('-d, --dir <dir>', 'Target directory', '.')
  .option('-o, --output <output>', 'Output directory', './src/components/icons')
  .action(async (icons, options) => {
    console.log(chalk.bold(`\n📥 Adding icons: ${icons.join(', ')}\n`))

    const targetDir = resolve(options.dir)
    const outputDir = join(targetDir, options.output)
    await ensureDir(outputDir)

    icons.forEach((icon: string) => {
      const iconName = icon.startsWith('Ho') ? icon : `Ho${icon}`
      const filePath = join(outputDir, `${iconName}.vue`)
      
      if (existsSync(filePath)) {
        console.log(chalk.yellow(`⚠️  ${iconName}.vue already exists`))
        return
      }

      const template = `<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="color"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="animationClass"
  >
    <!-- ${iconName} icon -->
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: number | string
  color?: string
  animation?: 'slide' | 'bounce' | 'rotate' | 'pulse' | 'fade'
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  color: 'currentColor',
  animation: 'slide'
})

const animationClass = computed(() => {
  if (!props.animation) return ''
  return \`hovue-animation-\${props.animation}\`
})
</script>

<style scoped>
.hovue-animation-slide {
  transition: transform 300ms ease;
}
.hovue-animation-slide:hover {
  transform: translateX(4px);
}
</style>
`

      writeFileSync(filePath, template)
      console.log(chalk.green(`✅ Created ${iconName}.vue`))
    })

    console.log(chalk.gray(`\n   Output: ${outputDir}\n`))
  })

program.parse()

