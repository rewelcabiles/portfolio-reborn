<template>
    <div class="min-h-screen from-zinc-900 to-zinc-800 bg-gradient-to-tr pt-40 z-50">
        <div class="py-10 flex flex-col  px-20">
            <div class="flex md:flex-row flex-col mx-auto gap-44 lg:px-20">
                <div class="text-zinc-50 lg:px-10">
                    <div
                    v-motion :initial="{ opacity: 0 }" :visible="{ opacity: 1, transition: { duration: 500, delay: 50}}"
                    class="mx-auto text-4xl z-50  mb-10">
                        About me
                    </div>
                    <div
                    v-motion :initial="{ opacity: 0 }" :visible="{ opacity: 1, transition: { duration: 500, delay: 200}}"
                    class="z-50 text-justify">
                        I'm Rewel, I was born in the Philippines, raised in Hong Kong, then moved back to the Philippines around High school.
                        I've always been interested in programming, picking up Python as my first programming language at around the age of 14
                        and then just exploring what the this hobby had to offer;
                        <br/> <br/>
                        Making games, building websites, tinkering with servers, eventually
                        even working on microcontrollers like the Raspberry PI, Arduino, and so far my favourite, the various ESP boards
                        <br/> <br/>
                        I studied Computer Science at Adamson University, Philippines, not hesitating on my course, and I spent most of my free time
                        continuing to work on programming not just as a hobby but academically now too.
                        <br/> <br/>
                        
                    </div>
                </div>
                <div class="text-zinc-50 w-full lg:px-10">
                    <div
                    v-motion :initial="{ opacity: 0 }" :visible="{ opacity: 1, transition: { duration: 500, delay: 500}}"
                    class="mx-auto text-4xl z-50 mb-10">
                        My Experience
                    </div>
                    <div
                    v-motion :initial="{ opacity: 0 }" :visible="{ opacity: 1, transition: { duration: 500, delay: 600}}"
                    class="z-50 pb-4">
                        I've had the pleasure of working and learning at these great places
                    </div>
                    <div class="flex flex-col gap-5">
                        <div
                        v-motion :initial="{ opacity: 0 }" :visible="{ opacity: 1, transition: { duration: 200, delay: 100 * (index + 1)}}"
                        v-for="(exp, index) in experiences"
                        :key="index"
                        class="bg-zinc-900 rounded-sm p-5">
                            <a :href="exp.link" :target="exp.link == '#' ? '' : '_blank'">
                                <div class="flex flex-row text-zinc-50 mb-1 text-lg font-bold">
                                    {{ exp.name }}
                                </div>
                                <div class="text-justify text-zinc-50 text-md leading-tight">
                                    {{ exp.description }}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

const experiences = [
    {
        name: 'Payruler',
        link: 'https://payruler.com/',
        description: 'I was here as an Intern, working as a backend web developer in the R&D department. I built APIs for the projects we worked on there, occasionally helping with infrustructure related tasks like fixing or setting up servers hosted either on-site or in Azure. I learned how to collaborate in a team environment and shared my ideas on how we could improve some of the projects there.'
    },
    {
        name: 'Raykan Solutions',
        position: 'Front end developer',
        link: '#',
        description: "This is a startup company im working with to help build websites and systems for clients. I'm currently working here as a front end developer, using my favourite web framework Vue to recreate an existing site for one of our clients to be more responsive and performant. "
    }
]

</script>
<style>


</style>