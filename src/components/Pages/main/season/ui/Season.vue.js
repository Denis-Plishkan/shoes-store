import PictureComponent from '@/components/Base/PictureComponent.vue';
import UIButton from '@/components/UI/UIButton.vue';
import BaseIcon from '@/components/Base/BaseIcon.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const photo = {
    webp: new URL('@/assets/img/nike.webp', import.meta.url),
    png: new URL('@/assets/img/nike.png', import.meta.url),
};
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("season") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("season__container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("season__content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("season__column") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("season__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("season__text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("season__price") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("season__btn") }, });
    // @ts-ignore
    [UIButton,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(UIButton, new UIButton({ txt: ("Подробнее"), modify: ("secondary"), }));
    const __VLS_1 = __VLS_0({ txt: ("Подробнее"), modify: ("secondary"), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ txt: ("Подробнее"), modify: ("secondary"), }));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(UIButton, __VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("season__sub-column") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("season__image") }, });
    // @ts-ignore
    [PictureComponent,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(PictureComponent, new PictureComponent({ srcset: ((__VLS_ctx.photo.webp)), src: ((__VLS_ctx.photo.png)), }));
    const __VLS_6 = __VLS_5({ srcset: ((__VLS_ctx.photo.webp)), src: ((__VLS_ctx.photo.png)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ({}({ srcset: ((__VLS_ctx.photo.webp)), src: ((__VLS_ctx.photo.png)), }));
    const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(PictureComponent, __VLS_6));
    // @ts-ignore
    [photo, photo,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("season__row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("season__plus") }, });
    // @ts-ignore
    [BaseIcon,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(BaseIcon, new BaseIcon({ id: ("plus"), }));
    const __VLS_11 = __VLS_10({ id: ("plus"), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    ({}({ id: ("plus"), }));
    const __VLS_14 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(BaseIcon, __VLS_11));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("season__sub-text") }, });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['season'];
        __VLS_styleScopedClasses['season__container'];
        __VLS_styleScopedClasses['season__content'];
        __VLS_styleScopedClasses['season__column'];
        __VLS_styleScopedClasses['season__title'];
        __VLS_styleScopedClasses['season__text'];
        __VLS_styleScopedClasses['season__price'];
        __VLS_styleScopedClasses['season__btn'];
        __VLS_styleScopedClasses['season__sub-column'];
        __VLS_styleScopedClasses['season__image'];
        __VLS_styleScopedClasses['season__row'];
        __VLS_styleScopedClasses['season__plus'];
        __VLS_styleScopedClasses['season__sub-text'];
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
                UIButton: UIButton,
                BaseIcon: BaseIcon,
                photo: photo,
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
