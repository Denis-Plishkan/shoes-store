<script setup lang="ts">
import BaseIcon from '@/components/Base/BaseIcon.vue'
import PictureComponent from '@/components/Base/PictureComponent.vue'
import { useMobileBreakpoint } from '@/composible/useResize'

interface IData {
  label: string
  title: string
  text: string
  link: string
  date: string
  href: string
  png: URL
  webp: URL
}
interface IPublication {
  card: IData
}

defineProps<IPublication>()

const { nameDevice: isTable } = useMobileBreakpoint(767)
</script>

<template>
  <div class="card-publication">
    <div class="card-publication__img">
      <PictureComponent :srcset="card.webp" :src="card.png" />
    </div>

    <div class="card-publication__column">
      <div class="card-publication__item">
        <p class="card-publication__label">{{ card.label }}</p>

        <h3 class="card-publication__title">{{ card.title }}</h3>
      </div>

      <div class="card-publication__item">
        <p class="card-publication__text" v-if="!isTable">
          <BaseIcon id="plus" />

          {{ card.text }}
        </p>

        <div class="card-publication__row">
          <router-link class="card-publication__link" :to="card.href">
            {{ card.link }}
          </router-link>

          <p class="card-publication__date">{{ card.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/variable';
@import '@/assets/style/media';

.card-publication {
  position: relative;

  &__img {
    width: 670px;
    height: 461px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @include media-breakpoint-down(sm) {
      width: 296px;
      height: 387px;
    }
  }

  &__column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    position: absolute;
    top: 0;
    padding: 0 40px;
    width: 89%;

    @include media-breakpoint-down(sm) {
      padding: 0 20px;
    }
  }

  &__label {
    font-weight: 500;
    font-size: 12px;
    line-height: 83%;
    text-transform: uppercase;
    color: $dark-black;
    background: #dbe5eb;
    padding: 16px 10px;
    width: fit-content;
    margin: 40px 0 23px;

    @include media-breakpoint-down(sm) {
      margin: 20px 0 32px;
    }
  }

  &__title {
    font-weight: 500;
    font-size: 27px;
    line-height: 133%;
    color: #fff;
    max-width: 448px;
    width: 100%;

    @include media-breakpoint-down(sm) {
      font-size: 21px;
      line-height: 124%;
      max-width: 256px;
    }
  }

  &__text {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    color: #fff;
    margin-bottom: 23px;

    svg {
      max-width: 20px;
      height: 20px;
      margin-right: 14px;
    }
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    width: 100%;
  }

  &__link {
    font-weight: 500;
    font-size: 18px;
    line-height: 217%;
    color: #fff;
    width: fit-content;

    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background: #fff;
    }
  }

  &__date {
    font-weight: 400;
    font-size: 13px;
    line-height: 223%;
    text-align: right;
    color: #fff;
  }
}
</style>
