<template>
    <div v-motion :initial="{ x: 5400 }" :enter="{ x: 0, transition: { duration: 2000, delay: 1200, type: 'spring', mass: 0.6 }, }">
        <img :src="src" class="rounded-full border-4 shadow-xl w-44 h-44"/>
    </div>
</template>
<script setup lang="ts">

const props = defineProps({
    src: {
        type: String,
        default: ''
    }
})

</script>

<style>
img {
  height: 11rem;
  margin-top: calc(100vh / 2);
  margin-left: calc(100vw / 3.5);
  transform: translate(-50%, -50%);
}
</style>