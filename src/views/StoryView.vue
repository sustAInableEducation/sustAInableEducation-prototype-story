<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import type { Story } from '../types/story'
import type { Message } from '../types/message'
import { stories } from '@/data/stories'

const props = defineProps({
  id: Number,
})
const selectedStory = ref<Story>({} as Story)
const errorWhileGenerating = ref<boolean>(false)
const messages = ref<Message[]>([])
const storyTitle = ref<string>('')

const generateNextPart = (userMessage: Message) => {
  messages.value.push(userMessage)
  const data = {
    model: 'llama3.1',
    messages: messages.value,
    format: 'json',
    stream: false,
  }
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: import.meta.env.VITE_LLM_API_URL + '/chat',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  }

  axios
    .request(config)
    .then(response => {
      const assistantMessage = response.data.message
      messages.value.push(assistantMessage)
      storyTitle.value = JSON.parse(assistantMessage.content).title
      //console.log(assistantMessage)
      //console.log(storyTitle.value)
    })
    .catch(error => {
      console.log(error)
      errorWhileGenerating.value = true
    })
}

const startStory = (systemMessage: Message) => {
  messages.value.push(systemMessage)
  generateNextPart({
    role: 'user',
    content: selectedStory.value.userPrompt,
  })
}

onMounted(() => {
  if (
    props.id === undefined ||
    props.id < 0 ||
    props.id >= stories.length ||
    !stories[props.id]
  ) {
    errorWhileGenerating.value = true
  } else {
    selectedStory.value = stories[props.id]
    startStory({
      role: 'system',
      content: selectedStory.value?.systemPrompt,
    })
  }
})
</script>

<template>
  <div
    v-if="errorWhileGenerating"
    class="pt-6 max-w-screen-lg flex flex-col items-center mx-auto gap-12 text-center"
  >
    <Message severity="error" class="text-center">
      <p class="text-xl">Es ist ein Fehler aufgetreten!</p>
    </Message>
    <Button
      label="Zurück zur Startseite"
      @click="$router.push({ name: 'index' })"
    />
  </div>
  <div v-if="!errorWhileGenerating && storyTitle !== ''">
    <p>{{ storyTitle }}</p>
  </div>
</template>
