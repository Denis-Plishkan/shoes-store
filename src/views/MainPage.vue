<script setup lang="ts">
import {
  Banner,
  Description,
  Discount,
  News,
  Publication,
  Receipts,
  Season,
  Sellers,
} from '@/components'
import About from '@/components/pages/main/about/ui/About.vue'

</script>

<template>
  <main class="main">
    <Banner />

    <Description />

    <Receipts />

    <Sellers />

    <Season />

    <Publication />

    <Discount />

    <News />

    <About/>

  </main>
</template>

<style></style>
