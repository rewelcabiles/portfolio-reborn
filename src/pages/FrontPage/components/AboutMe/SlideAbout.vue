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
            class="z-50 text-justify"
          >
            I'm Rewel, I was born in the Philippines, raised in Hong Kong, then
            moved back to the Philippines around High school. I've always been
            interested in programming, picking up Python as my first programming
            language at around the age of 14 and then just exploring what the
            this hobby had to offer.
            So far I've made games, built websites, tinkered with servers, and
            even worked on microcontrollers like the Raspberry PI, Arduino, and
            so far my favourite, the various ESP boards
            <br />
            <br />
            I studied Computer Science at Adamson University, Philippines, not
            hesitating on my course, and I spent most of my free time continuing
            to work on programming not just as a hobby but academically now too.
            <br />
            <br />
            I'm currently working as a Software Engineer at Raykan, a company
            based in Cebu City, and I'm always looking for new opportunities to
            work on interesting projects, so feel free to contact me if you have
            any questions or just want to chat!
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
                transition: { duration: 200, delay: 100 * (index + 1) },
              }"
              v-for="(exp, index) in experiences"
              :key="index"
              class="bg-zinc-900 rounded-xl shadow-xl p-5"
            >
              <a :href="exp.link" :target="exp.link == '#' ? '' : '_blank'">
                <div class="flex flex-row text-zinc-50 mb-1 text-lg font-bold">
                  {{ exp.name }}
                </div>
                <div class="text-justify text-zinc-50 text-md leading-tight p-5">
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
    name: "Payruler",
    link: "https://payruler.com/",
    description:
      "I was here as an Intern, working as a backend web developer in the R&D department. I built APIs for the projects we worked on there, occasionally helping with infrustructure related tasks like fixing or setting up servers hosted either on-site or in Azure. I learned how to collaborate in a team environment and shared my ideas on how we could improve some of the projects there.",
  },
  {
    name: "Raykan",
    position: "Front end developer",
    link: "#",
    description:
      "This is a startup company im working with to help build websites and systems for clients. I'm currently working here as both front end developer and Dev Ops. I'm currently working on a project for a client that requires me to build a website and a system to manage the website. I'm currently working on a project for a client that requires me to build a system to manage their business.",
  },
];
</script>
<style>
#SlideAboutMe {
  height: 120vh;
  padding-top: 100vh;
}
</style>
