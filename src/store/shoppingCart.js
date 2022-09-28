import { defineStore } from 'pinia';

export const useShoppingCartStore = defineStore('shoppingCart', {
	state: () => ({
		list: [],
	}),
	getters: {
		totalPrice(state) {
			return state.list.reduce((pre, curr) => {
				return pre + curr.price;
			}, 0);
		},
	},
	actions: {
		addProduct(item) {
			this.list.push(item);
		},
	},
});
