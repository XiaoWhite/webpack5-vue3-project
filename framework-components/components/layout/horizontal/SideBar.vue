<!-- 左侧菜单栏 -->
<template>
	<div class="side-bar">
		<!-- logo -->
		<slot name="logo"></slot>

		<!-- 菜单 -->
		<el-menu class="menu" :collapse="!isExpand" :default-active="activedMenuId" mode="vertical">
			<Menu :menu-list="menuList" @click-menu="clickMenu"></Menu>
		</el-menu>

		<!-- 其他 -->
		<slot name="footer"></slot>
	</div>
</template>

<script setup>
// import Menu from './Menu.vue';
import { nextTick, onMounted, watch } from 'vue';
import menuData from '/src/mock/menu.js';
import useMenuStore from '../../../store/menu.js';
import useTagStore from '../../../store/tag-group.js';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
const $router = useRouter();

const menuStore = useMenuStore(); // 菜单数据
const { menuList, activedMenuId, isExpand } = storeToRefs(menuStore);

const tagStore = useTagStore(); // 标签数据
// const { visitedList, selectedTag } = storeToRefs(tagStore);

onMounted(() => {
	// 加载菜单数据
	loadMenu();
});

// 加载菜单数据
function loadMenu() {
	menuList.value = menuData;

	nextTick(() => {
		// 获取当前路由信息，并更新 menuStore 中的数据
		let toMenu = menuStore.getMenuByPath($router.currentRoute.value.path);
		if (toMenu) {
			activedMenuId.value = toMenu.id;
			tagStore.addTag(toMenu);
		}
	});
}

// 选中菜单
function clickMenu(menu) {
	if (menu.path) {
		activedMenuId.value = menu.id; // 更新 menu store 中的数据
		tagStore.addTag(menu); // 添加标签
		$router.push(menu.path); // 跳转页面
	}
}

// 监听路由变化
watch(
	() => $router.currentRoute.value,
	(to, from) => {
		// console.log('router to --- ', to);
		// console.log('router from --- ', from);

		// 检查要进入的页面所对应的路径，是否在菜单中，如果在，修改当前活跃菜单 id
		let toMenu = menuStore.getMenuByPath(to.path);
		if (toMenu) {
			activedMenuId.value = toMenu.id;
		}
	},
);
</script>

<style scoped lang="scss">
.side-bar {
	.menu {
		// color: lightgoldenrodyellow;
		--el-menu-bg-color: lightgoldenrodyellow;
		--el-menu-active-color: red;
	}
	width: 250px;
	height: 100%;
	flex-shrink: 0;
	overflow-y: auto;
	background-color: lightblue;
}
</style>
