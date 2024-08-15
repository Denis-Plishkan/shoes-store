import {createRouter, createWebHashHistory} from "vue-router";
import MainPage from "../views/MainPage.vue";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainPage
        }
    ]
})

export default router;