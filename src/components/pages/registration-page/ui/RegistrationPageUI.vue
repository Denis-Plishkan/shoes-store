<script setup lang="ts">
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import BaseIcon from "@/components/Base/BaseIcon.vue";
import { auth, db } from '@/modules/firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from "vue-router";
import UIButton from "@/components/UI/UIButton.vue";

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
]

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
    router.push('/');

  } catch (error) {
    alert(`Ошибка: ${error.message}`);
  }
}

</script>

<template>
  <section class="registration">
    <div class="registration__container">
      <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
      <h1 class="registration__title">
        Регистрация
      </h1>
      <div class="registration__form-wrapper">
        <div class="registration__form-wrapper-left">
          <Form @submit="onSubmit" :validation-schema="schema">
            <div class="field__wrapper">
              <label for="email">Email</label>
              <Field placeholder="Введите email адрес" id="email" name="email" type="email" />
              <ErrorMessage class="field__error" name="email" />
            </div>

            <div class="field__wrapper">
              <label for="name">ФИО</label>
              <Field placeholder="Ваше полное имя" id="name" name="name" type="name" />
              <ErrorMessage class="field__error" name="name" />
            </div>

            <div class="field__wrapper">
              <label for="tel">Номер телефона</label>
              <Field placeholder="+38 (0__) ___ - __ - __" id="tel" name="tel" type="tel" />
              <ErrorMessage class="field__error" name="tel" />
            </div>

            <div class="field__wrapper">
              <label for="password">Пароль</label>
              <Field placeholder="Придумайте пароль" id="password" name="password" type="password" />
              <ErrorMessage class="field__error" name="password" />
            </div>

            <div class="field__wrapper">
              <label for="passwordConfirmation">Повторите пароль</label>
              <Field
                  placeholder="Повторите пароль"
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  type="password"
              />
              <ErrorMessage class="field__error" name="passwordConfirmation" />
            </div>

            <div class="registration__button-registration">
              <UIButton :type="'submit'" :txt="'Создать аккаунт'" :modify="'primary'"/>
            </div>

          </Form>
        </div>
        <div class="registration__form-wrapper-right registration__right">
          <div class="registration__right-title">
            <BaseIcon id="user"/>
            <h2>Уже есть аккаунт?</h2>
          </div>
          <p>
            Перейдите к <span>авторизации</span> если у вас уже есть зарегистрированный аккаунт.
          </p>

          <router-link to="authorization">
            <div class="registration__button-authorization">
              <UIButton :type="'button'" :modify="'secondary'" :txt="'Авторизоваться'"/>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import 'RegistrationPageUI';
</style>




