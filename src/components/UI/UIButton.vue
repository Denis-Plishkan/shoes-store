<script setup lang="ts">
import BaseIcon from '../Base/BaseIcon.vue'

interface IButton {
  txt?: string
  modify?: string
}

defineProps<IButton>()
</script>

<template>
  <button class="button" :class="`button_${modify}`">
    {{ txt }}

    <slot />
  </button>
</template>

<style lang="scss">
.button {
  display: flex;
  width: 100%;
  height: 100%;

  &__btn {
    font-weight: 500;
    font-size: 16px;
    color: #fff;
    width: 100%;
    height: 100%;

    &_dark {
      background: #1e1e1e;
    }
  }

  //  span {
  //    background: #000;
  //
  //    svg {
  //      fill: #ffffff;
  //    }
  //  }
  //
  //  &:hover {
  //    background: #000;
  //
  //    span {
  //      background: #1e1e1e;
  //
  //      svg {
  //        fill: #fafafc;
  //      }
  //    }
  //  }
  //}
  //
  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 65px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
