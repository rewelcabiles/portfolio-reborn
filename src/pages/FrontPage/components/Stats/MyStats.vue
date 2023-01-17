<template>
  <div
    v-motion
    :initial="{ opacity: 0 }"
    :visible="{ opacity: 1, transition: { duration: 550, delay: 100 } }"
    class="w-screen pt-32 pb-72 min-h-screen bg-zinc-50 bg-gradient-to-b from-zinc-50 via-zinc-50 to-zinc-400"
  >
    <div class="text-center font-bold text-4xl pb-14 text-zinc-800">
      What can I do?
    </div>
    <div class="flex flex-wrap sm:space-0 justify-evenly">
      <MyStatsCard v-for="data in projectStore.mySkills" :key="data.title">
        <template v-slot:title>
          {{ data.title }}
        </template>
        <template v-slot:content>
          <div v-for="subject in data.content" :key="subject.title">
            <div :class="`font-mono ${getRandomColor()}`">
              {{ subject.title }}
            </div>
            <div class="px-7 border-l-2 border-zinc-400">
              <div
                v-for="(section, index) in subject.content"
                :key="index"
                class="flex flex-row"
              >
                <div>{{ section.title }}</div>
                <i :class="`ml-auto ${section.icon}`" />
              </div>
            </div>
          </div>
        </template>
      </MyStatsCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProjectStore } from "@/stores/projects";
import MyStatsCard from "@/pages/FrontPage/components/Stats/MyStatsCard.vue";
const colors = [
  "text-amber-400",
  "text-red-400",
  "text-blue-400",
  "text-indigo-400",
  "text-pink-400",
  "text-purple-400",
  "text-red-400",
  "text-teal-400",
  "text-yellow-400",
];
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
const projectStore = useProjectStore();
</script>

<style scoped></style>
