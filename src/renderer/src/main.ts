import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import 'flowbite'
import './index.css'
import 'mosha-vue-toastify/dist/style.css'
import router from './router'
import { createPinia } from 'pinia'

createApp(App).use(router).use(createPinia()).mount('#app')
