<script setup>
// import { computed } from 'vue';
// import { useStore } from 'vuex';
// const store = useStore();

import { onMounted, onUnmounted } from 'vue-demi';

// const userInfo = computed(() => {
// 	return store.state.userInfo;
// });

// function changeUserInfo() {
// 	store.commit('updateUserInfo', {
// 		name: 'zhang san',
// 		age: 18,
// 	});
// }

// function clickTransform() {}

// 接收 window.postMessage 的消息
function handleReceivedMessage(event) {
  // console.log('handleReceivedMessage --- event = ', event);
  let data = event.data;
  let eventCode = data.eventCode;
  if (eventCode == 'showImage') {
    let body = data.body;
    // 获取图片地址
    let imgUrl = body.imgUrl;
    console.log('receive imgUrl = ', imgUrl);
  }
}
onMounted(() => {
  window.addEventListener('message', handleReceivedMessage);
});
onUnmounted(() => {
  window.removeEventListener('message', handleReceivedMessage);
});
</script>
<template>
  <div class="page">
    <div class="title">Page3</div>
    <h1>Vuex Demo</h1>
    <!-- <el-button @click="changeUserInfo">修改 userInfo</el-button>
		<p>userInfo.name = {{ userInfo.name }}</p>

		<el-button @click="clickTransform">clickTransform</el-button> -->

    <el-dropdown placement="top-start">
      <el-button type="primary">
        Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped lang="scss"></style>
