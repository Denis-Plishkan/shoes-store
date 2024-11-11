import UICard from '@/components/UI/UICard.vue';
import { ref, computed } from 'vue';
import { useLikesStore } from '@/stores/likes';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import firebaseApp from "@/modules/firebase/firebase";
import UIButton from '@/components/UI/UIButton.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const currentPage = ref(1);
const itemsPerPage = ref(9);
const totalItems = ref(0);
const db = getFirestore(firebaseApp);
const filteredShoesData = ref([]);
const breadcrumbs = [
    { title: 'Главная', disabled: false, href: '/' },
    { title: 'Избранные товары', disabled: true }
];
const likedStore = useLikesStore();
const likedShoes = likedStore.likedCards;
async function getShoes() {
    try {
        const querySnapshot = await getDocs(collection(db, 'sneakers'));
        filteredShoesData.value = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const shoe = {
                colors: data.colors || [],
                gender: data.gender || '',
                name: data.name || '',
                label: data.label || '',
                id: data.id,
                price: {
                    newPrice: data.price?.newPrice || 0,
                    oldPrice: data.price?.oldPrice || 0
                },
                img: {
                    default: data.img?.default || '',
                    webP: data.img?.webP || ''
                }
            };
            if (likedShoes.includes(shoe.id)) {
                filteredShoesData.value.push(shoe);
            }
            totalItems.value = filteredShoesData.value.length;
        });
    }
    catch (error) {
        console.log(error);
    }
}
const paginatedShoesData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filteredShoesData.value.slice(start, end);
});
getShoes();
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("like-page") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("like-page__container") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .VBreadcrumbs;
    ({}.VBreadcrumbs);
    ({}.VBreadcrumbs);
    __VLS_components.VBreadcrumbs;
    __VLS_components.vBreadcrumbs;
    __VLS_components.VBreadcrumbs;
    __VLS_components.vBreadcrumbs;
    // @ts-ignore
    [VBreadcrumbs, VBreadcrumbs,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ items: ((__VLS_ctx.breadcrumbs)), }));
    const __VLS_2 = __VLS_1({ items: ((__VLS_ctx.breadcrumbs)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ items: ((__VLS_ctx.breadcrumbs)), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    [breadcrumbs,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("like-page__title") }, });
    if (__VLS_ctx.likedShoes.length > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("like-page__card-wrapper") }, });
        for (const [shoes, index] of __VLS_getVForSourceType((__VLS_ctx.paginatedShoesData))) {
            // @ts-ignore
            [UICard,];
            // @ts-ignore
            const __VLS_6 = __VLS_asFunctionalComponent(UICard, new UICard({ key: ((index)), card: ((shoes)), }));
            const __VLS_7 = __VLS_6({ key: ((index)), card: ((shoes)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ key: ((index)), card: ((shoes)), }));
            const __VLS_10 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(UICard, __VLS_7));
            // @ts-ignore
            [likedShoes, paginatedShoesData,];
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("like-page__pagination") }, });
        // @ts-ignore
        const __VLS_11 = {}
            .VPagination;
        ({}.VPagination);
        __VLS_components.VPagination;
        __VLS_components.vPagination;
        // @ts-ignore
        [VPagination,];
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({ modelValue: ((__VLS_ctx.currentPage)), length: ((Math.ceil(__VLS_ctx.totalItems / __VLS_ctx.itemsPerPage))), totalVisible: ((5)), }));
        const __VLS_13 = __VLS_12({ modelValue: ((__VLS_ctx.currentPage)), length: ((Math.ceil(__VLS_ctx.totalItems / __VLS_ctx.itemsPerPage))), totalVisible: ((5)), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
        ({}({ modelValue: ((__VLS_ctx.currentPage)), length: ((Math.ceil(__VLS_ctx.totalItems / __VLS_ctx.itemsPerPage))), totalVisible: ((5)), }));
        const __VLS_16 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13));
        // @ts-ignore
        [currentPage, totalItems, itemsPerPage,];
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("like-page__text") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        const __VLS_17 = {}
            .RouterLink;
        ({}.RouterLink);
        ({}.RouterLink);
        __VLS_components.RouterLink;
        __VLS_components.routerLink;
        __VLS_components.RouterLink;
        __VLS_components.routerLink;
        // @ts-ignore
        [RouterLink, RouterLink,];
        // @ts-ignore
        const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ to: ("/catalog"), }));
        const __VLS_19 = __VLS_18({ to: ("/catalog"), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
        ({}({ to: ("/catalog"), }));
        const __VLS_22 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("like-page__button") }, });
        // @ts-ignore
        [UIButton,];
        // @ts-ignore
        const __VLS_23 = __VLS_asFunctionalComponent(UIButton, new UIButton({ type: (('button')), modify: (('secondary')), txt: (('Перейти в каталог')), }));
        const __VLS_24 = __VLS_23({ type: (('button')), modify: (('secondary')), txt: (('Перейти в каталог')), }, ...__VLS_functionalComponentArgsRest(__VLS_23));
        ({}({ type: (('button')), modify: (('secondary')), txt: (('Перейти в каталог')), }));
        const __VLS_27 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(UIButton, __VLS_24));
        __VLS_nonNullable(__VLS_22.slots).default;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['like-page'];
        __VLS_styleScopedClasses['like-page__container'];
        __VLS_styleScopedClasses['like-page__title'];
        __VLS_styleScopedClasses['like-page__card-wrapper'];
        __VLS_styleScopedClasses['like-page__pagination'];
        __VLS_styleScopedClasses['like-page__text'];
        __VLS_styleScopedClasses['like-page__button'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                UICard: UICard,
                UIButton: UIButton,
                currentPage: currentPage,
                itemsPerPage: itemsPerPage,
                totalItems: totalItems,
                breadcrumbs: breadcrumbs,
                likedShoes: likedShoes,
                paginatedShoesData: paginatedShoesData,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
