<script setup>
import axios from 'axios';
import Util from '../utils/Util.js';
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
</script>

<template>
	<div class="page">
		<el-button type="primary" @click="sendRequest">Click</el-button>
		<el-button plain @click="clickFormat">FormatDate</el-button>
	</div>
</template>

<style scoped lang="scss"></style>
