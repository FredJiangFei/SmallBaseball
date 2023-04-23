<template>
  <h1>Use details</h1>
  <h3>id: {{ $route.params.id }}</h3>
  <h3>name: {{ $route.query.name }}</h3>
  <router-view></router-view>
</template>

<script>
import { defineProps, defineComponent } from 'vue';

export default defineComponent({
  name: 'UserDetails',
  setup() {
    const props = defineProps({
      id: {
        type: String,
        required: true,
      },
    });
    return {
      props,
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        console.log('toParams', toParams);
        console.log('previousParams', previousParams);
      }
    );
  },
  async beforeRouteUpdate(to, from) {
    console.log('to', to);
    console.log('from', from);
  },
});
</script>

<style scoped></style>
