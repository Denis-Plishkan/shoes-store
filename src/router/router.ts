import {createRouter, createWebHashHistory} from "vue-router";
import MainPage from "../views/MainPage.vue";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainPage
        },
        {
            path: '/registration',
            name: 'registration',
            component: () => import("@/views/RegistrationPage.vue"),
        },
        {
            path: '/authorization',
            name: 'authorization',
            component: () => import("@/views/AuthorizationPage.vue"),
        },
        {
            path: '/recover-password',
            name: 'recover-password',
            component: () => import("@/views/RecoverPasswordPage.vue"),
        }
    ]
})

export default router;