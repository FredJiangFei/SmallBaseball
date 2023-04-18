<template>
  <HeaderBar />
  <router-view />
</template>

<script lang="ts">
import HeaderBar from './components/Header.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderBar,
  },
});
</script>
