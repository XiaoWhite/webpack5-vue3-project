// 框架组件入口

// 引入图标字体
import './assets/iconfont/cute/cutefont.js';
import './assets/iconfont/cute/svg-font.css';

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
