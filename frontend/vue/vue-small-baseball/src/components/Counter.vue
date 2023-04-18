<template>
  <h1>{{ message }}</h1>
  <h1>{{ countTitle }}</h1>
  <slot />
  <button @click="$emit('increment-count', 2)">Increment</button>
  Count is: {{ count }}
</template>

<script>
export default {
  inject: ['message'],
  props: ['count', 'countTitle'],
  emits: ['increment-count'],
};
</script>
