<template>
  <div id="frontpage" class="h-screen w-screen scroll-smooth bg-slate-50 overflow-x-hidden">
    <NavVue class="z-10"></NavVue>
    <BlurbVue id="blurb" class="z-0 fixed snap-center"></BlurbVue>
    <aboutMe id="aboutMe" class="snap-center z-50"></aboutMe>
    <SlideProjectsVue id="projects"></SlideProjectsVue>
    <footerVue></footerVue>
  </div>
  
</template>
<script setup lang="ts">
import NavVue from '@/components/Nav/Nav.vue'
import footerVue from '@/components/Footer/footer.vue';
import BlurbVue from "@/components/Slide_1/Blurb.vue"
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