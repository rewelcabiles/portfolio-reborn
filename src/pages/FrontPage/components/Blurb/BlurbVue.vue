<template>
  <div class="w-screen h-screen">
    <div
      class="px-auto lg:py-44 py-32"
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
          alt="My profile picture"
        />
        <IconListVue id="linkSmalls" class="mt-4 mx-auto w-fit"></IconListVue>
      </div>
      <div class="md:text-5xl text-2xl text-zinc-900 text-center">
        {{ projectStore.profile.Blurb.Intro.value }}
      </div>
      <div
        class="md:ml-5 mt-6 text-lg text-zinc-900 lg:px-0 px-10 pb-10 text-center"
      >
        {{ projectStore.profile.Blurb.Descriptor.value }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconListVue from "@/pages/FrontPage/components/Blurb/iconList.vue";
import { useProjectStore } from "@/stores/projects";

const projectStore = useProjectStore();
</script>
<style></style>
