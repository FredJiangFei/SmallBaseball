<template>
  <MetricTab
    tab-name="defensive-scores"
    description="NBA CourtOptix uses positional tracking data to create defensive pressure scores to quantify how tight a defender guards his opponent; it measures inputs such as defender’s speed, distance to his opponent, and ability to disrupt passing lanes."
    title="Defensive Scores"
  >
    <h1>About</h1>

    <button @click="increment">
      {{ state.count }}
    </button>

    Mouse position is at: {{ x }}, {{ y }}

    <input v-focus />

    {{ $translate('greetings.hello') }}

    <MyModal />
  </MetricTab>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useMouse } from '../utils/mouse';
import MyModal from '../components/MyModal.vue';
import MetricTab from '../layouts/MetricTab.vue';

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
