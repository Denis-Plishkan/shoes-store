<script setup lang="ts">
import BaseIcon from '@/components/Base/BaseIcon.vue'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import UICardPublication from '@/components/UI/UICardPublication.vue'

const cardData = [
  {
    label: 'советы',
    title: 'Десять советов по выбору кроссовок для спорта',
    text: 'Рассказываем все тонкости выбора правильной обуви.',
    link: 'Подробнее',
    date: '10 Августа 2023',
    href: '#',
    webp: new URL('@/assets/img/card-1.webp', import.meta.url),
    png: new URL('@/assets/img/card-1.png', import.meta.url),
  },
  {
    label: 'новости',
    title: 'Наш каталог пополнился новыми коллекциями',
    text: 'С радостью сообщаем вам о расширении ассортимента.',
    link: 'Подробнее',
    date: '7 Августа 2023',
    href: '#',
    webp: new URL('@/assets/img/card-2.webp', import.meta.url),
    png: new URL('@/assets/img/card-2.png', import.meta.url),
  },
  {
    label: 'статьи',
    title: 'Кроссовки как повседневная обувь. Плюсы и минусы',
    text: 'Рассказываем все тонкости выбора правильной обуви.',
    link: 'Подробнее',
    date: '10 Августа 2023',
    href: '#',
    webp: new URL('@/assets/img/card-3.webp', import.meta.url),
    png: new URL('@/assets/img/card-3.png', import.meta.url),
  },
]
</script>

<template>
  <section class="publication">
    <div class="publication__container">
      <div class="receipts__row">
        <h3 class="receipts__title">
          Последние <br />
          публикации
        </h3>

        <div class="receipts__arrows">
          <div class="publication__prev">
            <BaseIcon id="arrow-prev" />
          </div>

          <div class="publication__next">
            <BaseIcon id="arrow-next" />
          </div>
        </div>
      </div>

      <div class="publication__slide">
        <swiper
          slides-per-view="auto"
          :loop="true"
          :spaceBetween="20"
          :modules="[Navigation]"
          :navigation="{
            prevEl: '.publication__prev',
            nextEl: '.publication__next',
          }"
        >
          <swiper-slide v-for="(item, index) in cardData" :key="index">
            <UICardPublication :card="item" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import 'Publication';
</style>
