<template>
	<div class="page">
		<h1>Pinia</h1>
		<div>count: {{ store.count }}</div>
		<div>totalPrice: {{ totalPrice }}</div>
		<div>doublePrice: {{ doublePrice }}</div>
		<el-button @click="clickAdd">添加商品</el-button>
		<el-button @click="resetState">重置 state</el-button>

		<h3>商品列表</h3>
		<div class="goods-list">
			<div class="goods-item" v-for="(item, index) in list" :key="index">
				<span>{{ item.name }}</span>
				<span>￥{{ item.price }}</span>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { storeToRefs, getActivePinia } from 'pinia';
import useShoppingCartStore from '../../store/shoppingCart.js';
const store = useShoppingCartStore();
console.log('PiniaDemo --- store = ', store);
const { list, totalPrice, doublePrice } = storeToRefs(store);
console.log('store.list = ', list);
console.log('store.totalPrice = ', totalPrice);

// 计算属性
// const firstName = ref('WenJi');
// const lastName = ref('Bai');
// const fullName = computed(() => {
// 	return lastName.value + firstName.value;
// });

// console.log('firstName = ', firstName);
// console.log('lastName = ', lastName);
// console.log('fullName = ', fullName.value);

// 订阅 store 变化
store.$subscribe((mutation, state) => {
	console.log('subscribe --- mutation = ', mutation);
	console.log('subscribe --- state = ', state);
});

watch(
	() => store.list.length, // store 是一个 reactive，所以监听时，这里需要写成一个 getter 函数 
	(newVal, oldVal) => {
		console.log(`watch --- newVal = ${newVal}, oldVal = ${oldVal}`);
	},
);

// 添加商品
function clickAdd() {
	// store.count++;
	// store.addProduct({
	// 	name: 'MacBookPro',
	// 	price: 10000,
	// });
	store.list.push({
		name: 'MacBookPro',
		price: 10000,
	});

	// 使用 $patch 方法
	// store.$patch({
	// 	count: 10,
	// 	list: [
	// 		{
	// 			name: 'MacBookPro1',
	// 			price: 10000,
	// 		},
	// 		{
	// 			name: 'MacBookPro2',
	// 			price: 10000,
	// 		},
	// 	],
	// });

	// store.$patch((state) => {
	// 	state.count++;
	// 	let num = state.list.length;
	// 	state.list.push({
	// 		name: 'MacBookPro_' + num,
	// 		price: 10000,
	// 	});
	// });
}

// 重置 state
function resetState() {
	// $pinia.state.value = {
	// 	shoppingCart: {
	// 		count: 100,
	// 	},
	// };

	store.$reset();
}

let $pinia = undefined;
onMounted(() => {
	$pinia = getActivePinia();
	console.log('pinia ----- ', $pinia);
});
</script>

<style scoped lang="scss">
.goods-list {
	margin-top: 10px;
	width: 400px;

	.goods-item {
		width: 100%;
		height: 50px;
		box-sizing: border-box;
		padding: 4px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}
</style>
