<script setup lang="ts">
import { ref } from 'vue'
import BaseIcon from '@/components/Base/BaseIcon.vue'
import { useToggle } from '@/composible/useToggle.ts'
import { useMobileBreakpoint } from '@/composible/useResize.ts'
import { headerData } from '@/data/HeaderData.ts'
import UIButton from '@/components/UI/UIButton.vue'

const like = ref(1)
const basket = ref(4)
const isToggle = ref(false)
const isSearch = ref(false)
const isCatalog = ref(false)
const isMenu = ref(false)
const isSummer = ref(false)

const handleToggle = useToggle(isToggle)
const handleSearch = useToggle(isSearch)
const handleCatalog = useToggle(isCatalog)
const handleMenu = useToggle(isMenu)
const handleSummer = useToggle(isSummer)
const { nameDevice: isTable } = useMobileBreakpoint(767)
const { nameDevice: isMobile } = useMobileBreakpoint(575)
const { linksTop, links, icons } = headerData()
</script>

<template>
  <header class="header">
    <div v-if="!isTable" class="header__container">
      <div class="header__top">
        <nav>
          <ul class="header__top-list">
            <li
              class="header__top-li"
              v-for="(link, index) in linksTop"
              :key="index"
            >
              <router-link class="header__top-link" :to="link.href">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="header__top-account">
          <router-link class="header__top-sign" to="#">
            <BaseIcon id="sign" />

            Вход \ Регистрация
          </router-link>
        </div>
      </div>
    </div>

    <div class="header__content">
      <div class="header__container">
        <div class="header__row">
          <div class="header__sub-row">
            <div class="header__logo">
              <router-link to="#">
                <BaseIcon id="logo" />
              </router-link>
            </div>

            <nav class="header__menu">
              <ul class="header__list">
                <li class="header__li">
                  <UIButton
                    class="header__link"
                    :txt="isMobile ? '' : !isTable ? 'Каталог' : 'Меню'"
                  >
                    <BaseIcon id="menu" />
                  </UIButton>
                </li>

                <li
                  v-if="!isTable"
                  class="header__li"
                  v-for="(link, index) in links"
                  :key="index"
                >
                  <router-link class="header__link" :to="link.href">
                    {{ link.name }}
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>

          <div class="header__item">
            <div v-if="isTable && !isMobile" class="header__sign">
              <router-link class="header__sign-icon" to="#">
                <BaseIcon id="sign-mobile" />
              </router-link>
            </div>

            <div v-if="!isMobile" class="header__search">
              <div
                class="header__search-inp"
                :class="{ 'header__search-inp_active': isSearch }"
              ></div>
              <UIButton @click="handleSearch">
                <BaseIcon id="search" />
              </UIButton>
            </div>

            <div class="header__like">
              <router-link
                class="header__like-icon"
                v-for="(icon, index) in icons"
                :key="index"
                :to="icon.href"
              >
                <BaseIcon :id="icon.icon" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import '@/assets/style/variable';
