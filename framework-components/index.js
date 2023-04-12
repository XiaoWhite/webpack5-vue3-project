// 框架组件入口

// 引入图标字体
// import './assets/iconfont/cute/cutefont.js';
// import './assets/iconfont/cute/svg-font.css';
// import './assets/iconfont/cute/cutefont.css';

// 框架组件
import Horiontal from './components/layout/horizontal/Horizontal.vue';

const components = [Horiontal];

// install 方法
const install = function (app, options = {}) {
  // 注册组件
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export { Horiontal };
export default {
  install,
};
