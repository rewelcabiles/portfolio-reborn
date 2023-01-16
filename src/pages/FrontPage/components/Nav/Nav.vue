<template>
  <div class="w-full flex flex-row bg-zinc-800">
    <div class="mx-auto lg:ml-auto flex flex-row gap-10 text-zinc-600 p-5">
      <a
        v-for="(link, index) in navLinks"
        :key="index"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{
          opacity: 1,
          transition: {
            duration: 300,
            delay: 200 * index,
            type: 'keyframes',
            ease: 'easeInOut',
          },
        }"
        @click="gotoLink(link.link)"
        class="hover:text-zinc-50  text-zinc-400 cursor-pointer transition-all duration-200 justify-center"
      >
        <i class="fa-regular fa-circle hover:scale-110 transition-all" :id="`${link.link}Nav`" />
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useProjectStore } from "@/stores/projects";

const projectStore = useProjectStore();

function gotoLink(data: string) {
  projectStore.analyticsNavbarClicked(data);
  window.location.href = data;
}

const navLinks = [
  {
    label: "Home",
    link: "#blurb",
  },
  {
    label: "What can I do?",
    link: "#skills",
  },
  {
    label: "About",
    link: "#aboutMe",
  },
  {
    label: "My Projects",
    link: "#projects",
  },
];



</script>
<style></style>
