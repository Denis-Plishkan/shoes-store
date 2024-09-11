<script setup lang="ts">
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { onMounted, ref } from 'vue'
import BaseIcon from '@/components/Base/BaseIcon.vue'
import UICard from '@/components/UI/UICard.vue'
import firebaseApp from '@/modules/firebase/firebase'

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
  <section class="receipts">
    <div class="receipts__container">
      <div class="receipts__row">
        <h3 class="receipts__title">
          самые <br />
          продаваемые
        </h3>

        <div class="receipts__arrows">
          <div class="receipts__prev">
            <BaseIcon id="arrow-prev" />
          </div>

          <div class="receipts__next">
            <BaseIcon id="arrow-next" />
          </div>
        </div>
      </div>

      <div class="receipts__slide">
        <swiper
          slides-per-view="auto"
          :loop="true"
          :spaceBetween="20"
          :modules="[Navigation]"
          :navigation="{
            prevEl: '.receipts__prev',
            nextEl: '.receipts__next',
          }"
        >
          <swiper-slide v-for="(shoe, index) in shoesData" :key="index">
            <UICard :card="shoe" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
@import 'Sellers';
</style>
