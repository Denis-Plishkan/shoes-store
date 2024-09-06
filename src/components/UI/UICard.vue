<script setup lang="ts">
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import BaseIcon from '../Base/BaseIcon.vue'
import PictureComponent from '../Base/PictureComponent.vue'

interface IPrice {
  newPrice: number
  oldPrice: number
}
interface IImg {
  default: string
  webP: string
}
interface IData {
  colors: string[]
  gender: string
  name: string
  label: string
  price: IPrice
  img: IImg
}

interface ICard {
  card: IData
}
defineProps<ICard>()
</script>

<template>
  <div class="card">
    <div class="card__row">
      <p
        class="card__label"
        :class="{
          'card__label_sale': card.label === '-20%',
          'card__label_hit': card.label === 'хит',
        }"
      >
        {{ card.label }}
      </p>

      <div class="card__like">
        <BaseIcon id="like" />
      </div>
    </div>

    <div class="card__img">
      <PictureComponent
        :srcset="card.img.webP"
        :src="card.img.default"
        alt="shoes"
      />
    </div>

    <div class="card__column">
      <p class="card__gender">{{ card.gender }}</p>

      <p class="card__name">{{ card.name }}</p>

      <div class="card__color">
        <p class="card__color-txt">Цвета:</p>

        <div class="card__color-row">
          <span
            class="card__color-dots"
            v-for="(color, colorIndex) in card.colors"
            :key="colorIndex"
            :style="{
              background: color === 'white' ? '#f8f8f9' : color,
            }"
          >
          </span>
        </div>
      </div>

      <div class="card__row-sub">
        <div class="card__price">
          <p class="card__price-new">{{ card.price.newPrice }} грн.</p>
          <p class="card__price-old" v-if="card.price.oldPrice">
            {{ card.price.oldPrice }}
          </p>
        </div>
        <div class="card__like">
          <BaseIcon id="basket" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  width: 440px;
  position: relative;

  &__row {
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
  }

  &__label {
    font-weight: 500;
    font-size: 11px;
    line-height: 109%;
    text-transform: uppercase;
    color: #fff;
    padding: 10px;
    background: #000;

    &_sale {
      background: #ff6915;
    }

    &_hit {
      background: #3f71bc;
    }
  }

  &__like {
    width: 25px;
    height: 25px;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__img {
    width: 440px;
    height: 445px;
  }

  &__column {
    margin: 25px 0 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 9px;
  }

  &__gender {
    font-weight: 500;
    font-size: 12px;
    line-height: 92%;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #747474;
  }

  &__name {
    font-weight: 400;
    font-size: 19px;
    line-height: 137%;
  }

  &__color,
  &__color-row,
  &__price {
    display: flex;
    align-items: center;
  }

  &__color-txt {
    font-weight: 400;
    font-size: 15px;
    line-height: 173%;
    color: #2e2e2e;
    margin: 0 10px 0 0;
  }

  &__color-dots {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin: 0 10px 0 0;

    &:last-child {
      margin: 0;
    }
  }

  &__row-sub {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__price-new {
    font-weight: 400;
    font-size: 19px;
    line-height: 137%;
    color: #000;
    margin: 0 10px 0 0;
  }

  &__price-old {
    font-weight: 400;
    font-size: 15px;
    line-height: 173%;
    text-decoration: line-through;
    color: #999;
  }
}
</style>
