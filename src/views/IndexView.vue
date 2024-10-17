<script setup lang="ts">
interface Story {
  title: string;
  description: string;
  prompt: string;
}

const stories: Story[] = [
  {
    title: "Story 1",
    description: "Description 1",
    prompt: "Prompt 1",
  },
  {
    title: "Story 2",
    description: "Description 2",
    prompt: "Prompt 2",
  },
  {
    title: "Story 3",
    description: "Description 3",
    prompt: "Prompt 3",
  },
  {
    title: "Story 4",
    description: "Description 4",
    prompt: "Prompt 4",
  }
];
</script>

<template>
  <div class="pt-6 max-w-screen-lg flex flex-col items-center mx-auto gap-12">
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
      <Button v-for="story in stories" :key="story.title" :label="story.title" class="w-28" />
    </div>
  </div>
</template>
