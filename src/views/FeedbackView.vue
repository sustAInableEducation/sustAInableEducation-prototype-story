<script setup lang="ts">
import { onMounted, ref, nextTick, computed } from 'vue'
import type { Story } from '../types/story'
import { stories } from '@/data/stories'

const props = defineProps({
  id: Number,
})
const selectedStory = ref<Story>({} as Story)
const error = ref<boolean>(false)
const immersiveness = ref<number>(-1)
const clarity = ref<number>(-1)
const interactivity = ref<number>(-1)
const thematicRelevancy = ref<number>(-1)
const learningEffect = ref<number>(-1)
const additionalFeedback = ref<string>('')
const feedbackNotComplete = computed(() => {
  return (
    immersiveness.value === -1 ||
    clarity.value === -1 ||
    interactivity.value === -1 ||
    thematicRelevancy.value === -1 ||
    learningEffect.value === -1
  )
})

const submitFeedback = () => {
  const feedback = {
    storyId: selectedStory.value.id,
    immersiveness: immersiveness.value,
    clarity: clarity.value,
    interactivity: interactivity.value,
    thematicRelevancy: thematicRelevancy.value,
    learningEffect: learningEffect.value,
    additionalFeedback: additionalFeedback.value,
  }
  console.log(feedback)
}

const scrollToTop = () => {
  nextTick(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
}

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
  scrollToTop()
})
</script>

<template>
  <div class="background"></div>
  <div
    v-if="error"
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
  <div
    v-else
    class="pt-6 max-w-screen-lg flex flex-col items-center mx-auto gap-6"
  >
    <div>
      <h1 class="text-7xl font-bold text-center pb-2">Feedback</h1>
      <p class="text-center">
        Bitte bewerte die folgenden fünf Aspekte auf einer Skala von 1 (sehr
        schlecht) bis 5 (sehr gut). Am Ende gibt es die Möglichkeit, uns
        zusätzliches Feedback in einem Freitextfeld mitzuteilen.
      </p>
    </div>
    <div
      class="flex flex-col gap-4 bg-primary-200 rounded-lg shadow-xl p-6 w-full"
    >
      <h3 class="text-3xl font-bold text-center">
        Wie fesselnd und interessant war die Geschichte?
      </h3>
      <div class="flex flex-row justify-evenly">
        <div v-for="i in 5" :key="i" class="flex items-center gap-2">
          <RadioButton
            v-model="immersiveness"
            :input-id="`immersiveness-${i}`"
            name="immersivness"
            :value="i"
          />
          <label :for="`immersiveness-${i}`">{{ i }}</label>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-4 bg-primary-200 rounded-lg shadow-xl p-6 w-full"
    >
      <h3 class="text-3xl font-bold text-center">
        Wie klar und verständlich war der Handlungsverlauf der Geschichte?
      </h3>
      <div class="flex flex-row justify-evenly">
        <div v-for="i in 5" :key="i" class="flex items-center gap-2">
          <RadioButton
            v-model="clarity"
            :input-id="`clarity-${i}`"
            name="clarity"
            :value="i"
          />
          <label :for="`clarity-${i}`">{{ i }}</label>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-4 bg-primary-200 rounded-lg shadow-xl p-6 w-full"
    >
      <h3 class="text-3xl font-bold text-center">
        Wie gut haben die Entscheidungspunkte die Interaktivität der Geschichte
        unterstützt?
      </h3>
      <div class="flex flex-row justify-evenly">
        <div v-for="i in 5" :key="i" class="flex items-center gap-2">
          <RadioButton
            v-model="interactivity"
            :input-id="`interactivity-${i}`"
            name="interactivity"
            :value="i"
          />
          <label :for="`interactivity-${i}`">{{ i }}</label>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-4 bg-primary-200 rounded-lg shadow-xl p-6 w-full"
    >
      <h3 class="text-3xl font-bold text-center">
        Wie gut wurde das Thema Nachhaltigkeit in der Geschichte umgesetzt?
      </h3>
      <div class="flex flex-row justify-evenly">
        <div v-for="i in 5" :key="i" class="flex items-center gap-2">
          <RadioButton
            v-model="thematicRelevancy"
            :input-id="`thematicRelevancy-${i}`"
            name="thematicRelevancy"
            :value="i"
          />
          <label :for="`thematicRelevancy-${i}`">{{ i }}</label>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-4 bg-primary-200 rounded-lg shadow-xl p-6 w-full"
    >
      <h3 class="text-3xl font-bold text-center">
        Inwieweit hat die Geschichte dein Bewusstsein für Nachhaltigkeitsthemen
        geschärft oder dein Wissen erweitert?
      </h3>
      <div class="flex flex-row justify-evenly">
        <div v-for="i in 5" :key="i" class="flex items-center gap-2">
          <RadioButton
            v-model="learningEffect"
            :input-id="`learningEffect-${i}`"
            name="learningEffect"
            :value="i"
          />
          <label :for="`learningEffect-${i}`">{{ i }}</label>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-4 bg-primary-200 rounded-lg shadow-xl p-6 w-full"
    >
      <h3 class="text-3xl font-bold text-center">Zusätzliches Feedback</h3>
      <p class="text-center">
        Bitte teile uns weitere Anmerkungen oder Verbesserungsvorschläge zu der
        Geschichte mit.
      </p>
      <TextArea v-model="additionalFeedback" autoResize rows="5" cols="30" />
    </div>
    <div class="flex flex-row justify-center gap-12 pt-4 pb-6">
      <Message v-if="feedbackNotComplete" severity="error"
        >Bewerte bitte alle Aspekte, bevor das Feedback abgeschickt werden
        kann!</Message
      >
      <Button
        v-else
        label="Feedback abschicken"
        class="w-64"
        @click="submitFeedback()"
      />
    </div>
  </div>
</template>
