<template>
  <input type="text" v-model="search" />
  <h1>User({{ userCount }})</h1>
  <ul>
    <li v-for="user in users" :key="user.id">
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
  setup() {
    const users = shallowRef<null | any[]>(null);
    const search = ref<null | string>(null);

    watchEffect(() => {
      console.log('watchEffect', users?.value?.length);
      console.log('watchEffect', search.value);
    });

    watch(users, () => {
      console.log('watch', users.value.length);
    });

    watch(search, () => {
      console.log('watch', search.value);
    });

    return {
      users,
      search,
    };
  },
  components: {
    UserCard,
    ToolingIcon,
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
  computed: {
    userCount() {
      return this.users?.length;
    },
  },
});
</script>

<style scoped></style>
