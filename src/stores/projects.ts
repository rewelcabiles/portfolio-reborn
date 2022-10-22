import { defineStore } from "pinia";
import { ref } from "vue";
import { getDatabase, get, ref as fbref, onValue } from "firebase/database";
import { getAnalytics, logEvent } from "firebase/analytics";

export const useProjectStore = defineStore("projects", () => {
    const data = ref({} as { [key: string]: any });

    const selectedProject = ref("");

    const db = getDatabase();
    const analytics = getAnalytics();

    const projectsRef = fbref(db, 'projects/');

    onValue(projectsRef, (snapshot) => {
        data.value = snapshot.val();
    });

    function setSelected(selected: string) {
        selectedProject.value = selected
    }

    function analyticsNavbarClicked(data:string) {
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
        selectedProject
    }
});
