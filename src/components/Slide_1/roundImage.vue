<template>
    <img :src="src" class="rounded-full border-4 shadow-xl"/>
</template>
<script setup lang="ts">

const props = defineProps({
    src: {
        type: String,
        default: ''
    }
})

</script>