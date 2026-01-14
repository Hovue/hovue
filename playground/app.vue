<template>
  <div :class="['playground-container', { 'dark-mode': isDark }]">
    <!-- Header -->
    <header class="playground-header">
      <div class="header-content">
        <div class="header-brand">
          <a href="https://hovue.xyz" class="logo-link">
            <img src="/logo.png" alt="Hovue Logo" class="logo-img" />
            <div class="brand-text">
              <h1 class="playground-title">Playground</h1>
              <p class="playground-subtitle">Test and explore Hovue icons</p>
            </div>
          </a>
        </div>
        <div class="header-actions">
          <a href="https://hovue.xyz" class="btn-secondary desktop-only">
            Home
          </a>
          <a href="https://hovue.xyz/docs" class="btn-secondary">
            Docs
          </a>
          <button @click="toggleTheme" class="theme-toggle" :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
          <button @click="toggleMobileSidebar" class="mobile-menu-btn mobile-only">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Sidebar Overlay -->
    <div
      v-if="isMobileSidebarOpen"
      class="sidebar-overlay"
      @click="closeMobileSidebar"
    ></div>

    <!-- Main Content -->
    <div class="playground-main">
      <!-- Sidebar Controls -->
      <aside :class="['playground-sidebar', { 'mobile-open': isMobileSidebarOpen }]">
        <div class="sidebar-header mobile-only">
          <h2 class="sidebar-header-title">Controls</h2>
          <button @click="closeMobileSidebar" class="sidebar-close-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="sidebar-content">
          <div class="sidebar-section">
            <h3 class="sidebar-title">Search Icons</h3>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search icons..."
              class="search-input"
            />
          </div>

          <div class="sidebar-section">
            <h3 class="sidebar-title">Category</h3>
            <!-- Desktop: Button list -->
            <div class="category-list desktop-only">
              <button
                v-for="category in categories"
                :key="category"
                :class="['category-btn', { active: selectedCategory === category }]"
                @click="selectedCategory = category"
              >
                {{ category }}
              </button>
            </div>
            <!-- Mobile: Dropdown -->
            <select v-model="selectedCategory" class="select-input mobile-only">
              <option v-for="category in categories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
          </div>

          <div class="sidebar-section">
            <h3 class="sidebar-title">Icon Size</h3>
            <div class="control-group">
              <input
                v-model.number="iconSize"
                type="range"
                min="16"
                max="64"
                step="4"
                class="slider"
              />
              <span class="control-value">{{ iconSize }}px</span>
            </div>
          </div>

          <div class="sidebar-section">
            <h3 class="sidebar-title">Animation</h3>
            <div class="control-group">
              <select v-model="selectedAnimation" class="select-input">
                <option value="slide">Slide</option>
                <option value="bounce">Bounce</option>
                <option value="rotate">Rotate</option>
                <option value="pulse">Pulse</option>
                <option value="fade">Fade</option>
                <option value="">None</option>
              </select>
            </div>
          </div>

          <div class="sidebar-section">
            <h3 class="sidebar-title">Color</h3>
            <div class="color-grid">
              <button
                v-for="color in colors"
                :key="color.name"
                :class="['color-btn', { active: selectedColor === color.value }]"
                :style="{ backgroundColor: color.value === 'currentColor' ? (isDark ? '#fff' : '#000') : color.value }"
                @click="selectedColor = color.value"
                :title="color.name"
              />
            </div>
            <input
              v-model="selectedColor"
              type="text"
              placeholder="#000000"
              class="color-input"
            />
          </div>
        </div>
      </aside>

      <!-- Content Area -->
      <main class="playground-content">
        <!-- Selected Icon Preview -->
        <div v-if="selectedIcon" class="preview-card">
          <div class="preview-header">
            <h2 class="preview-title">{{ selectedIcon }}</h2>
            <button @click="copyCode" class="btn-copy" :title="copied ? 'Copied!' : 'Copy code'">
              <svg v-if="!copied" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </button>
          </div>
          <div class="preview-display">
            <div class="preview-icon-wrapper">
              <component
                :is="iconComponent"
                :key="`${selectedIcon}-${selectedAnimation}-${iconSize}`"
                :size="iconSize"
                :color="selectedColor"
                :animation="animationValue"
                class="preview-icon"
              />
            </div>
          </div>
          <div class="preview-code">
            <div class="code-header">
              <span class="code-label">Code</span>
              <button @click="copyCode" class="code-copy-btn" :title="copied ? 'Copied!' : 'Copy code'">
                <svg v-if="!copied" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </button>
            </div>
            <pre><code>{{ iconCode }}</code></pre>
          </div>
        </div>

        <!-- Icons Grid -->
        <div class="icons-section">
          <h2 class="section-title">All Icons ({{ filteredIcons.length }})</h2>
          <div class="icons-grid">
            <div
              v-for="icon in filteredIcons"
              :key="icon"
              :class="['icon-card', { active: selectedIcon === icon }]"
              @click="selectedIcon = icon"
            >
              <div class="icon-display">
                <component
                  :is="getIconComponent(icon)"
                  :key="`${icon}-${selectedAnimation}`"
                  :size="32"
                  :color="selectedColor"
                  :animation="animationValue"
                />
              </div>
              <span class="icon-name">{{ icon }}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import * as Icons from '@hovue/icons'

