<template>
  <section class="search">
    <form action="https://duckduckgo.com/" method="get" class="search-form">
      <label for="search-input" class="search-input-label">Search</label>
      <input type="text" id="search-input" autofocus>
      <button class="sr-only" tabindex="-1">Search</button>
    </form>
  </section>
</template>

<style scoped>
.search-form {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.search-input-label {
  display: none;
}
</style>
