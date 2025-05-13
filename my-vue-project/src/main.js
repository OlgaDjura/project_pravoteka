import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.scss'//подключение глобальных стилей
import router from './router'//подключаем роутер

createApp(App).use(router).mount('#app')
