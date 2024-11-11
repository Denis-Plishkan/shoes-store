import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import UIButton from '@/components/UI/UIButton.vue';
import PictureComponent from '@/components/Base/PictureComponent.vue';
import BaseIcon from '@/components/Base/BaseIcon.vue';
import { useMobileBreakpoint } from '@/composible/useResize';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const photo = {
    webp: new URL('@/assets/img/banner1.webp', import.meta.url),
    png: new URL('@/assets/img/banner1.png', import.meta.url),
};
const { nameDevice: isDesktop } = useMobileBreakpoint(1023);
const { nameDevice: isMobile } = useMobileBreakpoint(767);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("banner") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("banner__container") }, });
    // @ts-ignore
    const __VLS_0 = {}
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ loop: ((true)), modules: (([__VLS_ctx.Navigation, __VLS_ctx.Pagination, __VLS_ctx.Autoplay])), navigation: (({
            prevEl: '.banner__prev',
            nextEl: '.banner__next',
        })), pagination: (({
            clickable: true,
            dynamicBullets: true,
        })), autoplay: (({
            delay: 2500,
            disableOnInteraction: false,
        })), }));
    const __VLS_2 = __VLS_1({ loop: ((true)), modules: (([__VLS_ctx.Navigation, __VLS_ctx.Pagination, __VLS_ctx.Autoplay])), navigation: (({
            prevEl: '.banner__prev',
            nextEl: '.banner__next',
        })), pagination: (({
            clickable: true,
            dynamicBullets: true,
        })), autoplay: (({
            delay: 2500,
            disableOnInteraction: false,
        })), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ loop: ((true)), modules: (([__VLS_ctx.Navigation, __VLS_ctx.Pagination, __VLS_ctx.Autoplay])), navigation: (({
            prevEl: '.banner__prev',
            nextEl: '.banner__next',
        })), pagination: (({
            clickable: true,
            dynamicBullets: true,
        })), autoplay: (({
            delay: 2500,
            disableOnInteraction: false,
        })), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    const __VLS_6 = {}
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
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({}));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("banner__content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("banner__info") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("banner__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    // @ts-ignore
    [Navigation, Pagination, Autoplay,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("banner__text") }, });
    if (!__VLS_ctx.isMobile) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("banner__price") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        [isMobile,];
    }
    if (!__VLS_ctx.isMobile) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("banner__btn") }, });
        // @ts-ignore
        [UIButton,];
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent(UIButton, new UIButton({ modify: ("primary"), txt: ("Подробнее"), }));
        const __VLS_13 = __VLS_12({ modify: ("primary"), txt: ("Подробнее"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
        ({}({ modify: ("primary"), txt: ("Подробнее"), }));
        const __VLS_16 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(UIButton, __VLS_13));
        // @ts-ignore
        [isMobile,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("banner__img") }, });
    // @ts-ignore
    [PictureComponent,];
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(PictureComponent, new PictureComponent({ srcset: ((__VLS_ctx.photo.webp)), src: ((__VLS_ctx.photo.png)), }));
    const __VLS_18 = __VLS_17({ srcset: ((__VLS_ctx.photo.webp)), src: ((__VLS_ctx.photo.png)), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    ({}({ srcset: ((__VLS_ctx.photo.webp)), src: ((__VLS_ctx.photo.png)), }));
    const __VLS_21 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(PictureComponent, __VLS_18));
    // @ts-ignore
    [photo, photo,];
    if (__VLS_ctx.isMobile) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("banner__column") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("banner__price") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        [isMobile,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("banner__btn") }, });
        // @ts-ignore
        [UIButton,];
        // @ts-ignore
        const __VLS_22 = __VLS_asFunctionalComponent(UIButton, new UIButton({ modify: ("primary"), txt: ("Подробнее"), }));
        const __VLS_23 = __VLS_22({ modify: ("primary"), txt: ("Подробнее"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
        ({}({ modify: ("primary"), txt: ("Подробнее"), }));
        const __VLS_26 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(UIButton, __VLS_23));
    }
    __VLS_nonNullable(__VLS_11.slots).default;
    // @ts-ignore
    const __VLS_27 = {}
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
    const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({}));
    const __VLS_29 = __VLS_28({}, ...__VLS_functionalComponentArgsRest(__VLS_28));
    ({}({}));
    const __VLS_32 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_27, __VLS_29));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("banner__content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("banner__info") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("banner__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("banner__text") }, });
    if (!__VLS_ctx.isMobile) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("banner__price") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        [isMobile,];
    }
    if (!__VLS_ctx.isMobile) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("banner__btn") }, });
        // @ts-ignore
        [UIButton,];
        // @ts-ignore
        const __VLS_33 = __VLS_asFunctionalComponent(UIButton, new UIButton({ modify: ("primary"), txt: ("Подробнее"), }));
        const __VLS_34 = __VLS_33({ modify: ("primary"), txt: ("Подробнее"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
        ({}({ modify: ("primary"), txt: ("Подробнее"), }));
        const __VLS_37 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(UIButton, __VLS_34));
        // @ts-ignore
        [isMobile,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("banner__img") }, });
    // @ts-ignore
    [PictureComponent,];
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(PictureComponent, new PictureComponent({ srcset: ((__VLS_ctx.photo.webp)), src: ((__VLS_ctx.photo.png)), }));
    const __VLS_39 = __VLS_38({ srcset: ((__VLS_ctx.photo.webp)), src: ((__VLS_ctx.photo.png)), }, ...__VLS_functionalComponentArgsRest(__VLS_38));
    ({}({ srcset: ((__VLS_ctx.photo.webp)), src: ((__VLS_ctx.photo.png)), }));
    const __VLS_42 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(PictureComponent, __VLS_39));
    // @ts-ignore
    [photo, photo,];
    if (__VLS_ctx.isMobile) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("banner__column") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("banner__price") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        [isMobile,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("banner__btn") }, });
        // @ts-ignore
        [UIButton,];
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(UIButton, new UIButton({ modify: ("primary"), txt: ("Подробнее"), }));
        const __VLS_44 = __VLS_43({ modify: ("primary"), txt: ("Подробнее"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        ({}({ modify: ("primary"), txt: ("Подробнее"), }));
        const __VLS_47 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(UIButton, __VLS_44));
    }
    __VLS_nonNullable(__VLS_32.slots).default;
    __VLS_nonNullable(__VLS_5.slots).default;
    if (!__VLS_ctx.isDesktop) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("banner__swiper-btn") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("banner__prev") }, });
        // @ts-ignore
        [BaseIcon,];
        // @ts-ignore
        const __VLS_48 = __VLS_asFunctionalComponent(BaseIcon, new BaseIcon({ id: ("prev"), }));
        const __VLS_49 = __VLS_48({ id: ("prev"), }, ...__VLS_functionalComponentArgsRest(__VLS_48));
        ({}({ id: ("prev"), }));
        const __VLS_52 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(BaseIcon, __VLS_49));
        // @ts-ignore
        [isDesktop,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("banner__next") }, });
        // @ts-ignore
        [BaseIcon,];
        // @ts-ignore
        const __VLS_53 = __VLS_asFunctionalComponent(BaseIcon, new BaseIcon({ id: ("next"), }));
        const __VLS_54 = __VLS_53({ id: ("next"), }, ...__VLS_functionalComponentArgsRest(__VLS_53));
        ({}({ id: ("next"), }));
        const __VLS_57 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(BaseIcon, __VLS_54));
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['banner'];
        __VLS_styleScopedClasses['banner__container'];
        __VLS_styleScopedClasses['banner__content'];
        __VLS_styleScopedClasses['banner__info'];
        __VLS_styleScopedClasses['banner__title'];
        __VLS_styleScopedClasses['banner__text'];
        __VLS_styleScopedClasses['banner__price'];
        __VLS_styleScopedClasses['banner__btn'];
        __VLS_styleScopedClasses['banner__img'];
        __VLS_styleScopedClasses['banner__column'];
        __VLS_styleScopedClasses['banner__price'];
        __VLS_styleScopedClasses['banner__btn'];
        __VLS_styleScopedClasses['banner__content'];
        __VLS_styleScopedClasses['banner__info'];
        __VLS_styleScopedClasses['banner__title'];
        __VLS_styleScopedClasses['banner__text'];
        __VLS_styleScopedClasses['banner__price'];
        __VLS_styleScopedClasses['banner__btn'];
        __VLS_styleScopedClasses['banner__img'];
        __VLS_styleScopedClasses['banner__column'];
        __VLS_styleScopedClasses['banner__price'];
        __VLS_styleScopedClasses['banner__btn'];
        __VLS_styleScopedClasses['banner__swiper-btn'];
        __VLS_styleScopedClasses['banner__prev'];
        __VLS_styleScopedClasses['banner__next'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Autoplay: Autoplay,
                Navigation: Navigation,
                Pagination: Pagination,
                Swiper: Swiper,
                SwiperSlide: SwiperSlide,
                UIButton: UIButton,
                PictureComponent: PictureComponent,
                BaseIcon: BaseIcon,
                photo: photo,
                isDesktop: isDesktop,
                isMobile: isMobile,
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
