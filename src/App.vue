<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  @apply bg-zinc-50;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply rounded-lg;
  @apply bg-zinc-500;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  @apply bg-zinc-600;
}
</style>
