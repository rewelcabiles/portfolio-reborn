<template>
  <div id="frontpage" class="h-screen overflow-x-hidden overflow-y-scroll snap-y snap-proximity relative scroll-smooth bg-slate-50">
    <NavVue></NavVue>
    
    <BlurbVue id="blurb" class="z-100 snap-center"></BlurbVue>
    
    <aboutMe id="aboutMe" class="z-50 snap-center"></aboutMe>
    <SlideProjectsVue id="projects"></SlideProjectsVue>
  </div>
  
</template>
<script setup lang="ts">
import NavVue from '@/components/Nav/Nav.vue'
import iconListVue from "@/components/Slide_1/iconList.vue";
import roundImageVue from "@/components/Slide_1/roundImage.vue";
import BlurbVue from "@/components/Slide_1/Blurb.vue"
import SlideProjectsVue from "@/components/Slide_2/SlideProjects.vue"
import aboutMe from "@/components/Slide_3/about.vue";
</script>
<style>

body {
  overflow: hidden
}

#frontpage {
  min-height: 100vh;
}





</style>