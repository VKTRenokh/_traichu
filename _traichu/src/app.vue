<!--     __             _      __
        / /__________ _(_)____/ /_  __  __
       / __/ ___/ __ `/ / ___/ __ \/ / / /
      / /_/ /  / /_/ / / /__/ / / / /_/ /
 _____\__/_/   \__,_/_/\___/_/ /_/\__,_/
-->

<script setup lang="ts">
import Header from "@/components/header/header.vue";
import Traichu from "@/components/traichu/traichu.vue";
</script>

<template>
  <main>
    <Header />
    <Traichu />
  </main>
</template>

<style>
main {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}
</style>
