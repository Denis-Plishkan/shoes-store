import UIButton from '@/components/UI/UIButton.vue';
import PictureComponent from '@/components/Base/PictureComponent.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const breadcrumbs = [
    { title: 'Главная', disabled: false, href: '/' },
    { title: 'Страница не найдена', disabled: true },
];
const photo = {
    webp: new URL('@/assets/img/404.webp', import.meta.url),
    png: new URL('@/assets/img/404.png', import.meta.url),
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("not-found") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("not-found__container") }, });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("not-found__content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("not-found__content-left not-found__left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("not-found__left-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("not-found__left-text") }, });
    // @ts-ignore
    const __VLS_6 = {}
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
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ("/"), }));
    const __VLS_8 = __VLS_7({ to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ to: ("/"), }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("not-found__left-button") }, });
    // @ts-ignore
    [UIButton,];
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(UIButton, new UIButton({ modify: (('primary')), type: (('button')), txt: (('На главную')), }));
    const __VLS_13 = __VLS_12({ modify: (('primary')), type: (('button')), txt: (('На главную')), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    ({}({ modify: (('primary')), type: (('button')), txt: (('На главную')), }));
    const __VLS_16 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(UIButton, __VLS_13));
    __VLS_nonNullable(__VLS_11.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("not-found__content-right") }, });
    // @ts-ignore
    [PictureComponent,];
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(PictureComponent, new PictureComponent({ srcset: ((__VLS_ctx.photo.webp)), src: ((__VLS_ctx.photo.png)), }));
    const __VLS_18 = __VLS_17({ srcset: ((__VLS_ctx.photo.webp)), src: ((__VLS_ctx.photo.png)), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    ({}({ srcset: ((__VLS_ctx.photo.webp)), src: ((__VLS_ctx.photo.png)), }));
    const __VLS_21 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(PictureComponent, __VLS_18));
    // @ts-ignore
    [photo, photo,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['not-found'];
        __VLS_styleScopedClasses['not-found__container'];
        __VLS_styleScopedClasses['not-found__content'];
        __VLS_styleScopedClasses['not-found__content-left'];
        __VLS_styleScopedClasses['not-found__left'];
        __VLS_styleScopedClasses['not-found__left-title'];
        __VLS_styleScopedClasses['not-found__left-text'];
        __VLS_styleScopedClasses['not-found__left-button'];
        __VLS_styleScopedClasses['not-found__content-right'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                UIButton: UIButton,
                PictureComponent: PictureComponent,
                breadcrumbs: breadcrumbs,
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
