<script setup lang="ts">
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import UIButton from '@/components/UI/UIButton.vue'
import PictureComponent from '@/components/Base/PictureComponent.vue'
import BaseIcon from '@/components/Base/BaseIcon.vue'
import { useMobileBreakpoint } from '@/composible/useResize'
import { NavigationOptions } from 'swiper/types'

const photo = {
  webp: new URL('@/assets/img/banner1.webp', import.meta.url),
  png: new URL('@/assets/img/banner1.png', import.meta.url),
}

const { nameDevice: isDesktop } = useMobileBreakpoint(1023)
const { nameDevice: isMobile } = useMobileBreakpoint(767)
</script>

<template>
  <section class="banner">
    <div class="banner__container">
      <swiper
        :loop="true"
        :modules="[Navigation, Pagination, Autoplay]"
        :navigation="{
          prevEl: '.banner__prev',
          nextEl: '.banner__next',
        }"
        :pagination="{
          clickable: true,
          dynamicBullets: true,
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide>
          <div class="banner__content">
            <div class="banner__info">
              <h1 class="banner__title">
                Air max
                <span></span>
                Flyknit Racer
              </h1>

              <p class="banner__text">
                Усиленный носок и прочный пластиковый каркас. Инновационная
                технология раскрывается через перфорированную стельку
              </p>

              <p v-if="!isMobile" class="banner__price">
                от <span>1000 грн</span>
              </p>

              <div v-if="!isMobile" class="banner__btn">
                <UIButton modify="primary" txt="Подробнее" />
              </div>
            </div>

            <div class="banner__img">
              <PictureComponent :srcset="photo.webp" :src="photo.png" />
            </div>

            <div v-if="isMobile" class="banner__column">
              <p class="banner__price">от <span>1000 грн</span></p>

              <div class="banner__btn">
                <UIButton modify="primary" txt="Подробнее" />
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="banner__content">
            <div class="banner__info">
              <h1 class="banner__title">
                Air max
                <span></span>
                Flyknit Racer
              </h1>

              <p class="banner__text">
                Усиленный носок и прочный пластиковый каркас. Инновационная
                технология раскрывается через перфорированную стельку
              </p>

              <p v-if="!isMobile" class="banner__price">
                от <span>1000 грн</span>
              </p>

              <div v-if="!isMobile" class="banner__btn">
                <UIButton modify="primary" txt="Подробнее" />
              </div>
            </div>

            <div class="banner__img">
              <PictureComponent :srcset="photo.webp" :src="photo.png" />
            </div>

            <div v-if="isMobile" class="banner__column">
              <p class="banner__price">от <span>1000 грн</span></p>

              <div class="banner__btn">
                <UIButton modify="primary" txt="Подробнее" />
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div v-if="!isDesktop" class="banner__swiper-btn">
        <div class="banner__prev">
          <BaseIcon id="prev" />
        </div>

        <div class="banner__next">
          <BaseIcon id="next" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import 'Banner';
</style>
