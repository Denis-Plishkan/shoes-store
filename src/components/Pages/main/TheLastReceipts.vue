<script setup lang="ts">
import BaseIcon from '../../Base/BaseIcon.vue'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import UICard from '../../UI/UICard.vue'

import { getFirestore, collection, getDocs } from 'firebase/firestore'
import firebaseApp from '../../../modules/firebase/firebase.ts'
import { onMounted, ref } from 'vue'

const db = getFirestore(firebaseApp)
const shoesData = ref([])

async function getShoes() {
  try {
    const querySnapshot = await getDocs(collection(db, 'sneakers'))

    querySnapshot.forEach((data) => {
      shoesData.value.push(data.data())
    })
  } catch (error) {
    console.log(error)
  }
}

onMounted(getShoes)
</script>

<template>
  <div class="last-receipts">
    <div class="last-receipts__row">
      <h2 class="last-receipts__title">Последние поступления</h2>

      <div class="last-receipts__arrows">
        <div class="last-receipts__arrows-prev">
          <BaseIcon id="arrow-prev" />
        </div>

        <div class="last-receipts__arrows-next">
          <BaseIcon id="arrow-next" />
        </div>
      </div>
    </div>

    <div class="last-receipts__slide">
      <swiper
        slides-per-view="auto"
        :loop="true"
        :spaceBetween="20"
        :modules="[Navigation]"
        :navigation="{
          prevEl: '.last-receipts__arrows-prev',
          nextEl: '.last-receipts__arrows-next',
        }"
      >
        <swiper-slide v-for="(shoe, index) in shoesData" :key="index">
          <UICard :card="shoe" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss">
.last-receipts {
  &__row {
    display: flex;
    justify-content: space-between;
    margin: 0 0 60px;
  }

  &__title {
    font-weight: 500;
    font-size: 39px;
    line-height: 128%;
    text-transform: uppercase;
    color: #000;
    max-width: 305px;
    width: 100%;
  }

  &__arrows {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 113px;
  }

  &__arrows-prev,
  &__arrows-next {
    width: 40px;
    height: 14px;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .swiper-slide {
    width: 440px;
  }
}
</style>
