<template>
  <div class="w-screen min-h-screen py-40 gap-y-20 flex flex-col">
    <div class="flex flex-col gap-2 lg:px-40">
      <div
        v-motion
        :initial="{ y: -100, opacity: 0 }"
        :enter="{
          y: 0,
          opacity: 1,
          transition: { duration: 250, delay: 100, type: 'spring', mass: 0.2 },
        }"
        class="md:text-4xl text-3xl font-bold text-zinc-900 mx-auto"
      >
        My personal Projects
      </div>
      <div class="mx-auto font-light">
        Click on a card for more information.
      </div>
    </div>
    <div class="flex xl:flex-row flex-col lg:px-40">
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :visible="{ opacity: 1, transition: { duration: 250, delay: 100 } }"
        class="flex flex-wrap flex-row content-start gap-10 px-10 lg:px-0 py-10 lg:py-0 xl:w-2/3 w-full"
      >
        <SlideProjectCardsVue
          v-for="(value, index) in projectStore.data"
          :key="index"
          :data="value"
          :selected="value.name === projectStore.selectedProject"
          @projectCardClicked="nodeClicked(value)"
        />
      </div>
      <div id="projectDetails" class="py-16 md:py-0 px-10 xl:w-1/3 pb-20">
        <Transition
          enter-active-class="duration-500 ease-out"
          enter-from-class="transform opacity-0"
          enter-to-class="opacity-100"
        >
          <div
            class="text-zinc-800 flex flex-col gap-4"
            v-if="projectStore.selectedProject"
          >
            <div class="text-3xl font-bold">
              {{ projectStore.selectedProject.name }}
            </div>
            <div id="icons" class="flex flex-row gap-5">
              <div
                v-if="projectStore.selectedProject.github"
                class="align-center"
              >
                <a :href="projectStore.selectedProject.github" target="_blank">
                  <i class="fa-brands fa-github mr-1"></i>Github
                </a>
              </div>
              <div
                v-if="projectStore.selectedProject.homepage"
                class="align-center"
              >
                <a
                  :href="'https://' + projectStore.selectedProject.homepage"
                  target="_blank"
                >
                  <i class="fa-sharp fa-solid fa-house mr-1"></i>Homepage
                </a>
              </div>
            </div>
            <div id="info_desc" class="text-justify">
              {{ projectStore.selectedProject.description }}
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SlideProjectCardsVue from "./ProjectCards.vue";
import { useProjectStore } from "@/stores/projects";
const projectStore = useProjectStore();

function nodeClicked(key: string) {
  projectStore.setSelected(key as string);
  setTimeout(() => {
    const element = document.getElementById("projectDetails");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
}
</script>
