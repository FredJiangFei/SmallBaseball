import Home from '../views/Home.vue';
import About from '../views/About.vue';
import User from '../views/User.vue';
import UserStore from '../views/UserStore.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/user', component: User },
  { path: '/userStore', component: UserStore },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
