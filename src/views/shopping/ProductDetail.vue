<template>
	<div class="page">
		<h1>ProductDetail -- {{ id }}</h1>
	</div>
</template>

<script setup>
import { onMounted, onActivated, ref } from "vue-demi";
import {useRoute} from 'vue-router';

const name = ref('');
const id = ref('');
const $route = useRoute();

onMounted(() => {
	// id.value = $route.query.id || '';
});

onActivated(() => {
	id.value = $route.query.id || '';
});
</script>

<style scoped lang="scss"></style>
