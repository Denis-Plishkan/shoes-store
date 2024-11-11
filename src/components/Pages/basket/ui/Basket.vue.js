import UICardBasket from '@/components/UI/UICardBasket.vue';
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import firebaseApp from '@/modules/firebase/firebase';
import { useBasketStore } from '@/stores/basket';
import UIButton from '@/components/UI/UIButton.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const db = getFirestore(firebaseApp);
const basketStore = useBasketStore();
const shoes = ref([]);
const isLoading = ref(true);
const show = ref(window.innerWidth > 576 ? 'desktop' : 'mobile');
const breadcrumbs = [
    { title: 'Главная', disabled: false, href: '/' },
    { title: 'Корзина товаров', disabled: true },
];
async function getShoesByIds(ids) {
    shoes.value = [];
    try {
        for (const id of ids) {
            const shoeRef = doc(db, 'sneakers', id.toString());
            const shoeSnap = await getDoc(shoeRef);
            if (shoeSnap.exists()) {
                const data = shoeSnap.data();
                shoes.value.push({
                    name: data.name || '',
                    id: data.id,
                    price: {
                        newPrice: data.price?.newPrice || 0,
                        oldPrice: data.price?.oldPrice || 0,
                    },
                    img: {
                        default: data.img?.default || '',
                        webP: data.img?.webP || '',
                    },
                });
            }
        }
    }
    catch (error) {
        console.error("Ошибка при получении товаров:", error);
    }
    finally {
        isLoading.value = false;
    }
}
function updateShoes() {
    isLoading.value = true;
    getShoesByIds(basketStore.basketCards.map(item => item.id));
}
function updateShowBasedOnWidth() {
    show.value = window.innerWidth > 576 ? 'desktop' : 'mobile';
}
onMounted(() => {
    updateShoes();
    window.addEventListener('resize', updateShowBasedOnWidth);
});
watch(() => basketStore.basketCards, () => {
    updateShoes();
});
const totalSum = computed(() => {
    return shoes.value.reduce((sum, shoe) => {
        const quantity = basketStore.basketCards.find(item => item.id === shoe.id)?.quantity || 1;
        return sum + shoe.price.newPrice * quantity;
    }, 0);
});
const discount = computed(() => {
    return shoes.value.reduce((sum, shoe) => {
        const quantity = basketStore.basketCards.find(item => item.id === shoe.id)?.quantity || 1;
        const discountPerItem = shoe.price.oldPrice && shoe.price.oldPrice > shoe.price.newPrice
            ? (shoe.price.oldPrice - shoe.price.newPrice) * quantity
            : 0;
        return sum + discountPerItem;
    }, 0);
});
onUnmounted(() => {
    window.removeEventListener('resize', updateShowBasedOnWidth);
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("basket") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("basket__container") }, });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("basket__title") }, });
    if (__VLS_ctx.isLoading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        // @ts-ignore
        [isLoading,];
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        if (__VLS_ctx.shoes.length > 0) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("basket__content") }, });
            if (__VLS_ctx.show === 'desktop') {
                __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({ ...{ class: ("basket-table") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
                // @ts-ignore
                [shoes, show,];
                __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
                for (const [shoe] of __VLS_getVForSourceType((__VLS_ctx.shoes))) {
                    // @ts-ignore
                    [UICardBasket,];
                    // @ts-ignore
                    const __VLS_6 = __VLS_asFunctionalComponent(UICardBasket, new UICardBasket({ key: ((shoe.id)), card: ((shoe)), show: ((__VLS_ctx.show)), quantity: ((__VLS_ctx.basketStore.basketCards.find(item => item.id === shoe.id)?.quantity || 1)), }));
                    const __VLS_7 = __VLS_6({ key: ((shoe.id)), card: ((shoe)), show: ((__VLS_ctx.show)), quantity: ((__VLS_ctx.basketStore.basketCards.find(item => item.id === shoe.id)?.quantity || 1)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
                    ({}({ key: ((shoe.id)), card: ((shoe)), show: ((__VLS_ctx.show)), quantity: ((__VLS_ctx.basketStore.basketCards.find(item => item.id === shoe.id)?.quantity || 1)), }));
                    const __VLS_10 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(UICardBasket, __VLS_7));
                    // @ts-ignore
                    [shoes, show, basketStore,];
                }
            }
            if (__VLS_ctx.show === 'mobile') {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("basket__content-mobile") }, });
                for (const [shoe] of __VLS_getVForSourceType((__VLS_ctx.shoes))) {
                    // @ts-ignore
                    [UICardBasket,];
                    // @ts-ignore
                    const __VLS_11 = __VLS_asFunctionalComponent(UICardBasket, new UICardBasket({ key: ((shoe.id)), card: ((shoe)), show: ((__VLS_ctx.show)), quantity: ((__VLS_ctx.basketStore.basketCards.find(item => item.id === shoe.id)?.quantity || 1)), }));
                    const __VLS_12 = __VLS_11({ key: ((shoe.id)), card: ((shoe)), show: ((__VLS_ctx.show)), quantity: ((__VLS_ctx.basketStore.basketCards.find(item => item.id === shoe.id)?.quantity || 1)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                    ({}({ key: ((shoe.id)), card: ((shoe)), show: ((__VLS_ctx.show)), quantity: ((__VLS_ctx.basketStore.basketCards.find(item => item.id === shoe.id)?.quantity || 1)), }));
                    const __VLS_15 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(UICardBasket, __VLS_12));
                    // @ts-ignore
                    [shoes, show, show, basketStore,];
                }
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("basket__content-bord") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (__VLS_ctx.totalSum);
            // @ts-ignore
            [totalSum,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (__VLS_ctx.discount);
            // @ts-ignore
            [discount,];
            // @ts-ignore
            const __VLS_16 = {}
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
            const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ to: ("/404"), }));
            const __VLS_18 = __VLS_17({ to: ("/404"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
            ({}({ to: ("/404"), }));
            const __VLS_21 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("basket__content-button") }, });
            // @ts-ignore
            [UIButton,];
            // @ts-ignore
            const __VLS_22 = __VLS_asFunctionalComponent(UIButton, new UIButton({ txt: (('Оформить заказ')), modify: (('primary')), type: (('button')), }));
            const __VLS_23 = __VLS_22({ txt: (('Оформить заказ')), modify: (('primary')), type: (('button')), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
            ({}({ txt: (('Оформить заказ')), modify: (('primary')), type: (('button')), }));
            const __VLS_26 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(UIButton, __VLS_23));
            __VLS_nonNullable(__VLS_21.slots).default;
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("like-page__text") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            // @ts-ignore
            const __VLS_27 = {}
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
            const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ to: ("/catalog"), }));
            const __VLS_29 = __VLS_28({ to: ("/catalog"), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
            ({}({ to: ("/catalog"), }));
            const __VLS_32 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_27, __VLS_29));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("like-page__button") }, });
            // @ts-ignore
            [UIButton,];
            // @ts-ignore
            const __VLS_33 = __VLS_asFunctionalComponent(UIButton, new UIButton({ type: (('button')), modify: (('secondary')), txt: (('Перейти в каталог')), }));
            const __VLS_34 = __VLS_33({ type: (('button')), modify: (('secondary')), txt: (('Перейти в каталог')), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
            ({}({ type: (('button')), modify: (('secondary')), txt: (('Перейти в каталог')), }));
            const __VLS_37 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(UIButton, __VLS_34));
            __VLS_nonNullable(__VLS_32.slots).default;
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['basket'];
        __VLS_styleScopedClasses['basket__container'];
        __VLS_styleScopedClasses['basket__title'];
        __VLS_styleScopedClasses['basket__content'];
        __VLS_styleScopedClasses['basket-table'];
        __VLS_styleScopedClasses['basket__content-mobile'];
        __VLS_styleScopedClasses['basket__content-bord'];
        __VLS_styleScopedClasses['basket__content-button'];
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
                UICardBasket: UICardBasket,
                UIButton: UIButton,
                basketStore: basketStore,
                shoes: shoes,
                isLoading: isLoading,
                show: show,
                breadcrumbs: breadcrumbs,
                totalSum: totalSum,
                discount: discount,
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
