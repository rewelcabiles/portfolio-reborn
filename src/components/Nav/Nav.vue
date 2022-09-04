
<template>
    <div class="fixed right-0 flex flex-row gap-10 text-zinc-500 lg:pr-44 p-4">
        <a v-for="(link, index) in navLinks" :key="index"
        v-motion :initial="{ opacity: 0 }" :enter="{  opacity: 1, transition: { duration: 600, delay: 600 * (index + 1), type:'keyframes', ease: 'easeInOut' }}"
        :href="link.link"
        class="hover:text-zinc-600 transition-all duration-200">
            {{ link.label }}
        </a>
    </div>

</template>
<script setup lang="ts">

const navLinks = [
    {
        label: "Home",
        link: "#blurb"
    },
    {
        label: "My Projects",
        link: "#projects"
    },
    {
        label: "Contact Me",
        link: "#contactMe"
    }
]


</script>
<style>

</style>