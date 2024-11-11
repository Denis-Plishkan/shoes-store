<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import PictureComponent from '@/components/Base/PictureComponent.vue';
import BaseIcon from '@/components/Base/BaseIcon.vue';
import { IData } from '@/type/type';
import { useBasketStore } from '@/stores/basket';

const basketStore = useBasketStore();

const props = defineProps<{
  card: IData;
  quantity: number;
  show: string;
}>();

const count = ref<number>(props.quantity);

watchEffect(() => {
  const item = basketStore.basketCards.find(item => item.id === props.card.id);
  count.value = item ? item.quantity : 0;
});

function incrementCount() {
  count.value++;
  basketStore.updateItemCount(props.card.id, count.value);
}

function decrementCount() {
  if (count.value > 1) {
    count.value--;
    basketStore.updateItemCount(props.card.id, count.value);
  }
}

function deleteShoe() {
  basketStore.removeFromBasket(props.card.id);
}
</script>

<template>
  <tr class="basket-card" v-if="show === 'desktop'">
    <td class="basket-card__product">
      <div class="basket-card__product-image">
        <PictureComponent :srcset="card.img.webP" :src="card.img.default" alt="shoes" />
      </div>
      <p class="basket-card__product-name">{{ card.name }}</p>
    </td>

    <td class="basket-card__price">{{ card.price.newPrice }} грн</td>

    <td class="basket-card__quantity">
      <div class="product-card__counter">
        <p class="product-card__counter-minus" @click="decrementCount"> - </p>
        <p class="product-card__counter-count">{{ count }}</p>
        <p class="product-card__counter-plus" @click="incrementCount"> + </p>
      </div>
    </td>

    <td class="basket-card__sum">{{ card.price.newPrice * count }}</td>

    <td>
      <BaseIcon @click.stop="deleteShoe" id="delete" />
    </td>
  </tr>

  <div class="basket-card" v-if="show === 'mobile'">
    <div class="basket-card__product">
      <div class="basket-card__product-image">
        <PictureComponent :srcset="card.img.webP" :src="card.img.default" alt="shoes" />
      </div>
      <p class="basket-card__product-name">{{ card.name }}</p>
    </div>

    <div class="basket-card__bottom">
      <div class="basket-card__quantity">
        <div class="product-card__counter">
          <p class="product-card__counter-minus" @click="decrementCount"> - </p>
          <p class="product-card__counter-count">{{ count }}</p>
          <p class="product-card__counter-plus" @click="incrementCount"> + </p>
        </div>
      </div>

      <div class="basket-card__sum">{{ card.price.newPrice * count }} грн</div>

      <div>
        <BaseIcon @click.stop="deleteShoe" id="delete" />
      </div>
    </div>

  </div>
</template>

<style lang="scss">
@import '@/assets/style/media';

.basket-card {
  @include media-breakpoint-down(xs) {
    border: 1px solid #ddd;
    margin-bottom: 10px;
    padding: 16px;
  }

  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  &__product {
    display: flex;
    align-items: center;
    gap: 15px;
    @include media-breakpoint-down(xs) {
      margin-bottom: 10px;
    }
  }

  &__product-image {
    img {
      width: 90px;
      height: 90px;
    }
  }

  &__counter {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>



