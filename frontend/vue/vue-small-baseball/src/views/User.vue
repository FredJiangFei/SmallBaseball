<template>
  <h1>User</h1>
  <ul>
    <li v-for="user in users" :key="user.id">
      <UserCard :user="user" />
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
});
</script>

<style scoped></style>
