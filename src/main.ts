import { createApp } from 'vue'
import App from "./App.vue"
import router from "@/scripts/Router";
import i18n from './i18n'

const app = createApp(App)
    .use(i18n)
    .use(router)
    .mount('#app')
