import { createRouter, createWebHashHistory } from 'vue-router';
import systemRouter from './systemRouter';
import shoppingRouter from './shoppingRouter';
import elDemoRouter from './elDemoRouter';

import Layout from '../views/layout/Layout.vue';

const Login = () => import('../views/login/Login.vue');

const routes = [
  {
    path: '/login',
    component: Login,
  },
  ...systemRouter(Layout),
  ...shoppingRouter(Layout),
  ...elDemoRouter(Layout),
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
