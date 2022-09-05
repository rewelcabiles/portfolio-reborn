
<template>

<div class="h-screen bg-zinc-50 relative flex flex-col">
    <div v-motion :initial="{ y: 4400, x: 1500 }" :enter="{ y: 0, x:0, opacity: 1, transition: { duration: 1000, delay: 400, type:'keyframes', ease: 'easeInOut' }}" id="background"
    class="background_aztec w-full mx-auto lg:block hidden">
      <roundImageVue id="me" class="" src="https://assets.rewelcabiles.me/portfolio/me.jpeg"></roundImageVue>
      <iconListVue id="links"></iconListVue>
    </div>
    <div id="blub" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { duration: 1000, delay: 400, type:'keyframes', ease: 'easeInOut' }}"
    class="flex flex-col mx-auto text-center lg:pt-0 lg:pl-96 lg:text-left lg:mt-[45vh] mt-[-25vh]">
        <div class="lg:hidden block w-full mx-auto mb-20">
          <img v-motion :initial="{ y: -2400 }" :enter="{ y: 0, transition: { duration: 3000, delay: 1300, type: 'spring', mass: 0.2 } }" src="https://assets.rewelcabiles.me/portfolio/me.jpeg"
          class="rounded-full border-4 shadow-xl mx-auto w-32 h-32"/>
        </div>
        <div class="md:text-5xl text-2xl text-zinc-900">
            Hi! I'm Rewel Cabiles
        </div>
        <div class="md:ml-5 mt-6 text-lg text-zinc-900 lg:px-0 px-10">
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

#background {
  clip-path: polygon(
    10% 0%,
    30% 0%,
    45% 100%,
    25% 100%
  );
  position: absolute;
  height: 100vh;
  filter: drop-shadow(0px 10px 5px rgba(0,0,0,0.1))
}





</style>