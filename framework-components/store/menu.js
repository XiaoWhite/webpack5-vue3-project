// 菜单 store
import { defineStore } from 'pinia';
const useMenuStore = defineStore('menuStore', {
	state: () => ({
		menuList: [], // 菜单列表
		activedMenuId: '', // 当前活跃菜单 id
	}),
	getters: {
		// 将菜单数据拉平成一维数组
		flatMenu() {
			let list = [];

			function flatMenu(menu, parentId = '', level1Id = '') {
				menu.forEach((item) => {
					if (item.children && item.children.length > 0) {
						// 如果还有子菜单，需要将其也遍历一记，添加进 list 中
						// 如果有 parentId，表示不是第一级菜单，所以需要将一级菜单的 id 继续传递下去
						// 如果没有 parentId，表示当前 item 是一个一级菜单，处理一级菜单的子菜单时，需要将自己的 id 传进去
						flatMenu(item.children, item.id, parentId ? level1Id : item.id);
					} else {
						list.push({
							...item,
							level1Id, // 当前菜单所属的一级菜单的 id
							parentId, // 当前菜单的父级菜单 id
						});
					}
				});
			}

			flatMenu(this.menuList);

			// console.log('flat menu ------ ', list);

			return list;
		},

		// 菜单一维数组中所有菜单的 path
		flatMenuPaths() {
			return this.flatMenu.map(item => item.path);
		},

		// 根据路径获取对应的菜单数据
		getMenuByPath() {
			return (path) => {
				let index = this.flatMenuPaths.indexOf(path);
				if (index >= 0) {
					return this.flatMenu[index];
				} else {
					return null;
				}
			}
		}
	},
});

export default useMenuStore;
