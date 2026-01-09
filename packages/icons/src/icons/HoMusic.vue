<template>
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
    :style="{ '--hovue-duration': `${animationDuration}ms` }"
  >
    <path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { IconProps } from './types';

const props = withDefaults(defineProps<IconProps>(), {
  size: 24,
  color: 'currentColor',
  animation: 'slide',
  animationDuration: 300,
});

const animationClass = computed(() => {
  if (!props.animation) return '';
  return `hovue-animation-${props.animation}`;
});
</script>

<style scoped>
.hovue-animation-slide {
  transition: transform var(--hovue-duration, 300ms) ease;
}

.hovue-animation-slide:hover {
  transform: translateX(4px);
}

.hovue-animation-bounce {
  transition: transform var(--hovue-duration, 300ms) ease;
}

.hovue-animation-bounce:hover {
  animation: bounce 0.6s ease;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.hovue-animation-rotate {
  transition: transform var(--hovue-duration, 300ms) ease;
}

.hovue-animation-rotate:hover {
  transform: rotate(180deg);
}

.hovue-animation-pulse {
  transition: transform var(--hovue-duration, 300ms) ease;
}

.hovue-animation-pulse:hover {
  animation: pulse 1s ease infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.hovue-animation-fade {
  transition: opacity var(--hovue-duration, 300ms) ease;
}

.hovue-animation-fade:hover {
  opacity: 0.7;
}
</style>
