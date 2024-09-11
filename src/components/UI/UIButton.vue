<script setup lang="ts">
interface IButton {
  txt?: string
  modify?: string
  type?: 'button' | 'submit'
}

withDefaults(defineProps<IButton>(), {
  text: '',
  modify: '',
})
</script>

<template>
  <button class="button" :type="type" :class="modify ? `button_${modify}` : ''">
    {{ txt }}

    <slot />
  </button>
</template>

<style lang="scss">
@import '@/assets/style/variable';
.button {
  display: flex;
  width: 100%;
  height: 100%;
  font-weight: 500;
  font-size: 16px;
  color: #fff;

  &_primary {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $light-black;

    &:hover {
      background: $dark-black;
    }
  }

  &_secondary {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $light-orange;
    color: #fff;

    &:hover {
      background: #ff9315;
    }
  }
}
</style>
