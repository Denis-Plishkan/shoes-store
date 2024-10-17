<script setup lang="ts">
import BaseIcon from '@/components/Base/BaseIcon.vue'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import UICardSkeleton from '@/components/UI/UICardSkeleton.vue'
import UICard from '@/components/UI/UICard.vue'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import firebaseApp from '@/modules/firebase/firebase'
import { onMounted, ref } from 'vue'
import { IData } from '@/type/type'

const db = getFirestore(firebaseApp)
const shoesData = ref<IData[]>([])
const isLoading = ref(true)
async function getShoes() {
  try {
    const querySnapshot = await getDocs(collection(db, 'sneakers'))

    querySnapshot.forEach((doc) => {
      const data = doc.data()

      const shoe: IData = {
        colors: data.colors || [],
        gender: data.gender || '',
        name: data.name || '',
        label: data.label || '',
        price: {
          newPrice: data.price?.newPrice || 0,
          oldPrice: data.price?.oldPrice || 0,
        },
        img: {
          default: data.img?.default || '',
          webP: data.img?.webP || '',
        },
      }

      shoesData.value.push(shoe)
    })

    shoesData.value = shoesData.value.filter((item) => item.label === '-20%')
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(getShoes)
</script>

<template>
  <section class="discount">
    <div class="discount__container">
      <div class="receipts__row">
        <h3 class="receipts__title">
          Товары со <br />
          скидкой
        </h3>

        <div class="receipts__arrows">
          <div class="receipts__prev discount__prev">
            <BaseIcon id="arrow-prev" />
          </div>

          <div class="receipts__next discount__next">
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
            prevEl: '.discount__prev',
            nextEl: '.discount__next',
          }"
        >
          <swiper-slide v-for="(_num, ind) in 3" :key="ind" v-if="isLoading">
            <UICardSkeleton />
          </swiper-slide>

          <swiper-slide v-for="(shoe, index) in shoesData" :key="index" v-else>
            <UICard :card="shoe" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import 'Discount';
</style>
