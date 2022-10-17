<template>
	<template v-for="menu in menuList" :key="menu.id">
		<!-- 如果有子菜单，使用 el-sub-menu -->
		<el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.id">
			<template #title>
				<div class="title">{{ menu.title }}</div>
			</template>

			<template v-for="child in menu.children" :key="child.id">
				<!-- 判断子菜单是否还有子菜单 -->
				<Menu v-if="child.children && child.children.length > 0" :menu-list="[child]"></Menu>
				<template v-else>
					<el-menu-item :index="child.id" @click="clickMenuItem(child)">{{ child.title }}</el-menu-item>
				</template>
			</template>
		</el-sub-menu>

		<!-- 如果没有，直接使用 el-menu-item -->
		<el-menu-item v-else :index="menu.id" @click="clickMenuItem(child)">{{ menu.title }}</el-menu-item>
	</template>
</template>

<script>
export default {
	name: 'Menu',
};
</script>

<script setup>
// [@vue/compiler-sfc] `defineProps` is a compiler macro and no longer needs to be imported.
// import { defineProps } from 'vue';

// import { useRouter } from 'vue-router';
// const $router = useRouter();

const props = defineProps({
	menuList: {
		type: Array,
		default() {
			return [];
		},
	},
});

const emit = defineEmits(['click-menu']);

// 点击菜单
function clickMenuItem(menu) {
	console.log('click menu -- ', menu);
	// 传递事件
	emit('click-menu', menu);
}
</script>

<style scoped lang="scss"></style>
