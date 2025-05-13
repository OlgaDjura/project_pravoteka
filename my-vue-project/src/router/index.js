import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Profile from '@/views/Profile.vue'
import Dashboard from '@/views/Dashboard.vue'

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile },
    {
        path: '/dashboard',  // Путь для личного кабинета
        name: 'dashboard',
        component: Dashboard,  // Компонент, который будет отображаться на этом маршруте
        beforeEnter: (to, from, next) => {
            // Проверяем, авторизован ли пользователь (можно использовать Vuex или Pinia)
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
            if (!isLoggedIn) {
              next('/')  // Перенаправляем на главную, если не авторизован
            } else {
              next()  // Разрешаем вход, если авторизован
            }
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
