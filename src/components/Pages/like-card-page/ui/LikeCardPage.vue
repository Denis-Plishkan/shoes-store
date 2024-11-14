<script setup lang="ts">

import UICard from '@/components/UI/UICard.vue'
import { ref, computed, watch } from 'vue'
import { useLikesStore } from '@/stores/likes'
import { IData } from '@/type/type'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import firebaseApp from "@/modules/firebase/firebase";
import UIButton from '@/components/UI/UIButton.vue'
import { scrollToTop } from '@/utils/scrollToTop'

const currentPage = ref<number>(1);
const itemsPerPage = ref<number>(9);
const totalItems = ref<number>(0);

const db = getFirestore(firebaseApp);
const filteredShoesData = ref<IData[]>([]);

const breadcrumbs = [
  { title: 'Главная', disabled: false, href: '/' },
  { title: 'Избранные товары', disabled: true }
];

const likedStore = useLikesStore();
const likedShoes = likedStore.likedCards;

async function getShoes() {
  try {
    const querySnapshot = await getDocs(collection(db, 'sneakers'));
    filteredShoesData.value = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const shoe: IData = {
        colors: data.colors || [],
        gender: data.gender || '',
        name: data.name || '',
        label: data.label || '',
        id: data.id,
        price: {
          newPrice: data.price?.newPrice || 0,
          oldPrice: data.price?.oldPrice || 0
        },
        img: {
          default: data.img?.default || '',
          webP: data.img?.webP || ''
        }
      };
      if(likedShoes.includes(shoe.id)) {
        filteredShoesData.value.push(shoe);
      }

      totalItems.value = filteredShoesData.value.length;
    });

  } catch (error) {
    console.log(error);
  }
}

const paginatedShoesData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredShoesData.value.slice(start, end);
});

watch(currentPage, () => {
  scrollToTop();
})

getShoes()

</script>

<template>
  <section class="like-page">
    <div class="like-page__container">
      <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
      <h1 class="like-page__title">Избранные товары</h1>

      <div v-if="likedShoes.length > 0">
        <div class="like-page__card-wrapper">
          <UICard
            v-for="(shoes, index) in paginatedShoesData"
            :key="index"
            :card="shoes"
          />
        </div>

        <div class="like-page__pagination">
          <v-pagination
            v-model="currentPage"
            :length="Math.ceil(totalItems / itemsPerPage)"
            :total-visible="5"
          />
        </div>
      </div>

      <div class="like-page__text" v-else>
        <h2>Ваш список желаний пуст</h2>
        <p>У вас пока нет товаров в списке желаний. <br>
          На странице <span>"Каталог"</span> вы найдете много интересных товаров.
        </p>

        <router-link to="/catalog">
          <div class="like-page__button">
            <UIButton :type="'button'" :modify="'secondary'" :txt="'Перейти в каталог'"/>
          </div>
        </router-link>

      </div>

    </div>
  </section>
</template>

<style lang="scss">
@import 'LikeCardPage';
</style>