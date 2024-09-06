<script setup lang="ts">

import {ErrorMessage, Field, Form} from "vee-validate";
import * as yup from 'yup';
import { auth } from '@/modules/firebase/firebase';
import { sendPasswordResetEmail } from "firebase/auth";
import BaseIcon from "@/components/Base/BaseIcon.vue";
import {ref} from "vue";

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

const recover = ref(true);

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

async function onSubmit(values) {
  try {
    await sendPasswordResetEmail(auth, values.email);
    recover.value = false;
  } catch (error) {
    alert(`Ошибка: ${error.message}`);
  }
}

</script>

<template>
  <section class="recover-password">
    <div class="recover-password__container">
      <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
      <h1 class="recover-password__title">
        Восстановление пароля
      </h1>
      <div class="recover-password__form-wrapper">
          <Form v-if="recover" @submit="onSubmit" :validation-schema="schema">
            <p>
              <span>Забыли свой пароль?</span> Укажите свой Email или имя пользователя. Ссылку на создание нового пароля вы получите по электронной почте.
            </p>
            <div class="field__wrapper">
              <label for="email">Email или логин</label>
              <Field placeholder="Введите email адрес" id="email" name="email" type="email" />
              <ErrorMessage class="field__error" name="email" />
            </div>

            <button type="submit">Сбросить пароль</button>
          </Form>

          <div v-else class="recover-password__link-reset">
            <BaseIcon id="recover-password"/>
            <p>
              Ссылка для сброса пароля и дальнейших инструкций отправлена вам на почту. Перейдите по ссылке и следуйте дальнейшим инструкциям.
            </p>
          </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import 'RecoverPasswordPageUi';
</style>