type AnimationType = 'slide' | 'bounce' | 'rotate' | 'pulse' | 'fade' | undefined

const searchQuery = ref('')
const iconSize = ref(32)
const selectedAnimation = ref<string>('slide')
const selectedColor = ref('currentColor')
const selectedIcon = ref('ArrowRight')
const copied = ref(false)
const isDark = ref(false)
const isMobileSidebarOpen = ref(false)

const toggleMobileSidebar = () => {
  isMobileSidebarOpen.value = !isMobileSidebarOpen.value
  if (isMobileSidebarOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileSidebar = () => {
  isMobileSidebarOpen.value = false
  document.body.style.overflow = ''
}

const animationValue = computed<AnimationType>(() => {
  return selectedAnimation.value === '' ? undefined : (selectedAnimation.value as AnimationType)
})

onMounted(() => {
  const stored = localStorage.getItem('hovue-theme')
  if (stored) {
    isDark.value = stored === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  updateTheme()
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
  localStorage.setItem('hovue-theme', isDark.value ? 'dark' : 'light')
}

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    document.documentElement.style.backgroundColor = '#1a202c'
  } else {
    document.documentElement.classList.remove('dark')
    document.documentElement.style.backgroundColor = '#ffffff'
  }
}

const colors = [
  { name: 'Current Color', value: 'currentColor' },
  { name: 'Black', value: '#000000' },
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Green', value: '#10b981' },
  { name: 'Red', value: '#ef4444' },
  { name: 'Purple', value: '#8b5cf6' },
  { name: 'Orange', value: '#f97316' },
  { name: 'Pink', value: '#ec4899' },
]

const categories = ['All', 'Arrows', 'Actions', 'Navigation', 'Media', 'Files', 'System', 'Time', 'UI']

const selectedCategory = ref('All')

const allIcons = [
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

const iconCategories: Record<string, string[]> = {
  Arrows: ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ChevronRight', 'ChevronDown'],
  Actions: ['Check', 'X', 'Plus', 'Minus', 'Copy', 'Trash'],
  Navigation: ['Search', 'Menu', 'Home', 'User', 'Settings'],
  Media: ['Play', 'Pause', 'Volume', 'Camera', 'Image', 'Music'],
  Files: ['File', 'Folder', 'Download', 'Upload'],
  System: ['Loader', 'Refresh', 'Sync', 'Settings'],
  Time: ['Clock', 'Calendar'],
  UI: ['Bell', 'Mail', 'Heart', 'Star'],
}

const filteredIcons = computed(() => {
  let icons = allIcons

  if (selectedCategory.value !== 'All') {
    icons = iconCategories[selectedCategory.value] || []
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    icons = icons.filter(icon => icon.toLowerCase().includes(query))
  }

  return icons
})

const iconComponent = computed(() => {
  const componentName = `Ho${selectedIcon.value}` as keyof typeof Icons
  return Icons[componentName] || null
})

const getIconComponent = (iconName: string) => {
  const componentName = `Ho${iconName}` as keyof typeof Icons
  return Icons[componentName] || null
}

const iconCode = computed(() => {
  const colorProp = selectedColor.value !== 'currentColor' 
    ? ` color="${selectedColor.value}"` 
    : ''
  const animationProp = selectedAnimation.value 
    ? ` animation="${selectedAnimation.value}"` 
    : ''
  
  return `<Ho${selectedIcon.value} :size="${iconSize.value}"${colorProp}${animationProp} />`
})

const copyCode = async () => {
  await navigator.clipboard.writeText(iconCode.value)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<style scoped>
.playground-container {
  min-height: 100vh;
  background: #f7fafc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.playground-container.dark-mode {
  background: #1a202c;
  color: #e2e8f0;
}

.playground-header {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 1.5rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.dark-mode .playground-header {
  background: #2d3748;
  border-bottom-color: #4a5568;
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-brand {
  display: flex;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s;
}

.logo-link:hover {
  opacity: 0.8;
}

.logo-img {
  width: 36px;
  height: 36px;
  object-fit: contain;
  flex-shrink: 0;
}

.playground-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 0.25rem 0;
  transition: color 0.3s ease;
}

.dark-mode .playground-title {
  color: #f7fafc;
}

.playground-subtitle {
  color: #718096;
  margin: 0;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.dark-mode .playground-subtitle {
  color: #a0aec0;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle {
  padding: 0.5rem;
  background: #edf2f7;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2d3748;
  transition: all 0.2s;
}

.theme-toggle:hover {
  background: #e2e8f0;
}

.dark-mode .theme-toggle {
  background: #4a5568;
  color: #e2e8f0;
}

.dark-mode .theme-toggle:hover {
  background: #718096;
}

.btn-secondary {
  padding: 0.5rem 1rem;
  background: #edf2f7;
  color: #2d3748;
  border-radius: 0.375rem;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background: #e2e8f0;
}

.dark-mode .btn-secondary {
  background: #4a5568;
  color: #e2e8f0;
}

.dark-mode .btn-secondary:hover {
  background: #718096;
}

.playground-main {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
}

.playground-sidebar {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  height: fit-content;
  position: sticky;
  top: 100px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease;
}

.dark-mode .playground-sidebar {
  background: #2d3748;
}

.sidebar-section {
  margin-bottom: 2rem;
}

.sidebar-section:last-child {
  margin-bottom: 0;
}

.sidebar-title {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #718096;
  margin: 0 0 0.75rem 0;
  transition: color 0.3s ease;
}

.dark-mode .sidebar-title {
  color: #a0aec0;
}

.search-input,
.select-input,
.color-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  transition: all 0.2s;
  background: white;
  color: #1a202c;
}

.dark-mode .search-input,
.dark-mode .select-input,
.dark-mode .color-input {
  background: #4a5568;
  border-color: #718096;
  color: #e2e8f0;
}

.search-input:focus,
.select-input:focus,
.color-input:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
}

.dark-mode .search-input:focus,
.dark-mode .select-input:focus,
.dark-mode .color-input:focus {
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
}

.control-group {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.slider {
  flex: 1;
}

.control-value {
  font-size: 0.875rem;
  color: #4a5568;
  font-weight: 500;
  min-width: 50px;
  text-align: right;
  transition: color 0.3s ease;
}

.dark-mode .control-value {
  color: #e2e8f0;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.color-btn {
  width: 100%;
  aspect-ratio: 1;
  border: 2px solid transparent;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
}

.color-btn.active {
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
}

.category-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.category-btn {
  padding: 0.5rem;
  text-align: left;
  background: transparent;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  color: #4a5568;
}

.dark-mode .category-btn {
  border-color: #4a5568;
  color: #a0aec0;
}

.category-btn:hover {
  background: #f7fafc;
}

.dark-mode .category-btn:hover {
  background: #4a5568;
}

.category-btn.active {
  background: #4299e1;
  color: white;
  border-color: #4299e1;
}

.playground-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.preview-card {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease;
}

.dark-mode .preview-card {
  background: #2d3748;
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.preview-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0;
  transition: color 0.3s ease;
}

.dark-mode .preview-title {
  color: #f7fafc;
}

.btn-copy {
  padding: 0.5rem;
  background: transparent;
  color: #4a5568;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
}

.btn-copy:hover {
  background: #f7fafc;
  border-color: #4299e1;
  color: #4299e1;
}

.dark-mode .btn-copy {
  color: #a0aec0;
  border-color: #4a5568;
}

.dark-mode .btn-copy:hover {
  background: #4a5568;
  border-color: #4299e1;
  color: #4299e1;
}

.preview-display {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background: #f7fafc;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  min-height: 200px;
  transition: background-color 0.3s ease;
}

.dark-mode .preview-display {
  background: #1a202c;
}

.preview-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-icon {
  transition: transform 0.2s;
}

.preview-icon-wrapper :deep(.hovue-animation-slide) {
  animation: slidePreview 2s ease infinite !important;
}

.preview-icon-wrapper :deep(.hovue-animation-bounce) {
  animation: bouncePreview 1s ease infinite !important;
}

.preview-icon-wrapper :deep(.hovue-animation-rotate) {
  animation: rotatePreview 2s linear infinite !important;
}

.preview-icon-wrapper :deep(.hovue-animation-pulse) {
  animation: pulsePreview 1.5s ease infinite !important;
}

.preview-icon-wrapper :deep(.hovue-animation-fade) {
  animation: fadePreview 2s ease infinite !important;
}

@keyframes slidePreview {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(8px); }
}

@keyframes bouncePreview {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@keyframes rotatePreview {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulsePreview {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes fadePreview {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.preview-code {
  background: #1a202c;
  border-radius: 0.375rem;
  overflow: hidden;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: #2d3748;
  border-bottom: 1px solid #4a5568;
}

.code-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #a0aec0;
}

.code-copy-btn {
  padding: 0.375rem;
  background: transparent;
  color: #a0aec0;
  border: 1px solid #4a5568;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
}

.code-copy-btn:hover {
  background: #4a5568;
  border-color: #4299e1;
  color: #4299e1;
}

.preview-code pre {
  margin: 0;
  padding: 1rem;
  color: #e2e8f0;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.875rem;
  overflow-x: auto;
}

.icons-section {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease;
}

.dark-mode .icons-section {
  background: #2d3748;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 1.5rem 0;
  transition: color 0.3s ease;
}

.dark-mode .section-title {
  color: #f7fafc;
}

.icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}

.icon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  background: white;
}

.dark-mode .icon-card {
  background: #2d3748;
  border-color: #4a5568;
}

.icon-card:hover {
  border-color: #4299e1;
  background: #f0f9ff;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dark-mode .icon-card:hover {
  background: #4a5568;
}

.icon-card.active {
  border-color: #4299e1;
  background: #ebf8ff;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
}

.dark-mode .icon-card.active {
  background: #2c5282;
}

.icon-display {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
}

.icon-name {
  font-size: 0.75rem;
  color: #4a5568;
  text-align: center;
  font-weight: 500;
  transition: color 0.3s ease;
}

.dark-mode .icon-name {
  color: #a0aec0;
}

/* Responsive utilities */
.desktop-only {
  display: flex;
}

.mobile-only {
  display: none !important;
}

/* Sidebar overlay */
.sidebar-overlay {
  display: none;
}

/* Mobile sidebar header */
.sidebar-header {
  display: none;
}

.sidebar-content {
  display: contents;
}

@media (max-width: 1024px) {
  .playground-main {
    grid-template-columns: 1fr;
  }

  .playground-sidebar {
    position: static;
  }
}

@media (max-width: 768px) {
  .desktop-only {
    display: none !important;
  }

  .mobile-only {
    display: flex !important;
  }

  /* Header mobile styles */
  .playground-header {
    padding: 1rem;
  }

  .header-content {
    gap: 0.5rem;
  }

  .logo-img {
    width: 32px;
    height: 32px;
  }

  .playground-title {
    font-size: 1.25rem;
    margin: 0;
  }

  .playground-subtitle {
    display: none;
  }

  .header-actions {
    gap: 0.5rem;
  }

  .mobile-menu-btn {
    padding: 0.5rem;
    background: transparent;
    border: 1px solid #e2e8f0;
    border-radius: 0.375rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2d3748;
    transition: all 0.2s;
  }

  .dark-mode .mobile-menu-btn {
    border-color: #4a5568;
    color: #e2e8f0;
  }

  .mobile-menu-btn:hover {
    background: #f7fafc;
    border-color: #4299e1;
  }

  .dark-mode .mobile-menu-btn:hover {
    background: #4a5568;
  }

  /* Sidebar overlay */
  .sidebar-overlay {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    z-index: 150;
  }

  /* Mobile sidebar */
  .playground-main {
    padding: 1rem;
    gap: 1rem;
  }

  .playground-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    max-width: 85vw;
    height: 100vh;
    z-index: 200;
    border-radius: 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    padding: 0;
    overflow: hidden;
  }

  .playground-sidebar.mobile-open {
    transform: translateX(0);
  }

  .sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.25rem;
    border-bottom: 1px solid #e2e8f0;
    flex-shrink: 0;
  }

  .dark-mode .sidebar-header {
    border-bottom-color: #4a5568;
  }

  .sidebar-header-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0;
    color: #1a202c;
  }

  .dark-mode .sidebar-header-title {
    color: #f7fafc;
  }

  .sidebar-close-btn {
    padding: 0.5rem;
    background: transparent;
    border: 1px solid #e2e8f0;
    border-radius: 0.375rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4a5568;
    transition: all 0.2s;
  }

  .dark-mode .sidebar-close-btn {
    border-color: #4a5568;
    color: #a0aec0;
  }

  .sidebar-close-btn:hover {
    border-color: #4299e1;
    color: #4299e1;
  }

  .sidebar-content {
    display: block;
    flex: 1;
    overflow-y: auto;
    padding: 1.25rem;
  }

  /* Category dropdown on mobile */
  .category-list {
    display: none;
  }

  /* Preview card mobile */
  .preview-card {
    padding: 1rem;
  }

  .preview-display {
    padding: 2rem 1rem;
    min-height: 150px;
  }

  .preview-title {
    font-size: 1.25rem;
  }

  .preview-code pre {
    font-size: 0.75rem;
  }

  /* Icons section mobile */
  .icons-section {
    padding: 1rem;
  }

  .section-title {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .icons-grid {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    gap: 0.75rem;
  }

  .icon-card {
    padding: 1rem 0.5rem;
    gap: 0.5rem;
  }

  .icon-name {
    font-size: 0.625rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .playground-header {
    padding: 0.75rem;
  }

  .brand-text {
    display: none;
  }

  .icons-grid {
    grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
    gap: 0.5rem;
  }

  .icon-card {
    padding: 0.75rem 0.25rem;
  }

  .icon-display {
    min-height: 28px;
  }

  .icon-display > * {
    transform: scale(0.85);
  }
}
</style>
