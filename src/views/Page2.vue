<script setup>
import axios from 'axios';
import Util from '../utils/Util.js';
import { ref } from 'vue';
import {useEventBus} from '../../framework-components/utils/event-bus.js';
function sendRequest() {
	const url = 'http://localhost:3000/test';
	axios
		.get(url)
		.then((res) => {
			console.log(res);
		})
		.catch((e) => {
			console.log(e);
		});
}

function clickFormat() {
	let str = 'hello';
	console.log(str);
	console.log(Util.formatTime(new Date()));
}

let p = {
	name: 'hello',
};
console.log(p);

const name = ref('');

/* --------------------------- EventBus --------------------------- */
const {postMessage} = useEventBus();
function clickPostMsg() {
	postMessage('TestMsg', {
		content: `msg - ${new Date().toString()}`
	});
}
</script>

<template>
	<div class="page">
		<div class="title">Page2</div>
		<el-input v-model="name"></el-input>
		<el-button type="primary" @click="sendRequest">Click</el-button>
		<el-button plain @click="clickFormat">FormatDate</el-button>
		<el-button plain @click="clickPostMsg">PostMessage</el-button>
	</div>
</template>

<style scoped lang="scss"></style>
