
<template>

<div class="h-screen bg-zinc-50 relative flex flex-col">
    <div
    v-motion :initial="{ y: 4400, x: 1500 }" :enter="{ y: 0, x:0, opacity: 1, transition: { duration: 1000, delay: 400, type:'keyframes', ease: 'easeInOut' }}"
    id="background" class="background_aztec w-full mx-auto lg:block hidden">
      <roundImageVue id="me" class="" src="https://assets.rewelcabiles.me/portfolio/me.jpeg"></roundImageVue>
      <iconListVue id="links"></iconListVue>
    </div>
    <div
    v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { duration: 1000, delay: 1400, type:'keyframes', ease: 'easeInOut' }}"
    id="blub"
    class="flex flex-col mx-auto my-auto pl-44">
        <div class="md:text-5xl text-2xl text-zinc-900">
            Hi! I'm Rewel Cabiles
        </div>
        <div class="md:ml-5 mt-4 text-lg text-zinc-900">
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
  
  
}


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