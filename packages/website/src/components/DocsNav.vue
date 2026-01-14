<template>
  <nav class="docs-nav-footer" v-if="prev || next">
    <div class="docs-nav-footer-inner">
      <a v-if="prev" :href="prev.url" class="docs-nav-link docs-nav-prev">
        <svg
          class="docs-nav-icon docs-nav-icon-prev"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <div class="docs-nav-content">
          <span class="docs-nav-label">Previous</span>
          <span class="docs-nav-title">{{ prev.title }}</span>
        </div>
      </a>
      <div v-else class="docs-nav-spacer"></div>

      <a v-if="next" :href="next.url" class="docs-nav-link docs-nav-next">
        <div class="docs-nav-content">
          <span class="docs-nav-label">Next</span>
          <span class="docs-nav-title">{{ next.title }}</span>
        </div>
        <svg
          class="docs-nav-icon docs-nav-icon-next"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
      <div v-else class="docs-nav-spacer"></div>
    </div>
  </nav>
</template>

<script setup lang="ts">
interface NavItem {
  url: string;
  title: string;
}

interface Props {
  prev?: NavItem;
  next?: NavItem;
}

defineProps<Props>();
</script>

<style scoped>
.docs-nav-footer {
  margin-top: var(--spacing-3xl);
  margin-bottom: var(--spacing-3xl);
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--border);
}

.docs-nav-footer-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
}

.docs-nav-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition: all 0.2s;
}

.docs-nav-link:hover {
  border-color: var(--primary);
  background: var(--bg-card-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.docs-nav-prev {
  text-align: left;
}

.docs-nav-next {
  text-align: right;
  justify-content: flex-end;
}

.docs-nav-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.docs-nav-icon {
  color: var(--text-muted);
  flex-shrink: 0;
  transition:
    color 0.2s,
    transform 0.2s;
}

.docs-nav-link:hover .docs-nav-icon {
  color: var(--primary);
}

.docs-nav-link:hover .docs-nav-icon-prev {
  transform: translateX(-2px);
}

.docs-nav-link:hover .docs-nav-icon-next {
  transform: translateX(2px);
}

.docs-nav-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-bottom: var(--spacing-xs);
}

.docs-nav-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.docs-nav-spacer {
}

@media (max-width: 640px) {
  .docs-nav-footer-inner {
    grid-template-columns: 1fr;
    padding: 0 var(--spacing-md);
  }

  .docs-nav-next {
    text-align: left;
  }
}
</style>
