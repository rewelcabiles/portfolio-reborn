import { defineStore } from "pinia";
import { ref } from "vue";
import { getDatabase, get, ref as fbref, onValue } from "firebase/database";

export const useProjectStore = defineStore("projects", () => {
    const data = ref({} as { [key: string]: any });

    const selectedProject = ref("");

    const db = getDatabase();
    const projectsRef = fbref(db, 'projects/');

    onValue(projectsRef, (snapshot) => {
        data.value = snapshot.val();
    });

    function setSelected(selected: string) {
        selectedProject.value = selected
    }

    return {
        data,
        setSelected,
        selectedProject
    }
});
