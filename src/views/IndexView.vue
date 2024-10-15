<script setup lang="ts">
const btnClicked = (text: string) => {
  alert(`Button clicked: ${text}`);
};
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="mt-3 mb-8 text-3xl underline">Hello world!</h1>
    <Button class="w-28" label="Check" icon="pi pi-check" @click="btnClicked('Check')" />
  </div>
</template>
