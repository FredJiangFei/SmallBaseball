<template>
  <button @click="$emit('increment-count')">Increment</button>
  Count is: {{ count }}
</template>

<script>
export default {
  props: ['count'],
  emits: ['increment-count'],
};
</script>
