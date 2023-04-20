<template>
  <div class="container">
    <i>
      <slot name="icon"></slot>
    </i>
    <h3>
      <slot name="heading"></slot>
    </h3>

    <img class="avatar" :src="user.avatar" />
    <h4>{{ user.first_name }} {{ user.last_name }}</h4>
    <button @click="onRemoveUser(user.id)">X</button>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { defineEmits } from 'vue';

const props = defineProps({
  user: {
    type: Object as PropType<any | null>,
    required: false,
    default: null,
  },
});

const emit = defineEmits(['remove-user']);

const onRemoveUser = (id) => emit('remove-user', id);
</script>

<style scoped>
i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
