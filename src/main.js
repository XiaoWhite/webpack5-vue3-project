import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';

// 完整引入 element-plus
import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';
import './style/element/index.scss';
import zhCn from 'element-plus/es/locale/lang/zh-cn';

// 引入框架组件
import frameworkComponents from '../framework-components/index';

const app = createApp(App);
const pinia = createPinia();

app.use(router); // 挂载路由
app.use(store); // 将 store 实例作为插件安装
app.use(pinia);
app.use(ElementPlus, { locale: zhCn }); // 注册组件
app.use(frameworkComponents); // 注册框架组件
app.mount('#app');
