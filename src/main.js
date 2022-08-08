import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';

const app = createApp(App);

// 挂载路由
app.use(router);
app.mount('#app');
