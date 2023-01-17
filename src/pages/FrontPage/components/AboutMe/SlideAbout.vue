<template>
  <div
    id="SlideAboutMe"
    class="py-32 z-50 from-zinc-800 via-zinc-800 bg-gradient-to-b to-zinc-700"
  >
    <div class="flex flex-col lg:px-20 px-5">
      <div class="flex xl:flex-row flex-col mx-auto gap-10 xl:gap-44 xl:px-20">
        <div class="text-zinc-50 md:px-10 w-full">
          <div
            v-motion
            :initial="{ opacity: 0 }"
            :visible="{ opacity: 1, transition: { duration: 500, delay: 50 } }"
            class="mx-auto text-4xl z-50 mb-10"
          >
            About me
          </div>
          <div
            v-motion
            :initial="{ opacity: 0 }"
            :visible="{ opacity: 1, transition: { duration: 500, delay: 200 } }"
            class="prose prose-invert text-justify"
          >
            <span
              v-html="coverter.makeHtml(projectStore.profile.About.Intro.value)"
            />
          </div>
        </div>
        <div class="text-zinc-50 w-full md:px-10">
          <div
            v-motion
            :initial="{ opacity: 0 }"
            :visible="{ opacity: 1, transition: { duration: 500, delay: 500 } }"
            class="mx-auto text-4xl z-50 mb-10"
          >
            My Experience
          </div>
          <div
            v-motion
            :initial="{ opacity: 0 }"
            :visible="{ opacity: 1, transition: { duration: 500, delay: 600 } }"
            class="z-50 pb-4"
          >
            I've had the pleasure of working and learning at these great places
          </div>
          <div class="flex flex-col gap-5">
            <div
              v-motion
              :initial="{ opacity: 0 }"
              :visible="{
                opacity: 1,
                transition: {
                  duration: 200,
                  delay: 100 * (index ? index : 1 + 1),
                },
              }"
              v-for="(value, key, index) in projectStore.profile.Jobs"
              :key="index"
              class="bg-zinc-900 rounded-xl shadow-xl p-5"
            >
              <div class="flex flex-row text-zinc-50 mb-1 text-lg font-bold">
                {{ key }}
              </div>
              <div
                class="text-justify prose prose-invert p-4"
                v-html="coverter.makeHtml(value.value)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useProjectStore } from "@/stores/projects";
import showdown from "showdown";
import showdownHighlight from "showdown-highlight";
const coverter = new showdown.Converter({
  extensions: [showdownHighlight],
});
const projectStore = useProjectStore();
</script>
<style>
#SlideAboutMe {
  height: 120vh;
  padding-top: 100vh;
}
</style>
