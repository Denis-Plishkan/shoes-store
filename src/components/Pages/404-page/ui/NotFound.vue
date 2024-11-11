<script setup lang="ts">

import UIButton from '@/components/UI/UIButton.vue'
import PictureComponent from '@/components/Base/PictureComponent.vue'

const breadcrumbs = [
  { title: 'Главная', disabled: false, href: '/' },
  { title: 'Страница не найдена', disabled: true },
];

const photo = {
  webp: new URL('@/assets/img/404.webp', import.meta.url),
  png: new URL('@/assets/img/404.png', import.meta.url),
}
</script>

<template>
<section class="not-found">
  <div class="not-found__container">
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <div class="not-found__content">
      <div class="not-found__content-left not-found__left">
        <h1 class="not-found__left-title">
          <span>Ошибка</span><br>
          такая страница не найдена
        </h1>

        <p class="not-found__left-text">
          Запрашиваемая страница не найдена. Возможно она была удалена,
          либо её адрес был изменен. Попробуйте воспользоваться поиском.
        </p>

        <router-link to="/">
          <div class="not-found__left-button">
            <UIButton :modify="'primary'" :type="'button'" :txt="'На главную'"/>
          </div>
        </router-link>

      </div>
      <div class="not-found__content-right">
        <PictureComponent :srcset="photo.webp" :src="photo.png" />
      </div>
    </div>
  </div>
</section>
</template>

<style lang="scss">
@import 'NotFound';
</style>