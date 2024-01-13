<script lang="ts">
import { defineComponent } from "vue";
import type { WeatherResponse } from "@/interfaces/IWeather";

interface ComponentsStates {
  loading: boolean;
  description: string | null;
  tempK: number | null;
  tempC: number | null;
  location: string | null,
  icon: string | null
}

export default defineComponent({
  data(): ComponentsStates {
    return {
      loading: true,
      description: null,
      tempK: null,
      tempC: null,
      location: null,
      icon: null
    }
  },

  created() {
    this.fetchData()
  },

  props: ["apiKey", "city"],

  methods: {
    async fetchData() {
      const response: Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`)
      const data: IWeather = await response.json()
      const tempK = parseFloat(data.main.temp.toString())
      this.tempC = Math.round(tempK - 273.15)
      this.tempK = tempK
      this.location = data.name
      this.description = data.weather[0].description
      this.icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    }
  }
})

</script>

<template>
  <section>
    <p class="location">{{ location || '' }}</p>
    <p class="details">
      <img :src="icon || ''" alt="">
      {{ description }}
      <span class="separator">|</span>
      <span :title="tempK ? tempK.toString() : ''">{{ `${tempC || ''} °C` }}</span>
    </p>
  </section>
</template>
