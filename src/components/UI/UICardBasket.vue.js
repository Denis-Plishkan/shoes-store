import { ref, watchEffect } from 'vue';
import PictureComponent from '@/components/Base/PictureComponent.vue';
import BaseIcon from '@/components/Base/BaseIcon.vue';
import { useBasketStore } from '@/stores/basket';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const basketStore = useBasketStore();
let __VLS_typeProps;
const props = defineProps();
const count = ref(props.quantity);
watchEffect(() => {
    const item = basketStore.basketCards.find(item => item.id === props.card.id);
    count.value = item ? item.quantity : 0;
});
function incrementCount() {
    count.value++;
    basketStore.updateItemCount(props.card.id, count.value);
}
function decrementCount() {
    if (count.value > 1) {
        count.value--;
        basketStore.updateItemCount(props.card.id, count.value);
    }
}
function deleteShoe() {
    basketStore.removeFromBasket(props.card.id);
}
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
    if (__VLS_ctx.show === 'desktop') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ ...{ class: ("basket-card") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("basket-card__product") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("basket-card__product-image") }, });
        // @ts-ignore
        [PictureComponent,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(PictureComponent, new PictureComponent({ srcset: ((__VLS_ctx.card.img.webP)), src: ((__VLS_ctx.card.img.default)), alt: ("shoes"), }));
        const __VLS_1 = __VLS_0({ srcset: ((__VLS_ctx.card.img.webP)), src: ((__VLS_ctx.card.img.default)), alt: ("shoes"), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        ({}({ srcset: ((__VLS_ctx.card.img.webP)), src: ((__VLS_ctx.card.img.default)), alt: ("shoes"), }));
        const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(PictureComponent, __VLS_1));
        // @ts-ignore
        [show, card, card,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("basket-card__product-name") }, });
        (__VLS_ctx.card.name);
        // @ts-ignore
        [card,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("basket-card__price") }, });
        (__VLS_ctx.card.price.newPrice);
        // @ts-ignore
        [card,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("basket-card__quantity") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product-card__counter") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ onClick: (__VLS_ctx.decrementCount) }, ...{ class: ("product-card__counter-minus") }, });
        // @ts-ignore
        [decrementCount,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("product-card__counter-count") }, });
        (__VLS_ctx.count);
        // @ts-ignore
        [count,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ onClick: (__VLS_ctx.incrementCount) }, ...{ class: ("product-card__counter-plus") }, });
        // @ts-ignore
        [incrementCount,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("basket-card__sum") }, });
        (__VLS_ctx.card.price.newPrice * __VLS_ctx.count);
        // @ts-ignore
        [card, count,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        // @ts-ignore
        [BaseIcon,];
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(BaseIcon, new BaseIcon({ ...{ 'onClick': {} }, id: ("delete"), }));
        const __VLS_6 = __VLS_5({ ...{ 'onClick': {} }, id: ("delete"), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
        ({}({ ...{ 'onClick': {} }, id: ("delete"), }));
        let __VLS_10;
        const __VLS_11 = {
            onClick: (__VLS_ctx.deleteShoe)
        };
        const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(BaseIcon, __VLS_6));
        let __VLS_7;
        let __VLS_8;
        // @ts-ignore
        [deleteShoe,];
    }
    if (__VLS_ctx.show === 'mobile') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("basket-card") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("basket-card__product") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("basket-card__product-image") }, });
        // @ts-ignore
        [PictureComponent,];
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent(PictureComponent, new PictureComponent({ srcset: ((__VLS_ctx.card.img.webP)), src: ((__VLS_ctx.card.img.default)), alt: ("shoes"), }));
        const __VLS_13 = __VLS_12({ srcset: ((__VLS_ctx.card.img.webP)), src: ((__VLS_ctx.card.img.default)), alt: ("shoes"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
        ({}({ srcset: ((__VLS_ctx.card.img.webP)), src: ((__VLS_ctx.card.img.default)), alt: ("shoes"), }));
        const __VLS_16 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(PictureComponent, __VLS_13));
        // @ts-ignore
        [show, card, card,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("basket-card__product-name") }, });
        (__VLS_ctx.card.name);
        // @ts-ignore
        [card,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("basket-card__bottom") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("basket-card__quantity") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product-card__counter") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ onClick: (__VLS_ctx.decrementCount) }, ...{ class: ("product-card__counter-minus") }, });
        // @ts-ignore
        [decrementCount,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("product-card__counter-count") }, });
        (__VLS_ctx.count);
        // @ts-ignore
        [count,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ onClick: (__VLS_ctx.incrementCount) }, ...{ class: ("product-card__counter-plus") }, });
        // @ts-ignore
        [incrementCount,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("basket-card__sum") }, });
        (__VLS_ctx.card.price.newPrice * __VLS_ctx.count);
        // @ts-ignore
        [card, count,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        // @ts-ignore
        [BaseIcon,];
        // @ts-ignore
        const __VLS_17 = __VLS_asFunctionalComponent(BaseIcon, new BaseIcon({ ...{ 'onClick': {} }, id: ("delete"), }));
        const __VLS_18 = __VLS_17({ ...{ 'onClick': {} }, id: ("delete"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
        ({}({ ...{ 'onClick': {} }, id: ("delete"), }));
        let __VLS_22;
        const __VLS_23 = {
            onClick: (__VLS_ctx.deleteShoe)
        };
        const __VLS_21 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(BaseIcon, __VLS_18));
        let __VLS_19;
        let __VLS_20;
        // @ts-ignore
        [deleteShoe,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['basket-card'];
        __VLS_styleScopedClasses['basket-card__product'];
        __VLS_styleScopedClasses['basket-card__product-image'];
        __VLS_styleScopedClasses['basket-card__product-name'];
        __VLS_styleScopedClasses['basket-card__price'];
        __VLS_styleScopedClasses['basket-card__quantity'];
        __VLS_styleScopedClasses['product-card__counter'];
        __VLS_styleScopedClasses['product-card__counter-minus'];
        __VLS_styleScopedClasses['product-card__counter-count'];
        __VLS_styleScopedClasses['product-card__counter-plus'];
        __VLS_styleScopedClasses['basket-card__sum'];
        __VLS_styleScopedClasses['basket-card'];
        __VLS_styleScopedClasses['basket-card__product'];
        __VLS_styleScopedClasses['basket-card__product-image'];
        __VLS_styleScopedClasses['basket-card__product-name'];
        __VLS_styleScopedClasses['basket-card__bottom'];
        __VLS_styleScopedClasses['basket-card__quantity'];
        __VLS_styleScopedClasses['product-card__counter'];
        __VLS_styleScopedClasses['product-card__counter-minus'];
        __VLS_styleScopedClasses['product-card__counter-count'];
        __VLS_styleScopedClasses['product-card__counter-plus'];
        __VLS_styleScopedClasses['basket-card__sum'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                PictureComponent: PictureComponent,
                BaseIcon: BaseIcon,
                count: count,
                incrementCount: incrementCount,
                decrementCount: decrementCount,
                deleteShoe: deleteShoe,
            };
        },
        props: {},
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
});
;
