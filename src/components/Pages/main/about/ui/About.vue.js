import PictureComponent from '@/components/Base/PictureComponent.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const img = {
    webp: new URL('@/assets/img/about.webp', import.meta.url),
    png: new URL('@/assets/img/about.png', import.meta.url),
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("about") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("about__container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("about__content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("about__column") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("about__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("about__text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("about__title-sub") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("about__text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), ...{ class: ("about__link") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("about__img") }, });
    // @ts-ignore
    [PictureComponent,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(PictureComponent, new PictureComponent({ srcset: ((__VLS_ctx.img.webp)), src: ((__VLS_ctx.img.png)), }));
    const __VLS_1 = __VLS_0({ srcset: ((__VLS_ctx.img.webp)), src: ((__VLS_ctx.img.png)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ srcset: ((__VLS_ctx.img.webp)), src: ((__VLS_ctx.img.png)), }));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(PictureComponent, __VLS_1));
    // @ts-ignore
    [img, img,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['about'];
        __VLS_styleScopedClasses['about__container'];
        __VLS_styleScopedClasses['about__content'];
        __VLS_styleScopedClasses['about__column'];
        __VLS_styleScopedClasses['about__title'];
        __VLS_styleScopedClasses['about__text'];
        __VLS_styleScopedClasses['about__title-sub'];
        __VLS_styleScopedClasses['about__text'];
        __VLS_styleScopedClasses['about__link'];
        __VLS_styleScopedClasses['about__img'];
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
                img: img,
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
