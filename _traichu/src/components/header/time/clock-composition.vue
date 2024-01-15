<script setup lang="ts">
import { onMounted, ref } from 'vue';

const time = ref(new Date().toLocaleTimeString())
const date = ref(new Date().toDateString())

const tick = () => {
  time.value = new Date().toLocaleTimeString()
  date.value = new Date().toDateString()
}

onMounted(() => {
  tick()
})
</script>

<template>
  <section class="date-time">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>

  </section>
</template>
