export default function (Layout) {
  return [
    {
      path: '/shopping',
      component: Layout,
      children: [
        {
          path: 'list',
          name: 'productList',
          component: () => import('../views/shopping/ProductList.vue'),
        },
        {
          path: 'detail',
          name: 'productDetail',
          component: () => import('../views/shopping/ProductDetail.vue'),
        },
      ],
    },
  ];
}
