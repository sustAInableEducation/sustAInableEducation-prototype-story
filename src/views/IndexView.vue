<script setup lang="ts">
interface Story {
  id: number
  title: string
  prompt: string
}

const stories: Story[] = [
  {
    id: 0,
    title: 'Sauberes Wasser',
    prompt:
      'Schreibe eine Geschichte zum Thema "Sauberes Wasser". Diese Geschichte soll interaktiv sein, das bedeutet es wird insgesamt drei Entscheidungspunkte geben, jeder Entscheidungspunkt enthält vier Option, welchen jeweils einen unterschiedlichen Einfluss auf den weiteren Verlauf der Geschichte haben. Nach jedem Entscheidungspunkt stoppe und warte auf die gewählte Option. Jede Gute Geschichte brauch einen Titel, also bitte erstellen auch einen. Nach dem dritten Entscheidungspunkt soll die Geschichte beendet sein.',
  },
  {
    id: 1,
    title: 'Klimaschutzmaßnahmen',
    prompt:
      'Schreibe eine Geschichte zum Thema "Klimaschutzmaßnahmen". Diese Geschichte soll interaktiv sein, das bedeutet es wird insgesamt drei Entscheidungspunkte geben, jeder Entscheidungspunkt enthält vier Option, welchen jeweils einen unterschiedlichen Einfluss auf den weiteren Verlauf der Geschichte haben. Nach jedem Entscheidungspunkt stoppe und warte auf die gewählte Option. Jede Gute Geschichte brauch einen Titel, also bitte erstellen auch einen. Nach dem dritten Entscheidungspunkt soll die Geschichte beendet sein',
  },
  {
    id: 2,
    title: 'Nachhaltige Städte',
    prompt:
      'Schreibe eine Geschichte zum Thema "Nachhaltige Städte". Diese Geschichte soll interaktiv sein, das bedeutet es wird insgesamt drei Entscheidungspunkte geben, jeder Entscheidungspunkt enthält vier Option, welchen jeweils einen unterschiedlichen Einfluss auf den weiteren Verlauf der Geschichte haben. Nach jedem Entscheidungspunkt stoppe und warte auf die gewählte Option. Jede Gute Geschichte brauch einen Titel, also bitte erstellen auch einen. Nach dem dritten Entscheidungspunkt soll die Geschichte beendet sein.',
  },
  {
    id: 3,
    title: 'Sauberer Strom',
    prompt:
      'Schreibe eine Geschichte zum Thema "Sauberer Strom". Diese Geschichte soll interaktiv sein, das bedeutet es wird insgesamt drei Entscheidungspunkte geben, jeder Entscheidungspunkt enthält vier Option, welchen jeweils einen unterschiedlichen Einfluss auf den weiteren Verlauf der Geschichte haben. Nach jedem Entscheidungspunkt stoppe und warte auf die gewählte Option. Jede Gute Geschichte brauch einen Titel, also bitte erstellen auch einen. Nach dem dritten Entscheidungspunkt soll die Geschichte beendet sein.',
  },
]

const startStory = (id: number) => {
  console.log('Start Story', id)
  // Navigate to story view
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
