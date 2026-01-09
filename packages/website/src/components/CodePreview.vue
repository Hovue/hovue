<template>
  <div class="code-block">
    <div class="code-header">
      <div class="code-dots">
        <span class="code-dot"></span>
        <span class="code-dot"></span>
        <span class="code-dot"></span>
      </div>
      <div class="code-tabs">
        <button :class="['code-tab', { active: activeTab === 'vue' }]" @click="activeTab = 'vue'">
          App.vue
        </button>
        <button :class="['code-tab', { active: activeTab === 'nuxt' }]" @click="activeTab = 'nuxt'">
          nuxt.config.ts
        </button>
      </div>
    </div>
    <div class="code-content">
      <div v-if="activeTab === 'vue'">
        <span class="keyword">&lt;script</span> <span class="prop">setup</span
        ><span class="keyword">&gt;</span><br />
        <span class="keyword">import</span> { <span class="component">HoArrowRight</span>,
        <span class="component">HoCheck</span>, <span class="component">HoLoader</span> }
        <span class="keyword">from</span> <span class="string">'hovue'</span><br />
        <span class="keyword">&lt;/script&gt;</span><br /><br />
        <span class="keyword">&lt;template&gt;</span><br />
        &nbsp;&nbsp;<span class="keyword">&lt;</span><span class="component">HoArrowRight</span>
        <span class="prop">:size</span>=<span class="string">"24"</span>
        <span class="prop">animation</span>=<span class="string">"slide"</span>
        <span class="keyword">/&gt;</span><br />
        &nbsp;&nbsp;<span class="keyword">&lt;</span><span class="component">HoCheck</span>
        <span class="prop">:size</span>=<span class="string">"24"</span>
        <span class="prop">animation</span>=<span class="string">"bounce"</span>
        <span class="keyword">/&gt;</span><br />
        &nbsp;&nbsp;<span class="keyword">&lt;</span><span class="component">HoLoader</span>
        <span class="prop">:size</span>=<span class="string">"24"</span>
        <span class="prop">animation</span>=<span class="string">"spin"</span>
        <span class="keyword">/&gt;</span><br />
        <span class="keyword">&lt;/template&gt;</span>
      </div>
      <div v-else>
        <span class="comment">// nuxt.config.ts</span><br />
        <span class="keyword">export default</span> defineNuxtConfig({<br />
        &nbsp;&nbsp;<span class="prop">modules</span>: [<span class="string">'hovue/nuxt'</span
        >]<br />
        })
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeTab = ref<'vue' | 'nuxt'>('vue');
</script>

<style scoped>
.code-block {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
}

.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--border);
  background: rgba(0, 0, 0, 0.2);
}

.code-dots {
  display: flex;
  gap: 0.5rem;
}

.code-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.code-dot:nth-child(1) {
  background: #ff5f56;
}
.code-dot:nth-child(2) {
  background: #ffbd2e;
}
.code-dot:nth-child(3) {
  background: #27ca40;
}

.code-tabs {
  display: flex;
  gap: 0.5rem;
}

.code-tab {
  padding: 0.4rem 1rem;
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s;
}

.code-tab.active {
  background: var(--bg-card);
  color: var(--primary);
}

.code-content {
  padding: 1.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.8;
  overflow-x: auto;
  text-align: left;
  direction: ltr;
}

.code-content > div {
  text-align: left;
  direction: ltr;
}

.code-content :deep(.comment) {
  color: var(--text-muted);
}
.code-content :deep(.keyword) {
  color: var(--purple);
}
.code-content :deep(.string) {
  color: var(--primary);
}
.code-content :deep(.component) {
  color: var(--orange);
}
.code-content :deep(.prop) {
  color: var(--pink);
}
.code-content :deep(.value) {
  color: var(--primary);
}
</style>
