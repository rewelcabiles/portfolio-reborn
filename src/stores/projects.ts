import { defineStore } from "pinia";
import { ref } from "vue";
import { getDatabase, get, ref as fbref, onValue } from "firebase/database";
import { getAnalytics, logEvent } from "firebase/analytics";

interface Project {
    name : string,
    github : string,
    homepage : string,
    description: string,
    order: number,
    preview: string
} 

export const useProjectStore = defineStore("projects", () => {
    const data = ref([] as any[]);
    const dataMap = ref({})
    const selectedProject = ref({} as Project);

    const db = getDatabase();
    const analytics = getAnalytics();

    const projectsRef = fbref(db, 'projects/');
    
    onValue(projectsRef, (snapshot) => {
        dataMap.value = snapshot.val()
        data.value = Object.values(dataMap.value).sort((a : any, b : any) => a.order - b.order)
    });

    function setSelected(selected: any) {
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
