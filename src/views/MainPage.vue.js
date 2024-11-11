import { Banner, Description, Discount, News, Publication, Receipts, Season, Sellers, } from '@/components';
import About from '@/components/Pages/main/about/ui/About.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("main") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .Banner;
    ({}.Banner);
    __VLS_components.Banner;
    // @ts-ignore
    [Banner,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    const __VLS_6 = {}
        .Description;
    ({}.Description);
    __VLS_components.Description;
    // @ts-ignore
    [Description,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({}));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    // @ts-ignore
    const __VLS_12 = {}
        .Receipts;
    ({}.Receipts);
    __VLS_components.Receipts;
    // @ts-ignore
    [Receipts,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({}));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
    // @ts-ignore
    const __VLS_18 = {}
        .Sellers;
    ({}.Sellers);
    __VLS_components.Sellers;
    // @ts-ignore
    [Sellers,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({}));
    const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
    // @ts-ignore
    const __VLS_24 = {}
        .Season;
    ({}.Season);
    __VLS_components.Season;
    // @ts-ignore
    [Season,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({}));
    const __VLS_29 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26));
    // @ts-ignore
    const __VLS_30 = {}
        .Publication;
    ({}.Publication);
    __VLS_components.Publication;
    // @ts-ignore
    [Publication,];
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
    const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({}));
    const __VLS_35 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32));
    // @ts-ignore
    const __VLS_36 = {}
        .Discount;
    ({}.Discount);
    __VLS_components.Discount;
    // @ts-ignore
    [Discount,];
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
    const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({}));
    const __VLS_41 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38));
    // @ts-ignore
    const __VLS_42 = {}
        .News;
    ({}.News);
    __VLS_components.News;
    // @ts-ignore
    [News,];
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
    const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({}));
    const __VLS_47 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44));
    // @ts-ignore
    [About,];
    // @ts-ignore
    const __VLS_48 = __VLS_asFunctionalComponent(About, new About({}));
    const __VLS_49 = __VLS_48({}, ...__VLS_functionalComponentArgsRest(__VLS_48));
    ({}({}));
    const __VLS_52 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(About, __VLS_49));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['main'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Banner: Banner,
                Description: Description,
                Discount: Discount,
                News: News,
                Publication: Publication,
                Receipts: Receipts,
                Season: Season,
                Sellers: Sellers,
                About: About,
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
