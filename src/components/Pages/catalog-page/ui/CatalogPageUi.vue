<script setup lang="ts">
import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebaseApp from "@/modules/firebase/firebase";
import { onMounted, ref, watch } from "vue";
import UICard from "@/components/UI/UICard.vue";
import { Slider } from "@/components";

const breadcrumbs = [
  { title: 'Главная', disabled: false, href: '/' },
  { title: 'Каталог', disabled: true }
];

const db = getFirestore(firebaseApp);
const shoesData = ref([]);
const filteredShoesData = ref([]);
const range = ref([1000, 5000]);
const selectedColor = ref("");
const selectedPrice = ref("");
const selectedGender = ref("");

const currentPage = ref(1);
const itemsPerPage = ref(9);
const totalItems = ref(0);

const colorMap: { [key: string]: string } = {
  'Белый': 'white',
  'Синий': 'blue',
  'Черный': 'black',
  'Серый': 'gray',
  'Розовый': 'pink',
  'Красный': 'red'
};

async function getShoes() {
  try {
    const querySnapshot = await getDocs(collection(db, 'sneakers'));
    filteredShoesData.value = [];
    querySnapshot.forEach((doc) => {
      const shoeData = doc.data();
      filteredShoesData.value.push({
        ...shoeData,
        id: doc.id
      });
    });
    filterShoes();
  } catch (error) {
    console.log(error);
  }
}


function filterShoes() {
  let filteredShoes = filteredShoesData.value.filter((shoe) => {
    const priceInRange = shoe.price.newPrice >= range.value[0] && shoe.price.newPrice <= range.value[1];
    const colorInEnglish = colorMap[selectedColor.value] || '';
    const colorMatches = colorInEnglish === '' || shoe.colors.includes(colorInEnglish);
    const genderMatches = selectedGender.value === '' || shoe.gender.includes(selectedGender.value.toLowerCase());

    return priceInRange && colorMatches && genderMatches;
  });

  if (selectedPrice.value === 'Цена по убыванию') {
    filteredShoes.sort((a, b) => b.price.newPrice - a.price.newPrice);
  } else if (selectedPrice.value === 'Цена по возрастанию') {
    filteredShoes.sort((a, b) => a.price.newPrice - b.price.newPrice);
  }

  totalItems.value = filteredShoes.length;

  const startIndex = (currentPage.value - 1) * itemsPerPage.value;
  const endIndex = startIndex + itemsPerPage.value;
  shoesData.value = filteredShoes.slice(startIndex, endIndex);
}

watch([range, selectedColor, selectedPrice, selectedGender], () => {
  currentPage.value = 1;
  filterShoes();
});

watch(currentPage, () => {
  filterShoes();
});

onMounted(getShoes);
</script>


<template>
  <section class="catalog">
    <div class="catalog__container">
      <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
      <h1 class="catalog__title">Каталог</h1>
    </div>

    <div class="catalog__filter-wrapper">
      <div class="catalog__wrapper">
        <div class="catalog__filter-price">
          <Slider v-model="range" />
        </div>
        <div class="catalog__right">
          <div class="catalog__filter-color">
            <v-select
                v-model="selectedColor"
                label="Цвет"
                :items="['Белый', 'Синий', 'Черный', 'Серый', 'Розовый', 'Красный']"
                variant="underlined"
            ></v-select>
          </div>
          <div class="catalog__filter-sort">
            <v-select
                v-model="selectedPrice"
                label="Сортировка"
                :items="['Цена по убыванию', 'Цена по возрастанию']"
                variant="underlined"
            ></v-select>
          </div>
          <div class="catalog__filter-gender">
            <v-select
                v-model="selectedGender"
                label="Пол"
                :items="['Мужские', 'Женские']"
                variant="underlined"
            ></v-select>
          </div>
        </div>

      </div>
    </div>

    <div class="catalog__container">
      <div class="catalog__card-wrapper">
        <UICard v-for="(shoes, index) in shoesData" :key="index" :card="shoes" />
      </div>
    </div>

    <div class="catalog__pagination">
      <v-pagination
          v-model="currentPage"
          :length="Math.ceil(totalItems / itemsPerPage)"
          @input="filterShoes"
          :total-visible="5"
      />
    </div>
  </section>
</template>


<style lang="scss">
@import 'CatalogPageUi';
</style>

