<template>
  <h1>User</h1>
  <div v-if="users">
    <div v-for="user in users" :key="user.id">
      <UserCard :user="user" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, shallowRef } from 'vue';
import UserCard from '../components/User/UserCard.vue';
import axios from 'axios';

export default defineComponent({
  name: 'User',
  components: {
    UserCard,
  },
  setup() {
    const users = shallowRef<null | any[]>(null);
  },
  async created() {
    try {
      const { data } = await axios.get(`https://reqres.in/api/users?page=2`);
      console.log(data);
      this.users = data.data;
    } catch (err) {
      console.error(err);
    } finally {
      this.loading = false;
    }
  },
});
</script>

<style scoped></style>
