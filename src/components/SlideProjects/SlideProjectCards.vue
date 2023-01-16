
<template>
    <div :class="divClass.concat(selected ? ['lg:scale-125 scale-105 z-50 border-4'] : ['scale-100', 'z-20'])" :style="`background-image: url(${data.preview})`" @click="$emit('projectCardClicked', data)">
        <div class="font-bold from-zinc-900 to-zinc-800 bg-gradient-to-tr text-white p-2  border-b-2 ">
            {{data.name}}
        </div>
    </div>

</template>
<script setup lang="ts">
import { ref } from 'vue';


const divClass = ref([
    "md:h-40", "lg:w-64", "w-full", "md:32", "lg:h-64",
    "hover:border-4", "border-zinc-900", "aspect-video",
    "transition-all", "duration-50",
    "rounded-md",  "bg-cover", "bg-center", "cursor-pointer","shadow-md"
])

const props = defineProps({
    "data": {
        type: Object,
        default: {}
    },
    
    "selected": {
        type: Boolean,
        default: false
    }
})

</script>
