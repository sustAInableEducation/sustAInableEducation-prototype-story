<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="flex justify-center py-2 h-28">
    <nuxt-link to="/" class="flex gap-2 items-center">
      <img src="./assets/logo.svg" alt="Logo" class="size-24" />
      <div class="font-bold text-xl">sustAInableEducation</div>
    </nuxt-link>
  </header>
  <RouterView />
</template>
