<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const range = ref([...props.modelValue]);

watch(range, (newRange) => {
  emit('update:modelValue', newRange);
});
</script>

<template>
  <p>Цена:</p>
  <v-range-slider
      v-model="range"
      :max="5000"
      :min="1000"
      :step="1"
      class="align-center"
      hide-details
  />

  <div class="slider__value-wrapper">
    <v-text-field
        v-model="range[0]"
        density="compact"
        style="width: 90px"
        type="number"
    />

    <p></p>

    <v-text-field
        v-model="range[1]"
        density="compact"
        style="width: 90px"
        type="number"
    />
  </div>
</template>

<style lang="scss">
@import 'Slider';
</style>
