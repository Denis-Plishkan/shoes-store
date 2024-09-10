<script setup lang="ts">
import BaseIcon from './BaseIcon.vue'
import { footerData } from '@/data/FooterData'
import UIButton from '@/components/UI/UIButton.vue'
import { ErrorMessage, Field, Form } from 'vee-validate'
import * as yup from 'yup'
import PictureComponent from '@/components/Base/PictureComponent.vue'
import { useMobileBreakpoint } from '@/composible/useResize'
import { ref } from 'vue'
import { useToggle } from '@/composible/useToggle'

const { infoLinks, itemLinks, shopLinks, social, photo } = footerData()

const isInfo = ref(false)
const isProduct = ref(false)
const isShop = ref(false)

const handleInfo = useToggle(isInfo)
const handleProduct = useToggle(isProduct)
const handleShop = useToggle(isShop)

const { nameDevice: isTable } = useMobileBreakpoint(767)
const sentEmail = (values) => {
  console.log('Відправка email:', values.email)
}
const schema = yup.object().shape({
  email: yup.string().email().required(),
})
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__column">
          <div class="footer__logo">
            <router-link class="footer__logo-link" to="/">
              <BaseIcon id="logo-footer" />

              <p class="footer__logo-txt">Swoosh <span>store</span></p>
            </router-link>
          </div>

          <div class="footer__social">
            <a
              class="footer__social-icon"
              v-for="(item, index) in social"
              :key="index"
              :href="item.href"
            >
              <BaseIcon :id="item.icon" />
            </a>
          </div>
        </div>

        <div class="footer__menu">
          <nav class="footer__menu-body">
            <div class="footer__menu-info">
              <h3 class="footer__menu-title" @click="handleInfo">
                Информация

                <BaseIcon v-if="isTable" id="arrow-down" />
              </h3>

              <ul
                class="footer__menu-list"
                :class="{ 'footer__menu-list_active': isInfo }"
              >
                <li v-for="(link, index) in infoLinks" :key="index">
                  <router-link class="footer__menu-link" :to="link.href">
                    {{ link.name }}
                  </router-link>
                </li>
              </ul>
            </div>

            <div class="footer__menu-item">
              <h3 class="footer__menu-title" @click="handleProduct">
                Товары

                <BaseIcon v-if="isTable" id="arrow-down" />
              </h3>

              <ul
                class="footer__menu-list"
                :class="{ 'footer__menu-list_active': isProduct }"
              >
                <li v-for="(link, index) in itemLinks" :key="index">
                  <router-link class="footer__menu-link" :to="link.href">
                    {{ link.name }}
                  </router-link>
                </li>
              </ul>
            </div>

            <div class="footer__menu-shop">
              <h3 class="footer__menu-title" @click="handleShop">
                Магазин

                <BaseIcon v-if="isTable" id="arrow-down" />
              </h3>

              <ul
                class="footer__menu-list"
                :class="{ 'footer__menu-list_active': isShop }"
              >
                <li v-for="(link, index) in shopLinks" :key="index">
                  <router-link class="footer__menu-link" :to="link.href">
                    {{ link.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div class="footer__subscription">
          <div>
            <h3 class="footer__menu-subtitle">Подписка на новости</h3>

            <p class="footer__menu-text">Подпишитесь на новости и скидки</p>
          </div>

          <Form
            class="footer__form"
            @submit="sentEmail"
            :validation-schema="schema"
          >
            <Field placeholder="Email" name="email" />

            <ErrorMessage class="field__error" name="email" />
            <UIButton class="footer__btn" type="submit" txt="Подписаться" />
          </Form>

          <p class="footer__config">
            Согласен

            <router-link to="/">с политикой конфиденциальности</router-link>
          </p>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="footer__container">
        <div class="footer__bottom-content">
          <p class="footer__bottom-text">
            © 2023 - Swoosh Store - Интернет-магазин ориганальных кроссовок
          </p>

          <router-link class="footer__bottom-link" to="/">
            Политика конфиденциальности
          </router-link>

          <PictureComponent :srcset="photo.webp" :src="photo.png" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import '@/assets/style/variable';
@import '@/assets/style/media';

.footer {
  background: #1e1e1e;
  padding: 50px 0 0;

  &__content {
    display: flex;
    justify-content: space-between;

    padding: 0 0 50px;

    @include media-breakpoint-down(md) {
      flex-wrap: wrap;
    }

    @include media-breakpoint-down(sm) {
      flex-direction: column;
    }
  }

  &__column {
    @include media-breakpoint-down(sm) {
      display: flex;
      justify-content: space-between;
    }

    @include media-breakpoint-down(sm) {
    }
  }

  &__logo-link {
    display: flex;

    svg {
      width: 91px;
      height: 31px;

      //@include media-breakpoint-down(sm) {
      //  width: 147px;
      //}
    }
  }

  &__logo-txt {
    font-weight: 800;
    font-size: 24px;
    line-height: 75%;
    text-transform: uppercase;
    color: #fff;
    max-width: 115px;
    width: 100%;
    margin: 0 0 0 10px;

    span {
      display: inline-block;
      text-shadow: none;
      color: transparent;
      -webkit-text-stroke: 1px #ff6915;
      margin: 6px 0 57px;
    }

    @include media-breakpoint-down(xs) {
      font-size: 18px;
      max-width: 100px;
    }
  }

  &__social {
    display: flex;
    justify-content: space-between;
    width: 160px;
    margin: 0 0 14px;

    @include media-breakpoint-down(sm) {
      width: 139px;
    }
  }

  &__social-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    background: #272727;

    @include media-breakpoint-down(sm) {
      width: 39px;
      height: 39px;
    }

    &:nth-child(1),
    &:nth-child(3) {
      svg {
        width: 20px;
        height: 20px;
      }
    }

    &:nth-child(2) {
      svg {
        width: 23px;
        height: 12px;
      }
    }

    &:hover {
      background: $light-orange;
    }
  }

  &__menu-body {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 130px;
    margin: 0 20px;

    @include media-breakpoint-down(lg) {
      grid-column-gap: 100px;
    }

    @include media-breakpoint-down(md) {
      grid-column-gap: 40px;
    }

    @include media-breakpoint-down(sm) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0;
    }
  }

  &__menu-info,
  &__menu-item,
  &__menu-shop {
    @include media-breakpoint-down(sm) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }

  &__menu-list {
    @include media-breakpoint-down(sm) {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s ease;

      &_active {
        max-height: 500px;
      }
    }
    li {
      margin: 0 0 23px;

      @include media-breakpoint-down(sm) {
        text-align: center;
      }
    }
  }

  &__menu-title {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 14px;
    line-height: 79%;
    text-transform: uppercase;
    color: #707070;
    margin: 0 0 23px;

    svg {
      padding: 5px 0 0 5px;
      width: 15px;
      height: 15px;
    }

    @include media-breakpoint-down(sm) {
      justify-content: center;
      text-align: center;
      width: 100%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      padding-bottom: 8px;
    }
  }

  &__menu-subtitle {
    font-weight: 700;
    font-size: 14px;
    line-height: 79%;
    text-transform: uppercase;
    color: #707070;
    margin: 0 0 23px;

    @include media-breakpoint-down(sm) {
      text-align: center;
      width: 100%;
      margin: 0 0 15px;
    }
  }

  &__menu-link {
    font-weight: 400;
    font-size: 15px;
    line-height: 73%;
    color: #fff;
    text-decoration: none;
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

  &__menu-text {
    font-weight: 400;
    font-size: 15px;
    line-height: 73%;
    color: #fff;
    text-decoration: none;
    margin-bottom: 23px;

    @include media-breakpoint-down(md) {
      margin: 0;
    }

    @include media-breakpoint-down(sm) {
      text-align: center;
      width: 100%;
      margin: 0 0 15px;
    }
  }

  &__subscription {
    position: relative;
    width: 307px;
    height: fit-content;

    @include media-breakpoint-down(md) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    @include media-breakpoint-down(sm) {
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }
  }

  &__form {
    display: flex;
    align-items: center;
    border: 1px solid rgba(216, 221, 228, 0.09);
    height: 47px;
    background: $light-black;

    input {
      font-weight: 400;
      font-size: 15px;
      line-height: 73%;
      color: $white-50;
      height: auto;

      &::placeholder {
        font-weight: 400;
        font-size: 15px;
        line-height: 73%;
        color: $white-50;
      }
    }

    @include media-breakpoint-down(md) {
      margin: 0 20px;
    }

    .field__error {
      @include media-breakpoint-down(md) {
        bottom: -30px;
        left: 55.5%;
        transform: translateX(-50%);
        width: 307px;
      }

      @include media-breakpoint-down(sm) {
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
        width: 307px;
      }
    }
  }

  &__error {
    position: absolute;
    bottom: -20px;
    font-weight: 400;
    font-size: 15px;
    line-height: 73%;
    color: red;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #34373b;
    color: $light-orange !important;
    height: auto;
  }

  &__config {
    margin-top: 9px;
    font-weight: 400;
    font-size: 13px;
    color: #6b6e72;

    a {
      color: #6b6e72;
      text-decoration: underline;
      text-decoration-skip-ink: none;
    }

    @include media-breakpoint-down(md) {
      margin: 0;
      width: 137px;
    }

    @include media-breakpoint-down(sm) {
      margin-top: 15px;
      text-align: center;
      width: 100%;
    }
  }

  &__bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding: 33px 0;

    @include media-breakpoint-down(sm) {
      padding: 25px 0;
    }
  }

  &__bottom-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include media-breakpoint-down(sm) {
      flex-direction: column;
      justify-content: center;
    }
  }

  &__bottom-text {
    font-weight: 400;
    font-size: 13px;
    line-height: 108%;
    color: #d6d6d6;

    @include media-breakpoint-down(md) {
      width: 260px;
    }

    @include media-breakpoint-down(sm) {
      text-align: center;
      width: 100%;
      margin-bottom: 15px;
    }
  }

  &__bottom-link {
    font-weight: 400;
    font-size: 13px;
    line-height: 108%;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #d6d6d6;

    @include media-breakpoint-down(sm) {
      text-align: center;
      width: 100%;
      margin-bottom: 15px;
    }
  }
}
</style>
