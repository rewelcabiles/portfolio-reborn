<template>

<div class="w-screen h-screen py-20 gap-y-20 flex flex-col">
    <div class="flex flex-col gap-2 px-40">
        <div class="text-4xl font-bold">
            stuff i've worked on
        </div>
        <div class="flex flex-row">
            ...
        </div>
    </div>
    <div class="flex flex-row gap-20 bg-zinc-800 z-50 p-10 w-full h-2/3 shadow-inner shadow-zinc-800 px-40">
        <div class="h-fit w-2/3 grid lg:grid-cols-3  grid-cols-2 lg:gap-10  py-10  z-50 ">
            <SlideProjectCardsVue
            v-for="(value, key) in projectStore.data"
            :data="value"
            :selected="key === projectStore.selectedProject"
            @projectCardClicked="projectStore.setSelected(key as string)"/>
        </div>
        <div id="details" class="transition-all text-zinc-50 duration-200 w-1/3 flex flex-col gap-4 px-10" v-if="projectStore.data[projectStore.selectedProject]">
            <div class="text-3xl font-bold">
                {{ projectStore.data[projectStore.selectedProject].name }}
            </div>
            <div id="icons" class="flex flex-row gap-5">
                <div v-if="projectStore.data[projectStore.selectedProject].github" class="align-center">
                    <a :href="projectStore.data[projectStore.selectedProject].github" target="_blank">
                        <i class="fa-brands fa-github mr-1"></i>Github
                    </a>
                </div>
                <div v-if="projectStore.data[projectStore.selectedProject].homepage" class="align-center">
                    <a :href="'https://'+ projectStore.data[projectStore.selectedProject].homepage" target="_blank">
                        <i class="fa-sharp fa-solid fa-house mr-1"></i>Homepage
                    </a>
                    
                </div>
            </div>
            <div id="info_desc" class="text-justify">
                
                {{ projectStore.data[projectStore.selectedProject].description }}
                
            </div>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
import SlideProjectCardsVue from './SlideProjectCards.vue';
import { useProjectStore } from '@/stores/projects';

const projectStore = useProjectStore();

const i = [
    {
        "image": "assets.rewelcabiles.me/portfolio/me.jpeg",
        
        "name": "Neon Fire",
        "description": "hella hi hello"
    }
]
</script>
<style>
#background2 {
  clip-path: polygon(
    10% 0%,
    30% 0%,
    45% 100%,
    25% 100%
  );
  position: absolute;
  
  filter: drop-shadow(0px 10px 5px rgba(0,0,0,0.1))
}
</style>