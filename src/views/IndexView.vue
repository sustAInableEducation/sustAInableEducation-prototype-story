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
    <p class="text-lg">
      Unser Prototyp zeigt, wie Künstliche Intelligenz (KI) genutzt werden kann,
      um interaktive Geschichten rund um Nachhaltigkeit zu erstellen.
      Besucher*innen können zwischen verschiedenen Themen wählen und erleben,
      wie ihre Entscheidungen den Verlauf der Story beeinflussen. Am Ende gibt
      es die Möglichkeit, Feedback zu geben, das uns hilft, die endgültige
      Version der Web-App zu verbessern. Dein Feedback ist uns wichtig! Teste
      die Geschichten und sag uns, was dir gefällt oder wo es noch
      Verbesserungen gibt. Deine Rückmeldungen fließen direkt in die
      Weiterentwicklung der App ein.
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
