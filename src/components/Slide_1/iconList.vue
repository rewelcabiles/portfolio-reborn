<template>
  <div
  v-motion :initial="{ x: -400 }" :enter="{ x: 0, transition: { duration: 2000, delay: 1200, type: 'spring', mass: 0.6 }, }"
  class="flex flex-row gap-4">
    <a
    v-for="(link, index) in links"
    :href="link.link"
    :key="index"
    target="_blank"
    :title="link.title"
    >
      <i :class="link.icon"></i>
    </a>
  </div>
</template>
<script setup lang="ts">
import { DocumentTextIcon } from "@heroicons/vue/24/solid";

const links = [
  {
    type: "img",
    link: "https://github.com/rewelcabiles",
    icon: 'fa-brands fa-github text-zinc-50 text-xl',
    title: "Github",
  },
  {
    type: "img",
    link: "https://www.linkedin.com/in/rewel-cabiles/",
    icon: "fa-brands fa-linkedin text-zinc-50 text-xl",
    title: "Linkedin",

  },
  {
    type: "img",
    link: "https://assets.rewelcabiles.me/portfolio/resume.pdf",
    icon: "fa-solid fa-file text-zinc-50 text-xl",
    title: "Resume",
  },
];
</script>
