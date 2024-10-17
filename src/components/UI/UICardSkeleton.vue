<script setup lang="ts"></script>

<template>
  <div class="card">
    <div class="card__row">
      <Skeletor type="text" width="100px" height="20px" />
      <div class="card__like">
        <Skeletor type="text" width="20" height="20px" />
      </div>
    </div>

    <div class="card__img">
      <Skeletor type="image" width="440px" height="445px" />
    </div>

    <div class="card__column">
      <Skeletor type="text" width="100px" height="15px" />
      <Skeletor type="text" width="200px" height="20px" />

      <div class="card__color">
        <Skeletor type="text" width="150px" height="15px" />
      </div>

      <div class="card__row-sub">
        <div class="card__price">
          <Skeletor type="text" width="180px" height="20px" />
        </div>
        <div class="card__like">
          <Skeletor type="text" width="20" height="20px" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
