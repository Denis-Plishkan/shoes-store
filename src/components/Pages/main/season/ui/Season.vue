<script setup lang="ts">
import PictureComponent from '@/components/Base/PictureComponent.vue'
import UIButton from '@/components/UI/UIButton.vue'
import BaseIcon from '@/components/Base/BaseIcon.vue'

const photo = {
  webp: new URL('@/assets/img/nike.webp', import.meta.url),
  png: new URL('@/assets/img/nike.png', import.meta.url),
}

</script>

<template>
  <section class="season">
    <div class="season__container">
      <div class="season__content">
        <div class="season__column">
          <h2 class="season__title">Хит сезона от Nike</h2>

          <p class="season__text">Nike Air Max Alpha Trainer 5</p>

          <p class="season__price">от <span>7 899 грн.</span></p>

          <div class="season__btn">
            <UIButton txt="Подробнее" modify="secondary" />
          </div>
        </div>

        <div class="season__sub-column">
          <div class="season__image">
            <PictureComponent :srcset="photo.webp" :src="photo.png" />
          </div>

          <div class="season__row">
            <div class="season__plus">
              <BaseIcon id="plus" />
            </div>

            <p class="season__sub-text">
              Уникальная технология структуры стельки позволяет забыть про обувь
              на ноге.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import 'Season';
</style>
