<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const search = ref<HTMLInputElement>()

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key !== 'i') {
    return
  }

  if (!search.value || document.activeElement === search.value) {
    console.log('!!')
    return
  }

  event.preventDefault()
  search.value.focus()
}

const handleInputKeyDown = (event: KeyboardEvent) => {
  if (event.key !== 'Escape') {
    console.log('not escape')
    return
  }

  if (!(event.target instanceof HTMLInputElement)) {
    console.log('not input')
    return
  }

  event.target.blur()
}

onMounted(() => window.addEventListener('keydown', handleKeyDown))

onUnmounted(() => window.removeEventListener('keydown', handleKeyDown))
</script>

<template>
  <section class="search">
    <form action="https://duckduckgo.com/" method="get" class="search-form" autocomplete="off">
      <label for="search-input" class="search-input-label">Search</label>
      <input
        ref="search"
        type="text"
        id="search-input"
        name="q"
        autofocus
        @keydown="handleInputKeyDown"
      />
      <button class="sr-only" tabindex="-1" aria-label="search"></button>
    </form>
  </section>
</template>

<style scoped>
.search-form {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.search-input-label {
  display: none;
}
</style>
