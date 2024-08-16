<script setup lang="ts">
import SvgManager from "./components/Base/SvgManager.vue";
import TheHeader from "./components/Base/TheHeader.vue";
import TheFooter from "./components/Base/TheFooter.vue";
</script>

<template>
  <div class="wrapper">
    <TheHeader/>

    <RouterView/>

    <TheFooter/>
  </div>
  <SvgManager/>
</template>

<style lang="scss">
@import "src/assets/base";
</style>
