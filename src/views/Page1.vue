<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useEventBus } from '../../framework-components/utils/event-bus.js';
const $router = useRouter();

const { onMessage } = useEventBus();
const msgContent = ref('');
onMessage('TestMsg', (data) => {
	console.log('Page1 - onMessage ---- ', data);
	msgContent.value = data.content;
});

onMounted(() => {
	console.log('page1 - onMounted ---');
	console.log('change occur in page1');
});

// import Util from '../utils/Util.js';
function clickTest1() {
	// console.log(Util.formatTime(new Date()));
	$router.push('/page2');
}
</script>
<template>
	<div class="page">
		<div class="title">Page1</div>
		<h2>This is a Vue3 project width webpack5</h2>
		<div class="container" @click="clickTest1"></div>
		<h2>接收到的消息：{{msgContent}}</h2>
	</div>
</template>

<style scoped lang="scss">
.page {
	width: 100%;
	height: 100%;

	.title {
		font-size: 20px;
		color: red;
	}

	.container {
		width: 300px;
		height: 300px;
		margin-top: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 0 6px 0 red;
	}
}
</style>
