<script lang="ts" setup>
import Weather from "./weather/weather.vue";
import Clock from "@/components/header/time/Clock.vue";
</script>

<template>
  <header>
    <section class="date-time">
      <Clock />
    </section>
    <section class="weather">
      <Weather api-key="51310ba1835a914983b3139c03f6733f" city="Paphos" />
    </section>
  </header>
</template>

<style>
header {
  animation: fade 1s cubic-bezier(.17, .67, .83, .67);
  display: none;
  flex: 0 1 auto;
  flex-direction: row;
  justify-content: center;
  padding: var(--spacing-m) var(--spacing-m) 0 var(--spacing-m);
  position: absolute;
  top: 0;
  width: 100%;
}

.date-time,
.weather {
  flex: 1 1 auto;
}

.weather {
  text-align: right;
}

.weather img {
  display: inline-flex;
  margin-right: var(--spacing-xs);
  width: 1.5rem;
}
</style>
