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

export const useProjectStore = defineStore("projects", () => {
  const data = ref([] as unknown[]);
  const dataMap = ref({});
  const selectedProject = ref({} as Project);

  const db = getDatabase();
  const analytics = getAnalytics();

  const projectsRef = fbref(db, "projects/");

  const mySkills = ref({});
  const mySkillsRef = fbref(db, "skills/");

  onValue(mySkillsRef, (snapshot) => {
    const temp_data = snapshot.val();
    mySkills.value = Object.values(temp_data);
  });

  onValue(projectsRef, (snapshot) => {
    dataMap.value = snapshot.val();
    data.value = Object.values(dataMap.value).sort(
      (a: unknown, b: unknown) => a.order - b.order
    );
  });

  function setSelected(selected: any) {
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
  };
});
