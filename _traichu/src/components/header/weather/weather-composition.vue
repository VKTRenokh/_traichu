<script setup lang="ts">
import { defineProps, ref, onMounted } from "vue"
import { baseUrl } from "@/utils/base-url"
import type { Props } from "./types/props"
import type { Weather } from "@/types/weather"

const props = defineProps<Props>()

const weather = ref<Weather>(null)

const fetchWeather = async () => {
  const response = await fetch(baseUrl(`/data/2.5/weather?q=${props.city}&appid=${props.apiKey}`))

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const json: Weather = response.json()
}

onMounted(async () => {
  try {
    weather.value = fetchWeather()
  } catch (e) {
    console.error(e)
  }
})
</script>