@import '@/assets/style/media';

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 115px;
  z-index: 60;
  background: $white-50;

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 45px;
  }

  &__top-list {
    display: flex;
  }

  &__top-li {
    margin-right: 40px;

    @include media-breakpoint-down(md) {
      margin-right: 20px;
    }
  }

  &__top-link {
    font-weight: 400;
    font-size: 14px;
    line-height: 79%;
    color: $grey-50;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: -2px;
      left: 0;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
      background-color: $light-orange;
    }

    &:hover::after {
      transform-origin: bottom left;
      transform: scaleX(1);
    }

    &:hover {
      color: $light-orange;
    }
  }

  &__top-account {
    display: flex;
    align-items: center;
  }

  &__top-sign {
    display: inline-block;
    font-weight: 400;
    font-size: 13px;
    line-height: 85%;
    color: $grey-75;
    position: relative;
    svg {
      width: 15px;
      height: 15px;
      fill: #ffffff;
      stroke: #211d19;
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: -4px;
      left: 0;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
      background-color: $light-orange;
    }

    &:hover::after {
      transform-origin: bottom left;
      transform: scaleX(1);
    }

    &:hover {
      color: $light-orange;

      svg {
        stroke: #fb5a00;
      }
    }
  }

  &__content {
    min-height: 70px;
    border-top: 1px solid $white-75;
    border-bottom: 1px solid $white-75;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @include media-breakpoint-down(sm) {
      justify-content: flex-start;
    }
  }

  &__sub-row {
    display: flex;
    align-items: center;
    width: 100%;

    @include media-breakpoint-down(sm) {
      width: auto;
    }

    @include media-breakpoint-down(xs) {
      flex-direction: row-reverse;
      width: 100%;
    }
  }

  &__logo {
    width: 90px;
    height: 70px;
    border-right: 1px solid $white-75;
    display: flex;
    align-items: center;

    a {
      width: 59px;
      height: 20px;
      svg {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }

    @include media-breakpoint-down(xs) {
      border-right: none;
      margin: 0 auto;
      width: 59px;
    }
  }

  &__menu {
    margin: 0 auto;

    @include media-breakpoint-down(xs) {
      margin: 0;
    }
  }
  &__list {
    display: flex;
    justify-content: center;

    @include media-breakpoint-down(sm) {
      margin-left: 30px;
      margin-right: auto;
      width: 100%;
    }

    @include media-breakpoint-down(xs) {
      width: auto;
      margin: 0;
    }
  }

  &__li {
    display: flex;
    align-items: center;
    margin-right: 57px;

    &:last-child {
      margin: 0;
    }

    @include media-breakpoint-down(md) {
      margin-right: 20px;
    }
  }

  &__link {
    font-weight: 500;
    font-size: 15px;
    line-height: 73%;
    color: $dark-black;
    position: relative;

    svg {
      width: 36px;
      height: 11px;
      stroke: $dark-black;
      margin-right: 16px;
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: -4px;
      left: 0;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
      background-color: $light-orange;
    }

    &:hover::after {
      transform-origin: bottom left;
      transform: scaleX(1);
    }

    &:hover {
      color: $light-orange;
      svg {
        stroke: $dark-orange;
      }
    }
  }

  &__search {
    display: flex;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      height: 70px;
      border-left: 1px solid $white-75;
      border-right: 1px solid $white-75;

      svg {
        width: 20px;
        height: 20px;
        stroke: $dark-black;
      }

      &:hover {
        background: $dark-black;

        svg {
          stroke: $white-50;
        }
      }

      @include media-breakpoint-down(md) {
        width: 50px;
      }

      @include media-breakpoint-down(sm) {
        width: 70px;
      }
    }
  }

  &__search-inp {
    position: absolute;
    top: 0;
    right: -200%;
    height: 100%;
    width: calc(84.8% - 94px);
    border: 1px solid red;
    transition: right 0.3s ease 0s;
    background: $white-50;

    @include media-breakpoint-down(lg) {
      width: calc(84.8% - 150px);
    }

    &_active {
      right: 210px;

      @include media-breakpoint-down(md) {
        right: 150px;
      }
    }
  }

  &__item,
  &__like {
    display: flex;
    align-items: center;
  }

  &__item {
    @include media-breakpoint-down(sm) {
      margin-left: auto;
    }
  }

  &__like-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-right: 1px solid $white-75;
    position: relative;

    svg {
      width: 20px;
      height: 20px;
      stroke: $dark-black;
    }

    &:hover {
      background: $dark-black;

      svg {
        stroke: $white-50;
      }
    }

    @include media-breakpoint-down(md) {
      width: 50px;
    }

    @include media-breakpoint-down(sm) {
      width: 70px;
    }

    @include media-breakpoint-down(xs) {
      border-right: none;
      width: 50px;
      &:first-child {
        border-left: 1px solid $white-75;
      }
    }
  }

  &__sign-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-left: 1px solid $white-75;
    position: relative;

    svg {
      width: 20px;
      height: 20px;
      stroke: $dark-black;
    }

    &:hover {
      background: $dark-black;

      svg {
        stroke: $white-50;
      }
    }
  }

  .button {
    flex-direction: row-reverse;
  }

  //&__bottom-counter {
  //  display: flex;
  //  justify-content: center;
  //  align-items: center;
  //  font-weight: 700;
  //  font-size: 9px;
  //  color: $white-50;
  //  position: absolute;
  //  top: -5px;
  //  right: -5px;
  //  width: 16px;
  //  height: 16px;
  //  background: $light-orange;
  //  border-radius: 50%;
  //
  //  @include media-breakpoint-down(md) {
  //    top: 18px;
  //    right: 15px;
  //  }
  //}
  //
  //&__catalog {
  //  box-shadow: 0 10px 55px 0 rgba(0, 0, 0, 0.08);
  //  background: $white-50;
  //  padding: 40px 0 49px;
  //  position: fixed;
  //  top: -100%;
  //  width: 100%;
  //  transition: top 0.5s ease;
  //
  //  &_active {
  //    top: 116px;
  //  }
  //
  //  @include media-breakpoint-down(md) {
  //    top: 0;
  //    left: 0;
  //    background: rgba(0, 0, 0, 0.7);
  //    height: 100%;
  //    padding: 0;
  //  }
  //}
  //
  //&__catalog-content {
  //  display: grid;
  //  grid-template-columns: repeat(3, 1fr);
  //  grid-column-gap: 87px;
  //
  //  @include media-breakpoint-down(md) {
  //    display: flex;
  //    flex-direction: column;
  //    width: 328px;
  //    height: 100%;
  //    background: $white-50;
  //    position: fixed;
  //    left: 0;
  //    z-index: 20;
  //    //padding: 0 15px;
  //  }
  //}
  //
  //&__catalog-search {
  //  display: flex;
  //  justify-content: space-between;
  //  border-bottom: 1px solid $white-75;
  //  height: 70px;
  //}
  //
  //&__catalog-sign {
  //  display: flex;
  //  justify-content: space-between;
  //  align-items: center;
  //  padding-left: 15px;
  //  height: 58px;
  //
  //  div {
  //    display: flex;
  //  }
  //}
  //
  //&__catalog-icon {
  //  display: flex;
  //  justify-content: center;
  //  align-items: center;
  //  width: 70px;
  //  height: 70px;
  //  position: relative;
  //
  //  svg {
  //    width: 20px;
  //    height: 20px;
  //    stroke: $dark-black;
  //  }
  //
  //  &:hover {
  //    background: $dark-black;
  //
  //    svg {
  //      stroke: $white-50;
  //    }
  //  }
  //}
  //
  //&__catalog-btn {
  //  font-weight: 500;
  //  font-size: 14px;
  //  line-height: 79%;
  //  text-transform: uppercase;
  //  display: inline-block;
  //  border-top: 1px solid $white-75;
  //  padding: 20px 15px;
  //  text-align: left;
  //}
  //
  //&__catalog-title {
  //  font-weight: 500;
  //  font-size: 18px;
  //  line-height: 150%;
  //  color: $dark-black;
  //
  //  &_sub {
  //    margin-top: 30px;
  //  }
  //
  //  @include media-breakpoint-down(md) {
  //    padding: 8px 15px;
  //  }
  //}
  //
  //&__catalog-link {
  //  font-weight: 400;
  //  font-size: 14px;
  //  line-height: 193%;
  //  color: var(--light-black);
  //  position: relative;
  //
  //  &::after {
  //    content: '';
  //    position: absolute;
  //    width: 100%;
  //    transform: scaleX(0);
  //    height: 2px;
  //    bottom: -2px;
  //    left: 0;
  //    transform-origin: bottom right;
  //    transition: transform 0.25s ease-out;
  //    background-color: $light-orange;
  //  }
  //
  //  &:hover::after {
  //    transform-origin: bottom left;
  //    transform: scaleX(1);
  //  }
  //
  //  &:hover {
  //    color: $light-orange;
  //  }
  //}
}
</style>
