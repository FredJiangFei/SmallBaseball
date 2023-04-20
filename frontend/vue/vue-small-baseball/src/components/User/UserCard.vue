<template>
  <div>
    <img class="avatar" :src="user.avatar" />
    <h4>{{ user.first_name }} {{ user.last_name }}</h4>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
const props = defineProps({
  user: {
    type: Object as PropType<any | null>,
    required: false,
    default: null,
  },
});
</script>

<style scoped>
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
