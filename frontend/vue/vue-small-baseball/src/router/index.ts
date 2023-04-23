import Home from '../views/Home.vue';
import About from '../views/About.vue';
import User from '../views/User.vue';
import UserStore from '../views/UserStore.vue';
import UserDetails from '../views/UserDetails.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import NotFound from '../views/NotFound.vue';
import UserProfile from '../views/UserProfile.vue';
import UserPosts from '../views/UserPosts.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/user', component: User },
  { path: '/userStore', component: UserStore },
  {
    path: '/userDetails/:id',
    component: UserDetails,
    children: [
      {
        path: 'profile',
        component: UserProfile,
      },
      {
        path: 'posts',
        component: UserPosts,
      },
    ],
  },
  { path: '/home', redirect: '/' },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
