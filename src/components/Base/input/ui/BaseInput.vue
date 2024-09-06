<script setup lang="ts">
import { ref } from 'vue';

type InputContent = string | number | null;

type InputType = 'text' | 'number' | 'password' | 'email' | 'url' | 'tel';

interface Props {
  modelValue?: InputContent;
  type?: InputType;
  name?: string | undefined;
  placeholder?: string;
  errorMessage?: string | null;
  label?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  name: '',
  placeholder: '',
  errorMessage: '',
  label: ''
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: InputContent): void;
}>();

const inputValue = ref<InputContent>(props.modelValue ?? '');

function getValueForNumber(initial: InputContent) {
  if (initial === '' || initial === null || initial === undefined) {
    return null;
  }

  const val = Number(initial);

  if (Number.isNaN(val)) {
    return null;
  }

  return val;
}

function onInput(event: Event) {
  const input = event.target as HTMLInputElement;
  inputValue.value = input.value;
  console.log('Input value (onInput):', inputValue.value);
  emit('update:modelValue', inputValue.value);
}

function onBlur(event: FocusEvent) {
  const input = event.target as HTMLInputElement;
  inputValue.value = props.type === 'number' ? getValueForNumber(input.value) : input.value;
  input.value = inputValue.value?.toString() || '';
  console.log('Input value (onBlur):', inputValue.value);
  emit('update:modelValue', inputValue.value);
}
</script>

<template>
  <div class="input-content">
    <label>{{ label }}</label>
    <input
        :type="type || 'text'"
        :placeholder="placeholder"
        :name="name"
        :id="name"
        autocomplete="off"
        :value="inputValue"
        @input="onInput"
        @blur="onBlur"
        :class="{ input__error: errorMessage }"
    />
    <div class="input__error-text" v-if="errorMessage">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style lang="scss">
@import 'BaseInput';
</style>

