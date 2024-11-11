import { doc, getDoc, getFirestore } from "firebase/firestore";
import firebaseApp from "@/modules/firebase/firebase";
import { ref, watch } from 'vue';
import { useRoute } from "vue-router";
import UICard from "@/components/UI/UICard.vue";
import UIButton from "@/components/UI/UIButton.vue";
import { useBasketStore } from '@/stores/basket';
import { toast } from 'vue3-toastify';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const breadcrumbs = [
    { title: 'Главная', disabled: false, href: '/' },
    { title: 'Карточка товара', disabled: true }
];
const router = useRoute();
const productCardId = ref(router.params.id);
const db = getFirestore(firebaseApp);
const shoe = ref(null);
const count = ref(1);
const productId = ref();
const basketStore = useBasketStore();
async function getShoeById(shoeId) {
    try {
        const shoeRef = doc(db, 'sneakers', shoeId);
        const shoeSnap = await getDoc(shoeRef);
        if (shoeSnap.exists()) {
            const data = shoeSnap.data();
            productId.value = data.id;
            shoe.value = {
                colors: data.colors || [],
                gender: data.gender || '',
                name: data.name || '',
                label: data.label || '',
                description: data.description || '',
                id: data.id,
                price: {
                    newPrice: data.price?.newPrice || 0,
                    oldPrice: data.price?.oldPrice || 0,
                },
                img: {
                    default: data.img?.default || '',
                    webP: data.img?.webP || '',
                }
            };
        }
        else {
            console.log("Документ не найден");
            shoe.value = null;
        }
    }
    catch (error) {
        console.error("Ошибка при получении товара:", error);
    }
}
watch(() => router.params.id, (newId) => {
    if (newId) {
        productCardId.value = newId;
        getShoeById(productCardId.value);
    }
});
function addToBasket() {
    if (productId.value !== undefined) {
        basketStore.addToBasketProductCard(productId.value, count.value);
        toast(`Товар добавлен в корзину в количестве ${count.value} шт.`, {
            autoClose: 1000,
        });
    }
    else {
        console.error("ID товара не определен");
    }
}
getShoeById(productCardId.value);
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
    if (__VLS_ctx.shoe) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("product-card") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product-card__container") }, });
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
        [shoe, breadcrumbs,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product-card__content-wrapper") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product-card__content-left") }, });
        // @ts-ignore
        [UICard,];
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(UICard, new UICard({ card: ((__VLS_ctx.shoe)), show: ((true)), }));
        const __VLS_7 = __VLS_6({ card: ((__VLS_ctx.shoe)), show: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        ({}({ card: ((__VLS_ctx.shoe)), show: ((true)), }));
        const __VLS_10 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(UICard, __VLS_7));
        // @ts-ignore
        [shoe,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product-card__content-right product-card__right") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("product-card__right-name") }, });
        (__VLS_ctx.shoe.name);
        // @ts-ignore
        [shoe,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("product-card__right-description") }, });
        (__VLS_ctx.shoe.description);
        // @ts-ignore
        [shoe,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card__color") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("card__color-txt") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card__color-row") }, });
        for (const [color, colorIndex] of __VLS_getVForSourceType((__VLS_ctx.shoe.colors))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("card__color-dots") }, key: ((colorIndex)), ...{ style: (({
                        background: color === 'white' ? '#f8f8f9' : color,
                    })) }, });
            // @ts-ignore
            [shoe,];
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product-card__right-prices product-card__price") }, });
        if (__VLS_ctx.shoe.price.oldPrice) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("product-card__price-old") }, });
            (__VLS_ctx.shoe.price.oldPrice);
            // @ts-ignore
            [shoe, shoe,];
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("product-card__price-new") }, });
        (__VLS_ctx.shoe.price.newPrice);
        // @ts-ignore
        [shoe,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product-card__right-counter-wrapper") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product-card__counter") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.shoe)))
                        return;
                    __VLS_ctx.count > 1 && __VLS_ctx.count--;
                    // @ts-ignore
                    [count, count,];
                } }, ...{ class: ("product-card__counter-minus") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("product-card__counter-count") }, });
        (__VLS_ctx.count);
        // @ts-ignore
        [count,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.shoe)))
                        return;
                    __VLS_ctx.count++;
                    // @ts-ignore
                    [count,];
                } }, ...{ class: ("product-card__counter-plus") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product-card__right-button") }, });
        // @ts-ignore
        [UIButton,];
        // @ts-ignore
        const __VLS_11 = __VLS_asFunctionalComponent(UIButton, new UIButton({ ...{ 'onClick': {} }, type: (('button')), modify: (('primary')), txt: (('Добавить в корзину')), }));
        const __VLS_12 = __VLS_11({ ...{ 'onClick': {} }, type: (('button')), modify: (('primary')), txt: (('Добавить в корзину')), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
        ({}({ ...{ 'onClick': {} }, type: (('button')), modify: (('primary')), txt: (('Добавить в корзину')), }));
        let __VLS_16;
        const __VLS_17 = {
            onClick: (__VLS_ctx.addToBasket)
        };
        const __VLS_15 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(UIButton, __VLS_12));
        let __VLS_13;
        let __VLS_14;
        // @ts-ignore
        [addToBasket,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['product-card'];
        __VLS_styleScopedClasses['product-card__container'];
        __VLS_styleScopedClasses['product-card__content-wrapper'];
        __VLS_styleScopedClasses['product-card__content-left'];
        __VLS_styleScopedClasses['product-card__content-right'];
        __VLS_styleScopedClasses['product-card__right'];
        __VLS_styleScopedClasses['product-card__right-name'];
        __VLS_styleScopedClasses['product-card__right-description'];
        __VLS_styleScopedClasses['card__color'];
        __VLS_styleScopedClasses['card__color-txt'];
        __VLS_styleScopedClasses['card__color-row'];
        __VLS_styleScopedClasses['card__color-dots'];
        __VLS_styleScopedClasses['product-card__right-prices'];
        __VLS_styleScopedClasses['product-card__price'];
        __VLS_styleScopedClasses['product-card__price-old'];
        __VLS_styleScopedClasses['product-card__price-new'];
        __VLS_styleScopedClasses['product-card__right-counter-wrapper'];
        __VLS_styleScopedClasses['product-card__counter'];
        __VLS_styleScopedClasses['product-card__counter-minus'];
        __VLS_styleScopedClasses['product-card__counter-count'];
        __VLS_styleScopedClasses['product-card__counter-plus'];
        __VLS_styleScopedClasses['product-card__right-button'];
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
                breadcrumbs: breadcrumbs,
                shoe: shoe,
                count: count,
                addToBasket: addToBasket,
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
