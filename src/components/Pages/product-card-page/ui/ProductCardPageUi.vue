<script setup lang="ts">
import { doc, getDoc, getFirestore } from "firebase/firestore";
import firebaseApp from "@/modules/firebase/firebase";
import { ref } from "vue";
import { useRoute } from "vue-router";

const breadcrumbs = [
  { title: 'Главная', disabled: false, href: '/' },
  { title: 'Карточка товара', disabled: true }
];

const router = useRoute();
const productCardId = router.params.id as string;

const db = getFirestore(firebaseApp);
const shoeData = ref();

const count = ref(1);

console.log(typeof count.value);

async function getShoeById(shoeId: string) {
  try {
    const shoeRef = doc(db, 'sneakers', shoeId);
    const shoeSnap = await getDoc(shoeRef);

    if (shoeSnap.exists()) {
      shoeData.value = shoeSnap.data();
    } else {
      console.log("Документ не найден");
      shoeData.value = null;
    }
  } catch (error) {
    console.error("Ошибка при получении товара:", error);
  }
}

getShoeById(productCardId);

</script>

<template>
  <section class="product-card" v-if="shoeData">
    <div class="product-card__container">
      <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

      <div class="product-card__content-wrapper">
        <div class="product-card__content-left"></div>
        <div class="product-card__content-right product-card__right">
          <h1 class="product-card__right-name">
            {{ shoeData.name }}
          </h1>

          <p class="product-card__right-description">
            {{ shoeData.description }}
          </p>

          <div class="card__color">
            <p class="card__color-txt">Цвета:</p>

            <div class="card__color-row">
              <span
                class="card__color-dots"
                v-for="(color, colorIndex) in shoeData.colors"
                  :key="colorIndex"
                  :style="{
                  background: color === 'white' ? '#f8f8f9' : color,
                  }"
                >
              </span>
            </div>
          </div>

          <div class="product-card__right-prices product-card__price">
            <p class="product-card__price-old" v-if="shoeData.price.oldPrice">
              {{ shoeData.price.oldPrice }} грн.
            </p>

            <p class="product-card__price-new">
              {{ shoeData.price.newPrice }} грн.
            </p>
          </div>

          <div class="product-card__right-counter-wrapper">
            <div class="product-card__counter">
              <p class="product-card__counter-minus" @click="count > 1 && count--"> - </p>
              <p class="product-card__counter-count"> {{ count }} </p>
              <p class="product-card__counter-plus" @click="count++"> + </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'ProductCardPageUi';
</style>