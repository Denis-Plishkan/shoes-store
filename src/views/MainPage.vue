<script setup lang="ts">
// import ProductCard from '../components/Reusable/ProductCard.vue'
// import UiDropdown from '../components/UI/UiDropdown.vue'

import TheLastReceipts from '../components/Pages/main/TheLastReceipts.vue'
import MainContent from '@/components/Pages/main/MainContent.vue'
import { Banner, Description, Receipts, Sellers } from '@/components'

const itemsArray = ['red', 'green', 'blue']
</script>

<template>
  <main class="main">
    <Banner />

    <Description />

    <Receipts />

    <Sellers />
    <!--      Hello-->

    <!--      <ProductCard />-->
    <!--      <UiDropdown :items="itemsArray" :label="'Цвет'" />-->

    <!--      <TheLastReceipts />-->
  </main>
</template>

<style></style>
