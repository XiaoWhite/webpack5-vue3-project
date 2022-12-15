// mock 文档： https://github.com/nuysoft/Mock/wiki/Mock.mock()

import Mock from 'mockjs';
import menuData from './menu.js';
Mock.mock('/api/menu', 'post', function (options) {
	return menuData;
});
