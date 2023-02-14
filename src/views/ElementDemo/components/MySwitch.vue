<template>
	<div class="my-switch" @click="clickSwitch">
		{{ statusStr }}
	</div>
</template>

<script setup>
import { computed, onDeactivated, ref } from 'vue';
const props = defineProps({
	// status: {
	// 	type: Boolean,
	// 	default: false
	// },
	modelValue: {
		type: Boolean,
		default: false
	},
	modelModifiers: {
		// 如果要使用修饰符，只有 v-model.abc 这种形式时，modelModifiers 才会有值，
		// 也就意味着 props 里面只能使用 modelValue
		default: () => ({})
	}
});
// const emit = defineEmits(['update:status']);
const emit = defineEmits(['update:modelValue']);
// const status = ref(false);
console.log('props --- ', props);
const statusStr = computed(() => {
	// return props.status ? '开' : '关';
	return props.modelValue ? '开' : '关';
});
function clickSwitch() {
	console.log('modelModifiers --- ', props.modelModifiers);
	// emit('update:status', !props.status);
	emit('update:modelValue', !props.modelValue);
}

onDeactivated(() => {
	console.log('MySwtich -- onDeactivated ----');
});
</script>

<style scoped lang="scss">
.my-switch {
	width: 200px;
	height: 40px;
	font-size: 16px;
	line-height: 40px;
	border-radius: 20px;
	border: 1px solid #eee;
	text-align: center;
	cursor: pointer;
}
</style>
