<template>
  <div id="frontpage" class="h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory relative scroll-smooth">
    <NavVue></NavVue>
    <div v-motion :initial="{ y: 4400, x: 1500 }" :enter="{ y: 0, x:0, opacity: 1, transition: { duration: 1000, delay: 400, type:'keyframes', ease: 'easeInOut' }}"
    id="background" class="left-0 w-screen overflow-hidden z-0" >
      <roundImageVue id="me" class="" src="https://assets.rewelcabiles.me/portfolio/me.jpeg"></roundImageVue>
      <iconListVue id="links"></iconListVue>
    </div>
    <BlurbVue id="blurb" class="z-100 snap-center"></BlurbVue>
    <SlideProjectsVue id="projects" class="z-100 snap-center"></SlideProjectsVue>
    <contactsVue id="contactMe" class="z-100 snap-center"></contactsVue>
  </div>
  
</template>
<script setup lang="ts">
import NavVue from '@/components/Nav/Nav.vue'
import iconListVue from "@/components/Slide_1/iconList.vue";
import roundImageVue from "@/components/Slide_1/roundImage.vue";
import BlurbVue from "@/components/Slide_1/Blurb.vue"
import SlideProjectsVue from "@/components/Slide_2/SlideProjects.vue"
import contactsVue from "@/components/Slide_3/contacts.vue";
</script>
<style>

body {
  overflow: hidden
}

#frontpage {
  min-height: 100vh;
}

#background {
  clip-path: polygon(
    10% 0%,
    30% 0%,
    80% 95%,
    100% 95%,
    100% 100%,
    0% 100%,
    0% 95%,
    60% 95%
  );
  position: absolute;
  height: 300vh;
  background-color: theme('colors.zinc.900');
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='64' viewBox='0 0 32 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 28h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12h-4v-8zM0 36h8v20H0v-4h4V40H0v-4z' fill='%23343434' fill-opacity='0.19' fill-rule='evenodd'/%3E%3C/svg%3E");
  
  filter: drop-shadow(0px 10px 5px rgba(0,0,0,0.1))
}




</style>