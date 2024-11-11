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
import UICardSkeleton from '@/components/UI/UICardSkeleton.vue'
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
        id: data.id,
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
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(getShoes)
</script>

<template>
  <section class="similar-products">
    <div class="similar-products__container">
      <div class="receipts__row">
        <h3 class="receipts__title">
          Похожие <br />
          кроссовки
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
@import 'SimilarProducts';
</style>
