
<template>

<div class="w-screen h-screen">
    

    <div
    v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { duration: 1000, delay: 1400, type:'keyframes', ease: 'easeInOut' }}"
    id="blub"
    class="flex flex-col">
        <div class="md:text-5xl text-2xl">
            Hi! I'm Rewel Cabiles
        </div>
        <div class="ml-2 md:ml-5 mt-4 text-lg">
            I’m a software & web developer based in Hong Kong / Philippines
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import iconListVue from "@/components/Slide_1/iconList.vue";
import roundImageVue from "@/components/Slide_1/roundImage.vue";

</script>

<style scoped>
#blub {
  position: relative;
  top: calc((100vh / 2) - 3rem);
  left: calc((100vw / 2) - 4rem);
}


</style>