<template>
	<div class="page">
		<div class="list">
			<div class="list-item" v-for="(item) in list" :key="item.id">
				<button @click="clickMenu">Click</button>
				<el-popover popper-class="result-box-img-pop-menu" placement="right" trigger="hover">
					<template #reference>
						<div class="img"></div>
					</template>
					<div class="menu-list">
						<div class="menu-item" @click="clickMenu">跳转Demo1</div>
						<!-- <div class="menu-item">跳转Demo2</div> -->
					</div>
				</el-popover>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from "vue-demi";
import { useRouter } from "vue-router";
const router = useRouter();

const list = ref([]);
onMounted(() => {
	let temp = [];
	for (let i = 0; i < 20; i++) {
		temp.push({
			id: generateId(),
			title: `ListItem_${i + 1}`
		});
	}
	list.value = temp;
});

function generateId() {
	return String(Math.random()).substring(0, 10);
}

function clickMenu() {
	setTimeout(() => {
		router.push('/eldemo/demo1');
	}, 500);
	// console.log('hello --- 123');
}
</script>

<style scoped lang="scss">
.list {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-auto-rows: 300px;
	gap: 12px 8px;

	.list-item {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		border: 1px solid #eee;
		// background-color: lightgoldenrodyellow;
		background-color: greenyellow;
		padding: 6px;

		.img {
			width: 100%;
			height: 200px;
			background-color: lightcyan;
		}
	}
}

.result-box-img-pop-menu {
	padding: 2px 0;
	.menu-list {
		width: 100px;
		.menu-item {
			width: 100%;
			height: 40px;
			box-sizing: border-box;
			padding: 0 6px;
			line-height: 40px;

			&:hover {
				background: lightsalmon;
			}
		}
	}
}
</style>
