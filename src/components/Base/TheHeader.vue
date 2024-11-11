<script setup lang="ts">
import { ref } from 'vue'
import BaseIcon from '@/components/Base/BaseIcon.vue'
import { useToggle } from '@/composible/useToggle.ts'
import { useMobileBreakpoint } from '@/composible/useResize.ts'
import { headerData } from '@/data/HeaderData.ts'
import UIButton from '@/components/UI/UIButton.vue'
import PictureComponent from '@/components/Base/PictureComponent.vue'
import { BaseInput } from '@/components'
import { useRouter } from 'vue-router'

const like = ref(1)
const basket = ref(4)
const isSearch = ref(false)
const isCatalog = ref(false)
const isMenu = ref(false)
const isSummer = ref(false)
const isDemiSeason = ref(false)
const isWinter = ref(false)
const isModel = ref(false)

const handleSearch = useToggle(isSearch)
const handleCatalog = useToggle(isCatalog)
const handleMenu = useToggle(isMenu)
const handleSummer = useToggle(isSummer)
const handleDemiSeason = useToggle(isDemiSeason)
const handleWinter = useToggle(isWinter)
const handleModel = useToggle(isModel)

const { nameDevice: isDesktop } = useMobileBreakpoint(1023)
const { nameDevice: isTable } = useMobileBreakpoint(767)
const { nameDevice: isMobile } = useMobileBreakpoint(575)
const { linksTop, links, icons, summer, demiSeason, winter, model, photo } =
  headerData()

const router = useRouter();

