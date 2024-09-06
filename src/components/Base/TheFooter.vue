<script setup lang="ts">
import BaseIcon from './BaseIcon.vue'
import { ref } from 'vue'
const social = [
  { href: '#', icon: 'instagram' },
  { href: '#', icon: 'vk' },
  { href: '#', icon: 'twitter' },
]

const infoLinks = [
  { href: '#', name: 'О магазине' },
  { href: '#', name: 'Наш блог' },
  { href: '#', name: 'Доставка' },
  { href: '#', name: 'Оплата' },
  { href: '#', name: 'Контакты' },
]
const itemLinks = [
  { href: '#', name: 'Каталог' },
  { href: '#', name: 'Мужские' },
  { href: '#', name: 'Женские' },
  { href: '#', name: 'Детские' },
  { href: '#', name: 'Распродажа' },
]
const shopLinks = [
  { href: '#', name: 'Личный кабинет' },
  { href: '#', name: 'Избранное' },
  { href: '#', name: 'Корзина' },
]

const email = ref('')

const rules = [
  (value: string) => {
    if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
    return 'Must be a valid e-mail.'
  },
]

const sentEmail = () => {
  console.log(123)
}
</script>

<template>
  <div class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__column">
          <div class="footer__logo">
            <div class="footer__logo-icon">
              <BaseIcon id="logo-footer" />
            </div>

            <p class="footer__logo-txt">Swoosh <span>store</span></p>
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
              <h3 class="footer__menu-title">Информация</h3>

              <ul class="footer__menu-list">
                <li v-for="(link, index) in infoLinks" :key="index">
                  <router-link class="footer__menu-link" :to="link.href">
                    {{ link.name }}
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="footer__menu-item">
              <h3 class="footer__menu-title">Товары</h3>

              <ul class="footer__menu-list">
                <li v-for="(link, index) in itemLinks" :key="index">
                  <router-link class="footer__menu-link" :to="link.href">
                    {{ link.name }}
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="footer__menu-shop">
              <h3 class="footer__menu-title">Магазин</h3>

              <ul class="footer__menu-list">
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
          <h3 class="footer__menu-title">Подписка на новости</h3>

          <p class="footer__menu-link">Подпишитесь на новости и скидки</p>

          <div class="footer__form">
            <form @submit.prevent="sentEmail">
              <v-text-field :rules="rules" label="Email"></v-text-field>
            </form>
            <button type="submit">Подписаться</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  background: #1e1e1e;
  padding: 50px 0 0;

  &__content {
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    display: flex;
  }

  &__logo-icon {
    width: 91px;
    height: 31px;

    svg {
      width: 100%;
      height: 100%;
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
  }

  &__social {
    display: flex;
    justify-content: space-between;
    width: 160px;
    margin: 0 0 14px;
  }

  &__social-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    background: #272727;

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
  }

  &__menu-body {
    display: flex;
    justify-content: space-between;
    width: 576px;
  }

  &__menu-list {
    li {
      margin: 0 0 23px;
    }
  }

  &__menu-title {
    font-weight: 700;
    font-size: 14px;
    line-height: 79%;
    text-transform: uppercase;
    color: #707070;
    margin: 0 0 23px;
  }

  &__menu-link {
    font-weight: 400;
    font-size: 15px;
    line-height: 73%;
    color: #fff;
    text-decoration: none;
  }

  &__subscription {
    width: 307px;
  }

  &__form {
    display: flex;
    form {
      width: 100%;
    }
  }
  .v-field__input {
    color: #fff;
  }
}
</style>
