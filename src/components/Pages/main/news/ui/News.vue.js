import PictureComponent from '@/components/Base/PictureComponent.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const newsData = [
    {
        webp: new URL('@/assets/img/new-collection.webp', import.meta.url),
        png: new URL('@/assets/img/new-collection.png', import.meta.url),
        title: 'Новая коллекция в каталоге Nike Air Max Solo',
        link: 'Перейти в каталог',
        href: '#',
    },
    {
        webp: new URL('@/assets/img/new-collection-1.webp', import.meta.url),
        png: new URL('.@/assets/img/new-collection-1.png', import.meta.url),
        title: 'Новая коллекция в каталоге Nike Air Max Solo',
        link: 'Перейти в каталог',
        href: '#',
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("news") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news__container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news__content") }, });
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.newsData))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news__item") }, key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news__img") }, });
        // @ts-ignore
        [PictureComponent,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(PictureComponent, new PictureComponent({ srcset: ((item.webp)), src: ((item.png)), }));
        const __VLS_1 = __VLS_0({ srcset: ((item.webp)), src: ((item.png)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        ({}({ srcset: ((item.webp)), src: ((item.png)), }));
        const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(PictureComponent, __VLS_1));
        // @ts-ignore
        [newsData,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news__column") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("news__title") }, });
        (item.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((item.href)), ...{ class: ("news__link") }, });
        (item.link);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['news'];
        __VLS_styleScopedClasses['news__container'];
        __VLS_styleScopedClasses['news__content'];
        __VLS_styleScopedClasses['news__item'];
        __VLS_styleScopedClasses['news__img'];
        __VLS_styleScopedClasses['news__column'];
        __VLS_styleScopedClasses['news__title'];
        __VLS_styleScopedClasses['news__link'];
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
                newsData: newsData,
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
