<script setup lang="ts">
import { mainData } from '@/data/MainData'
import BaseIcon from '@/components/Base/BaseIcon.vue'

const { description } = mainData()
</script>

<template>
  <section class="description">
    <div class="description__container">
      <div class="description__content">
        <div
          v-for="(item, index) in description"
          :key="index"
          class="description__card"
        >
          <div class="description__icon">
            <BaseIcon :id="item.svg" />
          </div>

          <div class="description__column">
            <h2 class="description__title">{{ item.title }}</h2>

            <p class="description__text">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import 'Description';
</style>
