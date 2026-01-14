<template>
  <button
    :class="['copy-button', { copied: isCopied }]"
    @click="copyToClipboard"
    :aria-label="isCopied ? 'Copied!' : 'Copy code'"
    :title="isCopied ? 'Copied!' : 'Copy code'"
  >
    <svg
      v-if="!isCopied"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
    <svg
      v-else
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span class="copy-button-text">{{ isCopied ? 'Copied' : 'Copy' }}</span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  code: string;
}>();

const isCopied = ref(false);

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.code);
    isCopied.value = true;
    setTimeout(() => {
      isCopied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy:', err);
    const textArea = document.createElement('textarea');
    textArea.value = props.code;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      isCopied.value = true;
      setTimeout(() => {
        isCopied.value = false;
      }, 2000);
    } catch (fallbackErr) {
      console.error('Fallback copy failed:', fallbackErr);
    }
    document.body.removeChild(textArea);
  }
};
</script>

<style scoped>
.copy-button {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.copy-button:hover {
  background: var(--bg-dark);
  border-color: var(--primary);
  color: var(--text-primary);
}

.copy-button.copied {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
}

.copy-button svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.copy-button-text {
  font-size: 0.75rem;
}
</style>

