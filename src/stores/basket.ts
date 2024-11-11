import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBasketStore = defineStore('basket', () => {
  const basketCards = ref<{ id: number; quantity: number }[]>(JSON.parse(sessionStorage.getItem('basketCards') || '[]'));

  function addToBasket(id: number) {
    const existingItem = basketCards.value.find(item => item.id === id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      basketCards.value.push({ id, quantity: 1 });
    }

    sessionStorage.setItem('basketCards', JSON.stringify(basketCards.value));
    basketCards.value = [...basketCards.value];
  }

  function addToBasketProductCard(id: number, quantity: number) {
    const existingItem = basketCards.value.find(item => item.id === id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      basketCards.value.push({ id, quantity });
    }

    sessionStorage.setItem('basketCards', JSON.stringify(basketCards.value));
    basketCards.value = [...basketCards.value];
  }

  function updateItemCount(id: number, newQuantity: number) {
    const existingItem = basketCards.value.find(item => item.id === id);

    if (existingItem) {
      existingItem.quantity = newQuantity;
      sessionStorage.setItem('basketCards', JSON.stringify(basketCards.value));
    }
  }

  function removeFromBasket(id: number) {
    basketCards.value = basketCards.value.filter(item => item.id !== id);
    sessionStorage.setItem('basketCards', JSON.stringify(basketCards.value));
  }

  return { basketCards, addToBasket, addToBasketProductCard, updateItemCount, removeFromBasket };
});


