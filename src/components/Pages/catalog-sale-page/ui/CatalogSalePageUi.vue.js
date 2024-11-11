import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebaseApp from "@/modules/firebase/firebase";
import { onMounted, ref, watch } from "vue";
import UICard from "@/components/UI/UICard.vue";
import { Slider } from "@/components";
import { CatalogData } from '@/data/HeaderData';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const breadcrumbs = [
    { title: 'Главная', disabled: false, href: '/' },
    { title: 'Распродажа', disabled: true }
];
const db = getFirestore(firebaseApp);
const shoesData = ref([]);
const filteredShoesData = ref([]);
const range = ref([1000, 5000]);
const selectedColor = ref("");
const selectedPrice = ref("");
const selectedGender = ref("");
const hideGenderFilter = ref(false);
const currentPage = ref(1);
const itemsPerPage = ref(9);
const totalItems = ref(0);
const colorMap = {
    'Белый': 'white',
    'Синий': 'blue',
    'Черный': 'black',
    'Серый': 'gray',
    'Розовый': 'pink',
    'Красный': 'red'
};
const { selectColors, selectPrice, selectGender } = CatalogData();
async function getShoes() {
    try {
        const querySnapshot = await getDocs(collection(db, 'sneakers'));
        filteredShoesData.value = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const shoe = {
                colors: data.colors || [],
                gender: data.gender || '',
                name: data.name || '',
                label: data.label || '',
                id: data.id,
                price: {
                    newPrice: data.price?.newPrice || 0,
                    oldPrice: data.price?.oldPrice || 0
                },
                img: {
                    default: data.img?.default || '',
                    webP: data.img?.webP || ''
                }
            };
            filteredShoesData.value.push(shoe);
        });
        filteredShoesData.value = filteredShoesData.value.filter((shoe) => shoe.label === '-20%');
        filterShoes();
    }
    catch (error) {
        console.log(error);
    }
}
function filterShoes() {
    let filteredShoes = filteredShoesData.value.filter((shoe) => {
        const priceInRange = shoe.price.newPrice >= range.value[0] && shoe.price.newPrice <= range.value[1];
        const colorInEnglish = colorMap[selectedColor.value] || '';
        const colorMatches = colorInEnglish === '' || shoe.colors?.includes(colorInEnglish);
        const genderMatches = selectedGender.value === '' || shoe.gender?.includes(selectedGender.value.toLowerCase());
        return priceInRange && colorMatches && genderMatches;
    });
    if (selectedPrice.value === 'Цена по убыванию') {
        filteredShoes.sort((a, b) => b.price.newPrice - a.price.newPrice);
    }
    else if (selectedPrice.value === 'Цена по возрастанию') {
        filteredShoes.sort((a, b) => a.price.newPrice - b.price.newPrice);
    }
    totalItems.value = filteredShoes.length;
    const startIndex = (currentPage.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;
    shoesData.value = filteredShoes.slice(startIndex, endIndex);
}
watch([range, selectedColor, selectedPrice, selectedGender], () => {
    currentPage.value = 1;
    filterShoes();
});
watch(currentPage, () => {
    filterShoes();
});
onMounted(getShoes);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("catalog") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("catalog__container") }, });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("catalog__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("catalog__filter-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("catalog__wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("catalog__filter-price") }, });
    // @ts-ignore
    const __VLS_6 = {}
        .Slider;
    ({}.Slider);
    __VLS_components.Slider;
    // @ts-ignore
    [Slider,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ modelValue: ((__VLS_ctx.range)), }));
    const __VLS_8 = __VLS_7({ modelValue: ((__VLS_ctx.range)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ modelValue: ((__VLS_ctx.range)), }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    // @ts-ignore
    [range,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("catalog__right") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("catalog__filter-color") }, });
    // @ts-ignore
    const __VLS_12 = {}
        .VSelect;
    ({}.VSelect);
    ({}.VSelect);
    __VLS_components.VSelect;
    __VLS_components.vSelect;
    __VLS_components.VSelect;
    __VLS_components.vSelect;
    // @ts-ignore
    [VSelect, VSelect,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ modelValue: ((__VLS_ctx.selectedColor)), label: ("Цвет"), items: ((__VLS_ctx.selectColors.map(color => color.name))), variant: ("underlined"), }));
    const __VLS_14 = __VLS_13({ modelValue: ((__VLS_ctx.selectedColor)), label: ("Цвет"), items: ((__VLS_ctx.selectColors.map(color => color.name))), variant: ("underlined"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ modelValue: ((__VLS_ctx.selectedColor)), label: ("Цвет"), items: ((__VLS_ctx.selectColors.map(color => color.name))), variant: ("underlined"), }));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
    // @ts-ignore
    [selectedColor, selectColors,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("catalog__filter-sort") }, });
    // @ts-ignore
    const __VLS_18 = {}
        .VSelect;
    ({}.VSelect);
    ({}.VSelect);
    __VLS_components.VSelect;
    __VLS_components.vSelect;
    __VLS_components.VSelect;
    __VLS_components.vSelect;
    // @ts-ignore
    [VSelect, VSelect,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ modelValue: ((__VLS_ctx.selectedPrice)), label: ("Сортировка"), items: ((__VLS_ctx.selectPrice.map(price => price.name))), variant: ("underlined"), }));
    const __VLS_20 = __VLS_19({ modelValue: ((__VLS_ctx.selectedPrice)), label: ("Сортировка"), items: ((__VLS_ctx.selectPrice.map(price => price.name))), variant: ("underlined"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ modelValue: ((__VLS_ctx.selectedPrice)), label: ("Сортировка"), items: ((__VLS_ctx.selectPrice.map(price => price.name))), variant: ("underlined"), }));
    const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
    // @ts-ignore
    [selectedPrice, selectPrice,];
    if (!__VLS_ctx.hideGenderFilter) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("catalog__filter-gender") }, });
        // @ts-ignore
        const __VLS_24 = {}
            .VSelect;
        ({}.VSelect);
        ({}.VSelect);
        __VLS_components.VSelect;
        __VLS_components.vSelect;
        __VLS_components.VSelect;
        __VLS_components.vSelect;
        // @ts-ignore
        [VSelect, VSelect,];
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ modelValue: ((__VLS_ctx.selectedGender)), label: ("Пол"), items: ((__VLS_ctx.selectGender.map(gender => gender.name))), variant: ("underlined"), }));
        const __VLS_26 = __VLS_25({ modelValue: ((__VLS_ctx.selectedGender)), label: ("Пол"), items: ((__VLS_ctx.selectGender.map(gender => gender.name))), variant: ("underlined"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        ({}({ modelValue: ((__VLS_ctx.selectedGender)), label: ("Пол"), items: ((__VLS_ctx.selectGender.map(gender => gender.name))), variant: ("underlined"), }));
        const __VLS_29 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26));
        // @ts-ignore
        [hideGenderFilter, selectedGender, selectGender,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("catalog__container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("catalog__card-wrapper") }, });
    for (const [shoes, index] of __VLS_getVForSourceType((__VLS_ctx.shoesData))) {
        // @ts-ignore
        [UICard,];
        // @ts-ignore
        const __VLS_30 = __VLS_asFunctionalComponent(UICard, new UICard({ key: ((index)), card: ((shoes)), }));
        const __VLS_31 = __VLS_30({ key: ((index)), card: ((shoes)), }, ...__VLS_functionalComponentArgsRest(__VLS_30));
        ({}({ key: ((index)), card: ((shoes)), }));
        const __VLS_34 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(UICard, __VLS_31));
        // @ts-ignore
        [shoesData,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("catalog__pagination") }, });
    // @ts-ignore
    const __VLS_35 = {}
        .VPagination;
    ({}.VPagination);
    __VLS_components.VPagination;
    __VLS_components.vPagination;
    // @ts-ignore
    [VPagination,];
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{ 'onInput': {} }, modelValue: ((__VLS_ctx.currentPage)), length: ((Math.ceil(__VLS_ctx.totalItems / __VLS_ctx.itemsPerPage))), totalVisible: ((5)), }));
    const __VLS_37 = __VLS_36({ ...{ 'onInput': {} }, modelValue: ((__VLS_ctx.currentPage)), length: ((Math.ceil(__VLS_ctx.totalItems / __VLS_ctx.itemsPerPage))), totalVisible: ((5)), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
    ({}({ ...{ 'onInput': {} }, modelValue: ((__VLS_ctx.currentPage)), length: ((Math.ceil(__VLS_ctx.totalItems / __VLS_ctx.itemsPerPage))), totalVisible: ((5)), }));
    let __VLS_41;
    const __VLS_42 = {
        onInput: (__VLS_ctx.filterShoes)
    };
    const __VLS_40 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37));
    let __VLS_38;
    let __VLS_39;
    // @ts-ignore
    [currentPage, totalItems, itemsPerPage, filterShoes,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['catalog'];
        __VLS_styleScopedClasses['catalog__container'];
        __VLS_styleScopedClasses['catalog__title'];
        __VLS_styleScopedClasses['catalog__filter-wrapper'];
        __VLS_styleScopedClasses['catalog__wrapper'];
        __VLS_styleScopedClasses['catalog__filter-price'];
        __VLS_styleScopedClasses['catalog__right'];
        __VLS_styleScopedClasses['catalog__filter-color'];
        __VLS_styleScopedClasses['catalog__filter-sort'];
        __VLS_styleScopedClasses['catalog__filter-gender'];
        __VLS_styleScopedClasses['catalog__container'];
        __VLS_styleScopedClasses['catalog__card-wrapper'];
        __VLS_styleScopedClasses['catalog__pagination'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                UICard: UICard,
                Slider: Slider,
                breadcrumbs: breadcrumbs,
                shoesData: shoesData,
                range: range,
                selectedColor: selectedColor,
                selectedPrice: selectedPrice,
                selectedGender: selectedGender,
                hideGenderFilter: hideGenderFilter,
                currentPage: currentPage,
                itemsPerPage: itemsPerPage,
                totalItems: totalItems,
                selectColors: selectColors,
                selectPrice: selectPrice,
                selectGender: selectGender,
                filterShoes: filterShoes,
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
