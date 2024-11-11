import { mainData } from '@/data/MainData';
import BaseIcon from '@/components/Base/BaseIcon.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { description } = mainData();
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("description") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("description__container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("description__content") }, });
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.description))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("description__card") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("description__icon") }, });
        // @ts-ignore
        [BaseIcon,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(BaseIcon, new BaseIcon({ id: ((item.svg)), }));
        const __VLS_1 = __VLS_0({ id: ((item.svg)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        ({}({ id: ((item.svg)), }));
        const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(BaseIcon, __VLS_1));
        // @ts-ignore
        [description,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("description__column") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("description__title") }, });
        (item.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("description__text") }, });
        (item.text);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['description'];
        __VLS_styleScopedClasses['description__container'];
        __VLS_styleScopedClasses['description__content'];
        __VLS_styleScopedClasses['description__card'];
        __VLS_styleScopedClasses['description__icon'];
        __VLS_styleScopedClasses['description__column'];
        __VLS_styleScopedClasses['description__title'];
        __VLS_styleScopedClasses['description__text'];
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
                description: description,
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
