<script setup lang="ts">
import PictureComponent from '@/components/Base/PictureComponent.vue'

const img = {
  webp: new URL('@/assets/img/about.webp', import.meta.url),
  png: new URL('@/assets/img/about.png', import.meta.url),
}
</script>

<template>
  <section class="about">
    <div class="about__container">
      <div class="about__content">
        <div class="about__column">
          <h2 class="about__title">Интернет-магазин Swoosh store</h2>

          <p class="about__text">
            Добро пожаловать в <span>Swoosh Store</span> – ваш источник
            подлинных кроссовок Nike и непревзойденного стиля! Мы рады
            представить вам уникальную онлайн-платформу, где вы сможете
            окунуться в мир инноваций и моды от легендарного бренда спортивной
            обуви.
          </p>

          <h3 class="about__title-sub">Легендарное наследие Nike:</h3>

          <p class="about__text">
            "Swoosh Store - это место, где история и стиль сливаются воедино. Мы
            гордимся тем, что предлагаем вам только оригинальные кроссовки Nike,
            продукцию, которая воплощает более чем полувековое наследие
            инноваций, комфорта и качества. Каждая пара кроссовок – это не
            просто спортивная обувь, это произведение искусства, воплощающее дух
            победы и страстную преданность активному образу жизни."
          </p>

          <a href="#" class="about__link">Подробнее</a>
        </div>

        <div class="about__img">
          <PictureComponent :srcset="img.webp" :src="img.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import 'About';
</style>
