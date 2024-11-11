<script setup lang="ts">
import UICardBasket from '@/components/UI/UICardBasket.vue';
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import { IData } from '@/type/type';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import firebaseApp from '@/modules/firebase/firebase';
import { useBasketStore } from '@/stores/basket';
import UIButton from '@/components/UI/UIButton.vue';

const db = getFirestore(firebaseApp);
const basketStore = useBasketStore();
const shoes = ref<IData[]>([]);
const isLoading = ref(true);
const show = ref<'desktop' | 'mobile'>(window.innerWidth > 576 ? 'desktop' : 'mobile');

const breadcrumbs = [
  { title: 'Главная', disabled: false, href: '/' },
  { title: 'Корзина товаров', disabled: true },
];

async function getShoesByIds(ids: number[]) {
  shoes.value = [];
  try {
    for (const id of ids) {
      const shoeRef = doc(db, 'sneakers', id.toString());
      const shoeSnap = await getDoc(shoeRef);
      if (shoeSnap.exists()) {
        const data = shoeSnap.data();
        shoes.value.push({
          name: data.name || '',
          id: data.id,
          price: {
            newPrice: data.price?.newPrice || 0,
            oldPrice: data.price?.oldPrice || 0,
          },
          img: {
            default: data.img?.default || '',
            webP: data.img?.webP || '',
          },
        });
      }
    }
  } catch (error) {
    console.error("Ошибка при получении товаров:", error);
  } finally {
    isLoading.value = false;
  }
}

function updateShoes() {
  isLoading.value = true;
  getShoesByIds(basketStore.basketCards.map(item => item.id));
}

function updateShowBasedOnWidth() {
  show.value = window.innerWidth > 576 ? 'desktop' : 'mobile';
}

onMounted(() => {
  updateShoes();
  window.addEventListener('resize', updateShowBasedOnWidth);
});

watch(() => basketStore.basketCards, () => {
  updateShoes();
});

const totalSum = computed(() => {
  return shoes.value.reduce((sum, shoe) => {
    const quantity = basketStore.basketCards.find(item => item.id === shoe.id)?.quantity || 1;
    return sum + shoe.price.newPrice * quantity;
  }, 0);
});

const discount = computed(() => {
  return shoes.value.reduce((sum, shoe) => {
    const quantity = basketStore.basketCards.find(item => item.id === shoe.id)?.quantity || 1;
    const discountPerItem = shoe.price.oldPrice && shoe.price.oldPrice > shoe.price.newPrice
      ? (shoe.price.oldPrice - shoe.price.newPrice) * quantity
      : 0;
    return sum + discountPerItem;
  }, 0);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateShowBasedOnWidth);
});

</script>

<template>
  <section class="basket">
    <div class="basket__container">
      <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
      <h1 class="basket__title">Корзина товаров</h1>

      <div v-if="isLoading">
        <p>Загрузка...</p>
      </div>

      <div v-else>
        <div v-if="shoes.length > 0" class="basket__content">
          <table class="basket-table" v-if="show === 'desktop'">
            <thead>
            <tr>
              <th>Товар</th>
              <th>Цена</th>
              <th>Количество</th>
              <th>Сумма</th>
              <th>Удалить</th>
            </tr>
            </thead>
            <tbody>
            <UICardBasket
              v-for="shoe in shoes"
              :key="shoe.id"
              :card="shoe"
              :show="show"
              :quantity="basketStore.basketCards.find(item => item.id === shoe.id)?.quantity || 1"
            />
            </tbody>
          </table>

          <div class="basket__content-mobile" v-if="show === 'mobile'">
            <UICardBasket
              v-for="shoe in shoes"
              :key="shoe.id"
              :card="shoe"
              :show="show"
              :quantity="basketStore.basketCards.find(item => item.id === shoe.id)?.quantity || 1"
            />
          </div>

          <div class="basket__content-bord">
            <h3>Итого</h3>
            <p>Сумма: <span>{{ totalSum }}</span> грн</p>
            <p>Скидка: <span>{{ discount }}</span> грн</p>

            <router-link to="/404">
              <div class="basket__content-button">
                <UIButton :txt="'Оформить заказ'" :modify="'primary'" :type="'button'" />
              </div>
            </router-link>

          </div>
        </div>

        <div v-else class="like-page__text">
          <h2>Ваша корзина на данный момент пуста</h2>
          <p>Прежде чем приступить к оформлению заказа, вы должны добавить некоторые товары в корзину.<br />
            На странице <span>"Каталог"</span> вы найдете много интересных товаров.
          </p>
          <router-link to="/catalog">
            <div class="like-page__button">
              <UIButton :type="'button'" :modify="'secondary'" :txt="'Перейти в каталог'" />
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import 'Basket';
</style>

