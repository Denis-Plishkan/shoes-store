<script setup lang="ts">
interface Props {
  label?: string,
  items?: array,
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  items: [],
})
</script>

<template>
  <label>{{ label }}</label>
  <v-select
      :items="items"
  ></v-select>
</template>

<style scoped>

</style>