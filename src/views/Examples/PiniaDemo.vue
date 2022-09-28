<template>
	<div class="page">
		<h1>Pinia</h1>
		<div>totalPrice: {{ totalPrice }}</div>
		<el-button @click="clickAdd">添加商品</el-button>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useShoppingCartStore } from '../../store/shoppingCart.js';
const store = useShoppingCartStore();
const { list, totalPrice } = storeToRefs(store);
console.log('store.list = ', list);
console.log('store.totalPrice = ', totalPrice);

const firstName = ref('WenJi');
const lastName = ref('Bai');
const fullName = computed(() => {
	return lastName.value + firstName.value;
});

console.log('firstName = ', firstName);
console.log('lastName = ', lastName);
console.log('fullName = ', fullName.value);

// 添加商品
function clickAdd() {
	store.addProduct({
		name: 'MacBookPro',
		price: 10000,
	});
}
</script>

<style scoped lang="scss"></style>
