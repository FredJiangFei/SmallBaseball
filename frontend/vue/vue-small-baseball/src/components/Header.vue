<template>
  <h4>{{ title }}</h4>
  <ComponentA />
  <p>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/user">User</router-link>
  </p>
</template>

<script lang="ts">
export default {
  props: ['title'],
};
</script>
