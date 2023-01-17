import { defineStore } from "pinia";
import { ref } from "vue";
import { getDatabase, ref as fbref, onValue } from "firebase/database";
import { getAnalytics, logEvent } from "firebase/analytics";

interface Project {
  name: string;
  github: string;
  homepage: string;
  description: string;
  order: number;
  preview: string;
}

interface Skill {
  content: any;
  title: string;
}

const sections = {
  Blurb: {
    Intro: {
      name: "Intro",
      type: "text",
      value: "profile.intro",
    },
    Descriptor: {
      name: "Descriptor",
      type: "text",
      value: "profile.intro",
    },
  },
  About: {
    Intro: {
      name: "About Me",
      type: "textarea",
      value: "profile.intro",
    },
  },
  Jobs: {
    Payruler: {
      name: "PayRuler",
      type: "textarea",
      value: "profile.intro",
    },
    Raykan: {
      name: "Raykan",
      type: "textarea",
      value: "profile.intro",
    },
  },
};

export const useProjectStore = defineStore("projects", () => {
  const data = ref([] as Project[]);
  const dataMap = ref({} as Record<string, Project>);
  const selectedProject = ref({} as Project);

  const db = getDatabase();
  const analytics = getAnalytics();

  const projectsRef = fbref(db, "projects/");

  const mySkills = ref({} as Skill[]);
  const mySkillsRef = fbref(db, "skills/");

  const profile = ref(sections as Record<string, any>);
  const profileRefRef = fbref(db, "Profile/");

  onValue(profileRefRef, (snapshot) => {
    profile.value = snapshot.val();
  });

  onValue(mySkillsRef, (snapshot) => {
    const temp_data = snapshot.val();
    mySkills.value = Object.values(temp_data);
  });

  onValue(projectsRef, (snapshot) => {
    dataMap.value = snapshot.val();
    data.value = Object.values(dataMap.value).sort(
      (a: Project, b: Project) => a.order - b.order
    );
  });

  function setSelected(selected: Project) {
    selectedProject.value = selected;
  }

  function analyticsNavbarClicked(data: string) {
    logEvent(analytics, `navbar_click: ${data}`);
  }

  function analyticsPageView() {
    logEvent(analytics, `page_view`);
  }

  return {
    data,
    analyticsNavbarClicked,
    analyticsPageView,
    setSelected,
    selectedProject,
    mySkills,
    profile,
    profileRefRef,
  };
});
