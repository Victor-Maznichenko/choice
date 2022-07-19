import 'normalize.css'
import "@/assets/sass/_global.sass"
import "@/assets/sass/_fonts.sass"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
