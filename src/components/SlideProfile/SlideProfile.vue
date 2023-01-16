<template>
  <div class="w-screen h-screen">
    <div
      class="px-auto lg:py-44 py-10"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{
        opacity: 1,
        transition: {
          duration: 1000,
          delay: 400,
          type: 'keyframes',
          ease: 'easeInOut',
        },
      }"
    >
      <div class="w-full mx-auto mb-12">
        <img
          v-motion
          :initial="{ y: -2400 }"
          :enter="{
            y: 0,
            transition: {
              duration: 3000,
              delay: 1300,
              type: 'spring',
              mass: 0.2,
            },
          }"
          src="@/assets/images/me.jpeg"
          class="rounded-full border-4 border-zinc-900 shadow-xl mx-auto h-40 h-40"
        />
        <iconListVue id="linkSmalls" class="mt-4 mx-auto w-fit"></iconListVue>
      </div>
      <div class="md:text-5xl text-2xl text-zinc-900 text-center">
        Hi! I'm Rewel Cabiles
      </div>
      <div
        class="md:ml-5 mt-6 text-lg text-zinc-900 lg:px-0 px-10 pb-10 text-center"
      >
        I’m a software & web developer based in Hong Kong / Philippines
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import iconListVue from "@/components/SlideProfile/iconList.vue";
</script>

<style></style>
