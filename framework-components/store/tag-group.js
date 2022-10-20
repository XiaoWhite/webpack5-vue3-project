import { defineStore } from 'pinia';

const useTagStore = defineStore('tagStore', {
	state: () => ({
		visitedList: [], // 已访问页面的菜单信息
		selectedTag: {}, // 当前选中的 tag 信息
	}),
	getters: {
		visitedIds(state) {
			return state.visitedList.map((tag) => tag.id);
		},
	},
	actions: {
		// 添加标签，并返回该标签是否已存在于列表中
		addTag(tag) {
			// 检查是否已存在于列表中
			let index = this.visitedIds.indexOf(tag.id);
			if (index < 0) {
				// 不存在，添加新标签
				this.visitedList.push(tag);
			}
			this.selectedTag = tag; // 设置选中的标签

			return index >= 0;
		},
	},
});

export default useTagStore;
