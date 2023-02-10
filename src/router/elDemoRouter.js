export default function (Layout) {
	return [
		{
			path: '/eldemo',
			component: Layout,
			children: [
				{
					path: 'demo1',
					component: () => import('../views/ElementDemo/ElDemo1.vue')
				},
				{
					path: 'demo2',
					component: () => import('../views/ElementDemo/ElDemo2.vue')
				}
			]
		}
	];
}