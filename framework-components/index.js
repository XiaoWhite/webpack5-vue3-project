// 框架组件入口

// 框架组件
import Horiontal from './components/layout/horizontal/Horizontal.vue';
import Menu from './components/layout/horizontal/Menu.vue';

const components = [
	Horiontal,
	Menu
];

// install 方法
const install = function (app, options = {}) {
	// 注册组件
	components.forEach(component => {
		app.component(component.name, component);
	})
};

export { Horiontal };
export default {
	install
}
