<script setup lang="ts">
import { stories } from '@/data/stories'
import router from '@/router'

const startStory = (id: number) => {
  // console.log('Start story with id:', id)
  router.push({ name: 'story', params: { id } })
}
</script>

<template>
  <div
    class="pt-6 max-w-screen-lg flex flex-col items-center mx-auto gap-12 text-center"
  >
    <div class="background"></div>
    <h1 class="text-7xl font-bold">Prototyp Story Generierung</h1>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
      diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate
      velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
      at vero eros et accumsan et iusto
    </p>
    <div class="flex flex-row justify-center gap-12">
      <Button
        v-for="story in stories"
        :key="story.id"
        :label="story.title"
        class="w-64"
        @click="startStory(story.id)"
      />
    </div>
  </div>
</template>
