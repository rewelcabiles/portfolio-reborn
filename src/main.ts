import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";

import App from "./App.vue";
import router from "./router";

import "./assets/index.css";
import "./assets/main.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import showdown from "showdown";
import "highlight.js/styles/github-dark.css";

showdown.setOption("ghCodeBlocks", true);
showdown.setOption("smoothLivePreview", true);
showdown.setOption("smartIndentationFix", true);
showdown.setOption("openLinksInNewWindow", true);
showdown.setOption("emoji", true);
showdown.setFlavor("github");

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_authDomain,
  databaseURL: import.meta.env.VITE_FIREBASE_databaseURL,
  projectId: import.meta.env.VITE_FIREBASE_projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_appId,
  measurementId: import.meta.env.VITE_FIREBASE_measurementId,
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);
getAnalytics(fb);

let app: App;
getAuth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    app.config.globalProperties.$cdn = "https://assets.rewelcabiles.me";

    app.use(createPinia());
    app.use(MotionPlugin);
    app.use(router);

    app.mount("#app");
  }
});
