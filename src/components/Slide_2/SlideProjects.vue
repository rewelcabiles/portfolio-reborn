<template>

<div class="w-screen min-h-screen py-40 gap-y-20 flex flex-col">
    <div class="flex flex-col gap-2 lg:px-40">
        <div v-motion :initial="{ y: -100, opacity: 0 }" :enter="{ y: 0,  opacity: 1, transition: { duration: 250, delay: 100, type:'spring', mass: 0.2  }}"
        class="md:text-4xl text-3xl font-bold text-zinc-900 mx-auto">
            My personal Projects
        </div>
        <div class="mx-auto font-light">
            Click on a card for more information.
        </div>
    </div>
    <div class="flex xl:flex-row flex-col gap-20 z-50 lg:px-40">
        <div v-motion :initial="{ opacity: 0 }" :visible="{ opacity: 1, transition: { duration: 250, delay: 100 }}"
        class="flex md:flex-row flex-wrap lg:gap-20 gap-10 auto-rows-max py-10 z-50 xl:w-2/3 w-full px-10">
            <SlideProjectCardsVue
            v-for="(value, key, index) in projectStore.data"
            :key="index"
            :data="value"
            :selected="key === projectStore.selectedProject"
            @projectCardClicked="nodeClicked(key as string)"/>
        </div>
        <div id="projectDetails" class="py-28 px-10 xl:w-1/3 pb-20">        
            <Transition
            enter-active-class="duration-500 ease-out"
            enter-from-class="transform opacity-0"
            enter-to-class="opacity-100"
            >
                <div class="text-zinc-800 flex flex-col gap-4" v-if="projectStore.data[projectStore.selectedProject]">
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
            </Transition>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
import SlideProjectCardsVue from './SlideProjectCards.vue';
import { useProjectStore } from '@/stores/projects';
import { ref, onMounted } from 'vue'

const projectStore = useProjectStore();

const i = [
    {
        "image": "assets.rewelcabiles.me/portfolio/me.jpeg",
        
        "name": "Neon Fire",
        "description": "hella hi hello"
    }
]

function nodeClicked(key: string) {
    projectStore.setSelected(key as string)
    setTimeout(() => {
        var element = document.getElementById('projectDetails')!
        element.scrollIntoView({ behavior: "smooth" });
    }, 100)
    

}

</script>
<style>

</style>