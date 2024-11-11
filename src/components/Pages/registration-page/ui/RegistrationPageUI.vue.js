import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import BaseIcon from "@/components/Base/BaseIcon.vue";
import { auth, db } from '@/modules/firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from "vue-router";
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
const router = useRouter();
const schema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().min(5).max(60).required(),
    tel: yup
        .string()
        .required()
        .matches(/^\+380\d{9}$/, '\n' +
        'The phone number must start with +380 and contain 9 digits after the code'),
    password: yup.string().min(6).required(),
    passwordConfirmation: yup
        .string()
        .required()
        .oneOf([yup.ref('password')], 'Passwords do not match'),
});
async function onSubmit(values) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), {
            email: values.email,
            name: values.name,
            tel: values.tel,
            uid: user.uid,
            createdAt: new Date(),
        });
        alert('Регистрация прошла успешно!');
        await router.push('/');
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("registration") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("registration__container") }, });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("registration__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("registration__form-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("registration__form-wrapper-left") }, });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("field__wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("email"), });
    // @ts-ignore
    [schema, onSubmit,];
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("field__wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("name"), });
    // @ts-ignore
    const __VLS_26 = {}
        .Field;
    ({}.Field);
    __VLS_components.Field;
    // @ts-ignore
    [Field,];
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ placeholder: ("Ваше полное имя"), id: ("name"), name: ("name"), type: ("name"), }));
    const __VLS_28 = __VLS_27({ placeholder: ("Ваше полное имя"), id: ("name"), name: ("name"), type: ("name"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ placeholder: ("Ваше полное имя"), id: ("name"), name: ("name"), type: ("name"), }));
    const __VLS_31 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28));
    // @ts-ignore
    const __VLS_32 = {}
        .ErrorMessage;
    ({}.ErrorMessage);
    __VLS_components.ErrorMessage;
    // @ts-ignore
    [ErrorMessage,];
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{ class: ("field__error") }, name: ("name"), }));
    const __VLS_34 = __VLS_33({ ...{ class: ("field__error") }, name: ("name"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ ...{ class: ("field__error") }, name: ("name"), }));
    const __VLS_37 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("field__wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("tel"), });
    // @ts-ignore
    const __VLS_38 = {}
        .Field;
    ({}.Field);
    __VLS_components.Field;
    // @ts-ignore
    [Field,];
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ placeholder: ("+38 (0__) ___ - __ - __"), id: ("tel"), name: ("tel"), type: ("tel"), }));
    const __VLS_40 = __VLS_39({ placeholder: ("+38 (0__) ___ - __ - __"), id: ("tel"), name: ("tel"), type: ("tel"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    ({}({ placeholder: ("+38 (0__) ___ - __ - __"), id: ("tel"), name: ("tel"), type: ("tel"), }));
    const __VLS_43 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40));
    // @ts-ignore
    const __VLS_44 = {}
        .ErrorMessage;
    ({}.ErrorMessage);
    __VLS_components.ErrorMessage;
    // @ts-ignore
    [ErrorMessage,];
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ ...{ class: ("field__error") }, name: ("tel"), }));
    const __VLS_46 = __VLS_45({ ...{ class: ("field__error") }, name: ("tel"), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    ({}({ ...{ class: ("field__error") }, name: ("tel"), }));
    const __VLS_49 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("field__wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("password"), });
    // @ts-ignore
    const __VLS_50 = {}
        .Field;
    ({}.Field);
    __VLS_components.Field;
    // @ts-ignore
    [Field,];
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ placeholder: ("Придумайте пароль"), id: ("password"), name: ("password"), type: ("password"), }));
    const __VLS_52 = __VLS_51({ placeholder: ("Придумайте пароль"), id: ("password"), name: ("password"), type: ("password"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    ({}({ placeholder: ("Придумайте пароль"), id: ("password"), name: ("password"), type: ("password"), }));
    const __VLS_55 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52));
    // @ts-ignore
    const __VLS_56 = {}
        .ErrorMessage;
    ({}.ErrorMessage);
    __VLS_components.ErrorMessage;
    // @ts-ignore
    [ErrorMessage,];
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ ...{ class: ("field__error") }, name: ("password"), }));
    const __VLS_58 = __VLS_57({ ...{ class: ("field__error") }, name: ("password"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    ({}({ ...{ class: ("field__error") }, name: ("password"), }));
    const __VLS_61 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("field__wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("passwordConfirmation"), });
    // @ts-ignore
    const __VLS_62 = {}
        .Field;
    ({}.Field);
    __VLS_components.Field;
    // @ts-ignore
    [Field,];
    // @ts-ignore
    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ placeholder: ("Повторите пароль"), id: ("passwordConfirmation"), name: ("passwordConfirmation"), type: ("password"), }));
    const __VLS_64 = __VLS_63({ placeholder: ("Повторите пароль"), id: ("passwordConfirmation"), name: ("passwordConfirmation"), type: ("password"), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
    ({}({ placeholder: ("Повторите пароль"), id: ("passwordConfirmation"), name: ("passwordConfirmation"), type: ("password"), }));
    const __VLS_67 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64));
    // @ts-ignore
    const __VLS_68 = {}
        .ErrorMessage;
    ({}.ErrorMessage);
    __VLS_components.ErrorMessage;
    // @ts-ignore
    [ErrorMessage,];
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ ...{ class: ("field__error") }, name: ("passwordConfirmation"), }));
    const __VLS_70 = __VLS_69({ ...{ class: ("field__error") }, name: ("passwordConfirmation"), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    ({}({ ...{ class: ("field__error") }, name: ("passwordConfirmation"), }));
    const __VLS_73 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("registration__button-registration") }, });
    // @ts-ignore
    [UIButton,];
    // @ts-ignore
    const __VLS_74 = __VLS_asFunctionalComponent(UIButton, new UIButton({ type: (('submit')), txt: (('Создать аккаунт')), modify: (('primary')), }));
    const __VLS_75 = __VLS_74({ type: (('submit')), txt: (('Создать аккаунт')), modify: (('primary')), }, ...__VLS_functionalComponentArgsRest(__VLS_74));
    ({}({ type: (('submit')), txt: (('Создать аккаунт')), modify: (('primary')), }));
    const __VLS_78 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(UIButton, __VLS_75));
    __VLS_nonNullable(__VLS_11.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("registration__form-wrapper-right registration__right") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("registration__right-title") }, });
    // @ts-ignore
    [BaseIcon,];
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(BaseIcon, new BaseIcon({ id: ("user"), }));
    const __VLS_80 = __VLS_79({ id: ("user"), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
    ({}({ id: ("user"), }));
    const __VLS_83 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(BaseIcon, __VLS_80));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    // @ts-ignore
    const __VLS_84 = {}
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
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ to: ("authorization"), }));
    const __VLS_86 = __VLS_85({ to: ("authorization"), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    ({}({ to: ("authorization"), }));
    const __VLS_89 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("registration__button-authorization") }, });
    // @ts-ignore
    [UIButton,];
    // @ts-ignore
    const __VLS_90 = __VLS_asFunctionalComponent(UIButton, new UIButton({ type: (('button')), modify: (('secondary')), txt: (('Авторизоваться')), }));
    const __VLS_91 = __VLS_90({ type: (('button')), modify: (('secondary')), txt: (('Авторизоваться')), }, ...__VLS_functionalComponentArgsRest(__VLS_90));
    ({}({ type: (('button')), modify: (('secondary')), txt: (('Авторизоваться')), }));
    const __VLS_94 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(UIButton, __VLS_91));
    __VLS_nonNullable(__VLS_89.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['registration'];
        __VLS_styleScopedClasses['registration__container'];
        __VLS_styleScopedClasses['registration__title'];
        __VLS_styleScopedClasses['registration__form-wrapper'];
        __VLS_styleScopedClasses['registration__form-wrapper-left'];
        __VLS_styleScopedClasses['field__wrapper'];
        __VLS_styleScopedClasses['field__error'];
        __VLS_styleScopedClasses['field__wrapper'];
        __VLS_styleScopedClasses['field__error'];
        __VLS_styleScopedClasses['field__wrapper'];
        __VLS_styleScopedClasses['field__error'];
        __VLS_styleScopedClasses['field__wrapper'];
        __VLS_styleScopedClasses['field__error'];
        __VLS_styleScopedClasses['field__wrapper'];
        __VLS_styleScopedClasses['field__error'];
        __VLS_styleScopedClasses['registration__button-registration'];
        __VLS_styleScopedClasses['registration__form-wrapper-right'];
        __VLS_styleScopedClasses['registration__right'];
        __VLS_styleScopedClasses['registration__right-title'];
        __VLS_styleScopedClasses['registration__button-authorization'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Field: Field,
                Form: Form,
                ErrorMessage: ErrorMessage,
                BaseIcon: BaseIcon,
                UIButton: UIButton,
                breadcrumbs: breadcrumbs,
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
