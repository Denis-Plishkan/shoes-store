import { createRouter, createWebHashHistory } from "vue-router";
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
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: () => import("@/views/CatalogPage.vue"),
        },
        {
            path: '/catalog-man',
            name: 'catalog-man',
            component: () => import("@/views/CatalogPage.vue"),
        },
        {
            path: '/catalog-woman',
            name: 'catalog-woman',
            component: () => import("@/views/CatalogPage.vue"),
        },
        {
            path: '/catalog-children',
            name: 'catalog-children',
            component: () => import("@/views/CatalogPage.vue"),
        },
        {
            path: '/catalog-sale',
            name: 'catalog-sale',
            component: () => import("@/views/CatalogSalePage.vue"),
        },
        {
            path: '/product-card/:id',
            name: 'product-card',
            component: () => import("@/views/ProductCardPage.vue"),
        },
        {
            path: '/like-page',
            name: 'like-page',
            component: () => import("@/views/LikePage.vue"),
        },
        {
            path: '/basket',
            name: 'basket',
            component: () => import("@/views/BasketPage.vue"),
        },
        {
            path: '/404',
            name: '404',
            component: () => import("@/views/404.vue"),
        },
    ],
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

export default router;
