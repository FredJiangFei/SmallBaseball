<template>
  <h1>User</h1>
  <ul>
    <li v-for="user in users" :key="user.id">
      <UserCard :user="user" @remove-user="onRemoveUser" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, shallowRef } from 'vue';
import UserCard from '../components/User/UserCard.vue';
import axios from 'axios';

export default defineComponent({
  name: 'User',
  data() {
    return {
      users: [],
    };
  },
  components: {
    UserCard,
  },
  async created() {
    const { data } = await axios.get(`https://reqres.in/api/users?page=2`);
    this.users = data.data;
  },
  methods: {
    onRemoveUser(id: number) {
      this.users = this.users.filter((user) => user.id !== id);
    },
  },
});
</script>

<style scoped></style>
