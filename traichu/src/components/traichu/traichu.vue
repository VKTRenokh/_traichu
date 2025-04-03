<script setup lang="ts">
import Search from '@/components/search/search.vue'
import { inject, onMounted, onUnmounted } from 'vue'
import Icon from './icon.vue'
import { parseKey } from './dock/utils/parse-key'
import { createRederict } from '@/utils/create-rederict'
import { links } from './dock/links'
import { initial, modeKey, modeToken, type Mode } from '@/mode'

const mode = inject<Mode>(modeToken, initial)

const updateStorage = () => localStorage.setItem(modeKey, JSON.stringify(mode))

const minimalMode = () => {
  mode.minimal = !mode.minimal

  updateStorage()
}

const keys = new Map<string, () => void>([
  ['<C-d>', minimalMode],
  ...links.map((link) => createRederict(link.bind, link.href)),
])

const listener = (event: KeyboardEvent) => {
  event.preventDefault()

  const action = keys.get(parseKey(event))

  if (!action) {
    return
  }

  action()
}

onMounted(() => window.addEventListener('keydown', listener))

onUnmounted(() => window.removeEventListener('keydown', listener))
</script>

<template>
  <section class="traichu">
    <Icon />
    <Search />
  </section>
</template>

<style>
aside {
  display: flex;
  justify-content: space-around;
}

aside img,
aside svg {
  height: 4.5rem;
}

.traichu {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: var(--spacing-l) var(--spacing-m) var(--spacing-m) var(--spacing-m);
  row-gap: var(--spacing-l);
  width: 20rem;
}
</style>
