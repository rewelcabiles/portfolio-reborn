<template>
  <div
    v-motion
    :initial="{ x: 5400 }"
    :enter="{
      x: 0,
      transition: { duration: 2000, delay: 1200, type: 'spring', mass: 0.2 },
    }"
  >
    <img
      :src="src"
      class="main_profile rounded-full border-black border-8 shadow-xl xl:w-44 xl:h-44 h-32 w-32 transition-all duration-50"
      alt="Me"/>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: "",
  },
});
</script>

<style>
img.main_profile {
  height: 11rem;
  transform: translate(-50%, -50%);
}
</style>
