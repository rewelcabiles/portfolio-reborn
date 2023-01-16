<template>
  <div
    v-motion :initial="{ x: -2400 }" :enter="{ x: 0, transition: { duration: 2000, delay: 1200, type: 'spring', mass: 0.3 }, }"
    class="flex flex-row gap-4 rounded-md py-2 px-3 align-middle my-auto">
    <a
      v-for="(link, index) in links"
      :href="link.link"
      :key="index"
      target="_blank"
      :title="link.title"
      class="align-center"
    >
      <i
        :class="`${link.icon} text-xl hover:scale-125 text-zinc-800 transition-all duration-50`"
      ></i>
    </a>
  </div>
</template>
<script setup lang="ts">
const links = [
  {
    type: "img",
    link: "https://github.com/rewelcabiles",
    icon: "fa-brands fa-github",
    title: "Github",
  },
  {
    type: "img",
    link: "https://www.linkedin.com/in/rewel-cabiles/",
    icon: "fa-brands fa-linkedin",
    title: "Linkedin",
  },
  {
    type: "img",
    link: "https://firebasestorage.googleapis.com/v0/b/portfolio-eb1b3.appspot.com/o/files%2FRewel_Cabiles_Resume_HK.pdf?alt=media&token=7dcb46a8-800d-42b5-9cdc-ebb49b693a16",
    icon: "fa-solid fa-file",
    title: "Resume",
  },
  {
    type: "img",
    link: "mailto:rewel.cabiles@gmail.com",
    icon: "fa-solid fa-envelope text-zinc-50 text-xl hover:scale-125 text-zinc-800 transition-all duration-50",
    title: "Email",
  },
];
</script>