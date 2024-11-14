<script setup lang="ts">
import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebaseApp from "@/modules/firebase/firebase";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import UICard from "@/components/UI/UICard.vue";
import { Slider } from "@/components";
import { IData } from "@/type/type";
import { CatalogData } from '@/data/HeaderData'
import { scrollToTop } from '@/utils/scrollToTop'

const breadcrumbs = [
  { title: 'Главная', disabled: false, href: '/' },
  { title: 'Каталог', disabled: true }
];

const route = useRoute();

const db = getFirestore(firebaseApp);

const shoesData = ref<IData[]>([]);
const filteredShoesData = ref<IData[]>([]);
const range = ref<[number, number]>([1000, 5000]);
const selectedColor = ref<string>("");
const selectedPrice = ref<string>("");
const selectedGender = ref<string>("");
const hideGenderFilter = ref(false);

const currentPage = ref<number>(1);
const itemsPerPage = ref<number>(9);
const totalItems = ref<number>(0);

const colorMap: Record<string, string> = {
  'Белый': 'white',
  'Синий': 'blue',
  'Черный': 'black',
  'Серый': 'gray',
  'Розовый': 'pink',
  'Красный': 'red'
};

const { selectColors, selectPrice, selectGender } = CatalogData();

watch(() => route.path, (newPath) => {
  if (newPath === "/catalog-man") {
    selectedGender.value = "мужские";
    hideGenderFilter.value = true;
  } else if (newPath === "/catalog-woman") {
    selectedGender.value = "женские";
    hideGenderFilter.value = true;
  } else if (newPath === "/catalog-children") {
    selectedGender.value = "детские";
    hideGenderFilter.value = true;
  } else {
    selectedGender.value = "";
    hideGenderFilter.value = false;
  }

  currentPage.value = 1;
  filterShoes();
});

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
      filteredShoesData.value.push(shoe);
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
    const colorMatches = colorInEnglish === '' || shoe.colors?.includes(colorInEnglish);
    const genderMatches = selectedGender.value === '' || shoe.gender?.includes(selectedGender.value.toLowerCase());

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
  scrollToTop()
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
                :items="selectColors.map(color => color.name)"
                variant="underlined"
            ></v-select>
          </div>
          <div class="catalog__filter-sort">
            <v-select
                v-model="selectedPrice"
                label="Сортировка"
                :items="selectPrice.map(price => price.name)"
                variant="underlined"
            ></v-select>
          </div>
          <div v-if="!hideGenderFilter" class="catalog__filter-gender">
            <v-select
                v-model="selectedGender"
                label="Пол"
                :items="selectGender.map(gender => gender.name)"
                variant="underlined"
            ></v-select>
          </div>
        </div>

      </div>
    </div>

    <div class="catalog__container">
      <div class="catalog__card-wrapper">
        <UICard
          v-for="(shoes, index) in shoesData"
          :key="index"
          :card="shoes"
        />
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

