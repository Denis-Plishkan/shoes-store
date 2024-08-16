<script setup lang="ts">

import ProductCard from "../components/Reusable/ProductCard.vue";
import UiDropdown from "../components/UI/UiDropdown.vue";

const itemsArray = ['red', 'green', 'blue'];
</script>

<template>
<main class="main">
  <div class="container">
    Hello
    <ProductCard/>
    <UiDropdown :items="itemsArray" :label="'Цвет'"/>
  </div>
</main>
</template>

<style>

</style>