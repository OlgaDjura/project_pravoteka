
import { createRouter, createWebHistory } from 'vue-router'
import LoginPageView from '../views/LoginPage.vue'
import RegisterPageView from '../views/RegisterPage.vue'
import MainPageView from '../views/MainPage.vue'
import RegisterForLawyers from '@/views/RegisterForLawyers.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPageView
  },
  {
    path: '/login-page',
    name: 'LoginPage',
    component: LoginPageView
  },
  {
    path: '/register-page',
    name: 'RegisterPage',
    component: RegisterPageView
  },
  {
    path: '/register-for-lawyers-page',
    name: 'RegisterForLawyers',
    component: RegisterForLawyers
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Простая обработка навигации
router.beforeEach((to, from, next) => {
  // Если пытаемся перейти на старые маршруты, перенаправляем на новые
  if (to.path === '/login') {
    next('/login-page')
  } else if (to.path === '/register') {
    next('/register-page')
  } else {
    next()
  }
})


export default router
