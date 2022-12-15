import httpRequest from '../utils/httpRequest.js';

// 菜单数据
export const getMenuData = () => {
	return httpRequest.post('/api/menu');
};
