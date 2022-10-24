<template>
	<div class="app">
		<!-- <Horizontal>
			<template #logo>
				<div>this is logo</div>
			</template>
		</Horizontal> -->
		<router-view></router-view> 
	</div>
</template>

<script setup></script>

<style lang="scss">
html,
body {
	padding: 0;
	margin: 0;
}
</style>

<style lang="scss" scoped>
.app {
	width: 100vw;
	height: 100vh;
	box-sizing: border-box;
}
</style>
