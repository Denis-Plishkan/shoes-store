<script setup lang="ts">
import { doc, getDoc, getFirestore } from "firebase/firestore";
import firebaseApp from "@/modules/firebase/firebase";
import { ref, watch } from 'vue'
import { useRoute } from "vue-router";
import UICard from "@/components/UI/UICard.vue";
import { IData } from "@/type/type";
import UIButton from "@/components/UI/UIButton.vue";
import { useBasketStore } from '@/stores/basket'
import { toast } from 'vue3-toastify'

const breadcrumbs = [
  { title: 'Главная', disabled: false, href: '/' },
  { title: 'Карточка товара', disabled: true }
];

const router = useRoute();
const productCardId = ref<string>(router.params.id as string);

const db = getFirestore(firebaseApp);

const shoe = ref<IData | null>(null);

const count = ref<number>(1);
const productId = ref<number>()

const basketStore = useBasketStore();

async function getShoeById(shoeId: string): Promise<void> {
  try {
    const shoeRef = doc(db, 'sneakers', shoeId);
    const shoeSnap = await getDoc(shoeRef);

    if (shoeSnap.exists()) {
      const data = shoeSnap.data();
      productId.value = data.id;
      shoe.value = {
        colors: data.colors || [],
        gender: data.gender || '',
        name: data.name || '',
        label: data.label || '',
        description: data.description || '',
        id: data.id,
        price: {
          newPrice: data.price?.newPrice || 0,
          oldPrice: data.price?.oldPrice || 0,
        },
        img: {
          default: data.img?.default || '',
          webP: data.img?.webP || '',
        }
      };
    } else {
      console.log("Документ не найден");
      shoe.value = null;
    }
  } catch (error) {
    console.error("Ошибка при получении товара:", error);
  }
}

watch(() => router.params.id, (newId) => {
  if (newId) {
    productCardId.value = newId as string;
    getShoeById(productCardId.value);
  }
});

function addToBasket() {
  if (productId.value !== undefined) {
    basketStore.addToBasketProductCard(productId.value, count.value);
    toast(`Товар добавлен в корзину в количестве ${count.value} шт.`, {
      autoClose: 1000,
    })
  } else {
    console.error("ID товара не определен");
  }
}


getShoeById(productCardId.value);

</script>

<template>
  <section class="product-card" v-if="shoe">
    <div class="product-card__container">
      <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

      <div class="product-card__content-wrapper">
        <div class="product-card__content-left">
          <UICard :card="shoe" :show="true"/>
        </div>

        <div class="product-card__content-right product-card__right">
          <h1 class="product-card__right-name">
            {{ shoe.name }}
          </h1>

          <p class="product-card__right-description">
            {{ shoe.description }}
          </p>

          <div class="card__color">
            <p class="card__color-txt">Цвета:</p>

            <div class="card__color-row">
              <span
                class="card__color-dots"
                v-for="(color, colorIndex) in shoe.colors"
                  :key="colorIndex"
                  :style="{
                  background: color === 'white' ? '#f8f8f9' : color,
                  }"
                >
              </span>
            </div>
          </div>

          <div class="product-card__right-prices product-card__price">
            <p class="product-card__price-old" v-if="shoe.price.oldPrice">
              {{ shoe.price.oldPrice }} грн.
            </p>

            <p class="product-card__price-new">
              {{ shoe.price.newPrice }} грн.
            </p>
          </div>

          <div class="product-card__right-counter-wrapper">
            <div class="product-card__counter">
              <p class="product-card__counter-minus" @click="count > 1 && count--"> - </p>
              <p class="product-card__counter-count"> {{ count }} </p>
              <p class="product-card__counter-plus" @click="count++"> + </p>
            </div>

            <div class="product-card__right-button">
              <UIButton @click.stop="addToBasket" :type="'button'" :modify="'primary'" :txt="'Добавить в корзину'"/>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import 'ProductCard';
</style>