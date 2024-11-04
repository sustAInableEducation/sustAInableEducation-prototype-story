<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Story } from '../types/story'
import { stories } from '@/data/stories'

const props = defineProps({
  id: Number,
})
const selectedStory = ref<Story>({} as Story)
const error = ref(false)

onMounted(() => {
  if (
    props.id === undefined ||
    props.id < 0 ||
    props.id >= stories.length ||
    !stories[props.id]
  ) {
    error.value = true
  } else {
    selectedStory.value = stories[props.id]
  }
})
</script>

<template>
  <div>
    <h1 v-if="error">Error</h1>
    <h1 v-else>{{ selectedStory.title }}</h1>
  </div>
</template>
