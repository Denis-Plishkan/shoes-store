<script setup lang="ts">
// import { Autoplay, Navigation, Pagination } from 'swiper/modules'
// import { Swiper, SwiperSlide } from 'swiper/vue'
// import 'swiper/css'
// import 'swiper/css/pagination'
// import UIButton from '@/components/UI/UIButton.vue'
// import PictureComponent from '@/components/Base/PictureComponent.vue'
// import BaseIcon from '@/components/Base/BaseIcon.vue'
// import { useMobileBreakpoint } from '@/composible/useResize'
// import { NavigationOptions } from 'swiper/types'
// import { mainData } from '@/data/MainData'
// import TheLastReceipts from '@/components/Pages/main/TheLastReceipts.vue'
//
// const { description } = mainData()
//
// const photo = {
//   webp: new URL('../../../assets/img/nike.webp', import.meta.url),
//   png: new URL('../../../assets/img/nike.png', import.meta.url),
// }
//
// const { nameDevice: isDesktop } = useMobileBreakpoint(1023)
// const { nameDevice: isMobile } = useMobileBreakpoint(767)
</script>

<template>
  <!--  <section class="description">-->
  <!--    <div class="description__container">-->
  <!--      <div class="description__content">-->
  <!--        <div-->
  <!--          v-for="(item, index) in description"-->
  <!--          :key="index"-->
  <!--          class="description__card"-->
  <!--        >-->
  <!--          <div class="description__icon">-->
  <!--            <BaseIcon :id="item.svg" />-->
  <!--          </div>-->

  <!--          <div class="description__column">-->
  <!--            <h2 class="description__title">{{ item.title }}</h2>-->

  <!--            <p class="description__text">{{ item.text }}</p>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </section>-->

  <!--  <TheLastReceipts />-->
</template>

<style lang="scss">
@import '@/assets/style/variable';
@import '@/assets/style/media';

//.banner {
//  margin: 24px 0 0 0;
//  &__content {
//    display: flex;
//    justify-content: space-between;
//    position: relative;
//
//    @include media-breakpoint-down(sm) {
//      flex-direction: column;
//      padding-bottom: 60px;
//    }
//  }
//
//  &__info {
//    max-width: 560px;
//    width: 100%;
//
//    @include media-breakpoint-down(lg) {
//      max-width: 420px;
//    }
//
//    @include media-breakpoint-down(md) {
//      max-width: 380px;
//    }
//
//    @include media-breakpoint-down(sm) {
//      max-width: 100%;
//    }
//  }
//
//  &__title {
//    font-weight: 500;
//    font-size: 69px;
//    text-transform: uppercase;
//    color: $dark-black;
//    max-width: 560px;
//    margin: 112px 0 29px;
//    line-height: 69px;
//
//    span {
//      display: inline-block;
//      width: 123px;
//      height: 2px;
//      background: $dark-black;
//      margin: 0 0 25px 27px;
//
//      @include media-breakpoint-down(lg) {
//        margin: 0 0 20px 20px;
//      }
//
//      @include media-breakpoint-down(md) {
//        margin: 0 0 10px 0;
//      }
//    }
//
//    @include media-breakpoint-down(lg) {
//      font-size: 53px;
//    }
//
//    @include media-breakpoint-down(md) {
//      font-size: 34px;
//      margin-bottom: 9px;
//    }
//
//    @include media-breakpoint-down(sm) {
//      max-width: 380px;
//      //text-align: center;
//    }
//  }
//
//  &__text {
//    font-weight: 400;
//    font-size: 18px;
//    line-height: 161%;
//    color: #292929;
//    margin-bottom: 20px;
//
//    @include media-breakpoint-down(md) {
//      font-size: 15px;
//      line-height: 153%;
//      max-width: 316px;
//      margin-bottom: 9px;
//    }
//
//    @include media-breakpoint-down(sm) {
//      max-width: 100%;
//    }
//  }
//
//  &__price {
//    font-weight: 400;
//    font-size: 16px;
//    line-height: 125%;
//    color: $dark-black;
//    margin-bottom: 20px;
//
//    span {
//      font-weight: 500;
//      font-size: 22px;
//      line-height: 118%;
//      color: $dark-black;
//    }
//
//    @include media-breakpoint-down(sm) {
//      text-align: center;
//    }
//  }
//
//  &__btn {
//    width: 180px;
//    height: 65px;
//    margin-bottom: 56px;
//
//    @include media-breakpoint-down(sm) {
//      margin: 0 auto;
//    }
//  }
//
//  &__img {
//    max-width: 757px;
//    width: 100%;
//    height: 757px;
//
//    img {
//      width: 100%;
//      height: 100%;
//      object-fit: cover;
//    }
//
//    @include media-breakpoint-down(lg) {
//      max-width: 700px;
//      width: 100%;
//      height: 700px;
//    }
//
//    @include media-breakpoint-down(md) {
//      max-width: 393px;
//      height: 406px;
//      margin-right: 40px;
//    }
//
//    @include media-breakpoint-down(sm) {
//      margin: 0 200px 0 auto;
//    }
//    @include media-breakpoint-down(xs) {
//      max-width: 330px;
//      height: 340px;
//    }
//  }
//
//  &__swiper-btn {
//    position: absolute;
//    top: 693px;
//    z-index: 50;
//    width: 210px;
//    display: flex;
//    justify-content: space-between;
//    align-items: center;
//  }
//
//  &__prev,
//  &__next {
//    display: flex;
//    justify-content: center;
//    align-items: center;
//    width: 98px;
//    height: 98px;
//    border: 1px solid #e2e2e2;
//    border-radius: 50%;
//    cursor: pointer;
//
//    svg {
//      width: 15px;
//      height: 12px;
//    }
//
//    &:hover {
//      background: #f6f6f6;
//    }
//  }
//
//  .swiper-pagination {
//    display: none;
//
//    @include media-breakpoint-down(md) {
//      display: block;
//    }
//
//    &-bullet {
//      background: #1f1f1f;
//    }
//  }
//}
</style>
