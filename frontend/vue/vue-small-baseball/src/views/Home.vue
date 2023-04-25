<template>
  <div
    class="static"
    :class="{ active: isActive, 'text-danger': hasError }"
    :style="{ backgroundColor: 'red' }"
  >
    <h1>Home</h1>

    <h3>Count is: {{ count }}</h3>
    <Counter
      @increment-count="(n) => this.$store.commit('increment')"
      :count="this.$store.state.count"
      count-title="hello fred"
      ref="child"
    >
      A Slot
    </Counter>
    <button @click="onChildClick">Click child</button>

    <p>Has published books: {{ publishedBooksMessage }}</p>
    <p>{{ fullName }}</p>

    <input v-model="text" ref="input" />

    <button @click="fullName = text">Change Name</button>
  </div>
</template>

<script>
import Counter from '../components/Counter.vue';

export default {
  data() {
    return {
      count: 1,
      firstName: 'John',
      lastName: 'Doe',
      isActive: true,
      hasError: false,
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery',
        ],
      },
    };
  },
  methods: {
    calculateBooksMessage() {
      return this.author.books.length > 0 ? 'Yes' : 'No';
    },
    onChildClick() {
      this.$refs.child.childMethod();
    },
  },
  mounted() {
    this.$refs.input.focus();
    console.log(this.count);
    this.count = 2;
  },
  computed: {
    // 基于依赖缓存
    publishedBooksMessage() {
      return this.author.books.length > 0 ? 'Yes' : 'No';
    },
    fullName: {
      get() {
        return this.firstName + ' ' + this.lastName;
      },
      set(newValue) {
        [this.firstName, this.lastName] = newValue.split(' ');
      },
    },
  },
  watch: {
    // firstName(newName, oldName) {
    //   console.log('newName: ' + newName, 'oldName: ' + oldName);
    // },
    firstName: {
      handler(newName) {
        console.log('newName: ' + newName);
      },
      immediate: true,
    },
  },
  components: {
    Counter,
  },
};
</script>

<style scoped>
.static {
}

.active {
}
</style>
