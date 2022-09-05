
<template>
    <div
    :class="divClass.concat(selected ? ['scale-125', 'z-50','border-4'] : ['scale-100', 'z-20'])"
    :style="`background-image: url(${data.preview})`"
    @click="$emit('projectCardClicked', data)"
    >
        <div class="font-bold text-lg bg-zinc-900 text-white p-4  border-b-2 border-b-zinc-800">
            {{data.name}}
        </div>
    </div>

</template>
<script setup lang="ts">
import { ref } from 'vue';


const divClass = ref([
    "w-32", "h-20", "lg:w-64", "lg:h-40", 
    "hover:border-4", "border-zinc-900", "",
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
