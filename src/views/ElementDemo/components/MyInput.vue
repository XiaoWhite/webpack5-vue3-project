<template>
  <div>
    <input type="text" v-bind="$attrs" />
  </div>
</template>

<script>
// 使用普通的 <script> 来声明选项
export default {
  inheritAttrs: false,
};
</script>

<script setup></script>

<style scoped lang="scss"></style>
