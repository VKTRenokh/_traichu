<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

let frame = 0

const time = ref(new Date().toLocaleTimeString())
const date = ref(new Date().toDateString())

const tick = () => {
  time.value = new Date().toLocaleTimeString()
  date.value = new Date().toDateString()
}

const clock = () => {
  tick()
  frame = requestAnimationFrame(clock)
}

onMounted(() => {
  frame = requestAnimationFrame(() => {
    clock()
  })

  tick()
})

onUnmounted(() => cancelAnimationFrame(frame))
</script>

<template>
  <p class="date">{{ date }}</p>
  <p class="time">{{ time }}</p>
</template>
