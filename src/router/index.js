import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import systemRouter from './systemRouter';
import shoppingRouter from './shoppingRouter';
import elDemoRouter from './elDemoRouter';

import Layout from '../views/layout/Layout.vue';

const Login = () => import('../views/login/Login.vue');
const notFound = () => defineAsyncComponent(() => import('../views/404.vue'));

const routes = [
  {
    path: '/login',
    component: Login,
  },
  ...systemRouter(Layout),
  ...shoppingRouter(Layout),
  ...elDemoRouter(Layout),
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  { path: '/:pathMatch(.*)*', name: 'notFound', component: notFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
