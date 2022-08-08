<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  console.log('page1 - onMounted ---');
});
</script>
<template>
  <div class="page">
    <h1 class="title">Page1</h1>
		<h2>This is a Vue3 project width webpack5</h2>
		<div class="container"></div>
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
