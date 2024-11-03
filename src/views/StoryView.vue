<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Story } from '../types/story'
import type { Message } from '../types/message'
import { stories } from '@/data/stories'
import axios from 'axios'

const props = defineProps({
  id: Number,
})
const selectedStory = ref<Story | null>(null)
const storyNotFound = ref<boolean>(false)
const messages = ref<Message[]>([])

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
      console.log(messages.value)
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

  generateNextPart({
    role: 'user',
    content: selectedStory.value?.prompt,
  })
})

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const getLocalModels = () => {
//   const config = {
//     method: 'get',
//     maxBodyLength: Infinity,
//     url: import.meta.env.VITE_LLM_API_URL + '/tags',
//     headers: {},
//   }

//   axios
//     .request(config)
//     .then(response => {
//       console.log(response.data)
//     })
//     .catch(error => {
//       console.log(error)
//     })
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const generateCompletion = () => {
//   const data = {
//     model: 'llama3.1',
//     prompt: 'Why is the sky blue?',
//     stream: false,
//   }

//   const config = {
//     method: 'post',
//     maxBodyLength: Infinity,
//     url: import.meta.env.VITE_LLM_API_URL + '/generate',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: data,
//   }

//   axios
//     .request(config)
//     .then(response => {
//       console.log(response.data)
//     })
//     .catch(error => {
//       console.log(error)
//     })
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const chatRequest = () => {
//   const messages = [
//     {
//       role: 'user',
//       content: 'Why is the sky blue?',
//     },
//   ]
//   let data = {
//     model: 'llama3.1',
//     messages: messages,
//     stream: false,
//   }

//   const config = {
//     method: 'post',
//     maxBodyLength: Infinity,
//     url: import.meta.env.VITE_LLM_API_URL + '/chat',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: data,
//   }

//   axios
//     .request(config)
//     .then(response => {
//       const message = response.data.message
//       messages.push(message)
//       messages.push({
//         role: 'user',
//         content: 'Can it be other colors?',
//       })
//       data = {
//         model: 'llama3.1',
//         messages: messages,
//         stream: false,
//       }
//       axios
//         .request({ ...config, data: data })
//         .then(response => {
//           const message = response.data.message
//           messages.push(message)
//           console.log(messages)
//         })
//         .catch(error => {
//           console.log(error)
//         })
//     })
//     .catch(error => {
//       console.log(error)
//     })
// }
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
