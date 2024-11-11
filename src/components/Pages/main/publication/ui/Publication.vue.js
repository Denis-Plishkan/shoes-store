import BaseIcon from '@/components/Base/BaseIcon.vue';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import UICardPublication from '@/components/UI/UICardPublication.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const cardData = [
    {
        label: 'советы',
        title: 'Десять советов по выбору кроссовок для спорта',
        text: 'Рассказываем все тонкости выбора правильной обуви.',
        link: 'Подробнее',
        date: '10 Августа 2023',
        href: '#',
        webp: new URL('@/assets/img/card-1.webp', import.meta.url),
        png: new URL('@/assets/img/card-1.png', import.meta.url),
    },
    {
        label: 'новости',
        title: 'Наш каталог пополнился новыми коллекциями',
        text: 'С радостью сообщаем вам о расширении ассортимента.',
        link: 'Подробнее',
        date: '7 Августа 2023',
        href: '#',
        webp: new URL('@/assets/img/card-2.webp', import.meta.url),
        png: new URL('@/assets/img/card-2.png', import.meta.url),
    },
    {
        label: 'статьи',
        title: 'Кроссовки как повседневная обувь. Плюсы и минусы',
        text: 'Рассказываем все тонкости выбора правильной обуви.',
        link: 'Подробнее',
        date: '10 Августа 2023',
        href: '#',
        webp: new URL('@/assets/img/card-3.webp', import.meta.url),
        png: new URL('@/assets/img/card-3.png', import.meta.url),
    },
];
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("publication") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("publication__container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("receipts__row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("receipts__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("receipts__arrows") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("publication__prev") }, });
    // @ts-ignore
    [BaseIcon,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(BaseIcon, new BaseIcon({ id: ("arrow-prev"), }));
    const __VLS_1 = __VLS_0({ id: ("arrow-prev"), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ id: ("arrow-prev"), }));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(BaseIcon, __VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("publication__next") }, });
    // @ts-ignore
    [BaseIcon,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(BaseIcon, new BaseIcon({ id: ("arrow-next"), }));
    const __VLS_6 = __VLS_5({ id: ("arrow-next"), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ({}({ id: ("arrow-next"), }));
    const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(BaseIcon, __VLS_6));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("publication__slide") }, });
    // @ts-ignore
    const __VLS_10 = {}
        .swiper;
    ({}.swiper);
    ({}.swiper);
    __VLS_components.Swiper;
    __VLS_components.swiper;
    __VLS_components.Swiper;
    __VLS_components.swiper;
    // @ts-ignore
    [Swiper, Swiper,];
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ slidesPerView: ("auto"), loop: ((true)), spaceBetween: ((20)), modules: (([__VLS_ctx.Navigation])), navigation: (({
            prevEl: '.publication__prev',
            nextEl: '.publication__next',
        })), }));
    const __VLS_12 = __VLS_11({ slidesPerView: ("auto"), loop: ((true)), spaceBetween: ((20)), modules: (([__VLS_ctx.Navigation])), navigation: (({
            prevEl: '.publication__prev',
            nextEl: '.publication__next',
        })), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    ({}({ slidesPerView: ("auto"), loop: ((true)), spaceBetween: ((20)), modules: (([__VLS_ctx.Navigation])), navigation: (({
            prevEl: '.publication__prev',
            nextEl: '.publication__next',
        })), }));
    const __VLS_15 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12));
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.cardData))) {
        // @ts-ignore
        const __VLS_16 = {}
            .SwiperSlide;
        ({}.SwiperSlide);
        ({}.SwiperSlide);
        __VLS_components.SwiperSlide;
        __VLS_components.swiperSlide;
        __VLS_components.SwiperSlide;
        __VLS_components.swiperSlide;
        // @ts-ignore
        [SwiperSlide, SwiperSlide,];
        // @ts-ignore
        const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ key: ((index)), }));
        const __VLS_18 = __VLS_17({ key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
        ({}({ key: ((index)), }));
        const __VLS_21 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18));
        // @ts-ignore
        [UICardPublication,];
        // @ts-ignore
        const __VLS_22 = __VLS_asFunctionalComponent(UICardPublication, new UICardPublication({ card: ((item)), }));
        const __VLS_23 = __VLS_22({ card: ((item)), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
        ({}({ card: ((item)), }));
        const __VLS_26 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(UICardPublication, __VLS_23));
        // @ts-ignore
        [Navigation, cardData,];
        __VLS_nonNullable(__VLS_21.slots).default;
    }
    __VLS_nonNullable(__VLS_15.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['publication'];
        __VLS_styleScopedClasses['publication__container'];
        __VLS_styleScopedClasses['receipts__row'];
        __VLS_styleScopedClasses['receipts__title'];
        __VLS_styleScopedClasses['receipts__arrows'];
        __VLS_styleScopedClasses['publication__prev'];
        __VLS_styleScopedClasses['publication__next'];
        __VLS_styleScopedClasses['publication__slide'];
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
                Navigation: Navigation,
                Swiper: Swiper,
                SwiperSlide: SwiperSlide,
                UICardPublication: UICardPublication,
                cardData: cardData,
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
