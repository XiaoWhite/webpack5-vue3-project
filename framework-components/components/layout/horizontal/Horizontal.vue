<!-- 左右横向布局 -->
<template>
	<div class="layout-horizontal">
		<!-- 左侧菜单 -->
		<SideBar>
			<template #logo>
				<slot name="logo"></slot>
			</template>
			<template #footer>
				<slot name="footer"></slot>
			</template>
		</SideBar>

		<!-- 右侧内容 -->
		<div class="layout-content">
			<!-- 上方的导航栏 -->
			<Navbar></Navbar>

			<!-- 页面内容 -->
			<div class="page-container">
				<router-view v-slot="{ Component }">
					<!-- include 模式 -->
					<KeepAlive v-if="keepAliveMode == 'include'" :include="includePages">
						<component :is="Component"></component>
					</KeepAlive>

					<!-- exclude 模式 -->
					<KeepAlive v-else :exclude="excludePages">
						<component :is="Component"></component>
					</KeepAlive>
				</router-view>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Horizontal',
};
</script>
<script setup>
import SideBar from './SideBar.vue';
import Navbar from './Navbar.vue';

const props = defineProps({
	// 缓存模式
	keepAliveMode: {
		type: String,
		default: 'include',
	},
	// include 模式下，需要被缓存的页面
	includePages: {
		type: Array,
		default() {
			return [];
		},
	},
	// exclude 模式下，不需要要被缓存的页面
	excludePages: {
		type: Array,
		default() {
			return [];
		},
	},
});
</script>

<style scoped lang="scss">
.layout-horizontal {
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	display: flex;

	// .side-bar {
	//   width: 250px;
	//   height: 100%;
	//   flex-shrink: 0;
	//   background-color: lightblue;
	// }

	.layout-content {
		flex: 1;
		height: 100%;
	}
}
</style>
