import { defineStore } from 'pinia';

const useShoppingCartStore = defineStore('shoppingCart', {
  state: () => ({
    count: 0,
    list: [],
  }),
  getters: {
    totalPrice(state) {
      return state.list.reduce((pre, curr) => {
        return pre + curr.price;
      }, 0);
    },

    doublePrice() {
      return this.totalPrice * 2;
    },
  },
  actions: {
    addProduct(item) {
      this.list.push(item);
    },
  },
});

export default useShoppingCartStore;
