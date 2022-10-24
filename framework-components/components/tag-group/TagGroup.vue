<template>
	<div class="tag-group">
		<!-- 标签列表 -->
		<div class="tag-list">
			<div
				class="tag-item"
				:class="{ actived: selectedTag.id === tag.id }"
				v-for="(tag, index) in visitedList"
				:key="tag.id"
				@click="clickTag(tag)"
			>
				<span>{{ tag.title }}</span>
				<el-icon class="close-btn" @click.stop="closeTag(index)"><CircleCloseFilled /></el-icon>
			</div>
		</div>
	</div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useTagStore from '../../store/tag-group.js';
import { useRouter } from 'vue-router';
import { isRef, unref } from 'vue-demi';

const tagStore = useTagStore();
const { visitedList, selectedTag } = storeToRefs(tagStore);

const $router = useRouter();
const $emit = defineEmits(['closeTag']);

// 关闭标签
function closeTag(index) {
	// console.log('closeTag --- ', index);
	let closedTag = visitedList.value[index];
	// 将标签从访问列表中移除
	visitedList.value.splice(index, 1);

	if (visitedList.value.length == 0) {
		return;
	}

	let targetTag = undefined;
	if (index > 0) {
		// 获取关闭位置的前一个标签，并跳转页面
		targetTag = visitedList.value[index - 1];
	} else {
		// 如果关闭的是第0个，删除之后，还是获取第0个 tag 的信息，跳转页面
		targetTag = visitedList.value[0];
	}

	if (targetTag) {
		$router
			.push({
				path: targetTag.path,
			})
			.then((res) => {
				if (res) {
					// 导航失败
				} else {
					// 导航成功，更新 store 中当前选中的 tag
					selectedTag.value = unref(targetTag);
					$emit('closeTag', closedTag); // 通知父组件关闭的标签
				}
			});
	}
}

// 点击标签
function clickTag(tag) {
	if (tag.id == selectedTag.value.id) {
		return;
	} else {
		// 切换页面
		$router
			.push({
				path: tag.path,
			})
			.then((res) => {
				if (!res) {
					selectedTag.value = tag;
				}
			});
	}
}
</script>

<style scoped lang="scss">
.tag-group {
	width: 100%;
	height: 40px;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);

	.tag-list {
		flex: 1;
		height: 100%;
		box-sizing: border-box;
		padding: 4px;
		display: flex;
		align-items: center;

		.tag-item {
			position: relative;
			height: 100%;
			box-sizing: border-box;
			padding: 0 8px;
			display: flex;
			align-items: center;
			font-size: 12px;
			border: 1px solid #eee;
			border-radius: 2px;
			cursor: pointer;
			background-color: #fff;
			margin-right: 8px;

			&:last-child {
				margin-right: 0;
			}

			&.actived {
				background-color: rgba($color: #409efc, $alpha: 0.3);
			}

			.close-btn {
				font-size: 14px;
				color: #ccc;
				margin-left: 8px;

				&:hover {
					color: #409efc;
				}
			}
		}
	}
}
</style>
