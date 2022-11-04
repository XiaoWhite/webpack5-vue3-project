<script setup>
// import { computed } from 'vue';
// import { useStore } from 'vuex';
// const store = useStore();

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
