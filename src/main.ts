import { createApp } from 'vue'
import App from "./App.vue"
import router from "@/scripts/Router";

const app = createApp(App)
    .use(router)
    .mount('#app')