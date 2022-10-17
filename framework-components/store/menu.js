// 菜单 store

import { defineStore } from 'pinia';
const useMenuStore = defineStore('menuStore', {
	state: () => ({
		menuList: [], // 菜单列表
		activedMenuId: '', // 当前活跃菜单 id
	})
});

export default useMenuStore;
