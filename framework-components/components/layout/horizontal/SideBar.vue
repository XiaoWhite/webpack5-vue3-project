<!-- 左侧菜单栏 -->
<template>
	<div class="side-bar">
		<!-- logo -->
		<slot name="logo"></slot>

		<!-- 菜单 -->
		<el-menu class="menu" :default-active="activedMenuId" mode="vertical">
			<Menu :menu-list="menuList" @click-menu="clickMenu"></Menu>
		</el-menu>

		<!-- 其他 -->
		<slot name="footer"></slot>
	</div>
</template>

<script setup>
// import Menu from './Menu.vue';
import { computed, onMounted, ref } from 'vue';
import menuData from '/src/mock/menu.js';
import useMenuStore from '../../../store/menu.js';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
const $router = useRouter();

// const defaultActive = ref('');
// const menuList = ref([]);

const store = useMenuStore();
const { menuList, activedMenuId } = storeToRefs(store);

onMounted(() => {
	// 加载菜单数据
	loadMenu();
});

// 加载菜单数据
function loadMenu() {
	menuList.value = menuData;
	store.menuList = menuData;
}

// 选中菜单
function clickMenu(menu) {
	if (menu.path) {
		activedMenuId.value = menu.id; // 更新 store 中的数据
		$router.push(menu.path); // 跳转页面
	}
}
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
