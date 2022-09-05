
<template>
    <div class="fixed w-full flex flex-row bg-zinc-50 ">
        <div class="mx-auto lg:ml-auto flex flex-row gap-10 text-zinc-500 p-5">
            <a v-for="(link, index) in navLinks" :key="index"
            v-motion :initial="{ opacity: 0 }" :enter="{  opacity: 1, transition: { duration: 300, delay: 200 * (index), type:'keyframes', ease: 'easeInOut' }}"
            :href="link.link"
            class="hover:text-zinc-600 transition-all duration-200">
                {{ link.label }}
            </a>
        </div>
    </div>
</template>
<script setup lang="ts">

const navLinks = [
    {
        label: "Home",
        link: "#blurb"
    },
    {
        label: "About",
        link: "#aboutMe"
    },
    {
        label: "My Projects",
        link: "#projects"
    },
    
]


</script>
<style>

</style>