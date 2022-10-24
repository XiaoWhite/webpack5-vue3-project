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

			<!-- 标签栏 -->
			<TagGroup @close-tag="handleCloseTag"></TagGroup>

			<!-- 页面内容 -->
			<div class="page-container">
				<router-view v-slot="{ Component }">
					<!-- include 模式 -->
					<KeepAlive v-if="keepAliveMode == 'include'" :include="includePages">
						<component :is="Component"></component>
					</KeepAlive>

					<!-- exclude 模式 -->
					<KeepAlive v-else :exclude="localExclude">
						<component :is="Component"></component>
					</KeepAlive>
				</router-view>
			</div>
		</div>
	</div>
</template>

<!-- 
https://cn.vuejs.org/guide/built-ins/keep-alive.html#include-exclude
在 3.2.34 或以上的版本中，使用 <script setup> 的单文件组件会自动根据文件名生成对应的 name 选项，无需再手动声明。
 -->

<script>
export default {
	name: 'Horizontal',
};
</script>
<script setup>
import SideBar from './SideBar.vue';
import Navbar from './Navbar.vue';
import TagGroup from '../../tag-group/TagGroup.vue';
import { computed, ref } from 'vue-demi';

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

const closedPages = ref([]);
const localExclude = computed(() => {
	return props.excludePages.concat(closedPages.value);
});


// 监听关闭标签事件
function handleCloseTag(tag) {
	console.log('handleCloseTag --- ', tag);
	if (tag.path == '/page2') {
		closedPages.value.push('Page2');
		setTimeout(() => {
			closedPages.value = []; // 重置数组，避免关闭的页面无法再次被缓存
		}, 200);
	}
}
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
