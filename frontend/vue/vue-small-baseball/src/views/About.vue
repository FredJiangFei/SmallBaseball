<template>
  <h1>About</h1>

  <button @click="increment">
    {{ state.count }}
  </button>

  Mouse position is at: {{ x }}, {{ y }}

  <input v-focus />

  {{ $translate('greetings.hello') }}

  <MyModal />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useMouse } from '../utils/mouse';
import MyModal from '../components/MyModal.vue';

const state = reactive({ count: 0, nested: { count: 0 }, arr: ['foo', 'bar'] });

const increment = () => {
  state.count++;

  nextTick(() => {});
};

const { x, y } = useMouse();

const vFocus = {
  mounted: (el) => el.focus(),
};
</script>
