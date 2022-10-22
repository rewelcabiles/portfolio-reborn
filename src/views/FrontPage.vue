<template>
  <div id="frontpage" class="h-screen w-screen scroll-smooth bg-slate-50 overflow-x-hidden">
    <NavVue class="z-10"></NavVue>
    <Slide1 id="blurb" class="z-0 snap-center" />
    <aboutMe id="aboutMe" class="snap-center z-50"></aboutMe>
    <SlideProjectsVue id="projects"></SlideProjectsVue>
    <footerVue></footerVue>
  </div>
  
</template>
<script setup lang="ts">
import NavVue from '@/components/Nav/Nav.vue'
import footerVue from '@/components/Footer/footer.vue';
import Slide1 from '@/components/Slide_1/Slide1.vue'
import SlideProjectsVue from "@/components/Slide_2/SlideProjects.vue"
import aboutMe from "@/components/Slide_3/about.vue";
</script>
<style>
#projects > * {
  z-index: 10;
}

#frontpage {
  min-height: 100vh;
}

</style>