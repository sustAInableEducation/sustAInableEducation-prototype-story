<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Story } from '../types/story'
import { stories } from '@/data/stories'
import axios from 'axios'

const props = defineProps({
  id: Number,
})
const selectedStory = ref<Story | null>(null)
const storyNotFound = ref<boolean>(false)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getLocalModels = () => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://bedlinger-server.tail853a7d.ts.net:11434/api/tags',
    headers: {},
  }

  axios
    .request(config)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
    })
}

onMounted(() => {
  if (props.id === undefined || !stories[props.id]) {
    storyNotFound.value = true
  } else {
    selectedStory.value = stories[props.id]
  }
})
</script>

<template>
  <div
    v-if="storyNotFound"
    class="pt-6 max-w-screen-lg flex flex-col items-center mx-auto gap-12 text-center"
  >
    <Message severity="error" class="text-center">
      <p class="text-xl">Die angegebene Story wurde nich gefunden</p>
    </Message>
    <Button
      label="Zurück zur Startseite"
      @click="$router.push({ name: 'index' })"
    />
  </div>
  <div v-else>
    <p>{{ selectedStory?.title }}</p>
  </div>
</template>
