<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="flex justify-center py-2 h-28">
    <div
      class="flex gap-2 items-center cursor-pointer"
      @click="$router.push({ name: 'index' })"
    >
      <img src="./assets/logo.svg" alt="Logo" class="size-24" />
      <div class="font-bold text-xl">sustAInableEducation</div>
    </div>
  </header>
  <RouterView />
</template>