function goToCatalog() {
  router.push('/catalog');
}
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
                    @click="goToCatalog"
                    class="header__link header__btn"
                    :class="{ 'header__link_active': isCatalog }"
                    :txt="isMobile ? '' : !isTable ? 'Каталог' : 'Меню'"
                  >
                    <BaseIcon id="menu" @click="handleCatalog"/>
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

                <span v-if="icon.icon === 'like'" class="header__counter">
                  {{ like }}
                </span>

                <span v-if="icon.icon === 'basket'" class="header__counter">
                  {{ basket }}
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="header__catalog"
      :class="{ 'header__catalog_active': isCatalog }"
    >
      <div v-if="isTable" class="header__catalog-cross" @click="handleCatalog">
        <BaseIcon id="cross" />
      </div>

      <div class="header-catalog__container">
        <div class="header__catalog-content">
          <div v-if="isTable" class="header__catalog-search">
            <BaseInput placeholder="Поиск по каталогу товаров..." />

            <UIButton>
              <BaseIcon id="search" />
            </UIButton>
          </div>

          <div v-if="isTable" class="header__catalog-row">
            <div class="header__catalog-sign">
              <router-link
                @click="handleCatalog"
                class="header__top-sign"
                to="/authorization"
              >
                <BaseIcon id="sign" />
                Вход
              </router-link>

              <span class="header__catalog-span">\</span>

              <router-link
                @click="handleCatalog"
                class="header__top-sign"
                to="/registration"
              >
                Регистрация
              </router-link>
            </div>

            <div class="header__catalog-selected">
              <router-link
                v-for="(icon, index) in icons"
                :key="index"
                :to="icon.href"
              >
                <BaseIcon :id="icon.icon" />

                <span
                  v-if="icon.icon === 'like'"
                  class="header__counter header__counter_mobile"
                >
                  {{ like }}
                </span>

                <span
                  v-if="icon.icon === 'basket'"
                  class="header__counter header__counter_mobile"
                >
                  {{ basket }}
                </span>
              </router-link>
            </div>
          </div>

          <div class="header__catalog-menu">
            <UIButton
              @click="handleMenu"
              v-if="isTable"
              class="header__catalog-btn-catalog"
              txt="Каталог"
            />

            <div
              class="header__catalog-show"
              :class="{ 'header__catalog-show_active': isMenu }"
            >
              <ul
                class="header__catalog-list"
                :class="{ 'header__catalog-list_active': isSummer }"
              >
                <li class="header__catalog-li">
                  <UIButton
                    @click="handleSummer"
                    class="header__catalog-btn"
                    txt="Лето"
                  >
                    <BaseIcon v-if="isTable" id="arrow-down" />
                  </UIButton>
                </li>

                <li
                  class="header__catalog-li"
                  v-for="(summerLink, index) in summer"
                  :key="index"
                >
                  <router-link
                    class="header__catalog-link"
                    :to="summerLink.href"
                  >
                    {{ summerLink.name }}
                  </router-link>
                </li>
              </ul>

              <div>
                <ul
                  class="header__catalog-list"
                  :class="{ 'header__catalog-list_active': isDemiSeason }"
                >
                  <li class="header__catalog-li">
                    <UIButton
                      @click="handleDemiSeason"
                      class="header__catalog-btn"
                      txt="Демисезон"
                    >
                      <BaseIcon v-if="isTable" id="arrow-down" />
                    </UIButton>
                  </li>

                  <li
                    class="header__catalog-li"
                    v-for="(demiSeasonLink, index) in demiSeason"
                    :key="index"
                  >
                    <router-link
                      class="header__catalog-link"
                      :to="demiSeasonLink.href"
                    >
                      {{ demiSeasonLink.name }}
                    </router-link>
                  </li>
                </ul>

                <ul
                  class="header__catalog-list"
                  :class="{ 'header__catalog-list_active': isWinter }"
                >
                  <li class="header__catalog-li">
                    <UIButton
                      @click="handleWinter"
                      class="header__catalog-btn"
                      txt="Зима"
                    >
                      <BaseIcon v-if="isTable" id="arrow-down" />
                    </UIButton>
                  </li>

                  <li
                    class="header__catalog-li"
                    v-for="(winterLink, index) in winter"
                    :key="index"
                  >
                    <router-link
                      class="header__catalog-link"
                      :to="winterLink.href"
                    >
                      {{ winterLink.name }}
                    </router-link>
                  </li>
                </ul>
              </div>

              <ul
                class="header__catalog-list"
                :class="{ 'header__catalog-list_active': isModel }"
              >
                <li class="header__catalog-li">
                  <UIButton
                    @click="handleModel"
                    class="header__catalog-btn"
                    txt="Модели"
                  >
                    <BaseIcon v-if="isTable" id="arrow-down" />
                  </UIButton>
                </li>

                <li
                  class="header__catalog-li"
                  v-for="(modelLink, index) in model"
                  :key="index"
                >
                  <router-link
                    class="header__catalog-link"
                    :to="modelLink.href"
                  >
                    {{ modelLink.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>

          <div v-if="!isDesktop" class="header__catalog-new">
            <PictureComponent
              :srcset="photo.webp"
              :src="photo.png"
              alt="new shoes"
            />

            <div class="header__catalog-column">
              <p class="header__catalog-name">
                Новая коллекция в каталоге Nike Air Max Solo
              </p>

              <div class="header__catalog-flex"></div>
              <router-link class="header__catalog-all" to="#"
              >Перейти в каталог</router-link
              >
            </div>
          </div>

          <div v-if="isTable" class="header__catalog-type">
            <router-link
              v-for="(item, index) in links"
              :to="item.href"
              :key="index"
            >
              {{ item.name }}
            </router-link>
          </div>

          <div v-if="isTable" class="header__catalog-bottom">
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

    @include media-breakpoint-down(sm) {
      flex-direction: column;
    }
  }

  &__top-li {
    margin-right: 40px;

    @include media-breakpoint-down(md) {
      margin-right: 20px;
    }

    @include media-breakpoint-down(sm) {
      margin: 0 0 30px 0;

      &:first-child {
        margin-top: 15px;
      }
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

    @include media-breakpoint-down(sm) {
      font-weight: 400;
      font-size: 15px;
      line-height: 73%;
      padding-left: 15px;
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

    &_active {
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

  &__btn {
    flex-direction: row-reverse;
  }

  &__counter {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 9px;
    color: $white-50;
    position: absolute;
    top: -5px;
    right: -5px;
    width: 16px;
    height: 16px;
    background: $light-orange;
    border-radius: 50%;

    @include media-breakpoint-down(sm) {
      top: 18px;
      right: 15px;
    }

    &_mobile {
      top: 12px;
      right: 10px;
    }
  }

  &__catalog {
    box-shadow: 0 10px 55px 0 rgba(0, 0, 0, 0.08);
    background: $white-50;
    padding: 40px 0 49px;
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    transition: top 0.5s ease;

    &_active {
      top: 116px;
    }

    @include media-breakpoint-down(sm) {
      top: 0;
      left: -100%;
      background: rgba(0, 0, 0, 0.7);
      height: 100%;
      padding: 0;
      transition: left 0.5s ease;
      &_active {
        left: 0;
      }
    }
  }

  &__catalog-content {
    display: flex;
    justify-content: space-between;
    position: relative;

    @include media-breakpoint-down(md) {
      justify-content: center;
    }

    @include media-breakpoint-down(sm) {
      flex-direction: column;
      justify-content: flex-start;
      width: 328px;
      height: 100vh;
      overflow: auto;
      background: $white-50;
    }
  }

  &__catalog-cross {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 12px;
    left: 335px;

    svg {
      display: block;
      width: 10px;
      height: 10px;
    }
  }

  &__catalog-search {
    display: flex;
    justify-content: space-between;
    height: 70px;
    border-bottom: 1px solid $white-75;

    input {
      border: none;
      height: 100%;
      &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 71%;
        color: #969696;
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      border-left: 1px solid $white-75;

      svg {
        display: block;
        width: 20px;
        height: 20px;
        stroke: #000;
      }
    }

    .input-content {
      width: 100%;
      margin: 0;
    }
  }

  &__catalog-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
  }

  &__catalog-span {
    font-weight: 400;
    font-size: 13px;
    line-height: 85%;
    color: $grey-75;
    margin: 0 5px;
  }

  &__catalog-selected {
    display: flex;
    height: 60px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      position: relative;
      svg {
        width: 20px;
        height: 20px;
        stroke: #000;
      }
    }
  }

  &__catalog-btn-catalog {
    font-weight: 500;
    font-size: 14px;
    line-height: 79%;
    text-transform: uppercase;
    color: $dark-black;
    padding-left: 15px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    border-top: 1px solid $white-75;
    border-bottom: 1px solid $white-75;

    &_active {
      color: $white-50;
      background: $dark-black;
    }
  }

  &__catalog-show {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 87px;
    margin-right: 20px;

    @include media-breakpoint-down(sm) {
      display: flex;
      flex-direction: column;
      margin: 0;
      max-height: 0;
      overflow: hidden;
      transition: 0.3s ease-in-out;

      &_active {
        max-height: 1500px;
      }
    }
  }

  &__catalog-list {
    margin-bottom: 30px;

    @include media-breakpoint-down(sm) {
      margin: 0;
      max-height: 50px;
      overflow: hidden;
      transition: 0.3s ease-in-out;

      &_active {
        max-height: 380px;
      }
    }
  }

  &__catalog-li {
    margin-bottom: 4px;

    &:last-child {
      margin: 0;
    }

    @include media-breakpoint-down(sm) {
      padding-left: 46px;

      &:first-child {
        padding-left: 0;
        height: 50px;
      }
    }
  }

  &__catalog-btn {
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: $dark-black;
    pointer-events: none;

    svg {
      display: block;
      width: 10px;
      height: 10px;
    }

    @include media-breakpoint-down(sm) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 25px;
      pointer-events: auto;
    }
  }

  &__catalog-link {
    font-weight: 400;
    font-size: 14px;
    line-height: 193%;
    color: $light-black;
    position: relative;

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

  &__catalog-new {
    display: flex;
    flex-direction: column;
    width: 440px;
    height: 346px;
    position: relative;
  }

  &__catalog-column {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 30px;
    left: 30px;
    height: 85%;
  }

  &__catalog-flex {
    flex: 1 1 0;
  }

  &__catalog-name {
    font-weight: 500;
    font-size: 24px;
    line-height: 121%;
    color: $white-50;
    max-width: 246px;
  }

  &__catalog-all {
    font-weight: 500;
    font-size: 18px;
    line-height: 217%;
    color: $white-50;
    position: relative;
    width: fit-content;
    transition: background 0.25s ease-out;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $white-50;
    }

    &:hover {
      color: $light-orange;
    }

    &:hover::after {
      background-color: $light-orange;
    }
  }

  &__catalog-type {
    a {
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 14px;
      line-height: 79%;
      text-transform: uppercase;
      color: $dark-black;
      height: 50px;
      padding-left: 15px;
      border-bottom: 1px solid $white-75;
    }
  }
}

.header-catalog__container {
  @include media-breakpoint-down(sm) {
    padding: 0 !important;
  }
}
</style>