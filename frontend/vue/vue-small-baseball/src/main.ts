import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ComponentA from './components/ComponentA.vue';
import i18nPlugin from './plugins/i18n';
import store from './store';

import './assets/main.css';

createApp(App)
  .component('ComponentA', ComponentA)
  .provide(/* 注入名 */ 'message', /* 值 */ 'hello inject')
  .use(store)
  .use(router)
  .use(i18nPlugin, {
    greetings: {
      hello: 'Bonjour!',
    },
  })
  .mount('#app');
