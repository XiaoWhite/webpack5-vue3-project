<template>
	<div class="page">
		<div class="list">
			<div class="product-item">
				<span>产品1</span>
				<el-button @click="clickDetail(1)">查看详情</el-button>
			</div>
			<div class="product-item">
				<span>产品2</span>
				<el-button @click="clickDetail(2)">查看详情</el-button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const $router = useRouter();
// 查看商品详情
function clickDetail(id) {
	$router.push({
		name: 'productDetail',
		query: {
			id: id,
		},
	});
}
</script>

<style scoped lang="scss">
.list {
	width: 300px;
	height: 100%;
	box-sizing: border-box;
	padding: 10px;

	.product-item {
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}
</style>
