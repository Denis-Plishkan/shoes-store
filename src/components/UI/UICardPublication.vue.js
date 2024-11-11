import BaseIcon from '@/components/Base/BaseIcon.vue';
import PictureComponent from '@/components/Base/PictureComponent.vue';
import { useMobileBreakpoint } from '@/composible/useResize';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const __VLS_props = defineProps();
const { nameDevice: isTable } = useMobileBreakpoint(767);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-publication") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-publication__img") }, });
    // @ts-ignore
    [PictureComponent,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(PictureComponent, new PictureComponent({ srcset: ((__VLS_ctx.card.webp)), src: ((__VLS_ctx.card.png)), }));
    const __VLS_1 = __VLS_0({ srcset: ((__VLS_ctx.card.webp)), src: ((__VLS_ctx.card.png)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ srcset: ((__VLS_ctx.card.webp)), src: ((__VLS_ctx.card.png)), }));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(PictureComponent, __VLS_1));
    // @ts-ignore
    [card, card,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-publication__column") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-publication__item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("card-publication__label") }, });
    (__VLS_ctx.card.label);
    // @ts-ignore
    [card,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("card-publication__title") }, });
    (__VLS_ctx.card.title);
    // @ts-ignore
    [card,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-publication__item") }, });
    if (!__VLS_ctx.isTable) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("card-publication__text") }, });
        // @ts-ignore
        [BaseIcon,];
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(BaseIcon, new BaseIcon({ id: ("plus"), }));
        const __VLS_6 = __VLS_5({ id: ("plus"), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
        ({}({ id: ("plus"), }));
        const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(BaseIcon, __VLS_6));
        // @ts-ignore
        [isTable,];
        (__VLS_ctx.card.text);
        // @ts-ignore
        [card,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-publication__row") }, });
    // @ts-ignore
    const __VLS_10 = {}
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
    const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{ class: ("card-publication__link") }, to: ((__VLS_ctx.card.href)), }));
    const __VLS_12 = __VLS_11({ ...{ class: ("card-publication__link") }, to: ((__VLS_ctx.card.href)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    ({}({ ...{ class: ("card-publication__link") }, to: ((__VLS_ctx.card.href)), }));
    const __VLS_15 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12));
    (__VLS_ctx.card.link);
    // @ts-ignore
    [card, card,];
    __VLS_nonNullable(__VLS_15.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("card-publication__date") }, });
    (__VLS_ctx.card.date);
    // @ts-ignore
    [card,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['card-publication'];
        __VLS_styleScopedClasses['card-publication__img'];
        __VLS_styleScopedClasses['card-publication__column'];
        __VLS_styleScopedClasses['card-publication__item'];
        __VLS_styleScopedClasses['card-publication__label'];
        __VLS_styleScopedClasses['card-publication__title'];
        __VLS_styleScopedClasses['card-publication__item'];
        __VLS_styleScopedClasses['card-publication__text'];
        __VLS_styleScopedClasses['card-publication__row'];
        __VLS_styleScopedClasses['card-publication__link'];
        __VLS_styleScopedClasses['card-publication__date'];
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
                isTable: isTable,
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
