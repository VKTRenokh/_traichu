<script lang="ts">
import {defineComponent} from "vue";

interface IComponentStates {
  currentTime: string,
  currentDate: string
}

export default defineComponent({
  data(): IComponentStates {
    return {
      currentTime: new Date().toLocaleTimeString(),
      currentDate: new Date().toDateString()
    }
  },

  created() {
    setInterval(() => {
      this.tick()
    }, 1000)
  },

  methods: {
    tick(): void {
      this.currentTime = new Date().toLocaleTimeString()
      this.currentDate = new Date().toDateString()
    }
  }
})
</script>

<template>
  <section class="date-time">
    <p class="date">{{ currentDate }}</p>
    <p class="time">{{ currentTime }}</p>
  </section>
</template>
