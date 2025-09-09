<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Prices</RouterLink>
      <RouterLink to="/exchange-history">Exchange history</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  place-items: center;
}

nav {
  padding: 1rem 0;
}

a {
  text-decoration: none;
  color: var(--link-color);
  transition: 0.4s;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
}

a + a {
  margin-left: 1rem;
}

.router-link-active {
  background-color: var(--link-hover-color);
}

@media (hover: hover) {
  a:hover {
    background-color: var(--link-hover-color);
  }
}
</style>
