<script setup lang="ts">
import { onMounted, onUnmounted, inject } from 'vue';
import { links } from './links';
import { createRederict } from '@/utils/create-rederict';
import { modeToken, modeKey, initial, type Mode } from '@/mode';
import { parseKey } from './utils/parse-key';

const mode = inject<Mode>(modeToken, initial);

const updateStorage = () => {
  localStorage.setItem(modeKey, JSON.stringify(mode));
};

const setIsOpened = () => {
  mode.dockClosed = !mode.dockClosed;

  updateStorage();
};

const setIsMinimal = () => {
  mode.minimal = !mode.minimal;

  updateStorage();
};

const keys = new Map<string, () => void>([
  ['d', () => setIsOpened()],
  ['<C-d>', setIsMinimal],
  ...links.map((link) => createRederict(link.bind, link.href)),
]);

const listener = (event: KeyboardEvent) => {
  event.preventDefault();

  const action = keys.get(parseKey(event));

  if (!action) {
    return;
  }

  action();
};

onMounted(() => window.addEventListener('keydown', listener));

onUnmounted(() => window.removeEventListener('keydown', listener));
</script>

<template>
  <Transition>
    <template v-if="mode.dockClosed">
      <nav class="dock" v-if="mode.dockClosed && !mode.minimal">
        <ul>
          <template v-for="link in links">
            <li v-if="link.icon">
              <a :href="link.href" v-if="link.icon">
                <img :src="link.icon" alt="" />
              </a>
            </li>
          </template>
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
}

.dock a:focus,
.dock a:hover {
  animation: slime 0.75s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
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
  filter: hue-rotate(102deg) saturate(53%) brightness(52%);
}

/* github */
.dock li:nth-child(5) a:focus,
.dock li:nth-child(5) a:hover {
  fill: hsl(14, 89%, 53%);
  filter: hue-rotate(12) saturate(89%) brightness(53%);
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
