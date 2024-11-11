import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useLikesStore = defineStore('likes', () => {
  const likedCards = ref<number[]>(JSON.parse(sessionStorage.getItem('likedCards') || '[]'));

  function toggleLike(cardId: number) {
    if (likedCards.value.includes(cardId)) {
      likedCards.value = likedCards.value.filter(id => id !== cardId);
    } else {
      likedCards.value.push(cardId);
    }

    sessionStorage.setItem('likedCards', JSON.stringify(likedCards.value));
  }

  function isLiked(cardId: number) {
    return likedCards.value.includes(cardId);
  }

  watch(likedCards, (newLikes) => {
    sessionStorage.setItem('likedCards', JSON.stringify(newLikes));
  });

  return { likedCards, toggleLike, isLiked };
});
