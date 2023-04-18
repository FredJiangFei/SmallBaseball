<template>
  <h1>{{ countTitle }}</h1>
  <slot />
  <button @click="$emit('increment-count')">Increment</button>
  Count is: {{ count }}
</template>

<script>
export default {
  props: ['count', 'countTitle'],
  emits: ['increment-count'],
};
</script>
