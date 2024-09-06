<script setup lang="ts">
// import ProductCard from '../components/Reusable/ProductCard.vue'
// import UiDropdown from '../components/UI/UiDropdown.vue'

import TheLastReceipts from '../components/Pages/main/TheLastReceipts.vue'

const itemsArray = ['red', 'green', 'blue']
</script>

<template>
  <main class="main">
    <div class="container">
      <!--      Hello-->
      <!--      <ProductCard />-->
      <!--      <UiDropdown :items="itemsArray" :label="'Цвет'" />-->

      <TheLastReceipts />
    </div>
  </main>
</template>

<style></style>
