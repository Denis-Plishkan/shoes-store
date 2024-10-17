<script setup lang="ts">
import PictureComponent from '@/components/Base/PictureComponent.vue'

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
]
</script>

<template>
  <section class="news">
    <div class="news__container">
      <div class="news__content">
        <div class="news__item" v-for="(item, index) in newsData" :key="index">
          <div class="news__img">
            <PictureComponent :srcset="item.webp" :src="item.png" />
          </div>

          <div class="news__column">
            <h2 class="news__title">{{ item.title }}</h2>

            <a :href="item.href" class="news__link">{{ item.link }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import 'News';
</style>
