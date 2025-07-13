
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/Login.vue'
import RegisterView from '../views/Register.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { requiresScrollLock: true } // ← Добавляем эту метку

  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
    meta: { requiresScrollLock: true } // ← Добавляем эту метку
    
  },

  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

/*
router.beforeEach((to, from, next) => {
  if (to.meta.hideLayout) {
    // Сохраняем позицию скролла
    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
  } else {
    // Восстанавливаем скролл
    const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }
  next()
})*/


export default router
