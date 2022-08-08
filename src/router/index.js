import { createRouter, createWebHashHistory } from 'vue-router';

const Page1 = () => import('../views/Page1.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: Page1
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
