const { createStore } = require('vuex');

const store = {
  state() {
    return {
      userInfo: {},
    };
  },
  mutations: {
    updateUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
};

// 创建 store 实例
const storeInstance = createStore(store);
export default storeInstance;
