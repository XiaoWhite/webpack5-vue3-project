<template>
  <!-- <div class="app">
    <router-view></router-view>
  </div> -->
  <div class="app">
    <Horizontal></Horizontal>
  </div>
</template>

<script setup>
import Horizontal from './views/layout/horizontal/Horizontal.vue';
</script>

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
