<script setup lang="ts">
import Search from "@/components/search/search.vue";
import { defineAsyncComponent } from "vue";
import Icon from "./icon.vue"

const Dock = defineAsyncComponent(() => import("@/components/traichu/dock/dock-a.vue"))
</script>

<template>
  <section class="traichu">
    <Icon />
    <Dock />
    <Search />
  </section>
</template>

<style >
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
