<script setup lang="ts">
import { stories } from '@/data/stories'

defineProps({
  id: Number
})
</script>

<template>
    <h1 v-if="id !== undefined">{{ stories[id].title }}</h1>
    <h1 v-else>Story not found</h1>
</template>