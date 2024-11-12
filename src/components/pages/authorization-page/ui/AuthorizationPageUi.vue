<script setup lang="ts">

import {ErrorMessage, Field, Form} from "vee-validate";
import BaseIcon from "@/components/Base/BaseIcon.vue";
import * as yup from "yup";
import { auth } from '@/modules/firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from "vue-router";
import UIButton from "@/components/UI/UIButton.vue";
import { LoginValues } from '@/type/type'

const router = useRouter()

const breadcrumbs = [
  {
    title: 'Главная',
    disabled: false,
    href: '/'
  },
  {
    title: 'Авторизация',
    disabled: true
  }
]

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

async function onSubmit(values: Record<string, any>) {
  const loginValues = values as LoginValues;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, loginValues.email, loginValues.password);
    console.log(userCredential);
    alert('Авторизация прошла успешно!');
    await router.push('/');
  } catch (error) {
    alert(`Ошибка: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`);
  }
}

</script>

<template>
  <section class="authorization">
    <div class="authorization__container">
      <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
      <h1 class="authorization__title">
        Авторизация
      </h1>
      <div class="authorization__form-wrapper">
        <div class="authorization__form-wrapper-left">
          <Form @submit="onSubmit" :validation-schema="schema">
            <div class="field__wrapper">
              <label for="email">Email или логин</label>
              <Field placeholder="Введите данные для авторизации" id="email" name="email" type="email" />
              <ErrorMessage class="field__error" name="email" />
            </div>

            <div class="field__wrapper">
              <label for="password">Password</label>
              <Field placeholder="Введите пароль от аккаунта" id="password" name="password" type="password" />
              <ErrorMessage class="field__error" name="password" />
            </div>

            <div class="authorization__buttons">
              <router-link to="recover-password">

                <div class="authorization__button-recover">
                  <UIButton :txt="'Восстановить пароль'" :modify="'third'" :type="'button'"/>
                </div>
              </router-link>

              <div class="authorization__button-entry">
                <UIButton :type="'submit'" :modify="'primary'" :txt="'Войти в кабинет'"/>
              </div>

            </div>

          </Form>
        </div>
        <div class="authorization__form-wrapper-right authorization__right">
          <div class="authorization__right-title">
            <BaseIcon id="user"/>
            <h2>Еще нет аккаунта?</h2>
          </div>
          <p>
            <span>Регистрация на сайте</span> позволяет получить доступ к статусу и истории вашего заказа. Просто заполните поля ниже, и вы получите учетную запись.
          </p>
          <p>
            Мы запрашиваем у вас только информацию, необходимую для того, чтобы сделать процесс покупки более быстрым и легким.
          </p>

          <router-link to="registration">
            <div class="authorization__button-registration">
              <UIButton :txt="'Зарегистрироваться'" :modify="'secondary'" :type="'button'"/>
            </div>

          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import 'AuthorizationPageUi';
</style>