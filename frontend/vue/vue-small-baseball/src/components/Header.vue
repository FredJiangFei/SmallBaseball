<template>
  <h4>{{ title }}</h4>
  <p>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </p>
</template>

<script lang="ts">
export default {
  props: ['title'],
};
</script>
