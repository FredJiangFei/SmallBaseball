import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ComponentA from './components/ComponentA.vue';

import './assets/main.css';

createApp(App).component('ComponentA', ComponentA).provide(/* 注入名 */ 'message', /* 值 */ 'hello inject').use(router).mount('#app');
