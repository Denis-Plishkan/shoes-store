import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { onMounted, ref } from 'vue';
import BaseIcon from '@/components/Base/BaseIcon.vue';
import UICard from '@/components/UI/UICard.vue';
import firebaseApp from '@/modules/firebase/firebase';
import UICardSkeleton from '@/components/UI/UICardSkeleton.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const db = getFirestore(firebaseApp);
const shoesData = ref([]);
const isLoading = ref(true);
async function getShoes() {
    try {
        const querySnapshot = await getDocs(collection(db, 'sneakers'));
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
                    oldPrice: data.price?.oldPrice || 0,
                },
                img: {
                    default: data.img?.default || '',
                    webP: data.img?.webP || '',
                },
            };
            shoesData.value.push(shoe);
        });
    }
    catch (error) {
        console.log(error);
    }
    finally {
        isLoading.value = false;
    }
}
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("receipts") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("receipts__container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("receipts__row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("receipts__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("receipts__arrows") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("receipts__prev") }, });
    // @ts-ignore
    [BaseIcon,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(BaseIcon, new BaseIcon({ id: ("arrow-prev"), }));
    const __VLS_1 = __VLS_0({ id: ("arrow-prev"), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ id: ("arrow-prev"), }));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(BaseIcon, __VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("receipts__next") }, });
    // @ts-ignore
    [BaseIcon,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(BaseIcon, new BaseIcon({ id: ("arrow-next"), }));
    const __VLS_6 = __VLS_5({ id: ("arrow-next"), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ({}({ id: ("arrow-next"), }));
    const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(BaseIcon, __VLS_6));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("receipts__slide") }, });
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
            prevEl: '.receipts__prev',
            nextEl: '.receipts__next',
        })), }));
    const __VLS_12 = __VLS_11({ slidesPerView: ("auto"), loop: ((true)), spaceBetween: ((20)), modules: (([__VLS_ctx.Navigation])), navigation: (({
            prevEl: '.receipts__prev',
            nextEl: '.receipts__next',
        })), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    ({}({ slidesPerView: ("auto"), loop: ((true)), spaceBetween: ((20)), modules: (([__VLS_ctx.Navigation])), navigation: (({
            prevEl: '.receipts__prev',
            nextEl: '.receipts__next',
        })), }));
    const __VLS_15 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12));
    if (__VLS_ctx.isLoading) {
        for (const [_num, ind] of __VLS_getVForSourceType((3))) {
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
            const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ key: ((ind)), }));
            const __VLS_18 = __VLS_17({ key: ((ind)), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
            ({}({ key: ((ind)), }));
            const __VLS_21 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18));
            // @ts-ignore
            [UICardSkeleton,];
            // @ts-ignore
            const __VLS_22 = __VLS_asFunctionalComponent(UICardSkeleton, new UICardSkeleton({}));
            const __VLS_23 = __VLS_22({}, ...__VLS_functionalComponentArgsRest(__VLS_22));
            ({}({}));
            const __VLS_26 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(UICardSkeleton, __VLS_23));
            // @ts-ignore
            [Navigation, isLoading,];
            __VLS_nonNullable(__VLS_21.slots).default;
        }
    }
    else {
        for (const [shoe, index] of __VLS_getVForSourceType((__VLS_ctx.shoesData))) {
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
            const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ key: ((index)), }));
            const __VLS_29 = __VLS_28({ key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
            ({}({ key: ((index)), }));
            const __VLS_32 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_27, __VLS_29));
            // @ts-ignore
            [UICard,];
            // @ts-ignore
            const __VLS_33 = __VLS_asFunctionalComponent(UICard, new UICard({ card: ((shoe)), }));
            const __VLS_34 = __VLS_33({ card: ((shoe)), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
            ({}({ card: ((shoe)), }));
            const __VLS_37 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(UICard, __VLS_34));
            // @ts-ignore
            [shoesData,];
            __VLS_nonNullable(__VLS_32.slots).default;
        }
    }
    __VLS_nonNullable(__VLS_15.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['receipts'];
        __VLS_styleScopedClasses['receipts__container'];
        __VLS_styleScopedClasses['receipts__row'];
        __VLS_styleScopedClasses['receipts__title'];
        __VLS_styleScopedClasses['receipts__arrows'];
        __VLS_styleScopedClasses['receipts__prev'];
        __VLS_styleScopedClasses['receipts__next'];
        __VLS_styleScopedClasses['receipts__slide'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Navigation: Navigation,
                Swiper: Swiper,
                SwiperSlide: SwiperSlide,
                BaseIcon: BaseIcon,
                UICard: UICard,
                UICardSkeleton: UICardSkeleton,
                shoesData: shoesData,
                isLoading: isLoading,
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
