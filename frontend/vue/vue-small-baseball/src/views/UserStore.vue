<template>
  <h1>User</h1>
  <ul>
    <li v-for="user in this.$store.state.users" :key="user.id">
      <UserCard :user="user" @remove-user="onRemoveUser">
        <template #icon>
          <ToolingIcon />
        </template>
        <template #heading>Heading</template>
      </UserCard>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, shallowRef, ref, watch, watchEffect } from 'vue';
import UserCard from '../components/User/UserCard.vue';
import ToolingIcon from '../components/icons/IconTooling.vue';
import axios from 'axios';

export default defineComponent({
  name: 'User',
  components: {
    UserCard,
    ToolingIcon,
  },
  async created() {
    const { data } = await axios.get(`https://reqres.in/api/users?page=2`);
     this.$store.commit('fetchUsers', data.data);
  },
  methods: {
    onRemoveUser(id: number) {
      
    },
  },
});
</script>

<style scoped></style>
