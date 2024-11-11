import { useRouter } from 'vue-router';
import { useLikesStore } from '@/stores/likes';
import { useBasketStore } from '@/stores/basket';
import 'swiper/css';
import 'swiper/css/pagination';
import BaseIcon from '../Base/BaseIcon.vue';
import PictureComponent from '../Base/PictureComponent.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const router = useRouter();
const likesStore = useLikesStore();
const basketStore = useBasketStore();
function handleCardClick() {
    router.push({ name: 'product-card', params: { id: props.card.id } });
}
function likeClick() {
    likesStore.toggleLike(props.card.id);
}
function isLiked() {
    return likesStore.isLiked(props.card.id);
}
function basketClick() {
    basketStore.addToBasket(props.card.id);
    toast('Товар добавлен в корзину', {
        autoClose: 500,
    });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.handleCardClick) }, ...{ class: ("card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card__row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("card__label") }, ...{ class: (({
                'card__label_sale': __VLS_ctx.card.label === '-20%',
                'card__label_hit': __VLS_ctx.card.label === 'хит',
            })) }, });
    __VLS_styleScopedClasses = ({
        'card__label_sale': card.label === '-20%',
        'card__label_hit': card.label === 'хит',
    });
    (__VLS_ctx.card.label);
    // @ts-ignore
    [handleCardClick, card, card, card,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.likeClick) }, ...{ class: ("card__like") }, });
    // @ts-ignore
    [BaseIcon,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(BaseIcon, new BaseIcon({ id: ((__VLS_ctx.isLiked() ? 'like-active' : 'like')), }));
    const __VLS_1 = __VLS_0({ id: ((__VLS_ctx.isLiked() ? 'like-active' : 'like')), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ id: ((__VLS_ctx.isLiked() ? 'like-active' : 'like')), }));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(BaseIcon, __VLS_1));
    // @ts-ignore
    [likeClick, isLiked,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card__img") }, });
    // @ts-ignore
    [PictureComponent,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(PictureComponent, new PictureComponent({ srcset: ((__VLS_ctx.card.img.webP)), src: ((__VLS_ctx.card.img.default)), alt: ("shoes"), }));
    const __VLS_6 = __VLS_5({ srcset: ((__VLS_ctx.card.img.webP)), src: ((__VLS_ctx.card.img.default)), alt: ("shoes"), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ({}({ srcset: ((__VLS_ctx.card.img.webP)), src: ((__VLS_ctx.card.img.default)), alt: ("shoes"), }));
    const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(PictureComponent, __VLS_6));
    // @ts-ignore
    [card, card,];
    if (!__VLS_ctx.show) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card__column") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("card__gender") }, });
        (__VLS_ctx.card.gender);
        // @ts-ignore
        [card, show,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("card__name") }, });
        (__VLS_ctx.card.name);
        // @ts-ignore
        [card,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card__color") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("card__color-txt") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card__color-row") }, });
        for (const [color, colorIndex] of __VLS_getVForSourceType((__VLS_ctx.card.colors))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("card__color-dots") }, key: ((colorIndex)), ...{ style: (({
                        background: color === 'white' ? '#f8f8f9' : color,
                    })) }, });
            // @ts-ignore
            [card,];
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card__row-sub") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card__price") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("card__price-new") }, });
        (__VLS_ctx.card.price.newPrice);
        // @ts-ignore
        [card,];
        if (__VLS_ctx.card.price.oldPrice) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("card__price-old") }, });
            (__VLS_ctx.card.price.oldPrice);
            // @ts-ignore
            [card, card,];
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.basketClick) }, ...{ class: ("card__basket") }, });
        // @ts-ignore
        [BaseIcon,];
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(BaseIcon, new BaseIcon({ id: ("basket"), }));
        const __VLS_11 = __VLS_10({ id: ("basket"), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
        ({}({ id: ("basket"), }));
        const __VLS_14 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(BaseIcon, __VLS_11));
        // @ts-ignore
        [basketClick,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['card__row'];
        __VLS_styleScopedClasses['card__label'];
        __VLS_styleScopedClasses['card__like'];
        __VLS_styleScopedClasses['card__img'];
        __VLS_styleScopedClasses['card__column'];
        __VLS_styleScopedClasses['card__gender'];
        __VLS_styleScopedClasses['card__name'];
        __VLS_styleScopedClasses['card__color'];
        __VLS_styleScopedClasses['card__color-txt'];
        __VLS_styleScopedClasses['card__color-row'];
        __VLS_styleScopedClasses['card__color-dots'];
        __VLS_styleScopedClasses['card__row-sub'];
        __VLS_styleScopedClasses['card__price'];
        __VLS_styleScopedClasses['card__price-new'];
        __VLS_styleScopedClasses['card__price-old'];
        __VLS_styleScopedClasses['card__basket'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                BaseIcon: BaseIcon,
                PictureComponent: PictureComponent,
                handleCardClick: handleCardClick,
                likeClick: likeClick,
                isLiked: isLiked,
                basketClick: basketClick,
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
