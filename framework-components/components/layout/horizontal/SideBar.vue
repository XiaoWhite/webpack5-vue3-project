<!-- 左侧菜单栏 -->
<template>
	<div class="side-bar">
		<!-- logo -->
		<slot name="logo"></slot>

		<!-- 菜单 -->
		<el-menu :default-active="defaultActive" mode="vertical">
			<Menu :menu-list="menuList"></Menu>
		</el-menu>

		<!-- 其他 -->
		<slot name="footer"></slot>
	</div>
</template>

<script setup>
// import Menu from './Menu.vue';
import { onMounted, ref } from 'vue';
import menuData from '/src/mock/menu.js';
const defaultActive = ref('');
const menuList = ref([]);

onMounted(() => {
	loadMenu();
});

// 加载菜单数据
function loadMenu() {
	menuList.value = menuData;
}

// 选中菜单
// function handleMenuSelect(index, indexPath, item, routeResult) {
// 	console.log('menu select -- ', index, indexPath, item, routeResult);
// }
</script>

<style scoped lang="scss">
.side-bar {
	width: 250px;
	height: 100%;
	flex-shrink: 0;
	overflow-y: auto;
	background-color: lightblue;
}
</style>
