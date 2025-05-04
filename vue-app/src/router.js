import { createMemoryHistory, createRouter } from 'vue-router'
import StartPage from './views/StartPage.vue';
import Registration from './views/Registration.vue';
import Login from './views/Login.vue';
import HomeLawyer from "@/views/HomeLawyer.vue";
import HomeClient from "@/views/HomeClient.vue";

const routes = [
    { path: '/', component: StartPage },
    { path: '/registration', component: Registration },
    { path: '/login', component: Login },
    { path: '/home-lawyer', component: HomeLawyer },
    { path: '/home-client', component: HomeClient },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

// Route guard to check if the user is authenticated before accessing protected routes
// router.beforeEach((to, from, next) => {
//     const token = localStorage.getItem('token');
//     if (to.matched.some((route) => route.meta.requiresAuth)) {
//         if (token) {
//             // User is authenticated
//             next();
//         } else {
//             // User is not authenticated; redirect to login
//             next('/login');
//         }
//     } else {
//         // Allow access to non-protected routes
//         next();
//     }
// });

export default router;