const Page1 = () => import('../views/Page1.vue');
const Page2 = () => import('../views/Page2.vue');
const Page3 = () => import('../views/Page3.vue');

const VirtualList = () => import('../views/Examples/VirtualListDemo.vue');
const PiniaDemo = () => import('../views/Examples/PiniaDemo.vue');
const ProvideInjectDemo = () => import('../views/Examples/provide-inject-demo/ProvideInjectDemo.vue');

export default function (Layout) {
	return [
		{
			path: '/',
			component: Layout,
			children: [
				{
					path: 'page1',
					name: 'home',
					component: Page1,
				},
				{
					path: 'page2',
					name: 'page2',
					component: Page2,
				},
				{
					path: 'page3',
					name: 'page3',
					component: Page3,
				},
				{
					path: 'examples/virtualList',
					name: 'virtualList',
					component: VirtualList,
				},
				{
					path: 'examples/pinia',
					name: 'pinia',
					component: PiniaDemo,
				},
				{
					path: 'examples/provide',
					name: 'provideInjectDemo',
					component: ProvideInjectDemo,
				},
			],
		},
	];
}
