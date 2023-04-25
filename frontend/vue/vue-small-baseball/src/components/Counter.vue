<template>
  <h1>{{ message }}</h1>
  <h1>{{ countTitle }}</h1>
  <slot />
  <button @click="$emit('increment-count', 2)">Increment</button>
  Count is: {{ count }}

   <button @click="childMethod">Click child inner</button>
</template>

<script>
export default {
  inject: ['message'],
  props: ['count', 'countTitle'],
  emits: ['increment-count'],
  methods: {
    childMethod() {
      console.log('Child method called');
    },
  },
};
</script>
