import { createRouter, createWebHashHistory } from 'vue-router';

const Page1 = () => import('../views/Page1.vue');
const Page2 = () => import('../views/Page2.vue');
const Page3 = () => import('../views/Page3.vue');

const VirtualList = () => import('../views/Examples/VirtualListDemo.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: Page1,
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page2,
  },
  {
    path: '/page3',
    name: 'page3',
    component: Page3,
  },
  {
    path: '/examples/virtualList',
    name: 'virtualList',
    component: VirtualList,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
