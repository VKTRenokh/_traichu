<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from "vue"
import { links, github, discord } from "./links"
import { createRederict } from "@/utils/create-rederict"
import { isOpenedKey } from "./constants/local-storage"

const string = localStorage.getItem(isOpenedKey)

const isOpened = reactive<{ is: boolean }>(string ? JSON.parse(string) : { is: false })

const setIsOpened = () => {
  console.log(isOpened.is)

  isOpened.is = !isOpened.is

  localStorage.setItem(isOpenedKey, JSON.stringify(isOpened))
}

const keys = new Map<string, () => void>([
  ['d', () => setIsOpened()],
  createRederict("D", discord),
  createRederict("g", github),
  createRederict("G", "https://gitlab.com")
])

const listener = (event: KeyboardEvent) => {
  if (event.target instanceof HTMLInputElement) {
    return
  }

  const action = keys.get(event.key)

  console.log(action)

  action?.()
}

onMounted(() => window.addEventListener("keydown", listener))

onUnmounted(() => window.removeEventListener("keydown", listener))
</script>

<template>
  <Transition>
    <template v-if="isOpened.is">
      <nav class="dock" v-if="isOpened">
        <ul>
          <li v-for="link in links">
            <a :href="link.href">
              <img :src="link.icon" alt="">
            </a>
          </li>
        </ul>
      </nav>
    </template>
  </Transition>
</template>

<style>
.dock ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  column-gap: var(--spacing-m);
  row-gap: var(--spacing-m);
}

.dock a {
  display: block;
  /* fill: var(--primary-link-color); */
  transition: fill 0.125s ease-in-out;
}

.dock img {
  filter: hue-rotate(102deg) saturate(53%) brightness(52%);
  border: magenta 1px solid;
}

.dock a:focus,
.dock a:hover {
  animation: slime 0.75s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
  fill: var(--primary-link-hover-color);
  outline: none;
}

.dock li:nth-child(1) a:focus,
.dock li:nth-child(1) a:hover {
  fill: hsl(5, 81%, 56%);
  border: red 1px solid;
}

/* Gmail */
.dock li:nth-child(2) a:focus,
.dock li:nth-child(2) a:hover {
  fill: hsl(217, 89%, 61%);
}

/* Google Calendar */
.dock li:nth-child(3) a:focus,
.dock li:nth-child(3) a:hover {
  fill: hsl(44, 100%, 50%);
}

/* Google Keep */
.dock li:nth-child(4) a:focus,
.dock li:nth-child(4) a:hover {
  /*fill: var(--primary-link-hover-color);*/
  fill: hsl(102, 53%, 52%);
  filter: hue-rotate(102deg) saturate(53%) brightness(52%)
}

/* github */
.dock li:nth-child(5) a:focus,
.dock li:nth-child(5) a:hover {
  fill: hsl(14, 89%, 53%);
  filter: hue-rotate(12) saturate(89%) brightness(53%)
}

.dock img {
  height: 1.5rem;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media screen and (min-width: 48em) {
  .dock ul {
    column-gap: 0;
    justify-content: space-around !important;
    padding: 0;
    margin: 0 100px;
  }
}
</style>
