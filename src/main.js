import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';

// 完整引入 element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';

const app = createApp(App);

app.use(router); // 挂载路由
app.use(store); // 将 store 实例作为插件安装
app.use(ElementPlus, { locale: zhCn }); // 注册组件
app.mount('#app');
