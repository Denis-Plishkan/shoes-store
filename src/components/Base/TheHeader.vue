<script setup lang="ts">
import { ILinks } from '../../type/type.ts'
import BaseIcon from './BaseIcon.vue'
import { ref } from 'vue'
import { useToggle } from '../../composible/useToggle.ts'
import UIButton from '../UI/UIButton.vue'

const linksTop: ILinks[] = [
  { href: '#', name: 'О магазине' },
  { href: '#', name: 'Наш блог' },
  { href: '#', name: 'Доставка' },
  { href: '#', name: 'Оплата' },
  { href: '#', name: 'Контакты' },
  { href: '#', name: 'Индивидуальный заказ' },
]

const links: ILinks[] = [
  { href: '#', name: 'Мужские' },
  { href: '#', name: 'Женские' },
  { href: '#', name: 'Детские' },
  { href: '#', name: 'Распродажа' },
]

const icons = [
  { href: '#', icon: 'search' },
  { href: '#', icon: 'like' },
  { href: '#', icon: 'basket' },
]

const like = ref(0)
const basket = ref(4)
const isToggle = ref(false)

const handleToggle = useToggle(isToggle)
</script>

<template>
  <header class="header">
    <div class="container">
      <div
        class="header__mobile"
        :class="{ 'header__mobile_active': isToggle }"
      >
        <div class="header__mobile-content">
          <div class="header__mobile-cross" @click="handleToggle">
            <BaseIcon id="cross" />
          </div>

          <div class="header__mobile-search">
            <UIButton txt="Подробнее" modify="dark" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import 'src/assets/media';
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 115px;
  z-index: 60;

  &__mobile {
    @include media-breakpoint-down(md) {
      position: fixed;
      top: 0;
      left: 0;
      background: #000;
      opacity: 0.7;
      width: 100%;
      height: 100%;
      transition: left 0.5s ease;

      &_active {
        left: -100%;
      }
    }

    &-content {
      width: 328px;
      height: 100%;
      background: #fff;
      position: relative;
    }

    &-cross {
      position: absolute;
      top: 12px;
      right: -15px;
      svg {
        width: 10px;
        height: 10px;
      }
    }

    &-search {
      width: 246px;
      height: 65px;
    }
  }
}
</style>
