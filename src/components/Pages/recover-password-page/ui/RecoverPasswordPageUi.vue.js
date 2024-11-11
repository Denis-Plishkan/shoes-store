import { ErrorMessage, Field, Form } from "vee-validate";
import * as yup from 'yup';
import { auth } from '@/modules/firebase/firebase';
import { sendPasswordResetEmail } from "firebase/auth";
import BaseIcon from "@/components/Base/BaseIcon.vue";
import { ref } from "vue";
import UIButton from "@/components/UI/UIButton.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const breadcrumbs = [
    {
        title: 'Главная',
        disabled: false,
        href: '/'
    },
    {
        title: 'Регистрация',
        disabled: true
    }
];
const recover = ref(true);
const schema = yup.object().shape({
    email: yup.string().email().required(),
});
async function onSubmit(values) {
    try {
        await sendPasswordResetEmail(auth, values.email);
        recover.value = false;
    }
    catch (error) {
        alert(`Ошибка: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`);
    }
}
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("recover-password") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("recover-password__container") }, });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("recover-password__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("recover-password__form-wrapper") }, });
    if (__VLS_ctx.recover) {
        // @ts-ignore
        const __VLS_6 = {}
            .Form;
        ({}.Form);
        ({}.Form);
        __VLS_components.Form;
        __VLS_components.Form;
        // @ts-ignore
        [Form, Form,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onSubmit': {} }, validationSchema: ((__VLS_ctx.schema)), }));
        const __VLS_8 = __VLS_7({ ...{ 'onSubmit': {} }, validationSchema: ((__VLS_ctx.schema)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ ...{ 'onSubmit': {} }, validationSchema: ((__VLS_ctx.schema)), }));
        let __VLS_12;
        const __VLS_13 = {
            onSubmit: (__VLS_ctx.onSubmit)
        };
        const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
        let __VLS_9;
        let __VLS_10;
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        [recover, schema, onSubmit,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("field__wrapper") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("email"), });
        // @ts-ignore
        const __VLS_14 = {}
            .Field;
        ({}.Field);
        __VLS_components.Field;
        // @ts-ignore
        [Field,];
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ placeholder: ("Введите email адрес"), id: ("email"), name: ("email"), type: ("email"), }));
        const __VLS_16 = __VLS_15({ placeholder: ("Введите email адрес"), id: ("email"), name: ("email"), type: ("email"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
        ({}({ placeholder: ("Введите email адрес"), id: ("email"), name: ("email"), type: ("email"), }));
        const __VLS_19 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16));
        // @ts-ignore
        const __VLS_20 = {}
            .ErrorMessage;
        ({}.ErrorMessage);
        __VLS_components.ErrorMessage;
        // @ts-ignore
        [ErrorMessage,];
        // @ts-ignore
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ class: ("field__error") }, name: ("email"), }));
        const __VLS_22 = __VLS_21({ ...{ class: ("field__error") }, name: ("email"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
        ({}({ ...{ class: ("field__error") }, name: ("email"), }));
        const __VLS_25 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("recover-password__button") }, });
        // @ts-ignore
        [UIButton,];
        // @ts-ignore
        const __VLS_26 = __VLS_asFunctionalComponent(UIButton, new UIButton({ type: (('submit')), modify: (('primary')), txt: (('Сбросить пароль')), }));
        const __VLS_27 = __VLS_26({ type: (('submit')), modify: (('primary')), txt: (('Сбросить пароль')), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
        ({}({ type: (('submit')), modify: (('primary')), txt: (('Сбросить пароль')), }));
        const __VLS_30 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(UIButton, __VLS_27));
        __VLS_nonNullable(__VLS_11.slots).default;
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("recover-password__link-reset") }, });
        // @ts-ignore
        [BaseIcon,];
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(BaseIcon, new BaseIcon({ id: ("recover-password"), }));
        const __VLS_32 = __VLS_31({ id: ("recover-password"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        ({}({ id: ("recover-password"), }));
        const __VLS_35 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(BaseIcon, __VLS_32));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['recover-password'];
        __VLS_styleScopedClasses['recover-password__container'];
        __VLS_styleScopedClasses['recover-password__title'];
        __VLS_styleScopedClasses['recover-password__form-wrapper'];
        __VLS_styleScopedClasses['field__wrapper'];
        __VLS_styleScopedClasses['field__error'];
        __VLS_styleScopedClasses['recover-password__button'];
        __VLS_styleScopedClasses['recover-password__link-reset'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                ErrorMessage: ErrorMessage,
                Field: Field,
                Form: Form,
                BaseIcon: BaseIcon,
                UIButton: UIButton,
                breadcrumbs: breadcrumbs,
                recover: recover,
                schema: schema,
                onSubmit: onSubmit,
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
