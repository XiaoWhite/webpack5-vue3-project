<template>
  <div class="inject-comp" @click="clickName">{{ name }}</div>
</template>

<script setup>
import { inject } from 'vue';

const { name, updateName } = inject('pro_name');

function clickName() {
  updateName('from inject ' + Date.now());
}
</script>

<style scoped lang="scss"></style>
