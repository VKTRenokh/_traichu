<script setup lang="ts">
import { defineProps, ref, onMounted } from "vue"
import { baseUrl } from "@/utils/base-url"
import type { Props } from "./types/props"
import type { WeatherResponse, Weather } from "@/types/weather"
import { createIcon } from "./utils/create-icon"
import { getWeatherInfo } from "./utils/get-weather-info"
import { parseTemperature } from "./utils/parse-temperature"

const props = defineProps<Props>()

const weather = ref<WeatherResponse | null>(null)
const currentWeather = ref<Weather | null>(null)
const temperature = ref<string>('')

const fetchWeather = async () => {
  const response = await fetch(baseUrl(`/data/2.5/weather?q=${props.city}&appid=${props.apiKey}`))

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const json: WeatherResponse = await response.json()

  return json
}

onMounted(async () => {
  try {
    weather.value = await fetchWeather()
    currentWeather.value = getWeatherInfo(weather.value)
    temperature.value = parseTemperature(weather.value)
  } catch (e) {
    console.error(e)
  }
})
</script>

<template>
  <template v-if="currentWeather">
    <section class="weather">
      <p class="location">{{ props.city }}</p>
      <p class="details">
        <img :src="createIcon(currentWeather.icon)" alt="weather icon" />
        {{ currentWeather.description }}
        <span class="separator">|</span>
        <span>{{ temperature }} °C</span>
      </p>
    </section>
  </template>
</template>

<style scoped>
.weather {
  text-align: right;
  flex: 1 1 auto;
}


img {
  display: inline-flex;
  margin-right: var(--spacing-xs);
  width: 1.5rem;
}
</style>
