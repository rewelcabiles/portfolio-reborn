<template>
  <div class="p-20 w-screen h-screen grid grid-cols-2 overflow-y-scroll">
    <div
      class="h-full m-8"
      v-for="(section, sectionKey, index) in projectStore.profile"
      :key="index"
    >
      <div class="text-2xl font-bold text-center">
        {{ sectionKey }}
      </div>
      <div class="bg-zinc-700 shadow-xl p-10 rounded-xl space-y-8">
        <div v-for="(field, fieldIndex) in section" :key="fieldIndex">
          <div class="font-bold text-zinc-50">
            {{ field.name }}
          </div>
          <input
            v-if="field.type === 'text'"
            class="rounded w-full bg-zinc-700 text-zinc-50 border-b-2 border-zinc-50"
            v-model="field.value"
          />
          <textarea
            v-if="field.type === 'textarea'"
            class="rounded w-full h-96 bg-zinc-600 text-zinc-50 border-b-2 border-zinc-50"
            v-model="field.value"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProjectStore } from "@/stores/projects";
import { set } from "firebase/database";
const projectStore = useProjectStore();

projectStore.$subscribe(() => {
  set(projectStore.profileRefRef, projectStore.profile);
});
</script>
